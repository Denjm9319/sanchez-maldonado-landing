import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { PRICING } from "../config/site";

const CONTACTS = [
  { time: "09:14", channel: "Llamada entrante", detail: "Consulta por turno", status: "missed", label: "Perdida" },
  { time: "13:40", channel: "WhatsApp", detail: "Sin responder · 3 días", status: "missed", label: "Pendiente" },
  { time: "21:02", channel: "Formulario web", detail: "Fuera de horario", status: "missed", label: "Perdida" },
  { time: "21:07", channel: "WhatsApp", detail: "Respondido al toque", status: "ok", label: "Atendida" },
] as const;

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
    <section aria-label="Inicio" className="relative overflow-hidden text-cream">
      <div
        ref={contentRef}
        className="relative w-full max-w-[1180px] mx-auto px-6 pt-[132px] pb-[88px] grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center"
        style={{ willChange: "transform, opacity" }}
      >
        <div>
          <Reveal>
            <p className="text-[12px] font-semibold tracking-[0.32em] uppercase text-gold mb-7 sm:mb-6">
              Desarrollo web a medida
            </p>
          </Reveal>
          <h1 className="font-display font-medium text-[clamp(32px,5vw,58px)] leading-[1.08] max-w-[14em] [text-wrap:pretty] mb-8 sm:mb-7 text-cream">
            <Reveal className="block" style={{ transitionDelay: "0ms" }}>
              Dejá de perder clientes
            </Reveal>
            <Reveal className="block" style={{ transitionDelay: "150ms" }}>
              por no contestar <span className="text-gold">a tiempo.</span>
            </Reveal>
          </h1>
          <Reveal style={{ transitionDelay: "450ms" }}>
            <p className="text-[clamp(16px,1.4vw,18px)] leading-relaxed text-cream/70 max-w-[36em] mb-10 sm:mb-9">
              Construimos tu sitio a medida — con la lógica, las integraciones y las automatizaciones que tu
              operación necesita — para convertir visitas en consultas reales, no solo para verse bien.
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
              to="/proyectos"
              className="border border-white/25 text-cream px-[26px] py-4 rounded-full text-[15px] text-center bg-white/5 hover:border-white hover:bg-white/10"
            >
              Ver proyectos
            </Link>
          </Reveal>
          <Reveal style={{ transitionDelay: "650ms" }}>
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-cream/60 mb-2.5">
              {PRICING.webEntry} · Según alcance y complejidad
            </p>
            <p className="text-[13px] text-cream/50 mb-1">
              Incluye diseño, textos guiados y dominio gestionado por nosotros.
            </p>
            <p className="text-[13px] text-cream/50">
              Revisamos juntos hasta que estés conforme, antes de la entrega final.
            </p>
          </Reveal>
        </div>

        <Reveal style={{ transitionDelay: "300ms" }} aria-hidden="true">
          <div className="relative bg-cream text-navy border border-navy/10 rounded-[16px] pt-[22px] pb-[18px] px-5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)]">
            <div className="absolute top-1/2 -left-[11px] -translate-y-1/2 w-[22px] h-[22px] rounded-full bg-navy" />
            <div className="absolute top-1/2 -right-[11px] -translate-y-1/2 w-[22px] h-[22px] rounded-full bg-navy" />
            <div className="flex items-baseline justify-between font-mono text-[11.5px] tracking-[0.1em] uppercase text-navy/50 pb-3.5 mb-3.5 border-b border-dashed border-navy/20">
              <span>Registro — hoy</span>
              <span>4 contactos</span>
            </div>
            <div className="flex flex-col">
              {CONTACTS.map((c, i) => (
                <div
                  key={c.time}
                  className={`grid grid-cols-[52px_1fr_auto] gap-3 items-center py-[11px] px-1 ${
                    i < CONTACTS.length - 1 ? "border-b border-navy/10" : ""
                  }`}
                >
                  <span className="font-mono text-[12.5px] text-navy/50">{c.time}</span>
                  <span className="text-[14px]">
                    {c.channel}
                    <span className="block text-[12px] text-navy/50 mt-0.5">{c.detail}</span>
                  </span>
                  <span
                    className={`font-mono text-[10.5px] tracking-[0.06em] uppercase px-2.5 py-1 rounded-full whitespace-nowrap ${
                      c.status === "ok" ? "bg-navy text-cream" : "bg-gold/15 text-goldDeep"
                    }`}
                  >
                    {c.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-3.5 pt-3 border-t border-dashed border-navy/20 text-[12.5px] text-navy/60">
              <strong className="text-navy">3 de 4</strong> contactos no llegaron a tiempo.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
