---
id: M09
titulo: "Antibioticoterapia Crítica, PK/PD, Primeras 24–48 h, ARC, LRA y CKRT"
subtitulo: "De la dilución del tercer espacio y el clearance renal aumentado a BLING III, Ulldemolins 2026, BALANCE, ADAPT-Sepsis y reglas Malbrán"
ultima_actualizacion: 2026-11-25
piloto_fase2: true
fuentes_nlm:
  - "Antibioticos"
  - "ATB primeras 24-48h"
  - "[SATI] clases"
  - "LRA en Shock Séptico"
  - "Actualizaciones ChatGPT"
  - "2026"
fuentes_vault:
  - "Protocolo Antibioticoterapia Sepsis UCI.md"
  - "Calculadora Sepsis y Antibioticos UCI.md"
  - "Sepsis y Shock Septico/ (Pasteran & Corso Malbrán)"
  - "00 Radar Bibliografico/"
palabras_clave:
  - PK/PD
  - BLING III
  - infusión extendida
  - ARC
  - aclaramiento renal aumentado
  - AKI
  - CKRT
  - vancomicina
  - cefepime
  - neurotoxicidad
  - BALANCE
  - ADAPT-Sepsis
  - Malbrán
---

# M09 — Antibioticoterapia Crítica, PK/PD, Primeras 24–48 h, ARC, LRA y CKRT

---

## 1. Capa Base — Desde cero (Fisiología, Farmacología y Fundamentos PK/PD)

### 1.1 Por qué las dosis de sala general fracasan en la UCI séptica
En el paciente sano o de sala general, la farmacocinética ($\text{PK}$) es predecible. En la sepsis y el shock séptico cambian simultáneamente las dos variables maestras: el **Volumen de Distribución ($V_d$)** y el **Aclaramiento ($CL$)**, además de la **unión a proteínas plasmáticas ($f_u$)**.

#### A. Hidrofílicos vs. Lipofílicos (Tee et al. 2025/2026, `PMID 41024947`)
| Propiedad | Antimicrobianos Hidrofílicos | Antimicrobianos Lipofílicos |
| :--- | :--- | :--- |
| **Ejemplos** | $\beta$-lactámicos (meropenem, pip-tazo, cefepime, cefazolina), glucopéptidos (vancomicina), aminoglucósidos, daptomicina, colistina | Fluoroquinolonas, macrólidos, tigeciclina, linezolid, rifampicina |
| **$V_d$ basal** | **Bajo ($< 1\text{ L/kg}$)** — restringidos al plasma e intersticio | **Alto ($> 2\text{ L/kg}$)** — amplia penetración tisular e intracelular |
| **Impacto de la sepsis (fuga + fluidos)** | **Expansión masiva de $V_d$** (+30–100%): la primera dosis se diluye en el "tercer espacio" | $V_d$ poco modificado por el edema intersticial agudo |
| **Vía de eliminación** | **Predominantemente renal** (fluctúa brutalmente entre LRA y ARC) | **Predominantemente hepática/biliar**, salvo una excepción crítica |
| **Trampa clásica de examen** | Reducir la dosis inicial por creatinina alta → subdosificación letal | **Excepción quinolonas:** ciprofloxacina ($50\text{–}70\%$ renal) y levofloxacina ($67\text{–}87\%$ renal) **SÍ requieren ajuste** en LRA establecida |

#### B. Hipoalbuminemia ($\text{Alb} < 2{,}5\text{ g/dL}$)
La hipoalbuminemia afecta severamente a los antimicrobianos con **alta unión a proteínas ($\ge 80\%$)** como **ceftriaxona ($\approx 95\%$)**, **ertapenem ($85\text{–}95\%$)**, **daptomicina ($\approx 92\%$)**, **teicoplanina ($\approx 90\%$)** y **cefazolina ($\approx 80\%$)**. Al haber menos albúmina disponible para ligarlos:
1. Sube bruscamente la **fracción libre ($f_u$)** en plasma en el momento de infusión.
2. Esa mayor fracción libre escapa rápidamente al intersticio (aumentando el $V_d$) y queda **completamente expuesta a filtración glomerular y aclaramiento hepático/extracorpóreo**, llegando a **duplicar el $CL$ total**.
3. Consecuencia contraintuitiva: hacia el final del intervalo de dosis, la **concentración libre cae por debajo de la MIC** antes de tiempo, requiriendo dosis más frecuentes o infusión prolongada (nunca "bajar dosis por hipoalbuminemia").

### 1.2 Los tres índices PK/PD y la regla de la Dosis de Carga
1. **Tiempo-dependientes ($\beta$-lactámicos):** su eficacia depende del porcentaje del intervalo en que la **fracción libre** supera la concentración inhibitoria mínima (**$\% fT > \text{MIC}$**).
   - Meta mínima clásica: $40\text{–}70\%\ fT > \text{MIC}$.
   - **Meta crítica moderna en UCI (Gatti & Pea 2024):** **$100\%\ fT > 4\text{–}5\times\text{MIC}$** para maximizar curación microbiológica y suprimir mutantes resistentes.
2. **Concentración-dependientes (aminoglucósidos, daptomicina):** meta **$C_{\max}/\text{MIC}$** (p. ej. amikacina $8\text{–}10\times\text{MIC}$) en dosis única diaria seguida de un período de concentración baja que aprovecha el efecto postantibiótico y minimiza la captación saturable en corteza renal.
3. **Exposición total / AUC-dependientes (vancomicina, fluoroquinolonas, linezolid):** meta **$\text{AUC}_{24}/\text{MIC}$**.
   - **Vancomicina (Rybak 2020):** para SARM grave, objetivo **$\text{AUC}_{24}/\text{MIC} = 400\text{–}600\text{ mg}\cdot\text{h/L}$** (asumiendo $\text{MIC} = 1\text{ mg/L}$); superar $600$ o mantener valles $>20\text{ mg/L}$ dispara la nefrotoxicidad. Abandonar el objetivo antiguo de "valle $15\text{–}20\text{ mg/L}$" cuando no se mide AUC si la $\text{AUC}$ ya excede $600$.

**Principio irrenunciable de la Dosis de Carga:**
$$D_{\text{carga}} = C_{\text{objetivo}} \times V_d$$
La dosis de carga depende **exclusivamente del $V_d$** y **NO del aclaramiento renal ni de la creatinina**. En un paciente en anuria o en CKRT, la primera dosis de un $\beta$-lactámico o de vancomicina ($20\text{–}35\text{ mg/kg}$ de peso real, máximo $3.000\text{ mg}$) **siempre se da completa** para llenar el espacio extracelular expandido en la primera hora.

### 1.3 Estabilidad fisicoquímica e incompatibilidades en Y-site
- **Meropenem en infusión continua o prolongada:** solución inestable a temperatura ambiente ($>25^\circ\text{C}$), perdiendo **$>10\%$ de actividad tras $6\text{–}8\text{ horas}$**. En UCI cálidas o bombas cerca de equipos, **cambiar la bolsa/jeringa cada $6\text{–}8\text{ h}$**; jamás preparar una bolsa única de 24 h.
- **Piperacilina-tazobactam y cefepime:** estables hasta $24\text{ h}$ a temperatura ambiente controlada ($20\text{–}25^\circ\text{C}$), aptos para infusión continua en bolsa de 24 h (protegiendo de calor directo).
- **Incompatibilidad directa:** no coadministrar $\beta$-lactámicos y aminoglucósidos por el mismo lumen/Y-site (forman complejos inactivos de amida con pérdida mutua de potencia).

---

## 2. Capa Profundidad R2–R3 y Frontera (2022–2026)

### 2.1 Ventana temporal, SSC 2026 y control de foco
- **Surviving Sepsis Campaign (SSC) 2026 (`PMID 41869847`):**
  - **Shock séptico o sepsis altamente probable:** antimicrobianos IV dentro de la **primera hora ($< 1\text{ h}$)**.
  - **Sepsis posible sin shock:** investigación diagnóstica acelerada y administración dentro de las **$3\text{ h}$** si persiste sospecha infecciosa.
  - **Prehospitalario:** considerar antibiótico prehospitalario si el tiempo de traslado supera los **$60\text{ min}$** en pacientes de alto riesgo.
  - **Infusión prolongada/continua de $\beta$-lactámicos tras dosis de carga:** elevada a **recomendación fuerte con certeza de evidencia alta**.
  - **Cobertura antianaeróbica dirigida:** recomendada específicamente en foco intraabdominal, abscesos o infecciones necrotizantes, y **desaconsejada de rutina** en neumonía o ITU sin factores de riesgo anaeróbico para evitar disrupción del microbioma intestinal (asociada a inmunoparálisis y mayor mortalidad).
- **Evidencia observacional vs. ECAs en tiempo puerta-antibiótico:**
  - **Pak et al. 2023:** demostró incremento de mortalidad por hora de demora en **shock séptico ($\text{aOR } 1{,}07/\text{h}$)**, pero ausencia de pendiente lineal estadísticamente significativa en pacientes sin shock tras ajustar gravedad.
  - **Ku et al. 2025:** cumplir $\le 1\text{ h}$ en shock ($\text{OR } 0{,}89$) y $\le 3\text{ h}$ sin shock ($\text{OR } 0{,}67$) asoció menor mortalidad.
  - **Antibioticoterapia prehospitalaria:** **PHANTASi 2018** (acortó $-26\text{ min}$, mortalidad NS) y **Freund et al. 2024** (acortó **$-73\text{ min}$**, pero mortalidad 28 d neutra **$12{,}1\%$ vs $12{,}6\%$** en cohorte con baja tasa de shock). El impacto salvavidas reside en acortar la demora *en el shock vasopléjico*, no en apresurar empíricamente a pacientes estables sin foco claro.
  - **Logística de guardia:** administrar la primera dosis en **IV push / bolo corto controlado** donde esté validado reduce el tiempo real hasta infusión de **$132 \to 99\text{ min}$** frente a esperar mezclas en bolsa.
  - **Diagnóstico microbiológico rápido en hemocultivos:** acortó la identificación en **$-21{,}4\text{ h}$**, pero su efecto sobre mortalidad fue neutro ($\text{OR } 0{,}97$) cuando no se integró con un equipo activo de PROA (*Antimicrobial Stewardship*).
  - **Control de foco:** en bacteriemia por *Pseudomonas aeruginosa* (`PMID 42787356`), el drenaje/control efectivo del foco presentó **$\text{HR } 0{,}15$** para mortalidad — ningún ajuste PK/PD sustituye al cirujano o intervencionista.

### 2.2 Infusión prolongada y continua: BLING III, MERCY y TDM
- **MERCY (*JAMA* 2023, `PMID 37326473`, `n = 607`, meropenem):** continuo vs. intermitente; desenlace compuesto de mortalidad o resistencia emergente a 28 d **$47\%$ vs $49\%$** y mortalidad a 90 d **$42\%$ vs $42\%$** (sin beneficio en un ensayo con alta gravedad basal e inclusión algo más tardía).
- **BLING III (*JAMA* 2024, `PMID 38864155`, `n = 7.031`, meropenem o pip-tazo):**
  - Mortalidad a 90 d: **$24{,}9\%$ vs $26{,}8\%$** ($\text{OR}$ crudo $0{,}91$, $p = 0{,}08$; **$\text{OR}$ ajustado $0{,}89$, $p = 0{,}04$**).
  - Curación clínica al día 14: **$\text{OR } 1{,}26$** (beneficio significativo).
- **Abdul-Aziz et al. 2024 (*JAMA*, metaanálisis de 18 ECAs, `n = 9.108`):** la infusión prolongada/continua de $\beta$-lactámicos redujo significativamente la mortalidad a 90 días (**$\text{RR } 0{,}86$**), consolidando la recomendación fuerte de SSC 2026.
- **TDM y meta de $4\text{–}5\times\text{MIC}$ (Gatti & Pea 2024, *Crit Care* 28:123):** no alcanzar $100\%\ fT > 4\text{–}5\times\text{MIC}$ se asoció con fracaso clínico extremo ($\text{OR } 26{,}08$), mientras alcanzarla redujo la emergencia de resistencia ($\text{OR } 0{,}06$).
- **Falla temprana incluso con infusión extendida de 3 h (Beijer et al. 2025, *Crit Care* 29:208):** pese a recibir dosis de carga seguida de infusión extendida de 3 h, el **$45\%$ de los pacientes con meropenem y el $38\%$ con pip-tazo no alcanzaron $100\%\ fT > \text{MIC}$ en el primer intervalo**, y **el $100\%$ de los fallos con meropenem ocurrieron en pacientes con $\text{eGFR} > 90\text{ mL/min}$ o ARC**.
- **Sostenibilidad ambiental en UCI (Gisbert-Mora et al. 2026):** la infusión continua en bolsa/jeringa de $50\text{ mL}$ (tras carga) redujo la huella de carbono ($\text{CO}_2\text{e}$) en **$52\%$** frente a infusiones intermitentes múltiples en bolsas de $100\text{ mL}$.

### 2.3 La paradoja de las primeras 24–48 h: LRA transitoria vs. ARC
#### A. Por qué NO reducir la dosis renal de $\beta$-lactámicos en las primeras 24–48 h de LRA séptica
- **Hughes et al. 2022 (`n = 647` bacteriemias por gramnegativos):** el **$99\%$ de los pacientes con LRA estadio $\ge 2$ al ingreso** iniciaron recuperación renal dentro de una mediana de **$3\text{ días}$**. Reducir el $\beta$-lactámico desde la hora 0 por una creatinina inicial elevada condena al paciente a subexposición justamente cuando la función renal se recupera durante las primeras 48 h y la carga bacteriana es máxima.
- **Aldardeer et al. 2024 (*Open Forum Infect Dis*, `PMID 38434610`, `n = 224` con LRA séptica):** diferir $>24\text{ h}$ el ajuste renal de los $\beta$-lactámicos respecto a reducirlo al ingreso redujo la **mortalidad hospitalaria ($\text{HR } 0{,}588$; IC95% $0{,}355\text{–}0{,}974$)** y aumentó la **recuperación de la LRA a las 48 h ($70{,}7\%$ vs $47{,}6\%$)**.
- **Kuwana et al. 2026 (*Antibiotics* 15:88):** en pacientes con LRA tratados con cefepime, recibir dosis plena inicial ($\ge 12\text{ g}$ acumulados en las primeras 48 h) frente a ajuste precoz a la baja obtuvo una **supervivencia a 28 d ajustada por IPTW del $94\%$ vs $61\%$**. *Condición obligatoria:* si al cumplir **48–72 h** la LRA persiste sin recuperación de $CL_{\text{cr}}$, entonces sí reducir la dosis para evitar neurotoxicidad por acumulación.

#### B. Aclaramiento Renal Aumentado (ARC) — El enemigo invisible
- **Hefny et al. 2022:** prevalencia promedio del **ARC en UCI de $39\%$**.
- **Ulldemolins et al. 2026 (`DOI 10.1186/s13054-026-06239-8`, `n = 77`):** midiendo aclaramiento de creatinina en orina de 8 horas (**$\text{uCLcr}_{8\text{h}} > 130\text{ mL/min}$**), hallaron ARC en el **$43\%$ de los pacientes con sepsis** y en el **$71{,}4\%$ de los politraumatizados**:
  - Piperacilina-tazobactam fracasó en alcanzar incluso **$1\times\text{MIC}$** en el **$53{,}1\%$** para *Enterobacterales* y **$61{,}2\%$** para *P. aeruginosa*, y **$>75\%$ fracasaron para la meta de $4\times\text{MIC}$**.
  - El ARC multiplicó el riesgo de fracaso PK/PD ($\text{OR } 10{,}9$ y $\text{OR } 7{,}7$ según meta).
  - *Señal clínica diferenciadora:* los pacientes bajo **vasopresores** presentaron solo **$16{,}7\%$** de fracaso PK/PD (menor incidencia de hiperfiltración respecto a sépticos normotensos hiperdinámicos o trauma).
  - *Herramienta de descarte al pie de cama:* un **Cockcroft-Gault $\ge 114{,}5\text{ mL/min}$** identificó riesgo de ARC/fracaso, y valores por debajo ofrecieron un **VPN de $95{,}7\%$** ($\text{AURC } 0{,}79$) para descartar falla severa por ARC, aunque CG subestima la magnitud absoluta frente a $\text{uCLcr}_{8\text{h}}$.
  - En el mismo estudio, las concentraciones libres de **cefazolina** estuvieron moduladas conjuntamente por $\text{uCLcr}_{8\text{h}}$ y **albúmina sérica**, y se demostró que el aclaramiento de **sinistrina** falla para predecir la depuración real de $\beta$-lactámicos porque solo mide filtración glomerular, ignorando la **secreción tubular activa** hiperactivada en el ARC.

### 2.4 Dosificación en CKRT, Adsorción y Seguridad (Neuro-Nefrotoxicidad)
- **Reglas generales en CKRT:** son dializados eficientemente los fármacos con **$\text{PM} < 1.000\text{ Da}$**, **unión proteica $< 50\%$** y **$V_d < 1\text{ L/kg}$** (prácticamente todos los $\beta$-lactámicos convencionales, aminoglucósidos, vancomicina —en filtros modernos de alto flujo— y fluconazol). El aclaramiento es proporcional a la **tasa de efluente total** ($25\text{–}35\text{ mL/kg/h}$) más la función renal residual y la eventual pérdida adsortiva en membranas AN69/oXiris o hemoperfusión (CytoSorb adsorbe linezolid/vancomicina/teicoplanina; PMX adsorbe hasta $55\%$ de linezolid; Seraph $62\%$ tobramicina / $59\%$ gentamicina — ver [M10](#module-M10)).
- **La trampa clásica del Fluconazol en CKRT:** normalmente el túbulo renal reabsorbe $\approx 80\%$ del fluconazol filtrado, prolongando su vida media. El hemofiltro de CKRT **no tiene reabsorción tubular**, por lo que depura el fluconazol mucho más rápido que un riñón normal: exige **$800\text{ mg}$ de carga $\to 800\text{ mg/día}$** (si se da dosis renal "reducida" de $200\text{ mg/d}$, se fracasa en candidemia).
- **Neurotoxicidad por Cefepime:** afecta al **$10\text{–}15\%$** de los pacientes críticos con exposición acumulada (encefalopatía, confusión, mioclonías negativas, estado epiléptico no convulsivo en EEG), con umbral de riesgo cuando el valle plasmático supera **$20\text{–}32\text{ mg/L}$** (revaluar a las 48–72 h si la LRA no resolvió!).
- **ACORN (*JAMA* 2023, `n = 2.511`, pip-tazo vs. cefepime + $77\%$ vancomicina concomitante):**
  - **Sin diferencias en LRA** ni en mortalidad entre piperacilina-tazobactam y cefepime cuando se combinan con vancomicina, desmitificando la nefrotoxicidad catastrófica atribuida a la dupla pip-tazo + vancomicina en cohortes retrospectivas antiguas.
  - Sin embargo, **cefepime produjo significativamente mayor disfunción neurológica** ($\text{OR } 0{,}79$ favoreciendo a piperacilina-tazobactam en días libres de coma/delirio).

### 2.5 Microbiología local (ANLIS Malbrán 2025), Duración y Biomarcadores
- **Actualización de consenso ANLIS Malbrán 2025 (Pasteran & Corso):**
  - **CRAB (*Acinetobacter baumannii* resistente a carbapenémicos):** esquemas de dosis alta optimizada de **sulbactam $9\text{ g/día}$** (p. ej. $3\text{ g}$ c/$8\text{ h}$ en infusión extendida) permiten cobertura en categoría **SDD (sensible dosis-dependiente)** hasta **CIM $16\text{–}32\text{ mg/L}$**, evitando el **$33\%$ de error por disco** observado cuando el laboratorio evalúa con referencia de dosis estándar de $4\text{ g/día}$.
  - **Combinación ceftazidima-avibactam + aztreonam (para enterobacterias productoras de MBL):** **prohibido extrapolar** los puntos de corte comerciales de **Emblaveo®** (aztreonam-avibactam coformulado) a la preparación artesanal de ceftazidima-avibactam + aztreonam administrados juntos, debido a diferencias farmacocinéticas y de relación molar con avibactam.
- **Duración acortada — BALANCE (*NEJM* 2025, `n = 3.608`, bacteriemias en UCI y piso excluyendo foco endovascular/óseo profundo/neutropenia severa):** **$7\text{ días}$** de tratamiento antimicrobiano fueron **no inferiores a $14\text{ días}$** en mortalidad a 90 días (**$14{,}5\%$ vs $16{,}1\%$**), estableciendo $7\text{ días}$ como estándar en bacteriemias no complicadas con control de foco adecuado.
- **Desescalamiento guiado por biomarcadores:**
  - **ADAPT-Sepsis (*JAMA* 2025, `n = 2.760`):** monitoreo diario de **procalcitonina (PCT)** redujo la duración antibiótica en **$-0{,}88\text{ días}$** ($10{,}7 \to 9{,}8\text{ días}$) de forma segura, mientras que el brazo guiado por **PCR (CRP)** **fracasó** en reducir la exposición frente a cuidado estándar.
  - **Rafiq et al. 2026:** metaanálisis reciente confirma reducción promedio de **$\approx 2\text{ días}$** con algoritmos de PCT sin exceso de mortalidad.
  - **Regla cinética complementaria (Suberviola 2012):** un descenso de PCT **$\ge 70\%$ a las $72\text{ h}$** predice buena respuesta clínica y habilita desescalamiento seguro junto a evaluación clínica y microbiológica.


### Novedades del barrido anual 2025–2026 (PubMed + avisos de correo, leídas en abstract)
> Agregadas el 2026-11-26 desde el abstract de PubMed (no el texto completo). Cada una lleva su PMID. Lista completa de candidatos en `candidatos-pubmed-correo.md`.

- **FAST** (*JAMA* 2026, ECA, $n = 850$, bacteriemia por gramnegativos): el antibiograma rápido **no fue superior** en el DOOR a 30 días; ajustó (escaló o desescaló) el antibiótico 14 h antes. En carbapenemresistentes, el tiempo a tratamiento efectivo bajó de 28 a 9,5 h (IC amplio). `PMID 41999287`
- ***S. aureus* sensible a meticilina: cefazolina** (*N Engl J Med* 2026, plataforma SNAP, $n = 1.287$): **no inferior** a flucloxacilina/cloxacilina en mortalidad a 90 días (15,0% vs 17,0%) y con **menos LRA** (13,9% vs 19,6%). `PMID 42308484`
- ***S. aureus* sensible a penicilina: bencilpenicilina** (*Lancet* 2026, SNAP, $n = 273$): no inferior (probabilidad 96%) y con menos LRA (11% vs 22%); el brazo de flucloxacilina/cloxacilina se cerró antes por exceso de LRA. `PMID 42309115`
- **Temocilina vs carbapenémicos — ASTARTÉ** (*Lancet* 2026, España, $n = 328$, bacteriemia por enterobacterias resistentes a cefalosporinas de 3ª generación): **no inferior** en éxito clínico (74% vs 73%). Una alternativa ahorradora de carbapenémicos. `PMID 42425122`
- **Cefiderocol empírico — GAME CHANGER** (*Lancet Infect Dis* 2026, $n = 504$, bacteriemia gramnegativa intrahospitalaria): mortalidad a 14 días 8% vs 7%; sin ventaja tampoco en carbapenemresistentes. `PMID 41067237`
- **BALANCE, tres análisis secundarios (7 vs 14 días en bacteriemia):** (1) ajustando por la falta de adherencia, el resultado se mantuvo (*Lancet Infect Dis* 2026, `PMID 41237792`); (2) una **procalcitonina alta al día 7** marcó más mortalidad (21,6% vs 6,2%) pero **prolongar a 14 días no la mejoró** (*JAMA Netw Open* 2026, `PMID 42371622`); (3) en ***Pseudomonas*** la mortalidad fue 29,7% vs 20,5% con 7 vs 14 días (IC95% de la diferencia −4,8 a 23,2): sin diferencia significativa pero con un IC que no permite descartar daño (*Clin Infect Dis* 2026, `PMID 41774760`).
- **Endocarditis izquierda: duración guiada por respuesta** (*N Engl J Med* 2026, $n = 508$): suspender tras 2–4 semanas en pacientes estables dio 13 días más sin antibióticos y fue no inferior en seguridad, pero con **más recaídas** (5,1% vs 1,6%). `PMID 42663314`
- **Colistina + meropenem con sinergia in vitro** (*Clin Infect Dis* 2026, análisis dentro de un ECA, 70% neumonía, 79% *A. baumannii*): menos fracaso clínico (aOR 0,62) con mortalidad similar (38% vs 41%). `PMID 40682801`

---

## 3. Mitos vs. Evidencia — Cómo NO sobreinterpretarlo

1. **Mito: "Ingresa con creatinina 2,3 mg/dL, reduzco meropenem a 500 mg c/12 h desde la primera dosis."**
   - **Realidad (Hughes 2022; Aldardeer 2024; Kuwana 2026):** la primera dosis depende del $V_d$ expandido (siempre carga plena) y $>90\%$ de las LRA sépticas al ingreso son parcialmente reversibles en 48–72 h. Bajar dosis en las primeras 24–48 h eleva la mortalidad (Aldardeer $\text{HR } 0{,}588$ al diferir ajuste; Kuwana supervivencia $94\%$ vs $61\%$). Reevaluar a las 48–72 h!
2. **Mito: "Tiene creatinina normal (0,8 mg/dL) y usa piperacilina-tazobactam 4,5 g c/6 h en infusión de 3 h: seguro cubre todo."**
   - **Realidad (Ulldemolins 2026; Beijer 2025):** un trauma o séptico hiperdinámico con creatinina $0{,}7\text{–}0{,}8$ suele tener **ARC ($\text{uCLcr}_{8\text{h}} > 130\text{ mL/min}$)**: $>50\text{–}75\%$ fracasan en meta PK/PD con esquema estándar incluso en 3 h extendida. Medir $\text{uCLcr}_{8\text{h}}$, usar dosis plena máxima en infusión continua y TDM si disponible.
3. **Mito: "Preparamos una bolsa única de 24 h para meropenem en infusión continua, igual que con pip-tazo."**
   - **Realidad fisicoquímica:** el meropenem se degrada $>10\%$ después de $6\text{–}8\text{ h}$ a $>25^\circ\text{C}$, dejando al paciente subdosificado la mitad del día; cambiar cada **$6\text{–}8\text{ h}$**.
4. **Mito: "Está anúrico en CKRT, hay que darle fluconazol 200 mg/día."**
   - **Realidad:** sin reabsorción tubular, el hemofiltro depura fluconazol masivamente; requiere **$800\text{ mg}$ carga $\to 800\text{ mg/día}$**.
5. **Mito: "Piperacilina-tazobactam + vancomicina siempre causa LRA; mejor usar cefepime + vancomicina sin dudar."**
   - **Realidad (ACORN 2023):** sin diferencias de LRA entre ambas combinaciones, pero **cefepime elevó significativamente la neurotoxicidad** ($\text{OR } 0{,}79$), sobre todo si persiste LRA $>48\text{ h}$ y el valle excede $20\text{–}32\text{ mg/L}$.
6. **Mito: "En neumonía grave comunitaria agrego metronidazol 'para cubrir todo' y en MBL valido el disco de Emblaveo® para mi ceftaz/avi + aztreonam."**
   - **Realidad:** **SSC 2026** desaconseja cobertura antianaeróbica innecesaria por daño al microbioma, y **Malbrán 2025** prohíbe extrapolar puntos de corte de Emblaveo® a la mezcla artesanal.

---

## 4. Especificación del Simulador / Atlas Interactivo

### 4.1 Identidad del Simulador Piloto (Fase 2A)
- **Nombre UI:** *Motor PK/PD Crítico — Curvas $C_{\text{libre}}(t)$ 0–48 h en Sepsis, ARC, LRA y CKRT*
- **Propósito docente:** simular segundo a segundo la concentración plasmática libre ($C_{\text{libre}}(t)$) frente a $1\times\text{MIC}$, $4\times\text{MIC}$ y umbral de toxicidad durante las primeras $48\text{ h}$, visibilizando el impacto del tercer espacio, carga, infusión extendida/continua, ARC ($\text{uCLcr}_{8\text{h}}$), LRA temprana vs persistente, hipoalbuminemia, estabilidad de bolsa de meropenem y efluente de CKRT.

### 4.2 Controles interactivos y rangos exactos
| Control | Tipo | Mín | Máx | Paso | Default | Unidad / Opciones |
| :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| `Fármaco` | Select | — | — | — | `Piperacilina (en Pip/Tazo)` | `Meropenem` / `Piperacilina (Pip/Tazo)` / `Cefepime` / `Cefazolina` / `Vancomicina` |
| `Modalidad` | Select | — | — | — | `Infusión extendida 3 h` | `Bolo 30 min` / `Extendida 3 h` / `Extendida 4 h` / `Continua 24 h` |
| `Dosis de carga inicial` | Toggle | `false` | `true` | — | `true` | Sí / No (aplica carga completa según $V_d$) |
| `Dosis diaria mantenimiento` | Slider | *dinámico* | *dinámico* | *dinámico* | *estándar UCI* | Ej.: Mero $1.5\text{–}6\text{ g/d}$; Pip $8\text{–}18\text{ g/d}$; Cefepime $2\text{–}6\text{ g/d}$; Vanco $1\text{–}4\text{ g/d}$ |
| `Peso corporal real` | Slider | $45$ | $140$ | $1$ | $75$ | $\text{kg}$ |
| `Aclaramiento renal real (uCLcr 8h)` | Slider | $10$ | $220$ | $5$ | $150$ | $\text{mL/min}$ |
| `Sepsis aguda / Expansión Vd (+35%)` | Toggle | `false` | `true` | — | `true` | Simula fuga capilar y fluidos iniciales |
| `Efluente total CKRT` | Slider | $0$ | $45$ | $5$ | $0$ | $\text{mL/kg/h}$ |
| `Hemoperfusión adsortiva activa` | Select | — | — | — | `Ninguna` | `Ninguna` / `oXiris-AN69 (+10% CL)` / `CytoSorb-PMX (+25% CL)` |
| `Albúmina sérica` | Slider | $1{,}2$ | $4{,}5$ | $0{,}1$ | $2{,}2$ | $\text{g/dL}$ |
| `MIC del patógeno` | Select | $0{,}25$ | $16$ | *×2* | `4` | `0,25` / `0,5` / `1` / `2` / `4` / `8` / `16` $\text{mg/L}$ |
| `Cambio de bolsa en IC (Meropenem)` | Select | — | — | — | `Cada 6–8 h` | `Cada 6–8 h (estable)` / `Única 24 h (degradación térmica >10%)` |

### 4.3 Modelo farmacocinético compartimental explícito (especificación determinista)
Para garantizar cálculos reproducibles y pedagógicamente fieles en Fase 2A (modelo 1-compartimental lineal con $\Delta t = 5\text{ min}$ sobre $t \in [0, 48\text{ h}]$):

1. **Tabla paramétrica de fármacos (base poblacional UCI $70\text{ kg}$):**
   - **Meropenem:** $V_{d,\text{base}} = 0{,}30\text{ L/kg}$ (expande $+35\%$ en sepsis $\to 0{,}405$), $f_{u,\text{ref}} = 0{,}98$, $CL_{\text{no\_renal}} = 1{,}2\text{ L/h}$, $k_{\text{renal}} = 0{,}078 \cdot \text{uCLcr}\ (\text{mL/min})$ L/h (incluye secreción tubular), carga estándar $1.000\text{–}2.000\text{ mg}$, $k_{\text{deg}} = 0{,}018\text{ h}^{-1}$ si `bolsa 24 h` a $>25^\circ\text{C}$ ($t_{\text{bolsa}} > 6\text{ h}$).
   - **Piperacilina (componente activo):** $V_{d,\text{base}} = 0{,}28\text{ L/kg}$ ($0{,}38$ en sepsis), $f_{u,\text{ref}} = 0{,}70$, $CL_{\text{no\_renal}} = 1{,}6\text{ L/h}$, $k_{\text{renal}} = 0{,}065 \cdot \text{uCLcr}$ L/h, carga $4.000\text{ mg}$ ($4{,}5\text{ g}$ Pip/Tazo).
   - **Cefepime:** $V_{d,\text{base}} = 0{,}28\text{ L/kg}$ ($0{,}38$ en sepsis), $f_{u,\text{ref}} = 0{,}80$, $CL_{\text{no\_renal}} = 0{,}7\text{ L/h}$, $k_{\text{renal}} = 0{,}068 \cdot \text{uCLcr}$ L/h, carga $2.000\text{ mg}$, techo de alerta neurotóxica **valle total $> 20\text{ mg/L}$** (crítico $> 32\text{ mg/L}$).
   - **Cefazolina:** $V_{d,\text{base}} = 0{,}20\text{ L/kg}$ ($0{,}27$ en sepsis), $f_{u,\text{ref}} = 0{,}20$ a albúmina $4{,}0\text{ g/dL}$, $CL_{\text{no\_renal}} = 0{,}3\text{ L/h}$, $k_{\text{renal}} = 0{,}050 \cdot (\frac{f_u}{f_{u,\text{ref}}}) \cdot \text{uCLcr}$ L/h (modela el hallazgo de **Ulldemolins 2026** de doble dependencia de uCLcr y albúmina!).
   - **Vancomicina:** $V_{d,\text{base}} = 0{,}70\text{ L/kg}$ (peso corporal real), $f_{u,\text{ref}} = 0{,}50$, $CL_{\text{no\_renal}} = 0{,}3\text{ L/h}$, $k_{\text{renal}} = 0{,}048 \cdot \text{uCLcr}$ L/h, carga $25\text{ mg/kg}$ peso real (máx $3.000\text{ mg}$, **Rybak 2020**), meta $\text{AUC}_{24}/\text{MIC} \in [400, 600]$.

2. **Corrección dinámica de fracción libre por albúmina:**
   $$f_u = \frac{1}{1 + \left(\frac{\text{Alb}}{4{,}0}\right) \cdot \left(\frac{1 - f_{u,\text{ref}}}{f_{u,\text{ref}}}\right)}$$

3. **Aclaramiento total y CKRT:**
   $$CL_{\text{CKRT}} = \frac{Q_{\text{ef}}(\text{mL/kg/h}) \times \text{Peso}(\text{kg})}{1.000} \times f_u\ \text{ (L/h)}$$
   $$CL_{\text{total}} = \left(CL_{\text{no\_renal}} + CL_{\text{renal}} + CL_{\text{CKRT}}\right) \times \text{Factor\_adsorción}$$
   $$k_e = \frac{CL_{\text{total}}}{V_d}, \qquad A(t + \Delta t) = A(t)e^{-k_e \Delta t} + \frac{R_{\text{efectivo}}(t)}{k_e}\left(1 - e^{-k_e \Delta t}\right), \qquad C_{\text{libre}}(t) = f_u \frac{A(t)}{V_d}$$

4. **Salidas y alertas en vivo (0–24 h y 24–48 h):**
   - `% fT > 1x MIC` y `% fT > 4x MIC` (comparado contra estándar intermitente paralelo como línea fantasma).
   - `AUC_24 / MIC` y `AUC_24-48 / MIC` (con bandera específica para Vancomicina $400\text{–}600$ vs $>600$).
   - `C_valle_48h`: disparo de alerta roja **Neurotoxicidad Cefepime ($10\text{–}15\%$ UCI)** si $\text{valle} > 20\text{ mg/L}$.
   - Alerta automática **Ventana LRA 0–48 h** cuando $\text{uCLcr} \le 40\text{ mL/min}$: recuerda diferir ajuste $<24\text{–}48\text{ h}$ (Aldardeer 2024 $\text{HR } 0{,}588$; Kuwana 2026 $94\%$ vs $61\%$) y revaluar estrictamente a las 48–72 h.
   - Alerta **ARC activo** cuando $\text{uCLcr} > 130\text{ mL/min}$ (**Ulldemolins 2026**): muestra probabilidad estimada de falla en bolo y necesidad de carga + infusión continua/TDM.

### 4.4 Presets clínicos obligatorios (4 escenarios reales)
1. **Preset 1 — Trauma/Sepsis joven con ARC ($\text{uCLcr } 175\text{ mL/min}$, *P. aeruginosa* $\text{MIC } 4\text{ mg/L}$):** `Pip/Tazo`, `18 g/d` en `Bolo 30 min` vs comparar con `Carga 4,5 g + Infusión continua 18 g/d`, `Peso 80 kg`, `Alb 2,8`. Demuestra gráficamente por qué el bolo falla drásticamente en `% fT > 4x MIC` (**Ulldemolins 2026 / Beijer 2025**) y cómo la carga + continua rescata la exposición.
2. **Preset 2 — LRA séptica horas 0–48 h (Creatinina $2{,}5\text{ mg/dL}$, $\text{uCLcr } 25\text{ mL/min}$):** `Cefepime`, comparar `Esquema pleno inicial 2 g c/8 h (12 g/48 h, Kuwana 2026)` vs `Reducción prematura a 1 g c/12 h`, `MIC 4`. Expone cobertura inmediata con esquema pleno y dispara advertencia programada de ajuste/TDM a las 48–72 h cuando el valle rebasa $20\text{ mg/L}$.
3. **Preset 3 — Shock séptico en CKRT + Trampa térmica de Meropenem:** `Meropenem`, `3 g/d`, `Continua 24 h`, `Efluente CKRT 35 mL/kg/h`, `uCLcr 5`, `MIC 2`, comparando `Bolsa única 24 h` vs `Recambio c/6–8 h`. Muestra el hundimiento vespertino de $C_{\text{libre}}(t)$ bajo $4\times\text{MIC}$ al degradarse la droga en bomba $>25^\circ\text{C}$.
4. **Preset 4 — Hipoalbuminemia grave ($1{,}5\text{ g/dL}$) con Cefazolina vs Vancomicina obeso ($115\text{ kg}$):** `Cefazolina` $6\text{ g/d}$ + `uCLcr 130` + `Alb 1,5` muestra cómo se dispara $f_u$ y cae el valle final (**Ulldemolins 2026**); al cambiar a `Vancomicina` sin dosis de carga muestra el retraso $>24\text{ h}$ en alcanzar $\text{AUC}_{24}/\text{MIC} \ge 400$ (**Rybak 2020**).

### 4.5 Arquitectura de capas SVG
- **Gráfico Principal Compartimental (0–48 h):** eje X horas ($0$ a $48\text{ h}$ con divisor en $24\text{ h}$), eje Y concentración libre ($\text{mg/L}$). Dibuja simultáneamente:
  - Curva sólida cian del esquema seleccionado por el residente.
  - Curva punteada de referencia en bolo intermitente sin optimizar para comparación visual instantánea.
  - Bandas horizontales: **$1\times\text{MIC}$** (piso mínimo), **$4\times\text{MIC}$** (meta óptima Gatti & Pea 2024) y **banda roja superior de toxicidad** ($>20\text{ mg/L}$ cefepime o equivalente de $\text{AUC}$/valle en vancomicina).
  - Relleno translúcido bajo la curva cuando se sostiene $>4\times\text{MIC}$.

---

## 5. Actividades de Entrenamiento (SATI)

### 5.1 Preguntas de Opción Múltiple (estilo Examen Integrador SATI — 5 opciones)

**Pregunta 1.** Ingresa a UCI un hombre de $34\text{ años}$ politraumatizado en su día 4 que desarrolla neumonía asociada a ventilación mecánica por *Pseudomonas aeruginosa* ($\text{MIC}$ para piperacilina $8\text{ mg/L}$), $\text{PAM } 78\text{ mmHg}$ sin vasopresores, diuresis de $140\text{ mL/h}$ y creatinina sérica de $0{,}65\text{ mg/dL}$ ($\text{uCLcr}_{8\text{h}}\ 182\text{ mL/min}$). Según Beijer et al. (2025) y Ulldemolins et al. (2026), ¿qué estrategia farmacocinética garantiza alcanzar la meta crítica ($100\%\ fT > 4\times\text{MIC}$)?
- A) Piperacilina-tazobactam $4{,}5\text{ g}$ c/$6\text{ h}$ en infusión corta de $30\text{ min}$ es suficiente porque la $\text{MIC}$ de $8$ es sensible.
- B) Como el paciente está normotenso y tiene creatinina baja, reducir la dosis a $4{,}5\text{ g}$ c/$8\text{ h}$ en $3\text{ h}$ evita toxicidad tubular.
- C) Existe alto riesgo de fracaso PK/PD por ARC ($\text{OR } 7{,}7\text{–}10{,}9$); requiere dosis de carga completa seguida de dosis diaria alta en **infusión continua** (con eventual TDM) y revaluación de terapia/sensibilidad si la meta $4\times\text{MIC}$ no es alcanzable farmacológicamente.
- D) Medir el aclaramiento de sinistrina es suficiente y superior al $\text{uCLcr}_{8\text{h}}$ para ajustar los $\beta$-lactámicos en ARC.
- E) La ausencia de vasopresores protege automáticamente contra la subdosificación en comparación con pacientes en shock.

**Pregunta 2.** Una mujer de $68\text{ años}$ ingresa por pielonefritis enfisematosa en shock séptico con noradrenalina $0{,}35\ \mu\text{g/kg/min}$, lactato $4{,}8\text{ mmol/L}$ y creatinina basal de $0{,}9\text{ mg/dL}$ que asciende hoy al ingreso a $2{,}4\text{ mg/dL}$ (oligoanuria inicial mientras se resucita). Se inicia cobertura empírica con cefepime. ¿Cuál es el manejo correcto de la dosis durante las primeras $24\text{–}48\text{ h}$ según Hughes (2022), Aldardeer (2024) y Kuwana (2026)?
- A) Ajustar desde la hora 0 a $1\text{ g}$ c/$24\text{ h}$ calculado por fórmula Cockcroft-Gault actual para prevenir neurotoxicidad precoz.
- B) Omitir dosis de carga porque la creatinina de $2{,}4\text{ mg/dL}$ ya mantiene concentraciones elevadas en la primera hora.
- C) Administrar dosis de carga completa y sostener esquema pleno inicial sin reducción renal en las primeras $24\text{–}48\text{ h}$ (ej. $\ge 12\text{ g}$ acumulados en 48 h en Kuwana 2026), reevaluando función renal y reduciendo dosis si la LRA persiste al llegar a las 48–72 h para evitar neurotoxicidad ($\text{valle} > 20\text{ mg/L}$).
- D) Cambiar obligatoriamente a piperacilina-tazobactam + vancomicina dado que cefepime produce más LRA aguda en ensayos aleatorizados (ACORN).
- E) Indicar de inicio hemodiálisis intermitente precoz solo para poder dar dosis plenas de antibiótico.

**Pregunta 3.** Respecto a las infecciones por bacilos gramnegativos multirresistentes (consenso **ANLIS Malbrán 2025**, Pasteran & Corso) y la elección racional de antibióticos en **SSC 2026**, marque la opción CORRECTA:
- A) Si tratamos una enterobacteria productora de metalo-$\beta$-lactamasa (MBL) con ceftazidima-avibactam + aztreonam, podemos validar directamente la sensibilidad con el punto de corte publicado para Emblaveo®.
- B) Frente a *Acinetobacter baumannii* resistente a carbapenémicos (CRAB), el esquema de sulbactam a $9\text{ g/día}$ extiende la categoría sensible dosis-dependiente (SDD) hasta CIM $16\text{–}32\text{ mg/L}$, corrigiendo el alto error por disco que ocurre a $4\text{ g/día}$.
- C) Las guías SSC 2026 recomiendan agregar cobertura antianaeróbica empírica en toda sepsis de origen pulmonar o urinario con el fin de reducir translocación intestinal.
- D) La infusión continua de meropenem puede prepararse en una única bolsa cada $24\text{ h}$ a $28^\circ\text{C}$ sin pérdida significativa de potencia.
- E) En bacteriemia por *Pseudomonas aeruginosa*, la infusión continua hace irrelevante la demora en el drenaje de un absceso o retiro de catéter infectado.

**Pregunta 4.** Paciente de $72\text{ años}$ con shock séptico en terapia de reemplazo renal continuo ($\text{CKRT}$, efluente $30\text{ mL/kg/h}$) desarrolla candidemia por *Candida albicans* sensible a fluconazol y simultáneamente requiere vancomicina por bacteriemia por *S. aureus* meticilino-resistente ($\text{MIC } 1\text{ mg/L}$). ¿Cuál de las siguientes conductas farmacocinéticas es correcta?
- A) Administrar fluconazol $200\text{ mg}$ al día sin carga porque el paciente está anúrico y el fluconazol se elimina 80% por vía renal.
- B) Administrar fluconazol $800\text{ mg}$ de dosis de carga seguidos de **$800\text{ mg/día}$** en CKRT (ausencia de reabsorción tubular en el filtro), y para vancomicina guiar mantenimiento hacia $\text{AUC}_{24}/\text{MIC}$ de $400\text{–}600$ tras carga basada en peso real ($20\text{–}35\text{ mg/kg}$, máx $3.000\text{ mg}$).
- C) Utilizar el nivel valle objetivo de vancomicina $> 22\text{ mg/L}$ para garantizar eficacia en CKRT sin medir AUC.
- D) Como la vancomicina es lipofílica, no es depurada en absoluto por CKRT ni requiere dosis de carga.
- E) Infundir vancomicina por el mismo lumen Y que piperacilina-tazobactam para aprovechar su sinergia fisicoquímica.

**Pregunta 5.** ¿Qué demostraron **BALANCE (2025)** y **ADAPT-Sepsis (2025)** respecto a la duración y desescalamiento antimicrobiano en pacientes críticos?
- A) Las bacteriemias en pacientes de UCI requieren obligatoriamente $14\text{ días}$ de antibiótico para no aumentar la mortalidad a 90 d.
- B) Un protocolo diario basado en PCR (CRP) redujo más de $2\text{ días}$ la duración de antibióticos en sepsis, superando ampliamente a la procalcitonina.
- C) **BALANCE** demostró que $7\text{ días}$ de tratamiento son no inferiores a $14\text{ días}$ en bacteriemias elegibles (mortalidad 90 d $14{,}5\%$ vs $16{,}1\%$), y **ADAPT-Sepsis** mostró que el monitoreo diario con procalcitonina acortó de forma segura la terapia ($-0{,}88\text{ días}$) mientras que la PCR fracasó.
- D) El ensayo **BLING III** confirmó que el meropenem continuo reduce la mortalidad a 90 d en un $15\%$ absoluto ($p < 0{,}001$) frente a cualquier otro antibiótico, anulando la necesidad de biomarcadores.
- E) En ADAPT-Sepsis, usar procalcitonina duplicó las recaídas de bacteriemia resistente a los 28 días.

<!-- practica-2026-11-26 -->
**Pregunta 6.** En la bacteriemia por *S. aureus* **sensible a meticilina**, el ensayo SNAP (*NEJM* 2026) mostró que la cefazolina:
- A) Fue inferior a la flucloxacilina en mortalidad.
- B) Fue no inferior en mortalidad a 90 días (15,0% vs 17,0%) y causó menos LRA (13,9% vs 19,6%).
- C) Solo puede usarse en bacteriemia no complicada.
- D) Aumentó las recaídas por efecto inóculo.
- E) Requiere asociarse con gentamicina.

**Pregunta 7.** En un análisis de BALANCE, una **procalcitonina alta al día 7** de una bacteriemia:
- A) Indicó que hay que extender a 14 días.
- B) Se asoció a más mortalidad, pero prolongar a 14 días no la mejoró.
- C) No tuvo asociación con mortalidad.
- D) Predijo recaída microbiológica.
- E) Indicó cambiar de antibiótico.

<details>
<summary>Ver respuestas y justificación tripartita (Preguntas 1–5)</summary>

1. **Respuesta correcta: C.** *Justificación:* (1) $\text{uCLcr}_{8\text{h}}\ 182\text{ mL/min}$ con trauma confirma ARC; en Ulldemolins 2026, $>75\%$ con ARC fallaron $4\times\text{MIC}$ y Beijer 2025 mostró que incluso infusiones de 3 h fallan en $\text{eGFR}>90$. (2) Con $\text{MIC } 8\text{ mg/L}$, la meta $4\times\text{MIC}$ ($32\text{ mg/L}$ libre constante) exige carga + dosis máxima continua + TDM (o cambio a agente de MIC menor si la exposición es inalcanzable). (3) Descarte: D invierte el hallazgo de sinistrina (no mide secreción tubular); E invierte la observación de vasopresores ($16{,}7\%$ vs $61\%$).
2. **Respuesta correcta: C.** *Justificación:* (1) Carga depende de $V_d$ expandido, nunca de creatinina. (2) Aldardeer (2024, $\text{HR } 0{,}588$) y Kuwana (2026, $94\%$ vs $61\%$ IPTW) muestran ventaja clara de no reducir dosis en las primeras $24\text{–}48\text{ h}$ de LRA transitoria; luego a las 48–72 h sí ajustar si persiste LRA para evitar neurotoxicidad por cefepime ($10\text{–}15\%$ en UCI cuando valle $>20\text{ mg/L}$). (3) Descarte: D invierte **ACORN 2023** (pip-tazo NO dio más LRA, cefepime dio más neurotoxicidad).
3. **Respuesta correcta: B.** *Justificación:* (1) Consenso Malbrán 2025 (Pasteran & Corso): sulbactam $9\text{ g/día}$ extiende SDD a CIM $16\text{–}32\text{ mg/L}$ frente a $33\%$ de error con $4\text{ g/día}$. (2) Descarte: A viola la advertencia Malbrán sobre Emblaveo®; C contradice **SSC 2026** (antianaeróbicos dirigidos, evitar rutinariamente en pulmón/ITU de bajo riesgo); D ignora inestabilidad térmica de meropenem ($>10\%$ pérdida $>6\text{–}8\text{ h}$); E desconoce el $\text{HR } 0{,}15$ del control de foco en *Pseudomonas* (`PMID 42787356`).
4. **Respuesta correcta: B.** *Justificación:* (1) El filtro de CKRT filtra fluconazol sin reabsorción tubular, requiriendo **$800\text{ mg} \to 800\text{ mg/d}$**; para vancomicina **Rybak 2020** fija carga $20\text{–}35\text{ mg/kg}$ peso real (máx $3.000\text{ mg}$) y mantenimiento por $\text{AUC}_{24}/\text{MIC}\ 400\text{–}600$. (2) Descarte: C induce nefrotoxicidad ($\text{valle}>20$); D es falsa (vanco es hidrofílica y se depura en filtros de alto flujo); E provoca precipitación e inactivación.
5. **Respuesta correcta: C.** *Justificación:* (1) **BALANCE 2025** (`n = 3.608`): $7$ vs $14\text{ d}$ no inferior ($14{,}5\%$ vs $16{,}1\%$); **ADAPT-Sepsis 2025** (`n = 2.760`): PCT redujo $-0{,}88\text{ d}$ ($10{,}7 \to 9{,}8\text{ d}$) de modo seguro mientras PCR fracasó. (2) Descarte: D exagera BLING III ($24{,}9\%$ vs $26{,}8\%$, adj OR $0{,}89$).

6. **Respuesta correcta: B.** *Justificación:* `PMID 42308484`. En *S. aureus* sensible a penicilina, la bencilpenicilina también fue no inferior y con menos LRA (`PMID 42309115`).
7. **Respuesta correcta: B.** *Justificación:* `PMID 42371622`: 21,6% vs 6,2% de mortalidad a 90 días; 7 días parecen suficientes para la mayoría, independientemente de la procalcitonina del día 7.

</details>

### 5.2 Casos "Detectá el error de guardia" (3 casos)

1. **Caso 1 — "Bomba continua perfecta, pero el antibiótico no hace nada a la noche":** Meropenem $6\text{ g/día}$ preparado a las 08:00 en una única bolsa de $250\text{ mL}$ para pasar en $24\text{ h}$ junto a la estufa/calefactor de la cama del paciente en verano ($28^\circ\text{C}$).
   - *Error oculto:* degradación térmica acelerada del anillo $\beta$-lactámico del meropenem ($>10\%$ tras $6\text{–}8\text{ h}$). Entre las 16:00 y las 08:00 del día siguiente el paciente recibe producto parcialmente degradado. *Solución:* fraccionar en **3 o 4 jeringas/bolsas de $50\text{ mL}$** cambiadas cada **$6\text{–}8\text{ h}$** (además reduce $52\%$ huella de carbono, **Gisbert-Mora 2026**).
2. **Caso 2 — "Empeoró la creatinina al ingreso y lo ajustamos de entrada; al día 3 mejoró el riñón pero siguió séptico y bacteriemia persistente":** Shock séptico urinario con $\text{Cr } 2{,}8\text{ mg/dL}$ al ingreso al que se le indica pip-tazo $2{,}25\text{ g}$ c/$12\text{ h}$ sin carga desde la primera dosis.
   - *Error oculto:* trampa inversa del ajuste renal precoz (**Aldardeer 2024; Kuwana 2026; Hughes 2022**). En las primeras $24\text{–}48\text{ h}$ coexistieron expansión masiva de $V_d$ y recuperación rápida de filtración tras fluidos/noradrenalina, dejando al paciente por debajo de $1\times\text{MIC}$ durante el pico de inóculo bacteriano. *Diferir ajuste renal $24\text{–}48\text{ h}$ tras dosis de carga plena.*
3. **Caso 3 — "Convulsión / mioclonías negativas al día 6 en LRA persistente por 'encefalopatía séptica'":** Paciente de $78\text{ años}$ que nunca recuperó diuresis (anuria persistente desde día 1), continuando con cefepime $2\text{ g}$ c/$8\text{ h}$ durante 6 días porque "al principio dijeron de no ajustarlo".
   - *Error oculto:* omitió la **segunda parte de la regla**: no reducir las primeras $24\text{–}48\text{ h}$, pero **sí ajustar estrictamente a partir de las 48–72 h si la LRA persiste**. El valle excedió $32\text{ mg/L}$ desencadenando **neurotoxicidad por cefepime** (presente en $10\text{–}15\%$ en UCI).

### 5.3 Flashcards de repaso rápido (6 tarjetas)
1. **¿Qué grupo de lipofílicos rompe la regla de "no ajustar en LRA"?** → **Fluoroquinolonas:** ciprofloxacina ($50\text{–}70\%$ renal) y levofloxacina ($67\text{–}87\%$ renal).
2. **¿Qué meta PK/PD óptima proponen Gatti & Pea (2024) para $\beta$-lactámicos en UCI?** → **$100\%\ fT > 4\text{–}5\times\text{MIC}$** (subexposición asocia fracaso $\text{OR } 26{,}08$; lograrla reduce resistencia $\text{OR } 0{,}06$).
3. **¿Cada cuántas horas debe cambiarse la infusión continua de meropenem?** → Cada **$6\text{–}8\text{ horas}$** por inestabilidad fisicoquímica ($>10\%$ pérdida a $>25^\circ\text{C}$); piperacilina-tazobactam y cefepime aguantan $24\text{ h}$.
4. **¿Qué demostró Aldardeer (2024) sobre diferir el ajuste renal $>24\text{ h}$ en LRA séptica?** → Redujo mortalidad hospitalaria (**$\text{HR } 0{,}588$**) y aceleró recuperación de LRA a 48 h (**$70{,}7\%$ vs $47{,}6\%$**).
5. **¿Qué es el ARC en Ulldemolins (2026) y cuál fue su impacto en pip-tazo?** → $\text{uCLcr}_{8\text{h}} > 130\text{ mL/min}$ ($43\%$ sepsis, $71{,}4\%$ trauma); pip-tazo falló incluso $<1\times\text{MIC}$ en $53\text{–}61\%$ y $>75\%$ falló $4\times\text{MIC}$.
6. **¿Qué esquema exige el fluconazol en CKRT y por qué?** → **$800\text{ mg}$ carga $\to 800\text{ mg/día}$**, porque el filtro carece de la reabsorción tubular del $80\%$ que ocurre en el riñón nativo.
7. **¿Qué mostró ASTARTÉ?** → Temocilina no inferior a carbapenémicos (74% vs 73% de éxito clínico) en bacteriemia por enterobacterias resistentes a cefalosporinas de 3ª generación (`PMID 42425122`).

---

## 6. Referencias Verificadas y Registro de Correcciones

### 6.1 Referencias verificadas
1. **Surviving Sepsis Campaign (SSC) Guidelines 2026.** International Guidelines for Management of Sepsis and Septic Shock. 2026. `PMID 41869847`.
2. **Abdul-Aziz MH et al. (BLING III Investigators).** Continuous vs intermittent $\beta$-lactam infusion in critically ill patients with sepsis. *JAMA*. 2024. `PMID 38864155`; y **metaanálisis Abdul-Aziz MH et al.** *JAMA*. 2024 (18 RCTs, $n=9.108$).
3. **Monti G et al. (MERCY Investigators).** Continuous vs intermittent meropenem in critically ill patients. *JAMA*. 2023. `PMID 37326473`.
4. **Gatti M, Pea F.** Pharmacokinetic/pharmacodynamic target attainment ($100\%\ fT > 4\text{–}5\times\text{MIC}$) of $\beta$-lactams in critically ill patients. *Crit Care*. 2024;28:123.
5. **Beijer G et al.** Early $\beta$-lactam target non-attainment after loading dose + 3-h extended infusion. *Crit Care*. 2025;29:208.
6. **Ulldemolins M et al.** Augmented renal clearance ($\text{uCLcr}_{8\text{h}}$), albumin binding, sinistrin limitation, and $\beta$-lactam underexposure in ICU. *Crit Care*. 2026. `DOI 10.1186/s13054-026-06239-8`.
7. **Aldardeer NF et al.** Deferred vs early renal dose adjustment of $\beta$-lactams in septic AKI. *Open Forum Infect Dis*. 2024. `PMID 38434610`.
8. **Kuwana T et al.** Initial 48-hour high-dose cefepime ($\ge 12\text{ g}$) in septic patients with acute kidney injury. *Antibiotics*. 2026;15:88.
9. **Hughes S et al.** Early renal recovery timeline in Gram-negative bloodstream infection with AKI. 2022.
10. **Hefny F et al.** Prevalence and risk factors of augmented renal clearance in critically ill patients. 2022.
11. **Tee Y et al.** Antimicrobial pharmacokinetics in critical illness: hydrophilic vs lipophilic and CRRT. 2025/2026. `PMID 41024947`.
12. **Rybak MJ et al.** Therapeutic monitoring of vancomycin for serious MRSA infections: revised consensus guideline (AUC/MIC $400\text{–}600$). *Am J Health Syst Pharm*. 2020.
13. **Qian ET et al. (ACORN Investigators).** Cefepime vs piperacillin-tazobactam in adults hospitalized with acute infection. *JAMA*. 2023.
14. **Daneman N et al. (BALANCE Investigators).** Antibiotic treatment for 7 versus 14 days in patients with bloodstream infections. *N Engl J Med*. 2025 (epub 2024).
15. **Dark P et al. (ADAPT-Sepsis Collaborators).** Biomarker-guided antibiotic duration (PCT vs CRP) in hospitalized adults with sepsis. *JAMA*. 2025.
16. **Rafiq et al. / Suberviola B et al.** Meta-analysis of PCT-guided de-escalation (2026) y cinética $\ge 70\%$ a 72 h (2012).
17. **Pak TR et al. (2023); Ku NS et al. (2025); Freund Y et al. (2024); PHANTASi (2018).** Timing of antibiotics in shock vs non-shock sepsis.
18. **Source control in *Pseudomonas aeruginosa* bloodstream infection.** 2026. `PMID 42787356`.
19. **Gisbert-Mora C et al.** Environmental carbon footprint reduction ($52\%$) with 50 mL continuous $\beta$-lactam infusion. 2026.
20. **ANLIS Malbrán — Pasteran F, Corso A.** Actualización en puntos de corte y esquemas terapéuticos para BGN multirresistentes (CRAB sulbactam $9\text{ g/d}$; advertencia sobre Emblaveo® vs ceftazidima-avibactam + aztreonam). 2025.

### 6.2 Registro de correcciones de auditoría (vinculado a `00-matriz-fuentes.md`)
- **Ítem #1 (BLING III vs MERCY):** Corregidas citas previas que atribuían BLING III a *NEJM 2023*: **BLING III** es Dulhunty et al., ***JAMA* 2024** (`PMID 38864155`), y **MERCY** es Monti et al., ***JAMA* 2023** (`PMID 37326473`).
- **Auditoría PK/PD — Quinolonas, Vancomicina y Fluconazol:** Corregida la simplificación de "todos los lipofílicos no se ajustan en riñón" (ciprofloxacina $50\text{–}70\%$ y levofloxacina $67\text{–}87\%$ exigen ajuste en LRA persistente); actualizado objetivo de vancomicina a **$\text{AUC}_{24}/\text{MIC}\ 400\text{–}600$** (**Rybak 2020**) con carga hasta $3.000\text{ mg}$; y destacada la inversión posológica de **fluconazol en CKRT ($800\text{ mg} \to 800\text{ mg/d}$)**.
- **Auditoría Microbiológica — ANLIS Malbrán 2025 & SSC 2026:** Incorporadas las reglas locales de **Pasteran & Corso** (sulbactam $9\text{ g/d}$ en CRAB; prohibición de extrapolar breakpoints de Emblaveo®) y el cambio de **SSC 2026** sobre cobertura antianaeróbica selectiva e infusión prolongada fuerte tras carga.
- **Auditoría ARC vs LRA temprana (Beijer 2025 / Ulldemolins 2026 / Aldardeer 2024 / Kuwana 2026):** Integrada la tensión clínica real: el $45\%$ falla temprano incluso tras carga + 3 h (mayormente por ARC, $\text{uCLcr}_{8\text{h}} > 130$), mientras en LRA inicial las primeras $24\text{–}48\text{ h}$ requieren dosis plenas diferidas y ajuste estricto a las $48\text{–}72\text{ h}$ si no recupera (evitando neurotoxicidad por cefepime).
