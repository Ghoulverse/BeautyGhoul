import { useEffect, useRef, useState, useCallback } from 'react';
import { useBeautyCursor } from '@/hooks/useBeautyCursor';

interface Sparkle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
  life: number;
  maxLife: number;
  rotation: number;
  rotSpeed: number;
}

interface MiniBeautyGhoul {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  scale: number;
  rotation: number;
}

interface KissMark {
  x: number;
  y: number;
  opacity: number;
  scale: number;
  rotation: number;
  color: string;
}

const GLAM_COLORS = ['#ec4899', '#b76e79', '#ff69b4', '#d4a574', '#f5e6d3', '#c9a227'];
const SPEECH_LINES = [
  "Absolutely flawless!",
  "You look gorgeous!",
  "Slay queen!",
  "That glow!",
  "Kisses!",
  "Too glam to give a damn!",
];

export function BeautyGhostSVG({ expression, isHovered }: {
  expression: number;
  isHovered: boolean;
}) {
  const hoverScale = isHovered ? 1.05 : 1;

  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      style={{
        filter: `drop-shadow(0 0 ${isHovered ? 25 : 15}px rgba(236,72,153,${isHovered ? 0.5 : 0.3})) drop-shadow(0 0 ${isHovered ? 50 : 30}px rgba(212,165,116,${isHovered ? 0.3 : 0.2}))`,
        transform: `scale(${hoverScale})`,
        transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      <defs>
        <linearGradient id="beautyBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffe4ec" stopOpacity="0.95" />
          <stop offset="40%" stopColor="#ffd1e1" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffb8d0" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="lashGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#333" />
        </linearGradient>
        <radialGradient id="blush" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff8fab" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ff8fab" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ghost body */}
      <path
        d="M100 12 C142 12 174 44 174 88 C174 114 168 136 162 152 C159 160 152 156 148 164 C144 172 137 168 132 176 C127 184 121 180 116 188 C111 196 105 192 100 200 C95 192 89 196 84 188 C79 180 73 184 68 176 C63 168 56 172 52 164 C48 156 41 160 38 152 C32 134 26 112 26 88 C26 44 58 12 100 12Z"
        fill="url(#beautyBody)"
        stroke="rgba(236,72,153,0.2)"
        strokeWidth="1"
      />

      {/* Blush marks */}
      <ellipse cx="55" cy="105" rx="18" ry="12" fill="url(#blush)" />
      <ellipse cx="145" cy="105" rx="18" ry="12" fill="url(#blush)" />

      {expression === 0 && (
        <>
          {/* Glam - Long lashes, perfect liner, red lips */}
          {/* Left eye with lashes */}
          <ellipse cx="68" cy="75" rx="14" ry="10" fill="#fff" />
          <circle cx="68" cy="75" r="6" fill="#4a1c2a" />
          <circle cx="69" cy="73" r="2.5" fill="#fff" />
          {/* Lashes */}
          {[0,1,2,3,4,5].map(i => {
            const angle = -30 + i * 12;
            const rad = (angle * Math.PI) / 180;
            const x1 = 68 + Math.cos(rad) * 14;
            const y1 = 75 + Math.sin(rad) * 8;
            const x2 = 68 + Math.cos(rad) * 22;
            const y2 = 75 + Math.sin(rad) * 14;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />;
          })}
          {/* Winged liner */}
          <path d="M54 72 Q68 65 82 72" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
          <path d="M80 71 Q88 68 92 66" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />

          {/* Right eye with lashes */}
          <ellipse cx="132" cy="75" rx="14" ry="10" fill="#fff" />
          <circle cx="132" cy="75" r="6" fill="#4a1c2a" />
          <circle cx="133" cy="73" r="2.5" fill="#fff" />
          {[0,1,2,3,4,5].map(i => {
            const angle = 150 + i * 12;
            const rad = (angle * Math.PI) / 180;
            const x1 = 132 + Math.cos(rad) * 14;
            const y1 = 75 + Math.sin(rad) * 8;
            const x2 = 132 + Math.cos(rad) * 22;
            const y2 = 75 + Math.sin(rad) * 14;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />;
          })}
          <path d="M118 72 Q132 65 146 72" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
          <path d="M120 71 Q112 68 108 66" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />

          {/* Beauty mark */}
          <circle cx="125" cy="95" r="1.5" fill="#4a1c2a" opacity="0.6" />

          {/* Red lips */}
          <path d="M82 120 Q100 112 118 120 Q100 128 82 120" fill="#c41e3a" />
          <path d="M85 120 Q100 116 115 120 Q100 135 85 120" fill="#d62828" />
          <ellipse cx="100" cy="123" rx="8" ry="3" fill="#ff6b8a" opacity="0.4" />

          {/* Compact mirror in "hand" */}
          <circle cx="165" cy="130" r="18" fill="#f5e6d3" stroke="#c9a227" strokeWidth="2" />
          <circle cx="165" cy="130" r="14" fill="url(#blush)" opacity="0.3" />
          <circle cx="165" cy="130" r="14" fill="none" stroke="#c9a227" strokeWidth="0.5" />
        </>
      )}

      {expression === 1 && (
        <>
          {/* Selfie - Winking, glossy lips, hearts */}
          {/* Left eye winking */}
          <path d="M54 75 Q68 80 82 75" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M56 78 Q68 83 80 78" fill="none" stroke="#1a1a1a" strokeWidth="1" strokeLinecap="round" />
          {/* Lashes on wink */}
          <line x1="68" y1="80" x2="65" y2="88" stroke="#1a1a1a" strokeWidth="1.5" />
          <line x1="72" y1="79" x2="74" y2="87" stroke="#1a1a1a" strokeWidth="1.5" />

          {/* Right eye open with sparkle */}
          <ellipse cx="132" cy="75" rx="14" ry="10" fill="#fff" />
          <circle cx="132" cy="75" r="6" fill="#4a1c2a" />
          <circle cx="133" cy="73" r="2.5" fill="#fff" />
          {/* Extra sparkle in eye */}
          <path d="M128 68 L129 71 L132 72 L129 73 L128 76 L127 73 L124 72 L127 71Z" fill="#c9a227" />

          {/* Glossy lips (blowing kiss) */}
          <ellipse cx="100" cy="122" rx="12" ry="8" fill="#d62828" />
          <ellipse cx="100" cy="120" rx="10" ry="5" fill="#ff6b8a" opacity="0.5" />
          <ellipse cx="96" cy="119" rx="3" ry="2" fill="#fff" opacity="0.6" />

          {/* Hand holding phone */}
          <ellipse cx="30" cy="110" rx="12" ry="20" fill="#ffd1e1" opacity="0.6" transform="rotate(-20 30 110)" />
          <rect x="18" y="85" width="20" height="32" rx="3" fill="#1a1a1a" transform="rotate(-20 28 101)" />
          <rect x="20" y="87" width="16" height="28" rx="2" fill="#4a1c2a" transform="rotate(-20 28 101)" />

          {/* Floating hearts */}
          <path d="M145 45 C145 40 140 38 137 42 C134 38 129 40 129 45 C129 50 137 56 137 56 C137 56 145 50 145 45Z" fill="#ec4899" opacity="0.7" />
          <path d="M155 55 C155 52 152 50 150 53 C148 50 145 52 145 55 C145 58 150 62 150 62 C150 62 155 58 155 55Z" fill="#ff69b4" opacity="0.5" transform="scale(0.7) translate(60, 20)" />
        </>
      )}

      {expression === 2 && (
        <>
          {/* Slay - Dramatic makeup, wind effect, powder explosion */}
          {/* Dramatic winged eyes */}
          <ellipse cx="68" cy="75" rx="16" ry="12" fill="#fff" />
          <circle cx="68" cy="75" r="7" fill="#4a1c2a" />
          <circle cx="69" cy="73" r="3" fill="#fff" />
          {/* Heavy liner */}
          <path d="M50 70 Q68 60 86 72" fill="none" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
          <path d="M84 70 Q96 65 104 60" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
          {/* Lower liner */}
          <path d="M54 82 Q68 88 82 82" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />

          <ellipse cx="132" cy="75" rx="16" ry="12" fill="#fff" />
          <circle cx="132" cy="75" r="7" fill="#4a1c1a" />
          <circle cx="133" cy="73" r="3" fill="#fff" />
          <path d="M114 70 Q132 60 150 72" fill="none" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
          <path d="M116 60 Q124 65 134 70" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
          <path d="M118 82 Q132 88 146 82" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />

          {/* Bold red lips */}
          <path d="M78 118 Q100 108 122 118 Q100 128 78 118" fill="#8b0000" />
          <path d="M82 118 Q100 112 118 118 Q100 138 82 118" fill="#c41e3a" />
          <ellipse cx="100" cy="121" rx="10" ry="4" fill="#ff6b8a" opacity="0.5" />

          {/* Hair/wind swoosh lines */}
          <path d="M30 50 Q20 30 35 20" fill="none" stroke="#ffb8d0" strokeWidth="2" opacity="0.6" />
          <path d="M170 55 Q185 35 175 20" fill="none" stroke="#ffb8d0" strokeWidth="2" opacity="0.6" />
          <path d="M25 80 Q10 70 15 55" fill="none" stroke="#ffd1e1" strokeWidth="1.5" opacity="0.5" />

          {/* Powder explosion circles */}
          <circle cx="45" cy="140" r="8" fill="#f5e6d3" opacity="0.4" />
          <circle cx="155" cy="145" r="6" fill="#ffd1e1" opacity="0.3" />
          <circle cx="35" cy="155" r="4" fill="#ffb8d0" opacity="0.3" />
          <circle cx="165" cy="160" r="5" fill="#f5e6d3" opacity="0.25" />
        </>
      )}

      {/* Silk ribbon scarf (all expressions) */}
      <path d="M85 185 Q70 195 55 190 Q45 188 40 195" fill="none" stroke="#ec4899" strokeWidth="3" opacity="0.4" strokeLinecap="round" />
      <path d="M115 185 Q130 198 145 192 Q155 190 160 196" fill="none" stroke="#b76e79" strokeWidth="2.5" opacity="0.35" strokeLinecap="round" />

      {/* Soft body sheen */}
      <ellipse cx="100" cy="100" rx="70" ry="70" fill="none" stroke="rgba(236,72,153,0.08)" strokeWidth="1" />
    </svg>
  );
}

export default function BeautyMascot() {
  const { x, y, isMoving, velocity } = useBeautyCursor();
  const [_expression, setExpression] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [speechBubble, setSpeechBubble] = useState('');
  const [glamMode, setGlamMode] = useState(false);

  const sparklesRef = useRef<Sparkle[]>([]);
  const kissesRef = useRef<KissMark[]>([]);
  const miniGhoulsRef = useRef<MiniBeautyGhoul[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const clickCountRef = useRef(0);
  const typedRef = useRef('');
  const posHistoryRef = useRef<{ x: number; y: number }[]>([]);
  const cursorRef = useRef({ x, y, isMoving, velocity, mascotSize: 0, glamMode });

  const mascotSize = typeof window !== 'undefined' && window.innerWidth < 768 ? 180 : 280;

  const spawnSparkles = useCallback((cx: number, cy: number, count = 30) => {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.8;
      const speed = Math.random() * 5 + 2;
      sparklesRef.current.push({
        x: cx + mascotSize / 2,
        y: cy + mascotSize / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        size: Math.random() * 5 + 2,
        color: GLAM_COLORS[Math.floor(Math.random() * GLAM_COLORS.length)],
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 70 + 50,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 15,
      });
    }
  }, [mascotSize]);

  const addKissMark = useCallback((kx: number, ky: number) => {
    kissesRef.current.push({
      x: kx + mascotSize / 2 + (Math.random() - 0.5) * 40,
      y: ky + mascotSize / 2 + (Math.random() - 0.5) * 40,
      opacity: 0.8,
      scale: 0.5 + Math.random() * 0.5,
      rotation: Math.random() * 60 - 30,
      color: ['#c41e3a', '#d62828', '#ec4899'][Math.floor(Math.random() * 3)],
    });
  }, [mascotSize]);

  const handleClick = useCallback(() => {
    clickCountRef.current = (clickCountRef.current + 1) % 3;
    const newExpr = clickCountRef.current;
    setExpression(newExpr);
    spawnSparkles(x, y, newExpr === 2 ? 60 : 30);

    if (newExpr === 1) {
      addKissMark(x, y);
      addKissMark(x, y);
    }

    const line = SPEECH_LINES[newExpr] || SPEECH_LINES[0];
    setSpeechBubble(line);
    setTimeout(() => setSpeechBubble(''), 2500);
  }, [x, y, spawnSparkles, addKissMark]);

  const handleDoubleClick = useCallback(() => {
    if (miniGhoulsRef.current.length >= 5) return;
    for (let i = 0; i < 2; i++) {
      miniGhoulsRef.current.push({
        x: x + mascotSize / 2 + (Math.random() - 0.5) * 50,
        y: y + mascotSize,
        vx: (Math.random() - 0.5) * 2,
        vy: -Math.random() * 3 - 1,
        opacity: 1,
        scale: 0.25 + Math.random() * 0.2,
        rotation: Math.random() * 360,
      });
    }
  }, [x, y, mascotSize]);

  // Easter egg: type "glam"
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        spawnSparkles(x, y, 15);
        return;
      }
      typedRef.current += e.key.toLowerCase();
      if (typedRef.current.length > 10) typedRef.current = typedRef.current.slice(-10);

      if (typedRef.current.includes('glam')) {
        typedRef.current = '';
        setExpression(2);
        setGlamMode(true);
        setSpeechBubble('SLAY MODE ACTIVATED!');
        spawnSparkles(x, y, 100);
        for (let i = 0; i < 5; i++) addKissMark(x + (Math.random() - 0.5) * 80, y + (Math.random() - 0.5) * 80);
        setTimeout(() => {
          setExpression(0);
          setGlamMode(false);
          setSpeechBubble('');
          clickCountRef.current = 0;
        }, 4000);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [x, y, spawnSparkles, addKissMark]);

  // Position history
  useEffect(() => {
    posHistoryRef.current.push({ x, y });
    if (posHistoryRef.current.length > 18) posHistoryRef.current.shift();
  }, [x, y]);

  cursorRef.current = { x, y, isMoving, velocity, mascotSize, glamMode };

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let sparkleTimer = 0;

    const animate = () => {
      const { x, y, isMoving, velocity, mascotSize, glamMode } = cursorRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Trail sparkles on movement
      if (isMoving && velocity > 1.5) {
        sparkleTimer++;
        if (sparkleTimer > 8) {
          sparkleTimer = 0;
          const cx = x + mascotSize / 2;
          const cy = y + mascotSize / 2;
          sparklesRef.current.push({
            x: cx + (Math.random() - 0.5) * 20,
            y: cy + (Math.random() - 0.5) * 20,
            vx: (Math.random() - 0.5) * 1,
            vy: -Math.random() * 1.5 - 0.5,
            size: Math.random() * 4 + 2,
            color: GLAM_COLORS[Math.floor(Math.random() * GLAM_COLORS.length)],
            opacity: 0.7,
            life: 0,
            maxLife: Math.random() * 50 + 30,
            rotation: Math.random() * 360,
            rotSpeed: (Math.random() - 0.5) * 8,
          });
        }
      }

      // Sparkles
      sparklesRef.current = sparklesRef.current.filter((s) => {
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.05;
        s.rotation += s.rotSpeed;
        s.life++;
        const lifeRatio = s.life / s.maxLife;
        s.opacity = Math.max(0, 1 - lifeRatio);

        if (s.opacity <= 0) return false;

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate((s.rotation * Math.PI) / 180);
        ctx.globalAlpha = s.opacity;
        ctx.fillStyle = s.color;

        // 4-point star
        const spikes = 4;
        ctx.beginPath();
        for (let i = 0; i < spikes * 2; i++) {
          const r = i % 2 === 0 ? s.size : s.size * 0.4;
          const angle = (Math.PI * i) / spikes;
          const sx = Math.cos(angle) * r;
          const sy = Math.sin(angle) * r;
          if (i === 0) ctx.moveTo(sx, sy);
          else ctx.lineTo(sx, sy);
        }
        ctx.closePath();
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(0, 0, s.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.opacity * 0.08;
        ctx.fill();

        ctx.restore();
        return true;
      });

      // Kiss marks
      kissesRef.current = kissesRef.current.filter((k) => {
        k.opacity -= 0.003;
        if (k.opacity <= 0) return false;

        ctx.save();
        ctx.globalAlpha = k.opacity;
        ctx.translate(k.x, k.y);
        ctx.rotate((k.rotation * Math.PI) / 180);
        ctx.scale(k.scale, k.scale);

        // Lip shape
        ctx.beginPath();
        ctx.ellipse(-6, 0, 7, 5, 0.3, 0, Math.PI * 2);
        ctx.ellipse(6, 0, 7, 5, -0.3, 0, Math.PI * 2);
        ctx.fillStyle = k.color;
        ctx.fill();

        ctx.restore();
        return true;
      });

      // Mini beauty ghouls
      miniGhoulsRef.current = miniGhoulsRef.current.filter((mg) => {
        mg.x += mg.vx;
        mg.y += mg.vy;
        mg.vy -= 0.012;
        mg.vx *= 0.995;
        mg.opacity -= 0.0025;
        mg.rotation += 1;

        if (mg.opacity <= 0) return false;

        ctx.save();
        ctx.globalAlpha = mg.opacity;
        ctx.translate(mg.x, mg.y);
        ctx.rotate((mg.rotation * Math.PI) / 180);
        ctx.scale(mg.scale, mg.scale);

        // Mini ghost
        ctx.beginPath();
        ctx.arc(0, -8, 18, Math.PI, 0);
        ctx.bezierCurveTo(18, 8, 14, 26, 10, 22);
        ctx.bezierCurveTo(5, 28, 0, 24, -5, 26);
        ctx.bezierCurveTo(-10, 28, -14, 24, -18, 22);
        ctx.bezierCurveTo(-22, 18, -18, 8, -18, -8);
        ctx.fillStyle = '#ffd1e1';
        ctx.fill();

        {/* Mini makeup brush */}
        ctx.fillStyle = '#c9a227';
        ctx.fillRect(16, -5, 3, 18);
        ctx.fillStyle = '#ffb8d0';
        ctx.beginPath();
        ctx.ellipse(17.5, 15, 4, 6, 0, 0, Math.PI * 2);
        ctx.fill();

        // Mini eyes
        ctx.fillStyle = '#4a1c2a';
        ctx.beginPath();
        ctx.arc(-6, -8, 2.5, 0, Math.PI * 2);
        ctx.arc(6, -8, 2.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
        return true;
      });

      // Glam mode shimmer overlay
      if (glamMode) {
        ctx.fillStyle = 'rgba(201, 162, 39, 0.03)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 9996 }}
      />

      {/* Glam mode gold shimmer */}
      {glamMode && (
        <div
          className="fixed inset-0 pointer-events-none z-[9995]"
          style={{
            background: `radial-gradient(circle at ${x + mascotSize / 2}px ${y + mascotSize / 2}px, rgba(201,162,39,0.1) 0%, transparent 50%)`,
            animation: 'glam-shimmer 1s ease-in-out infinite',
          }}
        />
      )}

      <div
        className="fixed pointer-events-none"
        style={{
          left: x,
          top: y,
          zIndex: 9997,
          width: mascotSize,
          height: mascotSize,
        }}
      >
        {speechBubble && (
          <div
            className="absolute -top-16 left-1/2 -translate-x-1/2 px-4 py-2.5 rounded-2xl whitespace-nowrap font-playfair text-sm pointer-events-none"
            style={{
              background: 'rgba(250, 245, 240, 0.95)',
              border: '1.5px solid #ec4899',
              color: '#4a1c2a',
              boxShadow: '0 4px 20px rgba(236,72,153,0.15), 0 0 40px rgba(212,165,116,0.1)',
              animation: 'bounce-subtle 0.5s ease-in-out infinite',
              zIndex: 9999,
            }}
          >
            {speechBubble}
            <div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderTop: '8px solid #ec4899',
              }}
            />
          </div>
        )}

        <div
          className="relative pointer-events-none cursor-default"
          style={{
            width: mascotSize,
            height: mascotSize,
            animation: !isMoving ? `ghost-bob 3s ease-in-out infinite, ghost-sway 4s ease-in-out infinite` : undefined,
          }}
          onClick={handleClick}
          onDoubleClick={handleDoubleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src="/ghoul_mascot.png"
            alt="BEAUTY GHOUL"
            className="w-full h-full object-contain"
            draggable={false}
            style={{
              filter: isHovered
                ? 'brightness(1.15)'
                : undefined,
              transition: 'filter 0.3s ease',
            }}
          />
        </div>
      </div>
    </>
  );
}
