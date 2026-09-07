import Reveal from "./Reveal";

const STEPS = [
  { n: "01 — Entendemos", text: "Analizamos el negocio y dónde se pierden oportunidades.", active: true },
  { n: "02 — Diseñamos", text: "Definimos qué combinación de web, Ads, IA o automatización tiene sentido." },
  { n: "03 — Implementamos", text: "Construimos y ponemos el sistema a funcionar." },
  {
    n: "04 — Optimizamos",
    text: "Medimos resultados, detectamos fricción y ajustamos el sistema según el uso real.",
  },
];

export default function Process() {
  return (
    <Reveal id="proceso" className="max-w-[1180px] mx-auto px-6 py-[clamp(78px,11vw,150px)]">
      <h2 className="text-[clamp(30px,4.2vw,50px)] leading-[1.12] mb-[clamp(38px,5vw,64px)]">Cómo trabajamos</h2>
      <div className="grid gap-[clamp(28px,4vw,56px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr))]">
        {STEPS.map((s) => (
          <div
            key={s.n}
            className={`pt-[22px] border-t-2 ${s.active ? "border-navy" : "border-navy/20"}`}
          >
            <span className="font-display text-sm text-gold tracking-[0.08em]">{s.n}</span>
            <p className="mt-3.5 text-body leading-[1.7] text-base">{s.text}</p>
          </div>
        ))}
      </div>
      <p className="mt-[clamp(30px,4vw,48px)] font-display text-[clamp(18px,2vw,22px)] text-teal">
        Sin venderte tecnología que no necesitás.
      </p>
    </Reveal>
  );
}
