import React, { useMemo } from 'react';
import {
  ALTO,
  ANCHO,
  barrasSofa,
  cepilloGlicocalix,
  curvaConcentracion,
  curvaDosisRespuesta,
  curvaGlucemia,
  curvaPresionVolumen,
  curvaSobrevida,
  dopplerVenoso,
  grillaMonitor,
  mallaFibrina,
  ondaArterial,
  redCapilar,
} from '../engines/heroPaths';

/**
 * Cabecera ilustrada de cada modulo.
 *
 * Va detras del titulo, en el fondo del panel, sin competir con el texto. El
 * motivo cambia segun el modulo y en varios casos sale de la misma formula que
 * el contenido explica: la onda arterial del M05 es un Windkessel de verdad,
 * la del M09 es una concentracion-tiempo con su eliminacion monoexponencial, y
 * la del M19 son las anclas publicadas de la sobrevida post-alta.
 *
 * Es decorativo, asi que va con aria-hidden y sin capturar clics.
 */

type Motivo =
  | 'sofa'
  | 'endotipos'
  | 'glicocalix'
  | 'capilares'
  | 'arterial'
  | 'dosis'
  | 'doppler'
  | 'fibrina'
  | 'concentracion'
  | 'rinon'
  | 'sedacion'
  | 'entrenamiento'
  | 'reloj'
  | 'pulmon'
  | 'resistencia'
  | 'glucemia'
  | 'poblaciones'
  | 'sobrevida'
  | 'sistema';

const MOTIVO_POR_MODULO: Record<string, Motivo> = {
  M01: 'sofa',
  M02: 'endotipos',
  M03: 'glicocalix',
  M04: 'capilares',
  M05: 'arterial',
  M06: 'dosis',
  M07: 'doppler',
  M08: 'fibrina',
  M09: 'concentracion',
  M10: 'rinon',
  M11: 'sedacion',
  M12: 'entrenamiento',
  M14: 'reloj',
  M15: 'pulmon',
  M16: 'resistencia',
  M17: 'glucemia',
  M18: 'poblaciones',
  M19: 'sobrevida',
  M20: 'sistema',
};

const COLOR_POR_MOTIVO: Record<Motivo, string> = {
  sofa: '#3FD8C8',
  endotipos: '#9A87F5',
  glicocalix: '#3FD8C8',
  capilares: '#FF5C7A',
  arterial: '#FF5C7A',
  dosis: '#E9B44C',
  doppler: '#3FD8C8',
  fibrina: '#9A87F5',
  concentracion: '#E9B44C',
  rinon: '#3FD8C8',
  sedacion: '#9A87F5',
  entrenamiento: '#3FD8C8',
  reloj: '#E9B44C',
  pulmon: '#3FD8C8',
  resistencia: '#9A87F5',
  glucemia: '#E9B44C',
  poblaciones: '#9A87F5',
  sobrevida: '#FF5C7A',
  sistema: '#34D399',
};

const Trazo: React.FC<{ d: string; w?: number; o?: number; color: string }> = ({
  d,
  w = 1.6,
  o = 1,
  color,
}) => <path d={d} fill="none" stroke={color} strokeWidth={w} strokeOpacity={o} strokeLinecap="round" />;

function dibujar(motivo: Motivo, color: string): React.ReactNode {
  switch (motivo) {
    case 'arterial':
      return (
        <>
          <Trazo d={ondaArterial(9)} color={color} w={1.8} />
          <Trazo d={ondaArterial(9, 95, 42, { tau: 0.12 })} color={color} w={1.1} o={0.4} />
        </>
      );

    case 'concentracion':
      return (
        <>
          <Trazo d={curvaConcentracion(5)} color={color} w={1.8} />
          <path
            d={`M 0,${ALTO - 8 - 0.22 * (ALTO - 20)} L ${ANCHO},${ALTO - 8 - 0.22 * (ALTO - 20)}`}
            stroke={color}
            strokeWidth={1}
            strokeDasharray="5 6"
            strokeOpacity={0.55}
            fill="none"
          />
        </>
      );

    case 'pulmon':
      return (
        <>
          <Trazo d={curvaPresionVolumen(0)} color={color} w={1.8} />
          <Trazo d={curvaPresionVolumen(-6)} color={color} w={1.2} o={0.45} />
        </>
      );

    case 'sobrevida':
      return (
        <Trazo
          d={curvaSobrevida([
            [0, 100],
            [1, 91.3],
            [12, 76],
            [60, 57],
            [120, 48],
          ])}
          color={color}
          w={1.9}
        />
      );

    case 'dosis':
      return (
        <>
          <Trazo d={curvaDosisRespuesta(0.4, 2.2)} color={color} w={1.8} />
          <Trazo d={curvaDosisRespuesta(0.75, 1.6)} color={color} w={1.2} o={0.4} />
        </>
      );

    case 'doppler':
      return <Trazo d={dopplerVenoso(7, 1.6)} color={color} w={1.6} />;

    case 'glucemia':
      return (
        <>
          <rect
            x={0}
            y={ALTO - 8 - ((180 - 60) / 220) * (ALTO - 20)}
            width={ANCHO}
            height={((180 - 140) / 220) * (ALTO - 20)}
            fill={color}
            fillOpacity={0.1}
          />
          <Trazo d={curvaGlucemia()} color={color} w={1.7} />
        </>
      );

    case 'sofa':
      return (
        <>
          {barrasSofa([2, 3, 1, 4, 2, 3]).map((b, i) => (
            <rect
              key={i}
              x={b.x}
              y={b.y}
              width={b.w}
              height={b.h}
              rx={3}
              fill={color}
              fillOpacity={0.5}
            />
          ))}
        </>
      );

    case 'capilares':
      return (
        <>
          {redCapilar(70, 0.38).map((s, i) => (
            <path
              key={i}
              d={s.d}
              fill="none"
              stroke={color}
              strokeWidth={s.activo ? 1.7 : 1}
              strokeOpacity={s.activo ? 0.95 : 0.22}
              strokeLinecap="round"
            />
          ))}
        </>
      );

    case 'glicocalix':
      return (
        <>
          <path
            d={`M 0,${ALTO - 20} L ${ANCHO},${ALTO - 20}`}
            stroke={color}
            strokeWidth={2}
            strokeOpacity={0.8}
            fill="none"
          />
          {cepilloGlicocalix(90, 0.42, 0.66).map((p, i) => (
            <path
              key={i}
              d={p.d}
              fill="none"
              stroke={color}
              strokeWidth={1.3}
              strokeOpacity={p.intacto ? 0.85 : 0.3}
              strokeLinecap="round"
            />
          ))}
        </>
      );

    case 'fibrina':
      return (
        <>
          {mallaFibrina(55).map((d, i) => (
            <path key={i} d={d} fill="none" stroke={color} strokeWidth={1.1} strokeOpacity={0.7} />
          ))}
        </>
      );

    case 'endotipos':
      return (
        <>
          {Array.from({ length: 46 }, (_, i) => {
            const r1 = Math.abs(Math.sin(i * 17.3) * 9731.1) % 1;
            const r2 = Math.abs(Math.sin(i * 44.7) * 9731.1) % 1;
            const grupo = i % 2 === 0;
            const cx = grupo ? 120 + r1 * 380 : 700 + r1 * 400;
            const cy = 18 + r2 * (ALTO - 36);
            return (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r={grupo ? 4.5 : 3}
                fill={color}
                fillOpacity={grupo ? 0.55 : 0.3}
              />
            );
          })}
        </>
      );

    case 'rinon':
      return (
        <>
          {Array.from({ length: 16 }, (_, i) => {
            const x = 40 + i * 72;
            return (
              <path
                key={i}
                d={`M ${x},${ALTO - 12} C ${x + 16},${ALTO - 60} ${x - 16},${ALTO - 80} ${x + 8},${14}`}
                fill="none"
                stroke={color}
                strokeWidth={1.4}
                strokeOpacity={0.3 + 0.5 * Math.abs(Math.sin(i))}
                strokeLinecap="round"
              />
            );
          })}
        </>
      );

    case 'sedacion':
      return (
        <>
          <Trazo d={curvaConcentracion(6, 1.4, 70)} color={color} w={1.7} />
          <Trazo d={curvaConcentracion(6, 0.3, 70)} color={color} w={1.1} o={0.4} />
        </>
      );

    case 'reloj': {
      // Corrido a la derecha a propósito: en el centro la máscara lo apaga.
      const relojX = ANCHO * 0.78;
      return (
        <>
          {Array.from({ length: 24 }, (_, i) => {
            const ang = (i / 24) * Math.PI * 2 - Math.PI / 2;
            const cx = relojX;
            const cy = ALTO / 2;
            const r1 = 40;
            const r2 = i % 6 === 0 ? 54 : 48;
            return (
              <line
                key={i}
                x1={cx + Math.cos(ang) * r1}
                y1={cy + Math.sin(ang) * r1}
                x2={cx + Math.cos(ang) * r2}
                y2={cy + Math.sin(ang) * r2}
                stroke={color}
                strokeWidth={i % 6 === 0 ? 2 : 1.1}
                strokeOpacity={0.75}
              />
            );
          })}
          <circle cx={relojX} cy={ALTO / 2} r={54} fill="none" stroke={color} strokeWidth={1} strokeOpacity={0.3} />
          <line
            x1={relojX}
            y1={ALTO / 2}
            x2={relojX + 34}
            y2={ALTO / 2 - 20}
            stroke={color}
            strokeWidth={2.2}
            strokeOpacity={0.9}
            strokeLinecap="round"
          />
        </>
      );
    }

    case 'resistencia':
      return (
        <>
          {Array.from({ length: 10 }, (_, i) => {
            const x = 60 + i * 120;
            return (
              <g key={i}>
                <circle cx={x} cy={ALTO / 2} r={17} fill="none" stroke={color} strokeWidth={1.5} strokeOpacity={0.7} />
                <circle cx={x} cy={ALTO / 2} r={26} fill="none" stroke={color} strokeWidth={1} strokeOpacity={0.3} />
                <path
                  d={`M ${x - 7},${ALTO / 2} L ${x + 7},${ALTO / 2} M ${x + 3},${ALTO / 2 - 5} L ${x + 7},${ALTO / 2} L ${x + 3},${ALTO / 2 + 5}`}
                  stroke={color}
                  strokeWidth={1.6}
                  strokeOpacity={0.85}
                  fill="none"
                  strokeLinecap="round"
                />
              </g>
            );
          })}
        </>
      );

    case 'poblaciones':
      return (
        <>
          {[0, 1, 2, 3].map((k) => (
            <Trazo
              key={k}
              d={curvaDosisRespuesta(0.25 + k * 0.2, 1.4 + k * 0.5)}
              color={color}
              w={1.4}
              o={0.3 + k * 0.18}
            />
          ))}
        </>
      );

    case 'entrenamiento':
      return (
        <>
          {Array.from({ length: 36 }, (_, i) => {
            const col = i % 12;
            const fila = Math.floor(i / 12);
            return (
              <rect
                key={i}
                x={40 + col * 96}
                y={22 + fila * 30}
                width={70}
                height={18}
                rx={4}
                fill="none"
                stroke={color}
                strokeWidth={1.1}
                strokeOpacity={0.25 + 0.5 * Math.abs(Math.sin(i * 2.1))}
              />
            );
          })}
        </>
      );

    case 'sistema':
    default:
      return (
        <>
          {Array.from({ length: 26 }, (_, i) => {
            const h = 14 + Math.abs(Math.sin(i * 1.37)) * (ALTO - 42);
            return (
              <rect
                key={i}
                x={20 + i * 45}
                y={ALTO - 10 - h}
                width={22}
                height={h}
                rx={3}
                fill={color}
                fillOpacity={0.18 + 0.3 * Math.abs(Math.sin(i * 0.8))}
              />
            );
          })}
        </>
      );
  }
}

export const ModuleHero: React.FC<{ moduleId: string }> = ({ moduleId }) => {
  const motivo = MOTIVO_POR_MODULO[moduleId] ?? 'sistema';
  const color = COLOR_POR_MOTIVO[motivo];
  const contenido = useMemo(() => dibujar(motivo, color), [motivo, color]);
  const idGrad = `heroFade-${moduleId}`;

  // El lienzo es una banda de 10:1 y la cabecera es mucho más cuadrada: con
  // "slice" se vería solo el centro del dibujo. Estirando se ve entero, y a
  // esta opacidad la deformación vertical no se percibe.
  return (
    <svg
      viewBox={`0 0 ${ANCHO} ${ALTO}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.22,
      }}
    >
      <defs>
        {/* El título vive a la izquierda, así que el dibujo pesa a la derecha
            y se apaga hacia la izquierda y hacia abajo. */}
        <linearGradient id={idGrad} x1="1" y1="0" x2="0.1" y2="0.95">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.08" />
        </linearGradient>
        <mask id={`${idGrad}-mask`}>
          <rect x="0" y="0" width={ANCHO} height={ALTO} fill={`url(#${idGrad})`} />
        </mask>
      </defs>
      <g mask={`url(#${idGrad}-mask)`}>
        <path d={grillaMonitor(30)} stroke={color} strokeWidth={0.5} strokeOpacity={0.3} fill="none" />
        {contenido}
      </g>
    </svg>
  );
};
