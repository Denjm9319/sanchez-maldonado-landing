import { useEffect, useRef } from "react";
import heroVideo from "../assets/video/hero-liquid.mp4";
import heroPoster from "../assets/video/hero-poster.jpg";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (video && !reduce) {
      const p = video.play();
      if (p && p.catch) p.catch(() => {});
    } else if (video) {
      video.pause();
    }
  }, [reduce]);

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
    <section
      aria-label="Inicio"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-[linear-gradient(120deg,#FAF7F2_0%,#f3ece1_60%,#e9dfd0_100%)]"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
        poster={heroPoster}
        src={heroVideo}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(100deg,rgba(250,247,242,0.92)_0%,rgba(250,247,242,0.78)_45%,rgba(250,247,242,0.42)_100%)]"
      />
      <div
        ref={contentRef}
        className="relative w-full max-w-[1180px] mx-auto px-6 pt-[132px] pb-[88px]"
        style={{ willChange: "transform, opacity" }}
      >
        <p className="text-[11px] tracking-[0.3em] uppercase text-teal mb-6">AI · Design · Growth</p>
        <h1 className="text-[clamp(38px,6.4vw,76px)] leading-[1.04] max-w-[16em] [text-wrap:pretty] mb-7">
          Convertimos atención en oportunidades
          <br />y oportunidades en clientes.
        </h1>
        <p className="text-[clamp(16px,1.5vw,19px)] leading-relaxed text-body max-w-[44em] mb-9">
          Diseñamos sitios web, campañas, agentes de IA y automatizaciones que ayudan a tu negocio a
          atraer más oportunidades, atenderlas mejor y convertirlas en clientes.
        </p>
        <div className="flex flex-wrap gap-3 items-center mb-8">
          <a
            href="#contacto"
            className="bg-navy text-cream px-7 py-4 rounded-full text-[15px] font-medium hover:bg-teal"
          >
            Contanos sobre tu negocio
          </a>
          <a
            href="#servicios"
            className="border border-navy/22 text-navy px-[26px] py-4 rounded-full text-[15px] bg-white/50 hover:border-navy hover:bg-white"
          >
            Ver qué hacemos ↓
          </a>
        </div>
        <p className="text-xs tracking-[0.18em] uppercase text-secondary">Web · Ads · IA · Automatización</p>
      </div>
    </section>
  );
}
