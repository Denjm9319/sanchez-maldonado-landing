import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
        className="absolute inset-0 bg-gradient-to-r from-black/60 from-10% via-black/25 via-45% to-transparent to-80% md:from-black/45 md:via-black/15"
      />
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
          <p className="text-[12px] font-semibold tracking-[0.32em] uppercase text-gold mb-7 sm:mb-6 [text-shadow:0_2px_14px_rgba(0,0,0,0.65)]">
            Atención · Seguimiento · Conversión
          </p>
        </Reveal>
        <h1 className="font-display font-medium text-[clamp(32px,6.4vw,72px)] leading-[1.08] max-w-[16em] [text-wrap:pretty] mb-8 sm:mb-7 text-white">
          <Reveal className="block" style={{ transitionDelay: "0ms" }}>
            Tu negocio no necesita más herramientas.
          </Reveal>
          <Reveal className="block italic" style={{ transitionDelay: "150ms" }}>
            Necesita un sistema que funcione.
          </Reveal>
        </h1>
        <Reveal style={{ transitionDelay: "450ms" }}>
          <p className="text-[clamp(16px,1.5vw,19px)] leading-relaxed text-white/70 max-w-[38em] mb-10 sm:mb-9">
            Diseñamos webs, agentes conversacionales y automatizaciones para ayudarte a captar, atender y
            convertir más oportunidades.
          </p>
        </Reveal>
        <Reveal
          style={{ transitionDelay: "550ms" }}
          className="flex flex-col sm:flex-row sm:flex-wrap gap-3.5 sm:gap-3 sm:items-center mb-8"
        >
          <a
            href="#contacto"
            className="bg-gold text-navy px-7 py-4 rounded-full text-[15px] font-medium text-center hover:bg-cream"
          >
            Hablemos de tu negocio
          </a>
          <Link
            to="/proyectos#servicios"
            className="border border-white/30 text-white px-[26px] py-4 rounded-full text-[15px] text-center bg-white/5 hover:border-white hover:bg-white/10"
          >
            Ver soluciones
          </Link>
        </Reveal>
        <p className="text-xs tracking-[0.18em] uppercase text-white/40">Captar · Atender · Convertir</p>
      </div>
    </section>
  );
}
