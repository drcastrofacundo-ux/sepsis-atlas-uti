import React from 'react';
import {
  ALTO,
  ANCHO,
  ecgDerivacionII,
  grillaMonitor,
  ondaArterial,
  pletismografia,
  presionViaAerea,
} from '../engines/heroPaths';

/**
 * Fondo de la portada: un monitor de cabecera de UTI.
 *
 * Las cuatro trazas son las que uno mira al entrar a la unidad, apiladas como
 * en el monitor real y con los colores de convencion: ECG en verde, presion
 * arterial invasiva en rojo, pletismografia en celeste y presion en la via
 * aerea en amarillo.
 *
 * Cada una sale de su propia funcion en heroPaths: el ECG tiene P, QRS y T con
 * las proporciones del trazado normal, la arterial es un Windkessel con muesca
 * dicrota, y la curva del respirador tiene rampa, meseta y caida a la PEEP.
 *
 * Es decorativo: aria-hidden y sin capturar clics.
 */

// Alturas de cada carril dentro del lienzo apilado.
const CARRILES = 4;
const ALTO_TOTAL = ALTO * CARRILES;

const TRAZAS: Array<{ d: string; color: string; w: number }> = [
  { d: ecgDerivacionII(6), color: '#34D399', w: 2 },
  { d: ondaArterial(6, 118, 58), color: '#FF5C7A', w: 2 },
  { d: pletismografia(6), color: '#3FD8C8', w: 1.8 },
  { d: presionViaAerea(4), color: '#E9B44C', w: 1.8 },
];

export const HomeHero: React.FC = () => (
  <svg
    viewBox={`0 0 ${ANCHO} ${ALTO_TOTAL}`}
    preserveAspectRatio="none"
    aria-hidden="true"
    focusable="false"
    style={{
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      opacity: 0.2,
    }}
  >
    <defs>
      {/* El texto vive arriba a la izquierda: el monitor pesa a la derecha. */}
      <linearGradient id="homeHeroFade" x1="1" y1="0.1" x2="0" y2="0.9">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
        <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.72" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.05" />
      </linearGradient>
      <mask id="homeHeroMask">
        <rect x="0" y="0" width={ANCHO} height={ALTO_TOTAL} fill="url(#homeHeroFade)" />
      </mask>
    </defs>
    <g mask="url(#homeHeroMask)">
      <path
        d={grillaMonitor(30)}
        transform={`scale(1 ${CARRILES})`}
        stroke="#6F8BA8"
        strokeWidth={0.4}
        strokeOpacity={0.35}
        fill="none"
      />
      {TRAZAS.map((t, i) => (
        <g key={i} transform={`translate(0 ${i * ALTO})`}>
          <path
            d={t.d}
            fill="none"
            stroke={t.color}
            strokeWidth={t.w}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ))}
    </g>
  </svg>
);
