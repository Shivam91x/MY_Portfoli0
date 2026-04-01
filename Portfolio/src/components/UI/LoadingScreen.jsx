import { useEffect, useRef, useState } from "react";
import React from "react";

const LABELS = ["Initializing...", "Loading assets...", "Almost there...", "Ready!"];

export default function LoadingScreen({ onComplete }) {
  const canvasRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [label, setLabel] = useState("Initializing...");
  const [show, setShow] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(false);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let rafId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const dots = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      o: Math.random() * 0.4 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249,115,22,${d.o})`;
        ctx.fill();
      });
      dots.forEach((a, i) => {
        dots.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(249,115,22,${0.06 * (1 - dist / 90)})`;
            ctx.lineWidth = 0.5; ctx.stroke();
          }
        });
      });
      rafId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(rafId); window.removeEventListener("resize", resize); };
  }, []);

  // Progress counter
  useEffect(() => {
    setTimeout(() => setShow(true), 200);

    const DURATION = 2800;
    let startTime = null;
    const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const tick = (ts) => {
      if (!startTime) startTime = ts;
      const elapsed = Math.min((ts - startTime) / DURATION, 1);
      const val = Math.round(ease(elapsed) * 100);
      setProgress(val);
      setLabel(LABELS[Math.min(Math.floor(ease(elapsed) * LABELS.length), LABELS.length - 1)]);

      if (elapsed < 1) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setExiting(true);
          setTimeout(() => {
            setGone(true);
            onComplete?.();
          }, 850); // curtain travel time
        }, 300);
      }
    };
    const id = setTimeout(() => requestAnimationFrame(tick), 800);
    return () => clearTimeout(id);
  }, []);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden transition-opacity duration-500 ${exiting ? "pointer-events-none" : ""}`}
    >
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Pulsing rings */}
      {[320, 440, 560].map((size, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-orange-500/15"
          style={{
            width: size,
            height: size,
            animation: `pulse 3s ease-in-out ${i * 0.5}s infinite`,
          }}
        />
      ))}

      {/* Center glow */}
      <div
        className="absolute w-44 h-44 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)",
          animation: "pulse 2s ease-in-out infinite",
        }}
      />

      {/* Scan line */}
      <div
        className="absolute left-0 right-0 h-px bg-orange-500/8"
        style={{ animation: "scan 4s linear infinite" }}
      />

      {/* Corner brackets */}
      {[
        "top-4 left-4 border-t border-l",
        "top-4 right-4 border-t border-r",
        "bottom-4 left-4 border-b border-l",
        "bottom-4 right-4 border-b border-r",
      ].map((cls, i) => (
        <span
          key={i}
          className={`absolute w-5 h-5 border-orange-500/50 ${cls}`}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h1
          className={`text-7xl font-black text-white tracking-tighter leading-none transition-all duration-700 ${show ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-75"}`}
          style={{ transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)" }}
        >
          S<span className="text-orange-500/40 font-thin mx-1">/</span>Y
          <span className="text-orange-500">.</span>
        </h1>

        <p
          className={`mt-2 text-xs tracking-[0.4em] uppercase text-white/30 transition-all duration-600 delay-300 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        >
          Frontend Developer
        </p>

        <div
          className={`flex gap-2 mt-5 transition-all duration-500 delay-500 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        >
          {["React", "Tailwind", "UI/UX"].map((s) => (
            <span
              key={s}
              className="text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border border-orange-500/30 text-orange-500/70 bg-orange-500/5"
            >
              {s}
            </span>
          ))}
        </div>

        <div
          className={`mt-9 w-56 transition-all duration-500 delay-700 ${show ? "opacity-100" : "opacity-0"}`}
        >
          <div className="h-[2px] bg-white/8 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-orange-500 rounded-full relative transition-none"
              style={{ width: `${progress}%` }}
            >
              <span
                className="absolute right-0 -top-[3px] w-2 h-2 rounded-full bg-orange-500"
                style={{ boxShadow: "0 0 8px #f97316" }}
              />
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-[11px] text-white/25 tracking-widest tabular-nums">
              {progress}%
            </span>
            <span className="text-[11px] text-orange-500/50 tracking-wide">
              {label}
            </span>
          </div>
        </div>
      </div>

      {/* CURTAIN — bottom to top */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        <div
          className="absolute left-0 right-0 bottom-0 h-full bg-[#0a0a0a]"
          style={{
            transform: exiting ? "translateY(0%)" : "translateY(100%)",
            transition: "transform 0.75s cubic-bezier(0.76,0,0.24,1)",
          }}
        >
          {/* Orange leading edge */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, transparent, #f97316, #ff9a4d, #f97316, transparent)",
              opacity: exiting ? 1 : 0,
              transition: "opacity 0.15s ease",
            }}
          />
        </div>
      </div>

      <div className={`relative z-10 flex flex-col items-center transition-all duration-700
        ${exiting ? "-translate-y-14 scale-95 opacity-0" : "opacity-100"}
      `}></div>


      <style>{`
        @keyframes pulse { 0%,100%{transform:scale(1);opacity:0.15} 50%{transform:scale(1.05);opacity:0.35} }
        @keyframes scan  { 0%{top:0} 100%{top:100%} }
      `}</style>
    </div>
  );
}