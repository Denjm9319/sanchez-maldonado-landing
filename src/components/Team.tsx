import Reveal from "./Reveal";

const TEAM = [
  {
    name: "Alexa Sánchez",
    role: "UX/UI · Inteligencia Artificial · Desarrollo",
  },
  {
    name: "Denis Maldonado",
    role: "Estrategia · Marketing · Ventas · Growth",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");
}

export default function Team() {
  return (
    <Reveal id="equipo" className="max-w-[1180px] mx-auto px-6 py-[clamp(78px,11vw,150px)]">
      <p className="text-[11px] tracking-[0.3em] uppercase text-teal mb-5">Quiénes somos</p>
      <h2 className="text-[clamp(30px,4.2vw,50px)] leading-[1.12] mb-[clamp(20px,3vw,28px)] max-w-[20em]">
        Detrás de Sánchez &amp; Maldonado.
      </h2>
      <p className="font-display italic text-[clamp(18px,2vw,22px)] text-teal leading-[1.5] max-w-[36em] mb-[clamp(40px,5vw,64px)] [text-wrap:pretty]">
        No implementamos tecnología porque sí. Primero entendemos dónde está la fricción del negocio
        y después construimos la solución más simple que pueda generar impacto real.
      </p>
      <div className="grid gap-[clamp(20px,2.5vw,28px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,270px),1fr))]">
        {TEAM.map((p) => (
          <div
            key={p.name}
            className="bg-white border border-navy/[0.09] rounded-[20px] p-[30px] px-7 flex items-center gap-5"
          >
            <span
              aria-hidden="true"
              className="shrink-0 w-14 h-14 rounded-full bg-navy text-cream font-display text-lg flex items-center justify-center"
            >
              {initials(p.name)}
            </span>
            <div>
              <h3 className="text-xl">{p.name}</h3>
              <p className="text-secondary text-[14px] leading-[1.5] mt-1">{p.role}</p>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
