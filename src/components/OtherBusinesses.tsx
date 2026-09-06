import Reveal from "./Reveal";

const BUSINESSES = [
  { title: "Inmobiliarias", text: "Consultas por propiedad y coordinación de visitas." },
  { title: "Gimnasios", text: "Planes, altas y recuperación de socios inactivos." },
  { title: "Hoteles", text: "Disponibilidad, tarifas y reservas directas." },
  { title: "Concesionarias", text: "Calificación de interesados y agenda de test drives." },
];

export default function OtherBusinesses() {
  return (
    <Reveal className="max-w-[1180px] mx-auto px-6 py-[clamp(78px,11vw,150px)]">
      <div className="grid gap-[clamp(30px,5vw,72px)] items-start [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
        <div>
          <h2 className="text-[clamp(30px,4.2vw,50px)] leading-[1.1] mb-[22px] [text-wrap:pretty]">
            La misma inteligencia, adaptada a tu operación.
          </h2>
          <p className="text-secondary leading-[1.75] text-[16.5px] max-w-[32em]">
            Sofia está especializada en clínicas dentales y estéticas, pero desarrollamos agentes con
            la misma base para otros rubros donde cada consulta cuenta.
          </p>
        </div>
        <div className="grid gap-px bg-navy/10 [grid-template-columns:repeat(auto-fit,minmax(min(100%,150px),1fr))]">
          {BUSINESSES.map((b) => (
            <div key={b.title} className="bg-cream p-7 px-5">
              <h3 className="text-[19px]">{b.title}</h3>
              <p className="text-sm text-secondary mt-2 leading-[1.6]">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
