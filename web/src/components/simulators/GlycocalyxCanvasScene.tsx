import React, { useEffect, useRef, useState } from 'react';
import { Eye, EyeOff, Pause, Play } from 'lucide-react';
import {
  M03_HOTSPOTS,
  type M03Inputs,
  type M03Outputs,
} from '../../engines/m03Engine';

export interface ActiveControlHint {
  label: string;
  detail: string;
}

interface GlycocalyxCanvasSceneProps {
  inputs: M03Inputs;
  out: M03Outputs;
  selectedHotspotId: string;
  onSelectHotspot: (id: string) => void;
  activeControlHint?: ActiveControlHint | null;
}

interface RbcParticle {
  x: number;
  yFrac: number;
  yCurr: number;
  rx: number;
  ry: number;
  angle: number;
  tumbleRate: number;
  depth: number;
  phase: number;
}

interface NeutrophilParticle {
  x: number;
  y: number;
  r: number;
  rot: number;
  phase: number;
  arrestTimer: number;
  canArrest: boolean;
}

interface PlateletParticle {
  x: number;
  yFrac: number;
  yCurr: number;
  r: number;
  angle: number;
  spin: number;
  phase: number;
}

interface PlasmaTracer {
  x: number;
  yFrac: number;
  len: number;
  alpha: number;
}

interface LeakParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  isAlbumin: boolean;
}

interface ShedDebris {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rot: number;
  vRot: number;
  life: number;
  kind: 'hs' | 'ha' | 'alb';
}

interface NoBubble {
  x: number;
  y: number;
  vy: number;
  life: number;
  r: number;
}

const W = 1000;
const H = 580;
const MEM_Y = 408;
const MEM_BOT = 454;
const CLEFT_X = 580;
const PX_PER_UM = 115;

const SDC_X = [135, 290, 445, 645, 785, 920];
const GPC_X = [215, 390, 680, 860];
const CD44_X = [225, 510, 835];
const ADHESION_X = [175, 338, 492, 545, 622, 735, 892];
const HYDRO_ARROW_X = [125, 250, 385, 510, 650, 775, 900];
const SHEDDASE_X = [165, 315, 470, 650, 810, 910];

const ADSORBED_ALB: Array<[number, number]> = [
  [120, 0.45], [162, 0.72], [202, 0.34], [250, 0.66], [308, 0.5],
  [358, 0.78], [405, 0.4], [462, 0.62], [505, 0.35], [538, 0.75],
  [632, 0.46], [676, 0.74], [722, 0.38], [768, 0.65], [818, 0.48],
  [868, 0.72], [906, 0.36], [944, 0.58], [185, 0.85], [430, 0.84],
  [705, 0.86], [842, 0.82],
];

const ADSORBED_AT3: Array<[number, number]> = [
  [148, 0.82], [235, 0.76], [380, 0.68], [520, 0.8], [712, 0.75], [855, 0.82],
];

function clamp(v: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, v));
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export const GlycocalyxCanvasScene: React.FC<GlycocalyxCanvasSceneProps> = ({
  inputs,
  out,
  selectedHotspotId,
  onSelectHotspot,
  activeControlHint = null,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [hoveredHotspotId, setHoveredHotspotId] = useState<string | null>(null);

  const inputsRef = useRef(inputs);
  const outRef = useRef(out);
  const pausedRef = useRef(paused);
  const showOverlayRef = useRef(showOverlay);

  inputsRef.current = inputs;
  outRef.current = out;
  pausedRef.current = paused;
  showOverlayRef.current = showOverlay;

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const vis = {
      igc: outRef.current.igc,
      shear: inputsRef.current.shearStress,
      inflam: inputsRef.current.inflamacion,
      jv: outRef.current.jv,
      alb: inputsRef.current.albumina,
      enos: outRef.current.eNosPct,
      pc: inputsRef.current.pc,
      sigma: outRef.current.sigma,
      tera: outRef.current.tera,
    };

    const rbcs: RbcParticle[] = Array.from({ length: 14 }, (_, i) => {
      const depth = i % 3 === 0 ? 0.65 : i % 3 === 1 ? 0.84 : 1.0;
      const yFrac = 0.08 + ((i * 0.19) % 0.84);
      return {
        x: (i / 14) * (W + 140) - 70,
        yFrac,
        yCurr: 30 + yFrac * 150,
        rx: (20 + (i % 4) * 2.5) * depth,
        ry: (9.5 + (i % 3) * 1.1) * depth,
        angle: ((i % 5) - 2) * 0.08,
        tumbleRate: (i % 2 === 0 ? 1 : -1) * (0.4 + (i % 4) * 0.16),
        depth,
        phase: i * 1.37,
      };
    });

    const neutrophils: NeutrophilParticle[] = [
      { x: 180, y: 110, r: 22, rot: 0, phase: 0.4, arrestTimer: 0, canArrest: true },
      { x: 560, y: 82, r: 20, rot: 1.8, phase: 2.1, arrestTimer: 0, canArrest: true },
      { x: 870, y: 132, r: 21, rot: 3.5, phase: 4.3, arrestTimer: 0, canArrest: false },
    ];

    const platelets: PlateletParticle[] = Array.from({ length: 13 }, (_, i) => ({
      x: (i / 13) * (W + 100) - 50,
      yFrac: 0.12 + ((i * 0.23) % 0.84),
      yCurr: 40 + ((i * 27) % 140),
      r: 3.6 + (i % 3) * 0.9,
      angle: i * 0.9,
      spin: (i % 2 === 0 ? 1 : -1) * (1.2 + (i % 3) * 0.7),
      phase: i * 1.9,
    }));

    const tracers: PlasmaTracer[] = Array.from({ length: 44 }, (_, i) => ({
      x: (i / 44) * W,
      yFrac: 0.04 + ((i * 0.173) % 0.92),
      len: 16 + (i % 5) * 9,
      alpha: 0.09 + (i % 4) * 0.045,
    }));

    const leakParticles: LeakParticle[] = [];
    const shedDebris: ShedDebris[] = [];
    const noBubbles: NoBubble[] = [];

    let cssWidth = 1000;
    let cssHeight = 580;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      if (rect.width <= 0) return;
      cssWidth = rect.width;
      cssHeight = (rect.width * H) / W;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(cssWidth * dpr);
      canvas.height = Math.round(cssHeight * dpr);
      canvas.style.height = `${cssHeight}px`;
    };

    resizeCanvas();
    const ro = new ResizeObserver(resizeCanvas);
    ro.observe(container);

    const laminarVelocityAtY = (y: number, eslTopY: number, shear: number, t: number): number => {
      const topY = 14;
      const span = Math.max(60, eslTopY - topY);
      const rNorm = clamp((y - topY) / span, 0, 1);
      const parabolic = Math.max(0.12, 1 - 0.82 * rNorm * rNorm);
      const baseSpeed = 5 + Math.pow(Math.max(0.5, shear), 1.32) * 5.2;
      const stasisOsc = shear < 6 ? 1 + 0.38 * Math.sin(t * 2.2 + rNorm * 2) : 1;
      return baseSpeed * parabolic * stasisOsc;
    };

    const drawRbc = (c: CanvasRenderingContext2D, rbc: RbcParticle, shear: number, igc: number) => {
      c.save();
      c.translate(rbc.x, rbc.yCurr);
      const stretch = 1 + clamp((shear - 6) * 0.014, -0.08, 0.24);
      const squeeze = 1 / Math.sqrt(stretch);
      c.rotate(rbc.angle);
      c.scale(stretch, squeeze);

      const { rx, ry, depth } = rbc;
      const alpha = depth === 1 ? 0.94 : depth > 0.8 ? 0.72 : 0.45;
      c.globalAlpha = alpha;

      const bend = shear > 10 ? 2.4 : 0.7;
      c.beginPath();
      c.moveTo(-rx, 0);
      c.bezierCurveTo(-rx, -ry * 1.15, -rx * 0.35, -ry * 0.72 - bend, 0, -ry * 0.65 - bend);
      c.bezierCurveTo(rx * 0.35, -ry * 0.72 - bend, rx, -ry * 1.15, rx, 0);
      c.bezierCurveTo(rx, ry * 1.15, rx * 0.35, ry * 0.72 - bend * 0.3, 0, ry * 0.65 - bend * 0.3);
      c.bezierCurveTo(-rx * 0.35, ry * 0.72 - bend * 0.3, -rx, ry * 1.15, -rx, 0);
      c.closePath();

      const grad = c.createRadialGradient(-rx * 0.22, -ry * 0.25, rx * 0.08, 0, 0, rx * 1.05);
      grad.addColorStop(0, '#E8536D');
      grad.addColorStop(0.42, '#C33B52');
      grad.addColorStop(0.85, '#8A1F34');
      grad.addColorStop(1, '#581120');
      c.fillStyle = grad;
      c.fill();

      c.beginPath();
      c.ellipse(0, 0.5, rx * 0.46, ry * 0.36, 0, 0, Math.PI * 2);
      c.fillStyle = 'rgba(54, 9, 18, 0.68)';
      c.fill();

      c.beginPath();
      c.ellipse(-rx * 0.24, -ry * 0.46, rx * 0.32, ry * 0.18, -0.15, 0, Math.PI * 2);
      c.fillStyle = 'rgba(255, 195, 206, 0.35)';
      c.fill();

      if (igc < 0.45 && rbc.yCurr > MEM_Y - 88) {
        c.strokeStyle = 'rgba(255, 130, 152, 0.55)';
        c.lineWidth = 1.2;
        c.stroke();
      }
      c.restore();
    };

    const drawNeutrophil = (c: CanvasRenderingContext2D, n: NeutrophilParticle, rolling: boolean) => {
      c.save();
      c.translate(n.x, n.y);
      if (rolling) {
        c.scale(1.07, 0.93);
      }
      c.rotate(n.rot);

      const bodyGrad = c.createRadialGradient(-n.r * 0.25, -n.r * 0.25, 2, 0, 0, n.r);
      bodyGrad.addColorStop(0, 'rgba(225, 236, 255, 0.90)');
      bodyGrad.addColorStop(0.7, 'rgba(154, 179, 224, 0.68)');
      bodyGrad.addColorStop(1, 'rgba(110, 140, 198, 0.42)');
      c.beginPath();
      c.arc(0, 0, n.r, 0, Math.PI * 2);
      c.fillStyle = bodyGrad;
      c.fill();
      c.strokeStyle = rolling ? 'rgba(255, 148, 168, 0.85)' : 'rgba(200, 220, 250, 0.65)';
      c.lineWidth = 1.4;
      c.stroke();

      c.strokeStyle = rolling ? 'rgba(255, 130, 154, 0.7)' : 'rgba(190, 212, 245, 0.45)';
      c.lineWidth = 1.1;
      for (let k = 0; k < 12; k++) {
        const a = (k / 12) * Math.PI * 2;
        c.beginPath();
        c.moveTo(Math.cos(a) * (n.r - 1), Math.sin(a) * (n.r - 1));
        c.lineTo(Math.cos(a) * (n.r + 3), Math.sin(a) * (n.r + 3));
        c.stroke();
      }

      const lobes: Array<[number, number, number]> = [
        [-6.5, -4, 5.4],
        [6.5, -3.5, 5.0],
        [0, 6.2, 5.6],
      ];
      c.strokeStyle = 'rgba(72, 58, 138, 0.8)';
      c.lineWidth = 2;
      c.beginPath();
      c.moveTo(lobes[0][0], lobes[0][1]);
      c.lineTo(lobes[1][0], lobes[1][1]);
      c.lineTo(lobes[2][0], lobes[2][1]);
      c.stroke();

      for (const [lx, ly, lr] of lobes) {
        c.beginPath();
        c.arc(lx, ly, lr, 0, Math.PI * 2);
        c.fillStyle = 'rgba(84, 67, 166, 0.86)';
        c.fill();
      }

      c.fillStyle = 'rgba(233, 180, 76, 0.55)';
      for (let g = 0; g < 6; g++) {
        const ga = g * 1.05 + 0.3;
        c.beginPath();
        c.arc(Math.cos(ga) * (n.r * 0.62), Math.sin(ga) * (n.r * 0.62), 1.3, 0, Math.PI * 2);
        c.fill();
      }
      c.restore();
    };

    const drawPlatelet = (c: CanvasRenderingContext2D, p: PlateletParticle, activated: boolean) => {
      c.save();
      c.translate(p.x, p.yCurr);
      c.rotate(p.angle);
      if (activated) {
        c.strokeStyle = 'rgba(236, 240, 250, 0.82)';
        c.lineWidth = 1.1;
        for (let k = 0; k < 6; k++) {
          const a = (k / 6) * Math.PI * 2 + p.phase;
          c.beginPath();
          c.moveTo(0, 0);
          c.lineTo(Math.cos(a) * (p.r * 2.3), Math.sin(a) * (p.r * 2.3));
          c.stroke();
        }
      }
      c.beginPath();
      c.ellipse(0, 0, p.r * 1.35, p.r * 0.78, 0, 0, Math.PI * 2);
      c.fillStyle = activated ? 'rgba(255, 224, 178, 0.92)' : 'rgba(216, 222, 236, 0.78)';
      c.fill();
      c.beginPath();
      c.arc(0, 0, p.r * 0.4, 0, Math.PI * 2);
      c.fillStyle = 'rgba(130, 146, 175, 0.85)';
      c.fill();
      c.restore();
    };

    const drawGagChain = (
      c: CanvasRenderingContext2D,
      baseX: number,
      baseY: number,
      fullLen: number,
      igc: number,
      shear: number,
      color: string,
      width: number,
      phase: number,
      t: number,
      withSulfates: boolean
    ) => {
      const len = fullLen * (0.2 + 0.8 * igc);
      const steps = 8;
      const dy = len / steps;
      const leanMax = (shear / 25) * 70 * (0.28 + 0.72 * igc);
      const swayFreq = 1.1 + shear * 0.11;
      const swayAmp = (4 + (shear / 25) * 5.5) * (0.4 + 0.6 * igc);

      c.save();
      c.beginPath();
      c.moveTo(baseX, baseY);

      const pts: Array<[number, number]> = [[baseX, baseY]];
      for (let i = 1; i <= steps; i++) {
        const frac = i / steps;
        const bend = leanMax * frac * frac;
        const wave = Math.sin(t * swayFreq + phase - frac * 3.4) * swayAmp * frac;
        const localWiggle = Math.sin(phase + i * 1.15) * 4.2;
        const px = baseX + bend + wave + localWiggle;
        const py = baseY - dy * i;
        pts.push([px, py]);
      }

      for (let i = 1; i < pts.length; i++) {
        const [x0, y0] = pts[i - 1];
        const [x1, y1] = pts[i];
        const mx = (x0 + x1) / 2;
        const my = (y0 + y1) / 2;
        c.quadraticCurveTo(x0, y0, mx, my);
      }
      const last = pts[pts.length - 1];
      c.lineTo(last[0], last[1]);

      c.strokeStyle = color;
      c.lineWidth = width;
      c.lineCap = 'round';
      c.globalAlpha = 0.35 + 0.62 * igc;
      c.stroke();

      if (withSulfates) {
        c.fillStyle = color;
        for (let i = 2; i < pts.length; i += 2) {
          c.beginPath();
          c.arc(pts[i][0], pts[i][1], 2.2, 0, Math.PI * 2);
          c.fill();
        }
      }
      c.restore();
    };

    const drawHexagon = (c: CanvasRenderingContext2D, x: number, y: number, r: number) => {
      c.beginPath();
      for (let k = 0; k < 6; k++) {
        const a = (k / 6) * Math.PI * 2 - Math.PI / 6;
        const px = x + Math.cos(a) * r;
        const py = y + Math.sin(a) * r;
        if (k === 0) c.moveTo(px, py);
        else c.lineTo(px, py);
      }
      c.closePath();
    };

    const renderFrame = (tSec: number, physDt: number, morphDt: number) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const sx = (cssWidth * dpr) / W;
      const sy = (cssHeight * dpr) / H;
      ctx.setTransform(sx, 0, 0, sy, 0, 0);

      const smooth = clamp(morphDt * 4.5, 0.04, 0.35);
      vis.igc = lerp(vis.igc, outRef.current.igc, smooth);
      vis.shear = lerp(vis.shear, inputsRef.current.shearStress, smooth);
      vis.inflam = lerp(vis.inflam, inputsRef.current.inflamacion, smooth);
      vis.jv = lerp(vis.jv, outRef.current.jv, smooth);
      vis.alb = lerp(vis.alb, inputsRef.current.albumina, smooth);
      vis.enos = lerp(vis.enos, outRef.current.eNosPct, smooth);
      vis.pc = lerp(vis.pc, inputsRef.current.pc, smooth);
      vis.sigma = lerp(vis.sigma, outRef.current.sigma, smooth);
      vis.tera = lerp(vis.tera, outRef.current.tera, smooth);

      const gagHeightPx = clamp((0.12 + 1.98 * vis.igc) * PX_PER_UM, 24, 240);
      const eslTopY = MEM_Y - gagHeightPx;
      const hydroExtraGap = clamp((vis.pc - 18) * 0.28, 0, 12);
      const cleftGap = 5 + clamp(vis.jv * 0.34, 0, 30) + hydroExtraGap;
      const inflamNorm = clamp(vis.inflam / 100, 0, 1);
      const showLbl = showOverlayRef.current;

      // 1. Fondo Lumen & Intersticio
      const lumenGrad = ctx.createLinearGradient(0, 0, 0, MEM_Y);
      lumenGrad.addColorStop(0, '#07111F');
      lumenGrad.addColorStop(0.55, '#0B182B');
      lumenGrad.addColorStop(1, inflamNorm > 0.55 ? '#171426' : '#0D1E34');
      ctx.fillStyle = lumenGrad;
      ctx.fillRect(0, 0, W, MEM_Y);

      const intGrad = ctx.createLinearGradient(0, MEM_BOT, 0, H);
      intGrad.addColorStop(0, '#0B1422');
      intGrad.addColorStop(1, vis.jv > 45 ? '#1A1120' : '#070D16');
      ctx.fillStyle = intGrad;
      ctx.fillRect(0, MEM_BOT, W, H - MEM_BOT);

      // Zona ESL translúcida
      const eslGrad = ctx.createLinearGradient(0, eslTopY - 12, 0, MEM_Y);
      eslGrad.addColorStop(0, `rgba(63, 216, 200, ${(0.015 + vis.igc * 0.08).toFixed(3)})`);
      eslGrad.addColorStop(1, `rgba(63, 216, 200, ${(0.04 + vis.igc * 0.12).toFixed(3)})`);
      ctx.fillStyle = eslGrad;
      ctx.fillRect(68, eslTopY, W - 82, gagHeightPx);

      ctx.save();
      ctx.beginPath();
      for (let x = 68; x <= W - 14; x += 24) {
        const wy = eslTopY + Math.sin(tSec * 1.4 + x * 0.016) * (2.5 + vis.igc * 3);
        if (x === 68) ctx.moveTo(x, wy);
        else ctx.lineTo(x, wy);
      }
      ctx.strokeStyle =
        vis.igc > 0.65
          ? 'rgba(63, 216, 200, 0.36)'
          : vis.igc > 0.38
            ? 'rgba(233, 180, 76, 0.36)'
            : 'rgba(255, 92, 122, 0.42)';
      ctx.setLineDash([6, 6]);
      ctx.lineWidth = 1.25;
      ctx.stroke();
      ctx.restore();

      // 2. Trazadores de flujo laminar de Poiseuille
      for (const tr of tracers) {
        const yPos = 18 + tr.yFrac * Math.max(70, eslTopY - 26);
        const speed = laminarVelocityAtY(yPos, eslTopY, vis.shear, tSec);
        tr.x += speed * physDt;
        if (tr.x > W + 40) tr.x = -tr.len - 10;

        ctx.beginPath();
        ctx.moveTo(tr.x, yPos);
        ctx.lineTo(tr.x + tr.len * (0.55 + vis.shear / 25), yPos);
        ctx.strokeStyle =
          vis.shear < 6
            ? `rgba(233, 180, 76, ${(tr.alpha * 0.9).toFixed(3)})`
            : `rgba(110, 212, 232, ${tr.alpha.toFixed(3)})`;
        ctx.lineWidth = 1.1;
        ctx.stroke();
      }

      // Regla vertical calibrada 0,0 - 2,0 um
      ctx.save();
      ctx.strokeStyle = '#1E344D';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(46, MEM_Y);
      ctx.lineTo(46, MEM_Y - 2 * PX_PER_UM);
      ctx.stroke();

      ctx.fillStyle = '#6C819B';
      ctx.font = '10px "IBM Plex Mono", monospace';
      ctx.textAlign = 'right';
      [0, 0.5, 1.0, 1.5, 2.0].forEach((um) => {
        const y = MEM_Y - um * PX_PER_UM;
        ctx.beginPath();
        ctx.moveTo(42, y);
        ctx.lineTo(50, y);
        ctx.stroke();
        ctx.fillText(um.toFixed(1), 38, y + 3.5);
      });
      ctx.textAlign = 'center';
      ctx.fillText('µm', 46, MEM_Y - 2 * PX_PER_UM - 10);
      ctx.restore();

      if (showLbl) {
        ctx.save();
        const arrowYs = [32, 56, 80, 104, 128];
        arrowYs.forEach((ay, idx) => {
          if (ay >= eslTopY - 12) return;
          const v = laminarVelocityAtY(ay, eslTopY, vis.shear, tSec);
          const len = clamp(v * 0.34, 14, 136);
          const alpha = 0.52 - idx * 0.07;
          ctx.strokeStyle = vis.shear < 6 ? `rgba(233, 180, 76, ${alpha})` : `rgba(63, 216, 200, ${alpha})`;
          ctx.fillStyle = ctx.strokeStyle;
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          ctx.moveTo(74, ay);
          ctx.lineTo(74 + len, ay);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(74 + len, ay);
          ctx.lineTo(74 + len - 6, ay - 3.5);
          ctx.lineTo(74 + len - 6, ay + 3.5);
          ctx.closePath();
          ctx.fill();
        });
        ctx.fillStyle = vis.shear < 6 ? '#E9B44C' : '#3FD8C8';
        ctx.font = '10.5px "IBM Plex Mono", monospace';
        ctx.textAlign = 'left';
        ctx.fillText(
          vis.shear < 6
            ? `ESTASIS / FLUJO LENTO · τ_w ${vis.shear.toFixed(1)} dyn/cm²`
            : `PERFIL POISEUILLE LAMINAR · τ_w ${vis.shear.toFixed(1)} dyn/cm²`,
          224,
          36
        );

        // Vectores verticales de Presión Hidrostática Capilar (P_c)
        const hydroLen = clamp(12 + ((vis.pc - 10) / 35) * 42, 12, 54);
        const hydroColor = vis.pc >= 30 ? '#FF5C7A' : vis.pc >= 24 ? '#E9B44C' : '#4FA9F7';
        const hydroAlpha = clamp(0.38 + ((vis.pc - 10) / 35) * 0.55, 0.38, 0.93);
        ctx.strokeStyle = hydroColor;
        ctx.fillStyle = hydroColor;
        ctx.globalAlpha = hydroAlpha;
        ctx.lineWidth = 1.6 + ((vis.pc - 10) / 35) * 1.4;
        HYDRO_ARROW_X.forEach((hx) => {
          const tipY = MEM_Y - 12;
          const startY = tipY - hydroLen;
          ctx.beginPath();
          ctx.moveTo(hx, startY);
          ctx.lineTo(hx, tipY - 5);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(hx, tipY);
          ctx.lineTo(hx - 4.2, tipY - 7);
          ctx.lineTo(hx + 4.2, tipY - 7);
          ctx.closePath();
          ctx.fill();
        });
        ctx.font = '10px "IBM Plex Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`P_c ${Math.round(vis.pc)} mmHg ↓`, CLEFT_X, MEM_Y - hydroLen - 20);
        ctx.restore();
      }

      // 3. Eritrocitos plano de fondo
      for (const rbc of rbcs) {
        const cflClearance = 18 + vis.igc * 22;
        const maxAllowedY = clamp(eslTopY - cflClearance + (1 - vis.igc) * 44, 65, MEM_Y - 26);
        const targetY = 26 + rbc.yFrac * Math.max(45, maxAllowedY - 26);
        rbc.yCurr = lerp(rbc.yCurr, targetY, clamp(physDt * 2.2, 0, 0.18));

        const speed = laminarVelocityAtY(rbc.yCurr, eslTopY, vis.shear, tSec) * (0.72 + rbc.depth * 0.34);
        rbc.x += speed * physDt;
        if (rbc.x > W + 70) {
          rbc.x = -70;
          rbc.yCurr = targetY;
        }
        rbc.angle = Math.sin(tSec * rbc.tumbleRate + rbc.phase) * (vis.shear < 6 ? 0.36 : 0.14);

        if (rbc.depth < 0.8) {
          drawRbc(ctx, rbc, vis.shear, vis.igc);
        }
      }

      // 4. Polímero de Hialuronano
      if (vis.igc > 0.25) {
        ctx.save();
        ctx.beginPath();
        for (let x = 120; x <= 930; x += 28) {
          const hy =
            eslTopY +
            26 +
            Math.sin(tSec * 1.1 + x * 0.02) * 16 +
            Math.cos(tSec * 0.75 + x * 0.009) * 8;
          if (x === 120) ctx.moveTo(x, hy);
          else ctx.lineTo(x, hy);
        }
        ctx.strokeStyle = 'rgba(79, 169, 247, 0.22)';
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.stroke();

        ctx.strokeStyle = `rgba(79, 169, 247, ${(0.18 + vis.igc * 0.72).toFixed(3)})`;
        ctx.lineWidth = 3.0;
        ctx.stroke();
        ctx.restore();
      }

      // 5. Bosque dinámico de Heparán Sulfato + Condroitín Sulfato (32 cadenas)
      SDC_X.forEach((sxPos, i) => {
        drawGagChain(ctx, sxPos - 14, MEM_Y - 36, 205 + ((i * 19) % 28), vis.igc, vis.shear, '#3FD8C8', 2.8, i * 1.3, tSec, true);
        drawGagChain(ctx, sxPos + 12, MEM_Y - 36, 186 + ((i * 23) % 30), vis.igc, vis.shear, '#3FD8C8', 2.4, i * 1.3 + 2.1, tSec, true);
        drawGagChain(ctx, sxPos - 23, MEM_Y - 30, 128 + ((i * 17) % 22), vis.igc, vis.shear, '#66E7D6', 3.1, i * 2.2 + 0.9, tSec, false);
        drawGagChain(ctx, sxPos + 23, MEM_Y - 30, 118 + ((i * 13) % 24), vis.igc, vis.shear, '#66E7D6', 2.8, i * 2.2 + 3.1, tSec, false);
      });

      GPC_X.forEach((gxPos, i) => {
        drawGagChain(ctx, gxPos + 5, MEM_Y - 22, 198 + ((i * 29) % 26), vis.igc, vis.shear, '#3FD8C8', 2.5, i * 1.7 + 0.5, tSec, true);
        drawGagChain(ctx, gxPos + 17, MEM_Y - 22, 164 + ((i * 15) % 22), vis.igc, vis.shear, '#4ADFD0', 2.1, i * 1.7 + 2.7, tSec, true);
      });

      // Albúmina y Antitrombina III adsorbidas (cantidad proporcional a albúmina sérica)
      const albRatio = clamp((vis.alb - 1.2) / (4.8 - 1.2), 0, 1);
      const visibleAlbCount = Math.max(2, Math.round(2 + albRatio * (ADSORBED_ALB.length - 2)));
      const albOpacity = clamp((0.28 + albRatio * 0.68) * Math.pow(vis.igc, 0.9), 0.14, 0.95);
      const albScale = 0.82 + albRatio * 0.32;
      ADSORBED_ALB.slice(0, visibleAlbCount).forEach(([ax, fracH], idx) => {
        const ay = MEM_Y - 24 - fracH * (gagHeightPx - 36) + Math.sin(tSec * 1.6 + idx) * 2.4;
        const driftX = (vis.shear / 25) * 28 * fracH;
        ctx.save();
        ctx.globalAlpha = albOpacity;
        ctx.beginPath();
        ctx.ellipse(ax + driftX, ay, 7.6 * albScale, 5.6 * albScale, 0.15, 0, Math.PI * 2);
        ctx.fillStyle = '#E9B44C';
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(ax + driftX - 2, ay - 1.5, 2.7 * albScale, 1.9 * albScale, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#FFE3A3';
        ctx.fill();
        ctx.restore();
      });

      const atOpacity = clamp(Math.pow(vis.igc, 1.35), 0.05, 0.94);
      ADSORBED_AT3.forEach(([tx, fracH], idx) => {
        const ty = MEM_Y - 28 - fracH * (gagHeightPx - 40) + Math.cos(tSec * 1.4 + idx) * 2.2;
        const driftX = (vis.shear / 25) * 30 * fracH;
        ctx.save();
        ctx.globalAlpha = atOpacity;
        drawHexagon(ctx, tx + driftX, ty, 8.8);
        ctx.fillStyle = '#F3CE7E';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(tx + driftX, ty, 2.9, 0, Math.PI * 2);
        ctx.fillStyle = '#6B4E12';
        ctx.fill();
        ctx.restore();
      });

      // Enzimas sheddasas (MMP-9 / HPA-1) clivando las puntas del glicocálix cuando sube inflamación
      if (inflamNorm > 0.2) {
        const activeSheddases = Math.min(SHEDDASE_X.length, Math.max(1, Math.round(inflamNorm * SHEDDASE_X.length)));
        for (let si = 0; si < activeSheddases; si++) {
          const sx = SHEDDASE_X[si] + Math.sin(tSec * 1.4 + si * 1.7) * 18;
          const sy = clamp(eslTopY + 8 + Math.cos(tSec * 1.8 + si) * 14, 48, MEM_Y - 22);
          const bite = 0.22 + Math.abs(Math.sin(tSec * 5.2 + si * 1.3)) * 0.44;
          ctx.save();
          ctx.translate(sx, sy);
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.arc(0, 0, 8.5, bite, Math.PI * 2 - bite);
          ctx.closePath();
          ctx.fillStyle = inflamNorm > 0.6 ? '#FF5C7A' : '#F472B6';
          ctx.fill();
          ctx.beginPath();
          ctx.arc(2, -3.5, 1.4, 0, Math.PI * 2);
          ctx.fillStyle = '#07111F';
          ctx.fill();
          ctx.restore();
        }
      }

      // Shedding de fragmentos al plasma cuando sube inflamación
      if (physDt > 0 && inflamNorm > 0.2 && shedDebris.length < Math.round(inflamNorm * 28)) {
        if (Math.random() < inflamNorm * 0.45) {
          const pick = Math.random();
          shedDebris.push({
            x: 110 + Math.random() * 820,
            y: eslTopY + Math.random() * Math.max(20, gagHeightPx * 0.6),
            vx: 36 + vis.shear * 4.5 + Math.random() * 30,
            vy: -16 - Math.random() * 24,
            rot: Math.random() * Math.PI * 2,
            vRot: (Math.random() - 0.5) * 3.2,
            life: 0,
            kind: pick < 0.45 ? 'hs' : pick < 0.75 ? 'ha' : 'alb',
          });
        }
      }

      for (let i = shedDebris.length - 1; i >= 0; i--) {
        const d = shedDebris[i];
        d.life += physDt;
        d.x += d.vx * physDt;
        d.y += d.vy * physDt;
        if (physDt > 0) d.vy *= 0.97;
        d.rot += d.vRot * physDt;
        if (d.life > 4.2 || d.x > W + 30 || d.y < 12) {
          shedDebris.splice(i, 1);
          continue;
        }
        const a = Math.sin(Math.min(1, d.life / 4.2) * Math.PI) * 0.85;
        ctx.save();
        ctx.translate(d.x, d.y);
        ctx.rotate(d.rot);
        ctx.globalAlpha = a;
        if (d.kind === 'alb') {
          ctx.beginPath();
          ctx.ellipse(0, 0, 5.5, 4.0, 0, 0, Math.PI * 2);
          ctx.fillStyle = '#E9B44C';
          ctx.fill();
        } else {
          ctx.strokeStyle = d.kind === 'hs' ? '#FF5C7A' : '#4FA9F7';
          ctx.lineWidth = 2.1;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(-10, 0);
          ctx.quadraticCurveTo(0, -6, 10, 2);
          ctx.stroke();
        }
        ctx.restore();
      }

      // 6. Bicapa endotelial, núcleos, actina, VE-cadherina y moléculas de adhesión
      const cleftLeft = CLEFT_X - cleftGap / 2;
      const cleftRight = CLEFT_X + cleftGap / 2;

      const drawEndothelialSegment = (x0: number, x1: number, nucleusX: number) => {
        const segW = Math.max(0, x1 - x0);
        const cytoGrad = ctx.createLinearGradient(0, MEM_Y, 0, MEM_BOT);
        cytoGrad.addColorStop(0, '#182D46');
        cytoGrad.addColorStop(1, '#0F1F32');
        ctx.fillStyle = cytoGrad;
        ctx.fillRect(x0, MEM_Y, segW, MEM_BOT - MEM_Y);

        ctx.strokeStyle = 'rgba(110, 92, 201, 0.34)';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(x0 + 8, MEM_Y + 26);
        ctx.lineTo(x1 - 8, MEM_Y + 26);
        ctx.moveTo(x0 + 12, MEM_Y + 34);
        ctx.lineTo(x1 - 12, MEM_Y + 34);
        ctx.stroke();

        ctx.save();
        ctx.beginPath();
        ctx.ellipse(nucleusX, MEM_Y + 25, 58, 11.5, 0, 0, Math.PI * 2);
        const nucGrad = ctx.createRadialGradient(nucleusX - 12, MEM_Y + 22, 4, nucleusX, MEM_Y + 25, 58);
        nucGrad.addColorStop(0, '#2B4A72');
        nucGrad.addColorStop(1, '#152A44');
        ctx.fillStyle = nucGrad;
        ctx.fill();
        ctx.strokeStyle = 'rgba(127, 168, 214, 0.38)';
        ctx.lineWidth = 1.1;
        ctx.stroke();
        ctx.restore();

        for (let x = x0 + 9; x < x1 - 7; x += 15) {
          ctx.fillStyle = inflamNorm > 0.6 ? '#6E4C6A' : '#3B5D86';
          ctx.beginPath();
          ctx.arc(x, MEM_Y + 4.5, 4.1, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = '#244162';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(x - 1.5, MEM_Y + 8.5);
          ctx.lineTo(x - 1.5, MEM_Y + 14.5);
          ctx.moveTo(x + 1.5, MEM_Y + 8.5);
          ctx.lineTo(x + 1.5, MEM_Y + 14.5);
          ctx.stroke();

          ctx.fillStyle = '#314F73';
          ctx.beginPath();
          ctx.arc(x, MEM_BOT - 4.5, 4.1, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.moveTo(x - 1.5, MEM_BOT - 8.5);
          ctx.lineTo(x - 1.5, MEM_BOT - 14.5);
          ctx.moveTo(x + 1.5, MEM_BOT - 8.5);
          ctx.lineTo(x + 1.5, MEM_BOT - 14.5);
          ctx.stroke();
        }
      };

      drawEndothelialSegment(0, cleftLeft, 245);
      drawEndothelialSegment(cleftRight, W, 805);

      if (inflamNorm > 0.35) {
        ctx.fillStyle = `rgba(255, 92, 122, ${(inflamNorm * 0.45).toFixed(3)})`;
        ctx.fillRect(0, MEM_Y - 2, cleftLeft, 3);
        ctx.fillRect(cleftRight, MEM_Y - 2, W - cleftRight, 3);
      }

      ctx.save();
      const veSeparated = cleftGap > 10;
      const veColor = veSeparated ? '#FF5C7A' : '#7FA8D6';
      ctx.strokeStyle = veColor;
      ctx.fillStyle = veColor;
      ctx.lineWidth = 2.4;
      [MEM_Y + 14, MEM_Y + 26, MEM_Y + 37].forEach((vy) => {
        if (!veSeparated) {
          ctx.beginPath();
          ctx.moveTo(cleftLeft - 2, vy);
          ctx.lineTo(cleftRight + 2, vy);
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(CLEFT_X, vy, 2.8, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.moveTo(cleftLeft - 2, vy);
          ctx.lineTo(cleftLeft + 5, vy);
          ctx.moveTo(cleftRight + 2, vy);
          ctx.lineTo(cleftRight - 5, vy);
          ctx.stroke();
        }
      });
      ctx.restore();

      // Exposición de ICAM-1 / P-selectina en membrana desnuda
      const adhesionVisibility = clamp((0.7 - vis.igc) * 1.8, 0.12, 0.95);
      ADHESION_X.forEach((ax) => {
        if (Math.abs(ax - CLEFT_X) < cleftGap) return;
        ctx.save();
        ctx.globalAlpha = adhesionVisibility;
        ctx.strokeStyle = vis.igc < 0.55 ? '#FF7D93' : '#4C6C8F';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(ax, MEM_Y + 2);
        ctx.lineTo(ax, MEM_Y - 14);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(ax, MEM_Y - 16, 3.2, 0, Math.PI * 2);
        ctx.fillStyle = vis.igc < 0.55 ? '#FF5C7A' : '#6C819B';
        ctx.fill();
        ctx.restore();
      });

      // Cores transmembrana Sindecano-1, CD44 y Glipicano-1 / eNOS
      SDC_X.forEach((x) => {
        ctx.save();
        ctx.fillStyle = '#8A76EC';
        ctx.beginPath();
        ctx.roundRect(x - 4, MEM_Y - 38, 8, MEM_BOT - MEM_Y + 46, 4);
        ctx.fill();
        ctx.strokeStyle = '#6E5CC9';
        ctx.lineWidth = 2.1;
        ctx.beginPath();
        ctx.moveTo(x, MEM_BOT + 4);
        ctx.lineTo(x - 11, MEM_BOT + 14);
        ctx.moveTo(x, MEM_BOT + 4);
        ctx.lineTo(x + 11, MEM_BOT + 14);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x, MEM_Y - 40, 5.2, 0, Math.PI * 2);
        ctx.fillStyle = '#B6A8FF';
        ctx.fill();
        ctx.restore();
      });

      CD44_X.forEach((x) => {
        ctx.save();
        ctx.fillStyle = '#2F6FA8';
        ctx.beginPath();
        ctx.roundRect(x - 4.5, MEM_Y - 6, 9, MEM_BOT - MEM_Y + 10, 3);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x, MEM_Y - 10, 5.2, 0, Math.PI * 2);
        ctx.fillStyle = '#4FA9F7';
        ctx.fill();
        ctx.restore();
      });

      GPC_X.forEach((x) => {
        ctx.save();
        ctx.beginPath();
        ctx.ellipse(x, MEM_Y + 7, 22, 7.5, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#264972';
        ctx.fill();
        ctx.strokeStyle = '#7C6ADB';
        ctx.lineWidth = 2.3;
        ctx.beginPath();
        ctx.moveTo(x, MEM_Y + 4);
        ctx.lineTo(x, MEM_Y - 12);
        ctx.lineTo(x + 6, MEM_Y - 19);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x + 6, MEM_Y - 22, 6.8, 0, Math.PI * 2);
        ctx.fillStyle = '#B6A8FF';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x - 13, MEM_Y + 7, 3.3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(52, 211, 153, ${(0.2 + (vis.enos / 100) * 0.8).toFixed(2)})`;
        ctx.fill();
        ctx.restore();

        if (physDt > 0 && vis.enos > 28 && Math.random() < (vis.enos / 100) * 0.08 && noBubbles.length < 24) {
          noBubbles.push({
            x: x - 13 + (Math.random() - 0.5) * 8,
            y: MEM_Y + 4,
            vy: -14 - Math.random() * 14,
            life: 0,
            r: 2 + Math.random() * 1.8,
          });
        }
      });

      for (let i = noBubbles.length - 1; i >= 0; i--) {
        const b = noBubbles[i];
        b.life += physDt;
        b.y += b.vy * physDt;
        b.x += vis.shear * 0.8 * physDt;
        if (b.life > 1.8) {
          noBubbles.splice(i, 1);
          continue;
        }
        ctx.save();
        ctx.globalAlpha = (1 - b.life / 1.8) * 0.65;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = '#34D399';
        ctx.fill();
        ctx.restore();
      }

      // Membrana basal discontinua
      ctx.save();
      ctx.strokeStyle = 'rgba(108, 129, 155, 0.35)';
      ctx.setLineDash([7, 5]);
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(0, MEM_BOT + 9);
      ctx.lineTo(cleftLeft - 2, MEM_BOT + 9);
      ctx.moveTo(cleftRight + 2, MEM_BOT + 9);
      ctx.lineTo(W, MEM_BOT + 9);
      ctx.stroke();
      ctx.restore();

      // 7. Intersticio: colágeno, lagos de edema, corriente de fuga y linfático
      ctx.save();
      ctx.strokeStyle = 'rgba(108, 129, 155, 0.14)';
      ctx.lineWidth = 1.2;
      [486, 514, 545].forEach((fy, idx) => {
        ctx.beginPath();
        ctx.moveTo(40, fy);
        ctx.bezierCurveTo(280, fy + (idx % 2 === 0 ? 12 : -10), 620, fy - 12, 960, fy + 6);
        ctx.stroke();
      });
      ctx.restore();

      const edemaIntensity = clamp((vis.jv - 14) / 85, 0, 1);
      if (edemaIntensity > 0.04) {
        const pools: Array<[number, number, number, number]> = [
          [CLEFT_X, 514, 72, 26],
          [CLEFT_X - 115, 528, 58, 22],
          [CLEFT_X + 120, 524, 64, 24],
          [320, 536, 52, 18],
        ];
        pools.forEach(([px, py, rx, ry], i) => {
          const pulse = 1 + 0.05 * Math.sin(tSec * 1.5 + i * 1.2);
          const scale = (0.45 + edemaIntensity * 0.85) * pulse;
          const eg = ctx.createRadialGradient(px, py, 4, px, py, rx * scale);
          eg.addColorStop(0, `rgba(255, 92, 122, ${(edemaIntensity * 0.24).toFixed(3)})`);
          eg.addColorStop(0.55, `rgba(79, 169, 247, ${(edemaIntensity * 0.2).toFixed(3)})`);
          eg.addColorStop(1, 'rgba(79, 169, 247, 0)');
          ctx.fillStyle = eg;
          ctx.beginPath();
          ctx.ellipse(px, py, rx * scale, ry * scale, 0, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      const leakRate = clamp((vis.jv - 8 + (vis.pc - 18) * 0.35) / 110, 0.03, 0.95);
      if (physDt > 0 && Math.random() < leakRate * 0.85 && leakParticles.length < 55) {
        const isAlbumin = Math.random() < clamp((1 - vis.sigma) * 0.55, 0.04, 0.5);
        leakParticles.push({
          x: CLEFT_X + (Math.random() - 0.5) * Math.max(4, cleftGap - 4),
          y: MEM_Y - 12,
          vx: (Math.random() - 0.5) * 16,
          vy: 32 + vis.jv * 0.72 + Math.random() * 18,
          life: 0,
          maxLife: 2.2 + Math.random() * 1.1,
          isAlbumin,
        });
      }

      for (let i = leakParticles.length - 1; i >= 0; i--) {
        const lp = leakParticles[i];
        lp.life += physDt;
        lp.y += lp.vy * physDt;
        if (lp.y > MEM_BOT + 4) {
          lp.vx += (lp.x < CLEFT_X ? -24 : 24) * physDt;
          if (physDt > 0) lp.vy *= 0.96;
        }
        lp.x += lp.vx * physDt;
        if (lp.life >= lp.maxLife || lp.y > H - 10) {
          leakParticles.splice(i, 1);
          continue;
        }
        const alpha = (1 - lp.life / lp.maxLife) * (lp.isAlbumin ? 0.92 : 0.75);
        ctx.save();
        ctx.globalAlpha = alpha;
        if (lp.isAlbumin) {
          ctx.beginPath();
          ctx.ellipse(lp.x, lp.y, 4.8, 3.6, 0.2, 0, Math.PI * 2);
          ctx.fillStyle = '#E9B44C';
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(lp.x, lp.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = vis.jv > 40 ? '#FF5C7A' : '#4FA9F7';
          ctx.fill();
        }
        ctx.restore();
      }

      ctx.save();
      ctx.strokeStyle = 'rgba(52, 211, 153, 0.35)';
      ctx.fillStyle = 'rgba(52, 211, 153, 0.08)';
      ctx.lineWidth = 1.3;
      ctx.beginPath();
      ctx.roundRect(780, 540, 195, 22, 11);
      ctx.fill();
      ctx.stroke();
      if (showLbl) {
        ctx.fillStyle = '#34D399';
        ctx.font = '9.5px "IBM Plex Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(
          vis.jv > 55 ? 'LINFÁTICO SATURADO → EDEMA' : 'DRENAJE LINFÁTICO BASAL →',
          878,
          554
        );
      }
      ctx.restore();

      // 8. Elementos en primer plano: plaquetas, eritrocitos frontales, neutrófilos
      for (const p of platelets) {
        const marginTarget = 32 + p.yFrac * Math.max(55, eslTopY - 20 + (1 - vis.igc) * 48);
        p.yCurr = lerp(p.yCurr, marginTarget, clamp(physDt * 2.5, 0, 0.2));
        const nearWall = p.yCurr > MEM_Y - 58 && vis.igc < 0.55;
        const speed = laminarVelocityAtY(p.yCurr, eslTopY, vis.shear, tSec) * (nearWall ? 0.35 : 0.95);
        p.x += speed * physDt;
        p.angle += p.spin * physDt;
        if (p.x > W + 30) p.x = -30;
        drawPlatelet(ctx, p, nearWall);
      }

      for (const rbc of rbcs) {
        if (rbc.depth >= 0.8) {
          drawRbc(ctx, rbc, vis.shear, vis.igc);
        }
      }

      for (const n of neutrophils) {
        const shouldMarginate = vis.igc < 0.64;
        const targetY = shouldMarginate
          ? MEM_Y - n.r - 3
          : 58 + ((n.phase * 42) % Math.max(45, eslTopY - 95));
        n.y = lerp(n.y, targetY, clamp(physDt * 1.4, 0, 0.14));

        const isRolling = shouldMarginate && n.y > MEM_Y - n.r - 14;
        const isArrested =
          isRolling &&
          n.canArrest &&
          vis.igc < 0.36 &&
          Math.abs(n.x - (CLEFT_X - 38)) < 34 &&
          n.arrestTimer < 3.4;

        if (isArrested) {
          n.arrestTimer += physDt;
          n.x += 2.5 * physDt;
          n.rot += 0.12 * physDt;
        } else {
          if (n.x < 100) n.arrestTimer = 0;
          const freeSpeed = laminarVelocityAtY(n.y, eslTopY, vis.shear, tSec) * 0.78;
          const speed = isRolling ? Math.max(12, freeSpeed * 0.24) : freeSpeed;
          n.x += speed * physDt;
          n.rot += (isRolling ? speed / n.r : 0.35) * physDt;
        }

        if (n.x > W + 45) {
          n.x = -45;
          n.arrestTimer = 0;
        }
        drawNeutrophil(ctx, n, isRolling);
      }

      // 9. Etiquetas anatómicas sutiles y badge PAUSADO
      if (showLbl) {
        ctx.save();
        ctx.font = '10px "IBM Plex Mono", monospace';
        ctx.fillStyle = 'rgba(157, 177, 200, 0.82)';
        ctx.textAlign = 'left';
        ctx.fillText(
          `CAPA LIBRE DE CÉLULAS (Fåhraeus-Lindqvist) · Espesor ESL ${outRef.current.espesorUm.toFixed(2)} µm`,
          74,
          Math.max(150, eslTopY - 8)
        );
        ctx.fillStyle = veSeparated ? '#FF5C7A' : '#7FA8D6';
        ctx.textAlign = 'center';
        ctx.fillText(
          veSeparated ? 'VE-CADHERINA ABIERTA · FUGA' : 'VE-CADHERINA',
          CLEFT_X,
          MEM_BOT + 24
        );
        ctx.fillStyle = 'rgba(157, 177, 200, 0.85)';
        ctx.textAlign = 'left';
        ctx.fillText(
          `INTERSTICIO · Alb malla ${visibleAlbCount}/${ADSORBED_ALB.length} · π_p ${(5.54 * vis.alb).toFixed(1)} mmHg · TERA ${vis.tera.toFixed(1)}%/h · ALI ${outRef.current.aliDirecto.toFixed(2)} · IFC ${outRef.current.ifcPalacios.toFixed(1)}`,
          24,
          H - 16
        );
        ctx.restore();
      }

      if (pausedRef.current) {
        ctx.save();
        ctx.fillStyle = 'rgba(233, 180, 76, 0.16)';
        ctx.strokeStyle = 'rgba(233, 180, 76, 0.72)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.roundRect(W - 118, 14, 102, 24, 12);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#FFE3A3';
        ctx.font = '600 10.5px "IBM Plex Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText('⏸ PAUSADO', W - 67, 29.5);
        ctx.restore();
      }
    };

    let rafId = 0;
    let lastMs = performance.now();
    let elapsed = 0;

    renderFrame(0, 0, 0.016);

    const loop = (now: number) => {
      const dt = Math.min(0.05, Math.max(0.001, (now - lastMs) / 1000));
      lastMs = now;
      const isFrozen = pausedRef.current || prefersReduced;
      const physDt = isFrozen ? 0 : dt;
      elapsed += physDt;
      renderFrame(elapsed, physDt, dt);
      rafId = window.requestAnimationFrame(loop);
    };

    rafId = window.requestAnimationFrame(loop);

    return () => {
      window.cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="panel-dark">
      <div
        style={{
          padding: '10px 14px',
          borderBottom: '1px solid var(--line)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 8,
        }}
      >
        <span className="eyebrow">
          Simulación Biofísica 60 FPS · Lumen Capilar, Poiseuille, Glicocálix y Fuga Paracelular
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <button
            type="button"
            className="btn-preset"
            data-active={showOverlay}
            onClick={() => setShowOverlay((v) => !v)}
            title="Mostrar u ocultar etiquetas y vectores de flujo"
          >
            {showOverlay ? <Eye size={12} /> : <EyeOff size={12} />} Vectores
          </button>
          <button
            type="button"
            className="btn-preset"
            data-active={paused}
            onClick={() => setPaused((v) => !v)}
            title="Pausar o reanudar animación"
          >
            {paused ? <Play size={12} /> : <Pause size={12} />} {paused ? 'Reanudar' : 'Pausar'}
          </button>
        </div>
      </div>

      {activeControlHint && (
        <div
          style={{
            padding: '8px 14px',
            borderBottom: '1px solid var(--line-soft)',
            background: 'rgba(63, 216, 200, 0.07)',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            flexWrap: 'wrap',
            fontSize: 12,
          }}
        >
          <strong style={{ color: '#3FD8C8', fontFamily: 'IBM Plex Mono' }}>
            {activeControlHint.label}:
          </strong>
          <span style={{ color: 'var(--ink-2)' }}>{activeControlHint.detail}</span>
        </div>
      )}

      <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
        <canvas
          ref={canvasRef}
          style={{ width: '100%', display: 'block' }}
          aria-label="Animación biofísica realista del lumen capilar y glicocálix endotelial"
        />

        <svg
          viewBox={`0 0 ${W} ${H}`}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}
        >
          {M03_HOTSPOTS.map((hs, idx) => {
            const isSelected = hs.id === selectedHotspotId;
            const isHovered = hs.id === hoveredHotspotId;
            return (
              <g
                key={hs.id}
                style={{ cursor: 'pointer', pointerEvents: 'auto' }}
                onClick={() => onSelectHotspot(hs.id)}
                onMouseEnter={() => setHoveredHotspotId(hs.id)}
                onMouseLeave={() => setHoveredHotspotId(null)}
              >
                {(isSelected || isHovered) && (
                  <circle
                    cx={hs.x}
                    cy={hs.y}
                    r={isSelected ? 22 : 18}
                    fill="rgba(63, 216, 200, 0.16)"
                    stroke="#3FD8C8"
                    strokeOpacity="0.65"
                    strokeWidth="1.2"
                  />
                )}
                <circle
                  cx={hs.x}
                  cy={hs.y}
                  r={isSelected ? 14 : 11.5}
                  fill={isSelected ? '#3FD8C8' : 'rgba(10, 18, 32, 0.84)'}
                  stroke={isSelected ? '#FFFFFF' : '#3FD8C8'}
                  strokeWidth={isSelected ? 2.2 : 1.4}
                />
                <text
                  x={hs.x}
                  y={hs.y + 4}
                  textAnchor="middle"
                  fill={isSelected ? '#07121C' : '#3FD8C8'}
                  fontSize="10.5"
                  fontWeight="700"
                  fontFamily="IBM Plex Mono"
                >
                  {idx + 1}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div
        style={{
          padding: '10px 14px',
          borderTop: '1px solid var(--line)',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 14,
            flexWrap: 'wrap',
            fontSize: 11.5,
            fontFamily: 'IBM Plex Mono',
            color: 'var(--ink-2)',
          }}
        >
          <span><strong style={{ color: '#E8536D' }}>●</strong> Eritrocito bicóncavo</span>
          <span><strong style={{ color: '#B5C9F0' }}>●</strong> Neutrófilo (rodamiento si I_gc↓)</span>
          <span><strong style={{ color: '#3FD8C8' }}>〰</strong> Heparán / Condroitín</span>
          <span><strong style={{ color: '#4FA9F7' }}>〰</strong> Hialuronano</span>
          <span><strong style={{ color: '#E9B44C' }}>●</strong> Albúmina / AT-III</span>
          <span><strong style={{ color: '#34D399' }}>●</strong> eNOS / NO</span>
          <span><strong style={{ color: '#FF5C7A' }}>▼</strong> Shedding / Fuga paracelular</span>
        </div>

        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {M03_HOTSPOTS.map((hs, idx) => (
            <button
              key={hs.id}
              type="button"
              className="btn-preset"
              data-active={hs.id === selectedHotspotId}
              onClick={() => onSelectHotspot(hs.id)}
            >
              {idx + 1}. {hs.etiqueta}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
