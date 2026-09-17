import Reveal from "./Reveal";
import SpotlightBorder from "./SpotlightBorder";
import { waLink } from "../config/site";

function MonitorIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 5h16v11H8l-4 4V5Z" />
      <path d="M8 9h8M8 12.5h5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 3h3l1.5 4.5L8 9.5a11 11 0 0 0 6.5 6.5l2-2.5L21 15v3a2 2 0 0 1-2 2C10.5 20 4 13.5 4 5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="5" cy="6" r="2.4" />
      <circle cx="19" cy="6" r="2.4" />
      <circle cx="12" cy="18" r="2.4" />
      <path d="M7 7.3 10.3 16M17 7.3 13.7 16M7.4 6h9.2" />
    </svg>
  );
}

const SERVICES = [
  {
    id: "websites",
    n: "01",
    eyebrow: "Web & Conversion",
    title: "Web de Conversión",
    tagline: "Una web premium diseñada para transformar visitas en consultas, reservas y oportunidades reales.",
    Icon: MonitorIcon,
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
    Icon: ChatIcon,
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
    Icon: PhoneIcon,
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
    Icon: NetworkIcon,
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
  return (
    <Reveal id="servicios" className="max-w-[1180px] mx-auto px-6 py-[clamp(78px,11vw,150px)]">
      <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">Servicios</p>
      <h2 className="text-[clamp(30px,4.2vw,50px)] leading-[1.12] max-w-[20em] mb-[clamp(48px,6vw,76px)] [text-wrap:pretty]">
        Un sistema, no una lista de servicios sueltos.
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        {SERVICES.map((s, i) => (
          <Reveal key={s.id} style={{ transitionDelay: `${i * 90}ms` }}>
            <SpotlightBorder radius="rounded-[20px]" size={420} intensity={0.55} className="h-full">
              <div className="h-full flex flex-col bg-white/[0.03] border border-white/10 rounded-[20px] p-[clamp(24px,3vw,34px)]">
                <div className="flex items-center justify-between mb-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <s.Icon />
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-cream/45">
                    {s.n} — {s.eyebrow}
                  </span>
                </div>

                <h3 className="text-[19px] leading-[1.3] mb-2.5 text-cream">{s.title}</h3>
                <p className="text-[13.5px] text-cream/65 leading-[1.6] mb-6">{s.tagline}</p>

                <div className="rounded-[14px] border border-white/10 bg-black/20 p-[16px] mb-6">
                  {s.priceLines.map((line, li) => {
                    const isPrice = /USD/.test(line);
                    const isSeparator = line.trim().toLowerCase() === "o";
                    return (
                      <p
                        key={li}
                        className={
                          isSeparator
                            ? "text-[11px] text-cream/40 uppercase tracking-[0.15em] my-0.5"
                            : isPrice
                              ? "text-[20px] text-gold font-medium leading-[1.3]"
                              : "text-[12.5px] text-cream/55 leading-[1.4]"
                        }
                      >
                        {line}
                      </p>
                    );
                  })}
                </div>

                {s.bulletsLabel && (
                  <p className="text-[10.5px] tracking-[0.15em] uppercase text-gold mb-2">{s.bulletsLabel}</p>
                )}
                <ul className="grid gap-[7px] text-[13.5px] mb-6">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 leading-[1.4] text-cream/80">
                      <span className="text-gold shrink-0">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {s.notes && s.notes.length > 0 && (
                  <div className="grid gap-2.5 mb-6">
                    {s.notes.map((note, ni) => (
                      <p
                        key={ni}
                        className="text-[12.5px] leading-[1.55] text-cream/55 border-l-2 border-gold/40 pl-3.5"
                      >
                        {note}
                      </p>
                    ))}
                  </div>
                )}

                <a
                  href={waLink(s.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex justify-center bg-gold text-navy px-6 py-3.5 rounded-full text-[14px] font-medium hover:bg-cream transition-colors"
                >
                  {s.ctaLabel}
                </a>
              </div>
            </SpotlightBorder>
          </Reveal>
        ))}
      </div>
    </Reveal>
  );
}
