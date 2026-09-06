import Reveal from "./Reveal";

export default function Problem() {
  return (
    <Reveal className="max-w-[1180px] mx-auto px-6 py-[clamp(78px,11vw,150px)]">
      <div className="grid gap-[clamp(28px,5vw,72px)] items-start [grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))]">
        <h2 className="text-[clamp(30px,4.2vw,52px)] leading-[1.1] [text-wrap:pretty]">
          Cada oportunidad que espera demasiado, se enfría.
        </h2>
        <div className="border-l border-navy/12 pl-[clamp(20px,3vw,40px)]">
          <p className="text-[clamp(16px,1.4vw,18px)] leading-[1.75] text-secondary">
            Una consulta sin responder, una llamada perdida o una web que no genera confianza pueden
            terminar convirtiéndose en clientes para otro negocio.
          </p>
        </div>
      </div>
    </Reveal>
  );
}
