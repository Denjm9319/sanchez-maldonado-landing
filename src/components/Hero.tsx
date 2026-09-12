import { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const onScroll = () => {
      const el = contentRef.current;
      if (!el) return;
      const y = window.scrollY || 0;
      const p = Math.min(1, y / Math.max(1, window.innerHeight * 0.75));
      el.style.opacity = String(1 - p * 0.95);
      el.style.transform = `translateY(${(p * 70).toFixed(1)}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduce]);

  return (
    <section aria-label="Inicio" className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent"
      />
      <div
        ref={contentRef}
        className="relative w-full max-w-[1180px] mx-auto px-6 pt-[132px] pb-[88px]"
        style={{ willChange: "transform, opacity" }}
      >
        <Reveal>
          <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-6">
            Sistemas que atienden por vos, las 24 horas
          </p>
        </Reveal>
        <h1 className="font-heroDisplay font-medium text-[clamp(38px,6.4vw,76px)] leading-[1.04] max-w-[17em] [text-wrap:pretty] mb-7 text-white">
          <Reveal className="block" style={{ transitionDelay: "0ms" }}>
            Perdés clientes.
          </Reveal>
          <Reveal className="block" style={{ transitionDelay: "150ms" }}>
            Todos los días.
          </Reveal>
          <Reveal className="block" style={{ transitionDelay: "300ms" }}>
            Sin darte cuenta.
          </Reveal>
        </h1>
        <Reveal style={{ transitionDelay: "450ms" }}>
          <p className="text-[clamp(16px,1.5vw,19px)] leading-relaxed text-white/70 max-w-[44em] mb-9">
            Implementamos sistemas de captación, atención y seguimiento que convierten más consultas en
            ventas, incluso cuando tu equipo no está disponible.
          </p>
        </Reveal>
        <Reveal style={{ transitionDelay: "550ms" }} className="flex flex-wrap gap-3 items-center mb-8">
          <a
            href="#contacto"
            className="bg-gold text-navy px-7 py-4 rounded-full text-[15px] font-medium hover:bg-cream"
          >
            Contanos sobre tu negocio
          </a>
          <a
            href="#sofia"
            className="border border-white/30 text-white px-[26px] py-4 rounded-full text-[15px] bg-white/5 hover:border-white hover:bg-white/10"
          >
            Ver qué hacemos ↓
          </a>
        </Reveal>
        <p className="text-xs tracking-[0.18em] uppercase text-white/40">Web · Ads · IA · Automatización</p>
      </div>
    </section>
  );
}
