import { useState } from "react";
import Reveal from "./Reveal";
import ServiceModal from "./ServiceModal";
import DragRow from "./DragRow";
import websiteImg from "../assets/services/websites.webp";
import chatImg from "../assets/services/chat.webp";
import voiceImg from "../assets/services/voice.webp";
import automationImg from "../assets/services/automation.webp";

const SERVICES = [
  {
    id: "websites",
    n: "01",
    eyebrow: "Web & Conversion",
    title: "Web de Conversión",
    tagline: "Una web premium diseñada para transformar visitas en consultas, reservas y oportunidades reales.",
    image: websiteImg,
    priceLines: ["Desde USD 599"],
    bullets: [
      "Diseño responsive y mobile-first",
      "Estructura orientada a conversión",
      "Copy y estrategia según alcance",
      "WhatsApp, formularios o agenda",
      "Integraciones básicas",
      "Publicación y puesta online",
    ],
    notes: [
      "¿Ya tenés imágenes y copy listos? Podés armar una versión express desde USD 299 como complemento de otro sistema Mimoru.",
    ],
    ctaLabel: "Quiero mi web",
    waMessage: "Hola, vi la web y quiero armar mi Web de Conversión.",
  },
  {
    id: "setter",
    n: "02",
    eyebrow: "AI Conversational Setter",
    title: "Un setter con IA que conversa como tu mejor setter.",
    tagline:
      "Responde, califica, hace seguimiento y lleva cada conversación hacia el siguiente paso — las 24 horas.",
    image: chatImg,
    priceLines: ["USD 8.000/año", "Pago único", "o", "USD 839/mes"],
    bullets: [
      "CRM propio",
      "Conversaciones altamente personalizadas",
      "Calificación automática de prospectos",
      "Seguimiento de oportunidades",
      "Puede enviar audios, imágenes y contenido",
      "WhatsApp, Instagram, Messenger",
      "Personalidad y tono adaptados a tu marca",
      "Historial y contexto de cada prospecto",
      "Automatización del proceso comercial",
    ],
    notes: [
      "Con el plan anual ahorrás USD 2.068 frente al pago mensual.",
      "No es un chatbot de preguntas frecuentes. Es una capa comercial que trabaja cada conversación como lo haría un setter.",
    ],
    ctaLabel: "Ver cómo conversa",
    waMessage: "Hola, vi la web y quiero ver cómo conversa el AI Conversational Setter.",
  },
  {
    id: "voice",
    n: "03",
    eyebrow: "AI Voice Reception",
    title: "Tu recepción telefónica con IA, funcionando 24/7.",
    tagline:
      "Atiende varias llamadas al mismo tiempo, entiende qué necesita cada persona, califica, agenda y hace seguimiento aunque tu equipo no pueda responder.",
    image: voiceImg,
    priceLines: ["USD 2.500 implementación", "Primeros 28 días de funcionamiento incluidos", "Luego: USD 800/mes"],
    bullets: [
      "Agente de voz personalizado",
      "Llamadas entrantes y flujos salientes",
      "Calificación de consultas",
      "Agenda, recordatorios y reprogramación",
      "Integración con GoHighLevel",
      "CRM + pipeline",
      "Automatizaciones de seguimiento",
      "Registro de llamadas y resultados",
      "Testing antes de salir en producción",
      "Optimización durante los primeros 28 días",
    ],
    notes: [
      "Solo 4 nuevas implementaciones por mes. Cada agente requiere configuración, pruebas e integración personalizada.",
    ],
    ctaLabel: "Pedir una demo",
    waMessage: "Hola, vi la web y quiero pedir una demo de AI Voice Reception.",
  },
  {
    id: "growth",
    n: "04",
    eyebrow: "Growth System",
    title: "Todo conectado en un solo sistema comercial.",
    tagline:
      "Diseñamos la infraestructura completa para captar oportunidades, atenderlas y hacer seguimiento sin depender de herramientas desconectadas.",
    image: automationImg,
    priceLines: ["Proyecto personalizado"],
    bulletsLabel: "Puede incluir",
    bullets: [
      "Web de conversión",
      "AI Conversational Setter",
      "AI Voice Reception",
      "GoHighLevel",
      "CRM y pipelines",
      "Automatizaciones",
      "WhatsApp y seguimiento",
      "Agenda y reservas",
      "Meta Ads",
      "Creatividades con IA",
      "Tracking e integraciones",
    ],
    notes: [
      "No te vendemos herramientas sueltas. Analizamos dónde se están perdiendo oportunidades y construimos el sistema alrededor de ese problema.",
    ],
    ctaLabel: "Diseñar mi Growth System",
    waMessage: "Hola, vi la web y quiero diseñar mi Growth System.",
  },
];

export default function Services() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = SERVICES.find((s) => s.id === openId) ?? null;

  return (
    <>
      <Reveal id="servicios" className="max-w-[1180px] mx-auto px-6 pt-[clamp(78px,11vw,150px)]">
        <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">Servicios</p>
        <h2 className="text-[clamp(30px,4.2vw,50px)] leading-[1.12] max-w-[20em] mb-[clamp(38px,5vw,64px)] [text-wrap:pretty]">
          Un sistema, no una lista de servicios sueltos.
        </h2>
      </Reveal>
      <Reveal className="w-screen relative left-1/2 -mx-[50vw] pb-[clamp(78px,11vw,150px)]">
        <DragRow
          items={SERVICES}
          onOpen={(s) => setOpenId(s.id)}
          renderCard={(s) => (
            <>
              <span className="block aspect-[4/3] overflow-hidden bg-black/20">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="w-full h-full object-cover block pointer-events-none transition-transform duration-500 ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.03]"
                />
              </span>
              <span className="block pt-[18px] px-5 pb-[22px]">
                <span className="text-[10px] tracking-[0.2em] uppercase text-gold block">
                  {s.n} — {s.eyebrow}
                </span>
                <h3 className="text-[17px] mt-2 mb-1">{s.title}</h3>
                <span className="text-[13.5px] text-cream/65 leading-[1.55] block">{s.tagline}</span>
                <span className="text-[13px] text-gold mt-3 block group-hover:text-cream">Ver oferta →</span>
              </span>
            </>
          )}
        />
      </Reveal>

      {active && (
        <ServiceModal
          eyebrow={active.eyebrow}
          n={active.n}
          title={active.title}
          tagline={active.tagline}
          priceLines={active.priceLines}
          bulletsLabel={active.bulletsLabel}
          bullets={active.bullets}
          notes={active.notes}
          ctaLabel={active.ctaLabel}
          waMessage={active.waMessage}
          onClose={() => setOpenId(null)}
        />
      )}
    </>
  );
}
