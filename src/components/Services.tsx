import { useState } from "react";
import Reveal from "./Reveal";
import ServiceModal from "./ServiceModal";
import websiteImg from "../assets/services/websites.webp";
import adsImg from "../assets/services/ads.webp";
import chatImg from "../assets/services/chat.webp";
import voiceImg from "../assets/services/voice.webp";
import automationImg from "../assets/services/automation.webp";
import creativeImg from "../assets/services/creative.webp";

const SERVICES = [
  {
    id: "websites",
    n: "01",
    title: "Websites",
    text: "Sitios premium orientados a conversión: estructura clara, carga rápida y una narrativa que genera confianza antes del primer contacto.",
    image: websiteImg,
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
    image: adsImg,
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
    image: chatImg,
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
    image: voiceImg,
    howItWorks: "Un agente de voz atiende llamadas, califica a quien llama y agenda o deriva según corresponda.",
    bestFor: "Negocios donde el teléfono sigue siendo un canal fuerte: clínicas, hoteles, inmobiliarias.",
    notFor: "Negocios que casi no reciben llamadas — ahí el chat rinde más.",
  },
  {
    id: "automation",
    n: "05",
    title: "Automatizaciones",
    text: "Integraciones y sistemas que reducen el trabajo manual del equipo.",
    image: automationImg,
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
    image: creativeImg,
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
        <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">Servicios</p>
        <h2 className="text-[clamp(30px,4.2vw,50px)] leading-[1.12] max-w-[20em] mb-[clamp(38px,5vw,64px)] [text-wrap:pretty]">
          Un sistema, no una lista de servicios sueltos.
        </h2>
        <div className="grid gap-[clamp(18px,2.4vw,26px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),280px))]">
          {SERVICES.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setOpenId(s.id)}
              aria-haspopup="dialog"
              className="group text-left bg-white/5 rounded-[16px] overflow-hidden border border-white/15 p-0 cursor-pointer"
            >
              <span className="block aspect-[4/3] overflow-hidden bg-black/20">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover block transition-transform duration-500 ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.03]"
                />
              </span>
              <span className="block pt-[18px] px-5 pb-[22px]">
                <span className="text-[10px] tracking-[0.2em] uppercase text-gold block">{s.n}</span>
                <h3 className="text-[17px] mt-2 mb-1">{s.title}</h3>
                <span className="text-[13.5px] text-cream/65 leading-[1.55] block">{s.text}</span>
                <span className="text-[13px] text-gold mt-3 block group-hover:text-cream">Ver más →</span>
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
