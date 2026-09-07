import Reveal from "./Reveal";

const PILLARS = [
  {
    title: "Atraer",
    text: "Webs, contenido y campañas para generar oportunidades.",
    color: "#D6A75C",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="#D6A75C" strokeWidth={1.4} aria-hidden="true">
        <circle cx="13" cy="13" r="4" />
        <circle cx="13" cy="13" r="11" />
      </svg>
    ),
  },
  {
    title: "Atender",
    text: "Agentes inteligentes que responden consultas incluso cuando tu equipo no puede.",
    color: "#0E7C7B",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="#0E7C7B" strokeWidth={1.4} aria-hidden="true">
        <rect x="3" y="4" width="20" height="14" rx="3" />
        <path d="M8 18l-1 4 5-4" />
      </svg>
    ),
  },
  {
    title: "Convertir",
    text: "Seguimiento y automatización para ayudar a que cada oportunidad avance.",
    color: "#142B3D",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="#142B3D" strokeWidth={1.4} aria-hidden="true">
        <path d="M3 20L11 10l5 5 7-9" />
        <path d="M17 6h6v6" />
      </svg>
    ),
  },
];

export default function Pillars() {
  return (
    <Reveal
      id="pilares"
      aria-label="Atraer, atender y convertir"
      className="border-t border-b border-navy/[0.09]"
      style={{ display: "block" }}
    >
      <div className="max-w-[1180px] mx-auto px-6 grid [grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr))]">
        {PILLARS.map((p, i) => (
          <div
            key={p.title}
            className={`py-[clamp(38px,5vw,62px)] px-[clamp(20px,3vw,44px)] ${
              i < PILLARS.length - 1 ? "border-r border-navy/[0.09]" : ""
            } ${i === 0 ? "pl-0" : ""} ${i === PILLARS.length - 1 ? "pr-0" : ""}`}
          >
            {p.icon}
            <h3 className="text-2xl mt-5 mb-3">{p.title}</h3>
            <p className="text-secondary leading-[1.7] text-[15.5px]">{p.text}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
