import Reveal from "./Reveal";

const ITEMS = [
  {
    label: "Base",
    title: "Un sitio pensado para vender",
    text: "Cada sección tiene un objetivo: que quien te visita termine escribiéndote, no solo mirando.",
    icon: (
      <>
        <rect x="3" y="4.5" width="18" height="15" rx="2.2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <circle cx="6.3" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
        <circle cx="8.3" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "Conectado",
    title: "Enganchado a cómo ya trabajás",
    text: "Agenda, WhatsApp, pagos, formularios — todo conectado entre sí, sin que tengas que aprender una herramienta nueva.",
    icon: (
      <>
        <rect x="3" y="7" width="8" height="8" rx="2" />
        <rect x="13" y="7" width="8" height="8" rx="2" />
        <line x1="11" y1="11" x2="13" y2="11" />
      </>
    ),
  },
  {
    label: "A escala",
    title: "Cuando ya no entra en una plantilla",
    text: "Paneles a medida, catálogos grandes, procesos internos automatizados: si tu operación es más compleja, la construimos desde cero para que funcione como vos necesitás.",
    icon: (
      <>
        <path d="M12 3.5 21 8.5 12 13.5 3 8.5 12 3.5Z" />
        <path d="M3 13.5 12 18.5 21 13.5" />
      </>
    ),
  },
];

export default function Capabilities() {
  return (
    <section className="relative bg-cream text-navy">
      <Reveal className="max-w-[1180px] mx-auto px-6 py-[clamp(70px,9vw,120px)]">
        <p className="text-[11px] tracking-[0.3em] uppercase text-goldDeep mb-5">Del sitio al sistema</p>
        <h2 className="font-display text-[clamp(26px,3.2vw,38px)] leading-[1.12] mb-4 max-w-[14em]">
          De una web simple al sistema completo.
        </h2>
        <p className="text-[16px] leading-relaxed text-navy/65 max-w-[36em] mb-[clamp(36px,4vw,52px)]">
          Empezás con un sitio que vende. Si tu operación lo pide, seguimos construyendo lo que haga falta
          atrás — vos decidís hasta dónde.
        </p>
        <div className="grid gap-px bg-navy/15 border border-navy/15 rounded-[14px] overflow-hidden [grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr))]">
          {ITEMS.map((item) => (
            <div key={item.label} className="bg-cream px-[22px] py-6">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-goldDeep mb-4"
              >
                {item.icon}
              </svg>
              <span className="block text-[11px] tracking-[0.08em] uppercase text-goldDeep mb-2.5">
                {item.label}
              </span>
              <h3 className="text-[17px] mb-2">{item.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-navy/65">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-7 pt-[22px] border-t border-navy/15 text-[15px] leading-relaxed text-navy/65 max-w-[38em]">
          ¿Tu negocio ya usa dos o tres herramientas sueltas para vender? Contanos cómo trabaja hoy — te
          decimos si conviene conectarlas o construir el sistema completo de una vez.
        </p>
      </Reveal>
    </section>
  );
}
