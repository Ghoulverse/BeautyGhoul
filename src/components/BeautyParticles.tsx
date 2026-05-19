import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
  type: 'sparkle' | 'heart' | 'petal';
  rotation: number;
  rotSpeed: number;
}

export default function BeautyParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

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

    const colors = ['#ec4899', '#b76e79', '#d4a574', '#f5e6d3', '#ffd1e1', '#c9a227'];

    const createParticle = (): Particle => {
      const typeRoll = Math.random();
      let type: Particle['type'];
      if (typeRoll < 0.4) type = 'sparkle';
      else if (typeRoll < 0.7) type = 'petal';
      else type = 'heart';

      return {
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 50,
        size: type === 'heart' ? Math.random() * 5 + 3 : Math.random() * 4 + 2,
        speedY: -(Math.random() * 0.4 + 0.15),
        speedX: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.35 + 0.08,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 900 + 500,
        type,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 2,
      };
    };

    for (let i = 0; i < 50; i++) {
      const p = createParticle();
      p.y = Math.random() * canvas.height;
      p.life = Math.random() * p.maxLife;
      particlesRef.current.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.life++;
        p.rotation += p.rotSpeed;

        const lifeRatio = p.life / p.maxLife;
        const fadeIn = Math.min(lifeRatio * 6, 1);
        const fadeOut = lifeRatio > 0.88 ? (1 - lifeRatio) / 0.12 : 1;
        const currentOpacity = p.opacity * fadeIn * fadeOut;

        ctx.save();
        ctx.globalAlpha = currentOpacity;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);

        if (p.type === 'sparkle') {
          // 4-point star
          const spikes = 4;
          ctx.beginPath();
          for (let s = 0; s < spikes * 2; s++) {
            const r = s % 2 === 0 ? p.size * 1.8 : p.size * 0.5;
            const angle = (Math.PI * s) / spikes;
            const sx = Math.cos(angle) * r;
            const sy = Math.sin(angle) * r;
            if (s === 0) ctx.moveTo(sx, sy);
            else ctx.lineTo(sx, sy);
          }
          ctx.closePath();
          ctx.fillStyle = p.color;
          ctx.fill();
        } else if (p.type === 'heart') {
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 0.3);
          ctx.bezierCurveTo(-p.size, -p.size, -p.size * 1.2, 0, 0, p.size);
          ctx.bezierCurveTo(p.size * 1.2, 0, p.size, -p.size, 0, -p.size * 0.3);
          ctx.fill();
        } else {
          // Petal
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 0.6, 0.5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();

        if (p.life >= p.maxLife || p.y < -20) {
          particlesRef.current[i] = createParticle();
        }
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
