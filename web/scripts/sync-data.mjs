import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const WEB_ROOT = path.resolve(__dirname, '..');
const PROJECT_ROOT = path.resolve(WEB_ROOT, '..');
const KNOWLEDGE_DIR = path.join(PROJECT_ROOT, 'base-conocimiento');
const OUTPUT_DIR = path.join(WEB_ROOT, 'src', 'data', 'generated');

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

function readUtf8(filePath) {
  return fs.readFileSync(filePath, 'utf8').replace(/\r\n/g, '\n');
}

function unquote(val) {
  const trimmed = val.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return { meta: {}, body: raw };
  }
  const yamlText = match[1];
  const body = match[2];
  const meta = {};
  let currentListKey = null;

  for (const line of yamlText.split('\n')) {
    if (!line.trim()) continue;
    const listItem = line.match(/^\s*-\s+(.*)$/);
    if (listItem && currentListKey) {
      if (!Array.isArray(meta[currentListKey])) meta[currentListKey] = [];
      meta[currentListKey].push(unquote(listItem[1]));
      continue;
    }
    const kv = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
    if (kv) {
      const key = kv[1];
      const val = kv[2].trim();
      if (val === '') {
        currentListKey = key;
        meta[key] = [];
      } else if (val === 'true' || val === 'false') {
        currentListKey = null;
        meta[key] = val === 'true';
      } else {
        currentListKey = null;
        meta[key] = unquote(val);
      }
    }
  }
  return { meta, body };
}

function splitTopSections(body) {
  const sections = {};
  const lines = body.split('\n');
  let currentKey = 'intro';
  let buffer = [];

  for (const line of lines) {
    const h2 = line.match(/^##\s+(\d+)\.\s+(.*)$/);
    if (h2) {
      sections[currentKey] = buffer.join('\n').trim();
      currentKey = `sec_${h2[1]}`;
      buffer = [line];
    } else {
      buffer.push(line);
    }
  }
  sections[currentKey] = buffer.join('\n').trim();
  return sections;
}

function parseDetailsAnswers(text) {
  const answers = new Map();
  const detailsMatch = text.match(/<details>[\s\S]*?<\/details>/i);
  if (!detailsMatch) return answers;

  const block = detailsMatch[0];
  const lines = block.split('\n');
  let currentNum = null;
  let currentEntry = null;

  for (const line of lines) {
    const startMatch = line.match(
      /^\s*(\d+)\.\s+\*\*Respuesta correcta:\s*([A-E])\.?\*\*\s*(.*)$/i
    );
    if (startMatch) {
      if (currentNum !== null && currentEntry) {
        answers.set(currentNum, {
          correcta: currentEntry.correcta,
          justificacion: currentEntry.parts.join(' ').trim(),
        });
      }
      currentNum = Number(startMatch[1]);
      currentEntry = {
        correcta: startMatch[2].toUpperCase(),
        parts: startMatch[3] ? [startMatch[3].trim()] : [],
      };
    } else if (
      currentNum !== null &&
      line.trim() &&
      !line.trim().startsWith('<') &&
      !line.trim().startsWith('---')
    ) {
      currentEntry.parts.push(line.trim());
    }
  }
  if (currentNum !== null && currentEntry) {
    answers.set(currentNum, {
      correcta: currentEntry.correcta,
      justificacion: currentEntry.parts.join(' ').trim(),
    });
  }
  return answers;
}

function extractMcqs(moduleId, actividadesText) {
  const detailsAnswers = parseDetailsAnswers(actividadesText);
  // Isolate MCQ area before Casos / Flashcards or before Caso T
  let mcqRegion = actividadesText;
  const casesIdx = mcqRegion.search(/\n###\s+(?:5\.2\s+)?Casos/i);
  if (casesIdx !== -1) mcqRegion = mcqRegion.slice(0, casesIdx);
  // Strip <details> block from question text parsing
  mcqRegion = mcqRegion.replace(/<details>[\s\S]*?<\/details>/gi, '');

  const lines = mcqRegion.split('\n');
  const mcqs = [];
  let current = null;

  const flushCurrent = () => {
    if (!current) return;
    const ans =
      current.inlineAnswer ||
      detailsAnswers.get(current.numero) || {
        correcta: 'A',
        justificacion: '',
      };
    if (current.opciones.length === 5) {
      mcqs.push({
        id: `${moduleId}-Q${current.numero}`,
        numero: current.numero,
        etiqueta: current.etiqueta,
        enunciado: current.enunciadoParts.join('\n').trim(),
        opciones: current.opciones,
        correcta: ans.correcta,
        justificacion: ans.justificacion,
      });
    }
    current = null;
  };

  for (const line of lines) {
    const qInline = line.match(/^\*\*Pregunta\s+(\d+)[\.:]\*\*\s*(.*)$/i);
    const qHeader = line.match(/^###\s+Pregunta\s+(\d+)\s*(?:\(([^)]+)\))?\s*$/i);

    if (qInline || qHeader) {
      flushCurrent();
      const num = Number((qInline || qHeader)[1]);
      const etiqueta = qHeader && qHeader[2] ? qHeader[2].trim() : `${moduleId} · Pregunta ${num}`;
      const firstLine = qInline ? qInline[2].trim() : '';
      current = {
        numero: num,
        etiqueta,
        enunciadoParts: firstLine ? [firstLine] : [],
        opciones: [],
        inlineAnswer: null,
      };
      continue;
    }

    if (!current) continue;

    const optMatch = line.match(/^\s*-\s+([A-E])\)\s*(.*)$/);
    if (optMatch) {
      current.opciones.push({
        letra: optMatch[1],
        texto: optMatch[2].trim(),
      });
      continue;
    }

    const ansInline = line.match(
      /^>\s*\*\*Respuesta correcta:\s*([A-E])\.?\*\*\s*(.*)$/i
    );
    if (ansInline) {
      current.inlineAnswer = {
        correcta: ansInline[1].toUpperCase(),
        justificacion: ansInline[2].trim(),
      };
      continue;
    }

    if (line.trim() && !line.trim().startsWith('> *Nota pedagógica')) {
      if (current.opciones.length === 0) {
        current.enunciadoParts.push(line.trim());
      } else if (current.inlineAnswer) {
        current.inlineAnswer.justificacion =
          `${current.inlineAnswer.justificacion} ${line.trim()}`.trim();
      }
    }
  }
  flushCurrent();
  return mcqs;
}

function extractErrorCases(moduleId, actividadesText) {
  const casesMatch = actividadesText.match(
    /###\s+(?:5\.2\s+)?Casos[^\n]*\n([\s\S]*?)(?=\n###\s+(?:5\.3\s+)?Flashcards|$)/i
  );
  if (!casesMatch) return [];

  const block = casesMatch[1];
  const lines = block.split('\n');
  const casos = [];
  let current = null;

  const flushCase = () => {
    if (!current) return;
    const body = current.bodyParts.join('\n').trim();
    const splitError = body.match(/([\s\S]*?)(?:\*(?:Error|Doble error)[^:]*:\*|-\s+\*(?:Error|Doble error)[^:]*:\*)\s*([\s\S]*)$/i);
    if (splitError) {
      casos.push({
        id: `${moduleId}-C${current.numero}`,
        numero: current.numero,
        titulo: current.titulo,
        escenario: splitError[1].replace(/\n-\s*$/, '').trim(),
        resolucion: splitError[2].trim(),
      });
    } else {
      casos.push({
        id: `${moduleId}-C${current.numero}`,
        numero: current.numero,
        titulo: current.titulo,
        escenario: body,
        resolucion: '',
      });
    }
    current = null;
  };

  for (const line of lines) {
    const start = line.match(/^\s*(\d+)\.\s+\*\*(.+?)\*\*\s*(.*)$/);
    if (start) {
      flushCase();
      const tituloRaw = start[2].replace(/[:：]\s*$/, '').trim();
      current = {
        numero: Number(start[1]),
        titulo: tituloRaw,
        bodyParts: start[3] ? [start[3].trim()] : [],
      };
    } else if (current && line.trim()) {
      current.bodyParts.push(line.trim());
    }
  }
  flushCase();
  return casos;
}

function extractFlashcards(moduleId, actividadesText) {
  const fcMatch = actividadesText.match(
    /###\s+(?:5\.3\s+)?Flashcards[^\n]*\n([\s\S]*)$/i
  );
  if (!fcMatch) return [];

  const block = fcMatch[1];
  const cards = [];
  let idx = 1;

  for (const line of block.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Format M03: - **Anverso:** ... → **Reverso:** ...
    const m03 = trimmed.match(
      /^-\s+\*\*Anverso:\*\*\s*(.*?)\s*→\s*\*\*Reverso:\*\*\s*(.*)$/
    );
    if (m03) {
      cards.push({
        id: `${moduleId}-FC${idx}`,
        numero: idx,
        frente: m03[1].trim(),
        dorso: m03[2].trim(),
      });
      idx += 1;
      continue;
    }

    // Format M01/M02/M04-M11: 1. **¿...?** → ...
    const std = trimmed.match(/^\d+\.\s+\*\*(.*?)\*\*\s*→\s*(.*)$/);
    if (std) {
      cards.push({
        id: `${moduleId}-FC${idx}`,
        numero: idx,
        frente: std[1].trim(),
        dorso: std[2].trim(),
      });
      idx += 1;
    }
  }
  return cards;
}

function parseAuditMatrix(matrizMd) {
  const secMatch = matrizMd.match(
    /##\s+2\.\s+Registro de Auditoría y Correcciones Maestras([\s\S]*?)(?=\n##\s+3\.|$)/
  );
  if (!secMatch) return [];

  const entries = [];
  for (const line of secMatch[1].split('\n')) {
    const trimmed = line.trim();
    if (!trimmed.startsWith('|')) continue;
    const cols = trimmed
      .split('|')
      .slice(1, -1)
      .map((c) => c.trim());
    if (cols.length < 5) continue;
    const num = Number(cols[0]);
    if (!Number.isInteger(num) || num <= 0) continue;

    const modMatches = cols[4].match(/M\d{2}/g) || [];
    entries.push({
      numero: num,
      fuenteError: cols[1],
      afirmacionErronea: cols[2],
      correccionVerificada: cols[3],
      modulos: [...new Set(modMatches)],
    });
  }
  return entries;
}

// La web se publica: nada de rutas locales de esta compu ni frases escritas para uso personal.
// Los .md de la bóveda no se tocan; la limpieza se hace solo sobre lo que va al build.
function sanitizeText(text) {
  return (
    text
      // [M05](file:///…/M05-algo.md) → enlace interno de la app
      .replace(/\[([^\]]+)\]\(file:\/\/\/[^)]*?\/(M\d{2})-[^)]*?\.md\)/gi, '[$1](#module-$2)')
      // cualquier otro enlace local (lotes NLM, notas de la bóveda) → solo el texto
      .replace(/\[([^\]]+)\]\(file:\/\/\/[^)]*\)/gi, '$1')
      // notas del Radar escritas en segunda persona para el autor
      .replace(/\btu (linea|línea|hipotesis|hipótesis)\b/gi, 'la $1')
  );
}

function sanitizeDeep(value) {
  if (typeof value === 'string') return sanitizeText(value);
  if (Array.isArray(value)) return value.map(sanitizeDeep);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, sanitizeDeep(v)]));
  }
  return value;
}

function assertNoLocalPaths(label, data) {
  const json = JSON.stringify(data);
  const leak = json.match(/file:\/\/\/|[a-z]:[\\/]+Users[\\/]/i);
  if (leak) {
    const at = json.indexOf(leak[0]);
    throw new Error(`sync-data: ${label} todavía contiene una ruta local: …${json.slice(at, at + 90)}…`);
  }
}

function run() {
  const mdFiles = fs
    .readdirSync(KNOWLEDGE_DIR)
    .filter((f) => /^M\d{2}-.*\.md$/.test(f))
    .sort();

  const modules = [];
  let totalMcqs = 0;
  let totalCases = 0;
  let totalFlashcards = 0;

  for (const fileName of mdFiles) {
    const raw = readUtf8(path.join(KNOWLEDGE_DIR, fileName));
    const { meta, body } = parseFrontmatter(raw);
    const secs = splitTopSections(body);
    const id = meta.id || fileName.slice(0, 3);
    const isM12 = id === 'M12';

    const actividadesMd = isM12 ? secs.sec_1 || '' : secs.sec_5 || '';
    const mcqs = extractMcqs(id, actividadesMd);
    const casosError = isM12 ? [] : extractErrorCases(id, actividadesMd);
    const flashcards = isM12 ? [] : extractFlashcards(id, actividadesMd);

    totalMcqs += mcqs.length;
    totalCases += casosError.length;
    totalFlashcards += flashcards.length;

    modules.push({
      id,
      slug: fileName.replace(/\.md$/, ''),
      fileName,
      titulo: meta.titulo || id,
      subtitulo: meta.subtitulo || '',
      ultimaActualizacion: meta.ultima_actualizacion || '2026-11-25',
      pilotoFase2: Boolean(meta.piloto_fase2),
      fuentesNlm: Array.isArray(meta.fuentes_nlm) ? meta.fuentes_nlm : [],
      fuentesVault: Array.isArray(meta.fuentes_vault) ? meta.fuentes_vault : [],
      palabrasClave: Array.isArray(meta.palabras_clave) ? meta.palabras_clave : [],
      capaBaseMd: isM12 ? secs.intro || '' : secs.sec_1 || '',
      capaFronteraMd: isM12 ? '' : secs.sec_2 || '',
      mitosMd: isM12 ? '' : secs.sec_3 || '',
      simuladorSpecMd: isM12 ? secs.sec_4 || '' : secs.sec_4 || '',
      actividadesMd,
      referenciasMd: isM12 ? secs.sec_5 || '' : secs.sec_6 || '',
      casoTMd: isM12 ? secs.sec_2 || '' : '',
      monitorMienteMd: isM12 ? secs.sec_3 || '' : '',
      mcqs,
      casosError,
      flashcards,
    });
  }

  // M12 es el centro de entrenamiento integrador: va último aunque haya módulos con número mayor (M14…).
  modules.sort((a, b) => (a.id === 'M12') - (b.id === 'M12') || a.id.localeCompare(b.id));

  const evidenciaPath = path.join(KNOWLEDGE_DIR, 'evidencia-viva.json');
  const evidenciaData = sanitizeDeep(JSON.parse(readUtf8(evidenciaPath)));

  const matrizPath = path.join(KNOWLEDGE_DIR, '00-matriz-fuentes.md');
  const auditoria = sanitizeDeep(parseAuditMatrix(readUtf8(matrizPath)));

  const modulesPublic = sanitizeDeep(modules);
  modules.splice(0, modules.length, ...modulesPublic);
  assertNoLocalPaths('modules.json', modules);
  assertNoLocalPaths('evidencia-viva.json', evidenciaData);
  assertNoLocalPaths('auditoria.json', auditoria);

  // Aviso (no corta el build): notas nuevas del Radar escritas en segunda persona para el autor.
  const personales = JSON.stringify(evidenciaData).match(/\b(tu|tus)\s+\p{L}+/giu) || [];
  if (personales.length) {
    console.warn(`AVISO sync-data: ${personales.length} frase(s) en segunda persona en evidencia viva: ${personales.slice(0, 5).join(' · ')}`);
  }

  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'modules.json'),
    JSON.stringify(modules, null, 2),
    'utf8'
  );
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'evidencia-viva.json'),
    JSON.stringify(evidenciaData, null, 2),
    'utf8'
  );
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'auditoria.json'),
    JSON.stringify(auditoria, null, 2),
    'utf8'
  );

  console.log(
    `OK sync-data: ${modules.length} modulos, ${totalMcqs} MCQs, ${totalCases} casos, ${totalFlashcards} flashcards, ${evidenciaData.total_entradas} entradas evidencia viva, ${auditoria.length} auditorias`
  );
}

run();
