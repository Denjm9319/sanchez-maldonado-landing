import { useState } from "react";
import Reveal from "./Reveal";
import ConceptModal from "./ConceptModal";
import zenithShot from "../assets/projects/zenith-shot.png";
import auraShot from "../assets/projects/aura-shot.png";
import securifyShot from "../assets/projects/securify-shot.png";
import dental2Shot from "../assets/projects/dental2-shot.png";
import certboostShot from "../assets/projects/certboost-shot.png";
import sentidoDiarioShot from "../assets/projects/sentido-diario-shot.webp";
import draTaniaShot from "../assets/projects/dra-tania-shot.webp";
import arcariSilvinaShot from "../assets/projects/arcari-silvina-shot.webp";
import marcelaBritoShot from "../assets/projects/marcela-brito-shot.webp";

const REAL_PROJECTS = [
  {
    id: "sentido-diario",
    title: "Sentido Diario",
    thumb: sentidoDiarioShot,
    alt: "Sitio real de Sentido Diario, clínica de estética facial",
    rubro: "Estética facial y bienestar",
    objetivo: "Generar reservas de tratamientos y vender productos de skincare directo por WhatsApp.",
    description:
      "Landing de clínica de estética con catálogo de tratamientos y productos, comparativas de antes/después y turnos coordinados por WhatsApp.",
    capabilities: ["Web & Conversion", "Catálogo de productos", "Agendamiento por WhatsApp"],
    url: "https://sentidodiario.com/",
  },
  {
    id: "dra-tania",
    title: "Dra. Tania Mielnikowicz",
    thumb: draTaniaShot,
    alt: "Sitio real de la Dra. Tania Mielnikowicz, ginecóloga",
    rubro: "Ginecología y medicina reproductiva",
    objetivo: "Generar turnos mostrando trayectoria y prueba social real antes de pedir el contacto.",
    description:
      "Sitio profesional para una ginecóloga especializada en fertilidad, con formación, testimonios verificados y turnos coordinados por WhatsApp en sus tres consultorios.",
    capabilities: ["Web & Conversion", "Prueba social real", "Agendamiento por WhatsApp"],
    url: "https://drataniamielnikowicz.vercel.app/",
  },
  {
    id: "arcari-silvina",
    title: "Silvina Arcari",
    thumb: arcariSilvinaShot,
    alt: "Sitio real de Silvina Arcari, psicóloga y sexóloga clínica",
    rubro: "Psicología clínica y sexología",
    objetivo: "Resolver objeciones comunes antes de la consulta y agendar sesiones online o presenciales.",
    description:
      "Sitio profesional para una psicóloga y sexóloga clínica, con el enfoque explicado en detalle, testimonios y FAQ que despeja las dudas más frecuentes antes de agendar.",
    capabilities: ["Web & Conversion", "FAQ de objeciones", "Agendamiento por WhatsApp"],
    url: "https://arcarisilvina.com/",
  },
  {
    id: "marcela-brito",
    title: "Dra. Marcela Brito",
    thumb: marcelaBritoShot,
    alt: "Sitio real de la Dra. Marcela Brito, odontóloga en Valeria del Mar",
    rubro: "Odontología",
    objetivo: "Generar turnos por WhatsApp mostrando trayectoria y atendiendo tanto a vecinos como a turistas con urgencias.",
    description:
      "Sitio profesional para una odontóloga con más de 20 años de trayectoria en Valeria del Mar, con tratamientos, ubicación con mapa, coberturas aceptadas y turnos coordinados por WhatsApp.",
    capabilities: ["Web & Conversion", "Ubicación con mapa", "Agendamiento por WhatsApp"],
    url: "https://dramarcelabrito.vercel.app/",
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
  const [openConceptId, setOpenConceptId] = useState<string | null>(null);
  const [openRealId, setOpenRealId] = useState<string | null>(null);
  const activeConcept = CONCEPTS.find((c) => c.id === openConceptId) ?? null;
  const activeReal = REAL_PROJECTS.find((r) => r.id === openRealId) ?? null;

  return (
    <section id="proyectos" className="bg-white/[0.03] border-t border-b border-white/10">
      <Reveal className="max-w-[1180px] mx-auto px-6 pt-[clamp(78px,11vw,150px)] pb-[clamp(78px,11vw,150px)]">
        <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">Trabajo real</p>
        <h1 className="text-[clamp(30px,4.2vw,50px)] leading-[1.12] mb-5 max-w-[18em]">
          Proyectos que ya están en producción.
        </h1>
        <p className="text-[16.5px] text-cream/70 leading-[1.75] max-w-[38em] mb-[clamp(38px,5vw,64px)]">
          Sitios reales que armamos para nuestro propio negocio y para conocidos que confiaron en
          nosotros, más demos funcionales que probamos por rubro. Todo construido desde código y ya
          en producción — podés visitarlos ahora mismo.
        </p>
        <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-6 px-6 sm:mx-0 sm:px-0 sm:grid sm:gap-[clamp(18px,2.4vw,26px)] sm:justify-center sm:overflow-visible sm:[grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),280px))]">
          {REAL_PROJECTS.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setOpenRealId(r.id)}
              aria-haspopup="dialog"
              className="group text-left bg-white/5 rounded-[16px] overflow-hidden border border-white/15 p-0 cursor-pointer shrink-0 w-[78%] snap-start sm:w-auto sm:shrink"
            >
              <span className="block aspect-[4/3] overflow-hidden bg-black/20">
                <img
                  src={r.thumb}
                  alt={r.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top block transition-transform duration-500 ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.03]"
                />
              </span>
              <span className="block pt-[18px] px-5 pb-[22px]">
                <span className="text-[10px] tracking-[0.2em] uppercase text-gold block">Proyecto real</span>
                <span className="text-[17px] mt-2 block">{r.title}</span>
                <span className="text-[13.5px] text-cream/60 block mt-1">{r.rubro}</span>
              </span>
            </button>
          ))}
          {CONCEPTS.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setOpenConceptId(c.id)}
              aria-haspopup="dialog"
              className="group text-left bg-white/5 rounded-[16px] overflow-hidden border border-white/15 p-0 cursor-pointer shrink-0 w-[78%] snap-start sm:w-auto sm:shrink"
            >
              <span className="block aspect-[4/3] overflow-hidden bg-black/20">
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
                <span className="text-[13.5px] text-cream/60 block mt-1">{c.rubro}</span>
              </span>
            </button>
          ))}
        </div>
      </Reveal>

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
      {activeReal && (
        <ConceptModal
          title={activeReal.title}
          rubro={activeReal.rubro}
          objetivo={activeReal.objetivo}
          description={activeReal.description}
          capabilities={activeReal.capabilities}
          url={activeReal.url}
          badge="Proyecto real"
          ctaLabel="Ver sitio en vivo"
          onClose={() => setOpenRealId(null)}
        />
      )}
    </section>
  );
}
