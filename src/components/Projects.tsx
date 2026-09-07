import { useState } from "react";
import Reveal from "./Reveal";
import Lightbox from "./Lightbox";
import ConceptModal from "./ConceptModal";
import clinicaDentalThumb from "../assets/projects/clinica-dental-thumb.webp";
import clinicaDentalFull from "../assets/projects/clinica-dental-full.webp";
import inmobiliariaThumb from "../assets/projects/inmobiliaria-thumb.webp";
import inmobiliariaFull from "../assets/projects/inmobiliaria-full.webp";
import hotelThumb from "../assets/projects/hotel-thumb.webp";
import hotelFull from "../assets/projects/hotel-full.webp";
import zenithShot from "../assets/projects/zenith-shot.png";
import auraShot from "../assets/projects/aura-shot.png";
import securifyShot from "../assets/projects/securify-shot.png";
import dental2Shot from "../assets/projects/dental2-shot.png";
import certboostShot from "../assets/projects/certboost-shot.png";

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

const CONCEPTS = [
  {
    id: "zenith",
    title: "Zenith Realty",
    thumb: zenithShot,
    alt: "Concept de landing para inmobiliaria de lujo",
    rubro: "Inmobiliaria de lujo",
    objetivo: "Captar consultas calificadas sobre propiedades premium y agendar una llamada con un asesor.",
    description:
      "Landing de inmobiliaria boutique con catálogo de propiedades exclusivas, fichas con precio, ubicación y superficie, y un CTA directo para agendar una llamada.",
    capabilities: ["Web & Conversion", "Catálogo de propiedades", "Agendamiento"],
    url: "https://zenith-haven-build.lovable.app/",
  },
  {
    id: "aura",
    title: "Aura Wellness",
    thumb: auraShot,
    alt: "Concept de landing para telemedicina y bienestar",
    rubro: "Salud y bienestar / telemedicina",
    objetivo: "Vender planes de tratamiento por suscripción y calificar al paciente antes de la consulta.",
    description:
      "Landing tipo e-commerce de telesalud, con catálogo de tratamientos, precios claros, reseñas y un flujo de \"ver si calificás\" antes de avanzar.",
    capabilities: ["Web & Conversion", "Prueba social", "Flujo de calificación"],
    url: "https://aura-wellness-layout.lovable.app/",
  },
  {
    id: "securify",
    title: "Securify",
    thumb: securifyShot,
    alt: "Concept de landing para producto SaaS",
    rubro: "SaaS / Tecnología B2B",
    objetivo: "Convertir visitantes en registros mostrando métricas de confianza y credibilidad del producto.",
    description:
      "Landing de producto SaaS enfocada en confianza, con estadísticas de uso destacadas y un único CTA de registro.",
    capabilities: ["Web & Conversion", "Social proof numérico", "CTA de conversión"],
    url: "https://secure-start-show.lovable.app/",
  },
  {
    id: "dental2",
    title: "Dental Health",
    thumb: dental2Shot,
    alt: "Concept de landing para clínica dental",
    rubro: "Clínica dental",
    objetivo: "Generar consultas y citas para tratamientos estéticos y de urgencia.",
    description:
      "Landing de clínica dental con galería de casos, servicios (carillas, coronas, blanqueamiento, implantes) y llamadas a la acción para pedir cita o consulta gratuita.",
    capabilities: ["Web & Conversion", "Galería de casos", "Agendamiento"],
    url: "https://lucid-dental-layout.lovable.app/",
  },
  {
    id: "certboost",
    title: "Design Rocket Certificates",
    thumb: certboostShot,
    alt: "Concept de landing para certificaciones online",
    rubro: "Edtech / Certificaciones online",
    objetivo: "Convertir visitantes en solicitudes de certificado, apoyándose en el respaldo de evaluadores expertos.",
    description:
      "Landing de producto para certificar habilidades de diseño, con propuesta de valor clara, evaluación por expertos y un sello de verificación pública.",
    capabilities: ["Web & Conversion", "Prueba social", "CTA de conversión"],
    url: "https://certificate-booster.lovable.app/",
  },
];

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [openConceptId, setOpenConceptId] = useState<string | null>(null);
  const active = PROJECTS.find((p) => p.id === openId) ?? null;
  const activeConcept = CONCEPTS.find((c) => c.id === openConceptId) ?? null;

  return (
    <section id="proyectos" className="bg-creamDeep border-t border-b border-navy/[0.08]">
      <Reveal className="max-w-[1180px] mx-auto px-6 py-[clamp(78px,11vw,150px)]">
        <p className="text-[11px] tracking-[0.3em] uppercase text-teal mb-5">Proyectos</p>
        <h2 className="text-[clamp(30px,4.2vw,50px)] leading-[1.12] mb-[clamp(38px,5vw,64px)]">
          Ideas convertidas en sistemas digitales.
        </h2>
        <div className="grid gap-[clamp(22px,3vw,34px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
          {PROJECTS.map((p) => (
            <article key={p.id} className="bg-white rounded-[16px] overflow-hidden border border-navy/[0.08]">
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
              <div className="pt-[18px] px-5 pb-[22px]">
                <span className="text-[10px] tracking-[0.2em] uppercase text-gold block">Concept / Demo</span>
                <h3 className="text-[17px] mt-2 mb-1">{p.title}</h3>
                <p className="text-[13.5px] text-secondary leading-[1.55]">{p.description}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="text-[11px] tracking-[0.3em] uppercase text-teal mt-[clamp(56px,7vw,90px)] mb-6">
          Más conceptos
        </p>
        <div className="grid gap-[clamp(18px,2.4vw,26px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr))]">
          {CONCEPTS.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setOpenConceptId(c.id)}
              aria-haspopup="dialog"
              className="group text-left bg-white rounded-[16px] overflow-hidden border border-navy/[0.08] p-0 cursor-pointer"
            >
              <span className="block aspect-[4/3] overflow-hidden bg-cream">
                <img
                  src={c.thumb}
                  alt={c.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top block transition-transform duration-500 ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.03]"
                />
              </span>
              <span className="block pt-[18px] px-5 pb-[22px]">
                <span className="text-[10px] tracking-[0.2em] uppercase text-gold block">Concept / Demo</span>
                <span className="text-[17px] mt-2 block">{c.title}</span>
                <span className="text-[13.5px] text-secondary block mt-1">{c.rubro}</span>
              </span>
            </button>
          ))}
        </div>
      </Reveal>

      {active && <Lightbox src={active.full} alt={active.alt} onClose={() => setOpenId(null)} />}
      {activeConcept && (
        <ConceptModal
          title={activeConcept.title}
          rubro={activeConcept.rubro}
          objetivo={activeConcept.objetivo}
          description={activeConcept.description}
          capabilities={activeConcept.capabilities}
          url={activeConcept.url}
          onClose={() => setOpenConceptId(null)}
        />
      )}
    </section>
  );
}
