import { useEffect, useRef } from "react";

const GLASS_BORDER = "rgba(59,130,246,0.35)";
const GLASS_BG = "rgba(15,23,36,0.45)";
const GLASS_BG_HOVER = "rgba(15,23,36,0.65)";
const GLOW_SHADOW =
  "0 0 20px rgba(59,130,246,0.18), inset 0 1px 0 rgba(255,255,255,0.08)";
const PILL_BADGE_SHADOW = "0 0 8px rgba(59,130,246,0.45)";

type Blob = {
  x: number;
  y: number;
  r: number;
  hue: [number, number, number];
  speedX: number;
  speedY: number;
  phase: number;
};

type AnimatedBackgroundProps = {
  fixed?: boolean;
};

const AnimatedBackground = ({ fixed = false }: AnimatedBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const { clientWidth, clientHeight } = canvas;
      canvas.width = clientWidth * dpr;
      canvas.height = clientHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const blobs: Blob[] = [
      { x: 0.2, y: 0.3, r: 0.55, hue: [59, 130, 246], speedX: 0.00007, speedY: 0.00009, phase: 0 },
      { x: 0.8, y: 0.7, r: 0.5, hue: [6, 182, 212], speedX: -0.00008, speedY: -0.00006, phase: 1.2 },
      { x: 0.5, y: 0.2, r: 0.4, hue: [37, 99, 235], speedX: 0.00005, speedY: -0.00011, phase: 2.4 },
      { x: 0.3, y: 0.85, r: 0.45, hue: [99, 102, 241], speedX: -0.00006, speedY: 0.00008, phase: 3.6 },
    ];

    let start = performance.now();

    const tick = (now: number) => {
      const t = now - start;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      ctx.fillStyle = "#050814";
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = "lighter";

      blobs.forEach((b) => {
        const cx =
          (b.x + Math.sin(t * b.speedX + b.phase) * 0.18) * w +
          Math.cos(t * b.speedY * 1.3 + b.phase) * 80;
        const cy =
          (b.y + Math.cos(t * b.speedY + b.phase) * 0.18) * h +
          Math.sin(t * b.speedX * 1.7 + b.phase) * 60;
        const radius = b.r * Math.min(w, h) * (0.9 + Math.sin(t * 0.0004 + b.phase) * 0.15);

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        grad.addColorStop(0, `rgba(${b.hue[0]},${b.hue[1]},${b.hue[2]},0.55)`);
        grad.addColorStop(0.5, `rgba(${b.hue[0]},${b.hue[1]},${b.hue[2]},0.18)`);
        grad.addColorStop(1, `rgba(${b.hue[0]},${b.hue[1]},${b.hue[2]},0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalCompositeOperation = "source-over";

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`${fixed ? "fixed" : "absolute"} inset-0 w-full h-full z-0 pointer-events-none`}
      style={fixed ? { position: "fixed" } : undefined}
      aria-hidden
    />
  );
};

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden min-h-screen">
      <div
        aria-hidden
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,8,20,0.25) 0%, rgba(5,8,20,0.10) 40%, rgba(5,8,20,0.55) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center mt-32 px-6 pb-24">
        <a
          href="/produkte/serveflow"
          className="inline-flex items-center gap-2.5 h-[38px] px-3.5 rounded-[10px] backdrop-blur-xl no-underline"
          style={{
            border: `1px solid ${GLASS_BORDER}`,
            background: GLASS_BG,
            boxShadow: GLOW_SHADOW,
          }}
        >
          <span
            className="text-white font-medium text-xs px-2.5 py-1 rounded-[6px]"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
              boxShadow: PILL_BADGE_SHADOW,
            }}
          >
            Live
          </span>
          <span className="font-medium text-sm text-white tracking-wide">
            ServeFlow ab 29 €/Monat — jetzt testen →
          </span>
        </a>

        <h1
          className="text-white text-5xl lg:text-[88px] leading-[1.05] tracking-[-0.02em] mt-8 max-w-5xl font-semibold"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Software, die für Ihre Branche
          <br className="hidden lg:block" />
          gebaut ist{" "}
          <em
            className="italic mx-[0.08em] relative inline-block"
            style={{
              fontStyle: "italic",
              backgroundImage: "linear-gradient(135deg, #3B82F6, #06B6D4)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            — nicht umgekehrt
          </em>
          .
        </h1>

        <p className="font-normal text-lg text-white/70 mt-6 max-w-[662px]">
          Branchensoftware aus Stuttgart. DSGVO-konform, Server in Deutschland.
          In 30 Minuten live — kein IT-Aufwand, kein Kleingedrucktes.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          <a
            href="/kontakt"
            className="px-8 py-3.5 rounded-[10px] text-white font-semibold text-base transition-all hover:brightness-110"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #2563EB)",
              boxShadow: "0 10px 30px rgba(59,130,246,0.30)",
            }}
          >
            Kostenlose Demo anfragen →
          </a>
          <a
            href="/produkte/serveflow"
            className="px-8 py-3.5 rounded-[10px] text-white font-medium text-base transition-all backdrop-blur-xl"
            style={{
              border: `1px solid ${GLASS_BORDER}`,
              background: GLASS_BG,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = GLASS_BG_HOVER)}
            onMouseLeave={(e) => (e.currentTarget.style.background = GLASS_BG)}
          >
            ServeFlow ansehen
          </a>
        </div>

        <p className="mt-5 text-sm text-white/40 flex items-center gap-4 flex-wrap justify-center">
          <span>✓ Keine Kreditkarte nötig</span>
          <span>✓ Setup in 30 Minuten</span>
          <span>✓ Antwort in 2 Stunden</span>
        </p>
      </div>
    </section>
  );
};

export { HeroSection, AnimatedBackground };
