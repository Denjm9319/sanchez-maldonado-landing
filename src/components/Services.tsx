import { useState } from "react";
import Reveal from "./Reveal";
import ServiceModal from "./ServiceModal";

function IconWebsite() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <circle cx="6.3" cy="6.75" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="8.3" cy="6.75" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconAds() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M3 17.5 9.5 11l4 4L21 6.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.5 6.5H21v5.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconChat() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M4 5.5h16v10.5H9.5L5 19.5V16H4z" strokeLinejoin="round" />
    </svg>
  );
}
function IconVoice() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M5 12a7 7 0 0 0 14 0M12 16v3.5M9 19.5h6" strokeLinecap="round" />
      <rect x="9.3" y="3" width="5.4" height="10.5" rx="2.7" />
    </svg>
  );
}
function IconAutomation() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M8.5 8.5a4 3 0 0 1 7 0M15.5 15.5a4 3 0 0 1-7 0" strokeLinecap="round" />
      <path d="m14.5 6.5 1 2-2 1M9.5 17.5l-1-2 2-1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconCreative() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path
        d="M12 4v3.2M12 16.8V20M4 12h3.2M16.8 12H20M6.5 6.5l2.2 2.2M15.3 15.3l2.2 2.2M17.5 6.5l-2.2 2.2M8.7 15.3l-2.2 2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const TINTS = ["bg-navy/[0.055]", "bg-teal/[0.08]", "bg-gold/[0.12]"];

const SERVICES = [
  {
    id: "websites",
    n: "01",
    title: "Websites",
    text: "Sitios premium orientados a conversión: estructura clara, carga rápida y una narrativa que genera confianza antes del primer contacto.",
    Icon: IconWebsite,
    howItWorks:
      "Diseñamos e implementamos el sitio completo — estructura, copy, velocidad y SEO técnico — listo para producción, en unas semanas según el alcance.",
    bestFor: "Negocios que todavía no tienen web, o cuya web actual no refleja lo que realmente ofrecen.",
    notFor:
      "Quien busca una tienda online compleja (e-commerce) o un sitio multi-idioma — eso lo evaluamos aparte.",
  },
  {
    id: "ads",
    n: "02",
    title: "Performance Ads",
    text: "Campañas de Meta Ads pensadas para generar oportunidades reales, no impresiones.",
    Icon: IconAds,
    howItWorks:
      "Planificamos, producimos las piezas y gestionamos las campañas, conectadas directamente al sistema que atiende esas consultas (WhatsApp, agente o formulario).",
    bestFor: "Negocios que ya atienden bien una consulta y quieren más volumen de forma constante.",
    notFor:
      "Negocios que todavía no pueden responder rápido — ahí conviene primero un agente de IA antes de invertir en más tráfico.",
  },
  {
    id: "chat",
    n: "03",
    title: "AI Chat Agents",
    text: "WhatsApp, Instagram, Messenger y Telegram, con respuestas inmediatas y tono propio.",
    Icon: IconChat,
    howItWorks:
      "Un agente entrenado con la información real de tu negocio responde estos canales al instante, todo el día.",
    bestFor: "Negocios con alto volumen de consultas repetitivas: turnos, precios, disponibilidad.",
    notFor: "Reemplazar por completo a tu equipo — se ocupa de lo repetitivo, no de negociaciones complejas.",
  },
  {
    id: "voice",
    n: "04",
    title: "AI Voice Agents",
    text: "Atención telefónica, calificación, seguimiento y reservas sin llamadas perdidas.",
    Icon: IconVoice,
    howItWorks: "Un agente de voz atiende llamadas, califica a quien llama y agenda o deriva según corresponda.",
    bestFor: "Negocios donde el teléfono sigue siendo un canal fuerte: clínicas, hoteles, inmobiliarias.",
    notFor: "Negocios que casi no reciben llamadas — ahí el chat rinde más.",
  },
  {
    id: "automation",
    n: "05",
    title: "Automatizaciones",
    text: "Integraciones y sistemas que reducen el trabajo manual del equipo.",
    Icon: IconAutomation,
    howItWorks:
      "Conectamos las herramientas que ya usás — agenda, CRM, planillas, WhatsApp — para que la información fluya sola, sin carga manual.",
    bestFor: "Negocios que ya identificaron una tarea repetitiva puntual que les come tiempo.",
    notFor: "Un punto de partida — rinde más una vez que la web o el agente ya están funcionando.",
  },
  {
    id: "creative",
    n: "06",
    title: "AI Creative",
    text: "Imágenes y contenido visual generado con IA, consistente con tu marca.",
    Icon: IconCreative,
    howItWorks:
      "Generamos imágenes y piezas visuales con IA, ajustadas a la identidad de tu marca, para redes o campañas.",
    bestFor: "Negocios que necesitan piezas frecuentes (posteos, anuncios) y no tienen diseñador propio.",
    notFor: "Reemplazar fotografía real de tu local, productos o equipo — eso siempre suma más confianza.",
  },
];

export default function Services() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = SERVICES.find((s) => s.id === openId) ?? null;

  return (
    <>
      <Reveal id="servicios" className="max-w-[1180px] mx-auto px-6 py-[clamp(78px,11vw,150px)]">
        <p className="text-[11px] tracking-[0.3em] uppercase text-teal mb-5">Servicios</p>
        <h2 className="text-[clamp(30px,4.2vw,50px)] leading-[1.12] max-w-[20em] mb-[clamp(38px,5vw,64px)] [text-wrap:pretty]">
          Un sistema, no una lista de servicios sueltos.
        </h2>
        <div className="grid gap-[clamp(18px,2.4vw,26px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),280px))]">
          {SERVICES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setOpenId(s.id)}
              aria-haspopup="dialog"
              className="group text-left bg-white rounded-[16px] overflow-hidden border border-navy/[0.08] p-0 cursor-pointer"
            >
              <span
                className={`flex items-center justify-center aspect-[4/3] ${TINTS[i % TINTS.length]} text-navy`}
              >
                <span className="group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(.22,.61,.36,1)]">
                  <s.Icon />
                </span>
              </span>
              <span className="block pt-[18px] px-5 pb-[22px]">
                <span className="text-[10px] tracking-[0.2em] uppercase text-gold block">{s.n}</span>
                <h3 className="text-[17px] mt-2 mb-1 text-navy">{s.title}</h3>
                <span className="text-[13.5px] text-secondary leading-[1.55] block">{s.text}</span>
                <span className="text-[13px] text-teal mt-3 block group-hover:text-navy">Ver más →</span>
              </span>
            </button>
          ))}
        </div>
      </Reveal>

      {active && (
        <ServiceModal
          title={active.title}
          text={active.text}
          howItWorks={active.howItWorks}
          bestFor={active.bestFor}
          notFor={active.notFor}
          onClose={() => setOpenId(null)}
        />
      )}
    </>
  );
}
