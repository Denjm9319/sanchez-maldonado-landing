import { useState } from "react";
import Reveal from "./Reveal";
import Lightbox from "./Lightbox";
import clinicaDentalThumb from "../assets/projects/clinica-dental-thumb.webp";
import clinicaDentalFull from "../assets/projects/clinica-dental-full.webp";
import inmobiliariaThumb from "../assets/projects/inmobiliaria-thumb.webp";
import inmobiliariaFull from "../assets/projects/inmobiliaria-full.webp";
import hotelThumb from "../assets/projects/hotel-thumb.webp";
import hotelFull from "../assets/projects/hotel-full.webp";

const PROJECTS = [
  {
    id: "clinica-dental",
    title: "Clínica Dental",
    description: "Landing + Sofia + reservas: la consulta entra por WhatsApp y sale agendada.",
    thumb: clinicaDentalThumb,
    full: clinicaDentalFull,
    alt: "Concept de landing para clínica dental",
  },
  {
    id: "inmobiliaria",
    title: "Inmobiliaria",
    description: "Web + WhatsApp + gestión de leads con seguimiento automático.",
    thumb: inmobiliariaThumb,
    full: inmobiliariaFull,
    alt: "Concept de web para inmobiliaria",
  },
  {
    id: "hotel",
    title: "Hotel Boutique",
    description: "Web + asistente de reservas que responde disponibilidad al instante.",
    thumb: hotelThumb,
    full: hotelFull,
    alt: "Concept de web para hotel boutique",
  },
];

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = PROJECTS.find((p) => p.id === openId) ?? null;

  return (
    <section id="proyectos" className="bg-creamDeep border-t border-b border-navy/[0.08]">
      <Reveal className="max-w-[1180px] mx-auto px-6 py-[clamp(78px,11vw,150px)]">
        <p className="text-[11px] tracking-[0.3em] uppercase text-teal mb-5">Proyectos</p>
        <h2 className="text-[clamp(30px,4.2vw,50px)] leading-[1.12] mb-[clamp(38px,5vw,64px)]">
          Ideas convertidas en sistemas digitales.
        </h2>
        <div className="grid gap-[clamp(22px,3vw,34px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
          {PROJECTS.map((p) => (
            <article key={p.id} className="bg-white rounded-[18px] overflow-hidden border border-navy/[0.08]">
              <button
                type="button"
                onClick={() => setOpenId(p.id)}
                aria-label={`Ampliar captura del proyecto ${p.title}`}
                className="group block w-full p-0 border-none bg-cream cursor-zoom-in aspect-[4/3] overflow-hidden"
              >
                <img
                  src={p.thumb}
                  alt={p.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top block transition-transform duration-500 ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.03]"
                />
              </button>
              <div className="pt-[26px] px-6 pb-[30px]">
                <span className="text-[10.5px] tracking-[0.2em] uppercase text-gold">Concept / Demo</span>
                <h3 className="text-[22px] mt-3 mb-2.5">{p.title}</h3>
                <p className="text-[14.5px] text-secondary leading-[1.65]">{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      {active && <Lightbox src={active.full} alt={active.alt} onClose={() => setOpenId(null)} />}
    </section>
  );
}
