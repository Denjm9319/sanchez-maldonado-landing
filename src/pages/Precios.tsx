import { useEffect, useRef, useState, type ReactNode } from "react";
import { useSEO } from "../hooks/useSEO";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { PRICING, WHATSAPP_LINK, waLink } from "../config/site";
import bloomVideo1 from "../assets/video/precios-bloom-1.mp4";
import bloomVideo2 from "../assets/video/precios-bloom-2.mp4";
import bloomVideo3 from "../assets/video/precios-bloom-3.mp4";

const PLANS = [
  {
    quote: "“Necesito captar más oportunidades”",
    title: "Web & Conversion",
    desc: "Sitio premium, estructura de conversión y contenido listo para captar oportunidades.",
    price: PRICING.web,
    cta: "Consultar alcance",
    waMessage: "Hola, vi la web y quiero consultar sobre el servicio de Websites para mi negocio.",
    highlight: false,
  },
  {
    quote: "“Necesito atender mejor las consultas”",
    title: "AI Agents",
    desc: "Agentes de chat o voz —incluida Sofia— entrenados con la información de tu negocio.",
    price: PRICING.agents,
    cta: "Pedir una demo",
    waMessage: "Hola, vi la web y quiero pedir una demo de los AI Agents para mi negocio.",
    highlight: true,
  },
  {
    quote: "“Necesito integrar todo el proceso”",
    title: "Growth Systems",
    desc: "Web + Ads + IA + automatizaciones funcionando como un solo sistema comercial.",
    price: "Proyecto personalizado",
    cta: "Hablemos del proyecto",
    waMessage: "Hola, vi la web y quiero hablar sobre un proyecto de Growth Systems para mi negocio.",
    highlight: false,
  },
];

const MISSION_LINES = [
  {
    pre: "No cobramos por hora. Cobramos por ",
    pill: "resultados",
    post: ": lo que tu negocio necesita para dejar de perder clientes.",
  },
  {
    pre: "Cada presupuesto se arma después de entender tu ",
    pill: "negocio real",
    post: " — no antes.",
  },
  {
    pre: "Trabajamos ",
    pill: "sin letra chica",
    post: ": sabés desde el día uno qué estás pagando y por qué.",
  },
];

/** Fades/slides its content in once it's mostly in view, and stays there — no
 * scroll-driven blending, so there's no in-between state to land on. */
function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(reduce);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduce]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function NextButton({ targetId }: { targetId: string }) {
  return (
    <button
      type="button"
      onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" })}
      aria-label="Seguir bajando"
      className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/25 text-white flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-sm"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}

function Beat({
  id,
  videoSrc,
  nextId,
  children,
}: {
  id: string;
  videoSrc: string;
  nextId?: string;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // All 6 beats stay mounted at once (so scroll-snap can move between them
  // natively), so without this every video would try to play simultaneously
  // on load. Only the beat actually in view plays its video; the rest sit
  // paused and barely loaded (preload="metadata").
  useEffect(() => {
    if (reduce) return;
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.4 }
    );
    obs.observe(section);
    return () => obs.disconnect();
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className="relative h-full w-full shrink-0 snap-start scroll-mt-0 flex items-center justify-center overflow-hidden"
    >
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <div className="relative z-10 w-full px-6 py-16">{children}</div>
      {nextId && <NextButton targetId={nextId} />}
    </section>
  );
}

export default function Precios() {
  useSEO({
    title: "Precios",
    description:
      "Cómo armamos cada proyecto en DeXa: webs premium, agentes de IA y sistemas de crecimiento a medida del negocio, sin paquetes cerrados ni letra chica.",
    path: "/precios",
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // Same reasoning as elsewhere on this page: CSS vh/dvh units are not
    // reliable across mobile browsers/Tailwind's own class ordering, so the
    // snap container's height is set directly from the real viewport size.
    const resize = () => {
      el.style.height = `${window.innerHeight}px`;
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-y-auto snap-y snap-mandatory bg-black"
      style={{ scrollSnapType: "y mandatory" }}
    >
      {/* Beat 1: intro */}
      <Beat id="precios-intro" videoSrc={bloomVideo1} nextId="precios-planes">
        <div className="max-w-[560px] mx-auto">
          <Reveal>
            <div className="bg-black/50 backdrop-blur-lg border border-white/15 rounded-[4px] p-8 sm:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.35)] text-center sm:text-left">
              <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-4">Precios</p>
              <h1 className="font-heroDisplay text-[clamp(30px,4.2vw,50px)] leading-[1.1] text-white mb-4">
                Cada proyecto se arma según lo que el negocio necesita.
              </h1>
              <p className="text-white/65 text-[14px] sm:text-[15px] leading-[1.65]">
                Sin paquetes cerrados ni letra chica. Contanos qué necesitás y armamos el proyecto justo para
                eso.
              </p>
            </div>
          </Reveal>
        </div>
      </Beat>

      {/* Beat 2: plans */}
      <Beat id="precios-planes" videoSrc={bloomVideo1} nextId="precios-mission-0">
        <Reveal className="w-full">
          <div className="flex sm:grid sm:grid-cols-3 sm:justify-items-center gap-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none px-6 sm:px-0 max-w-[940px] mx-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {PLANS.map((plan) => (
              <div
                key={plan.title}
                className={`w-[260px] sm:w-[280px] max-w-full shrink-0 snap-center rounded-[4px] p-6 flex flex-col gap-3 border shadow-[0_30px_60px_rgba(0,0,0,0.35)] backdrop-blur-lg ${
                  plan.highlight ? "bg-black/50 border-gold/50" : "bg-black/50 border-white/15"
                }`}
              >
                <p className="font-heroDisplay italic text-[13px] text-gold">{plan.quote}</p>
                <h3 className="font-heroDisplay text-xl text-white -mt-1">{plan.title}</h3>
                <p className="text-white/65 text-[13.5px] leading-[1.55]">{plan.desc}</p>
                <p className={`font-heroDisplay text-[22px] mt-auto ${plan.highlight ? "text-gold" : "text-white"}`}>
                  {plan.price}
                </p>
                <a
                  href={waLink(plan.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-center px-4 py-3 rounded-full text-[13.5px] ${
                    plan.highlight
                      ? "bg-gold text-navy hover:bg-[#c79656]"
                      : "border border-white/30 text-white hover:border-white hover:bg-white/10"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="mt-3 sm:hidden text-center text-[11px] text-white/40 tracking-wide">
            Deslizá para ver los 3 planes →
          </p>
          <p className="mt-5 text-center text-[12.5px] text-white/45 max-w-[36em] mx-auto px-6">
            El precio depende del alcance, integraciones, volumen y necesidades del negocio.
          </p>
        </Reveal>
      </Beat>

      {/* Beats 3-5: mission lines */}
      {MISSION_LINES.map((line, i) => (
        <Beat
          key={line.pill}
          id={`precios-mission-${i}`}
          videoSrc={i === 0 ? bloomVideo2 : i === 1 ? bloomVideo2 : bloomVideo3}
          nextId={i < MISSION_LINES.length - 1 ? `precios-mission-${i + 1}` : "precios-cta"}
        >
          <Reveal className="max-w-[56rem] mx-auto">
            <p className="text-center font-heroDisplay text-[26px] sm:text-[42px] lg:text-[52px] leading-[1.3] text-white">
              {line.pre}
              <span className="inline-block bg-gold text-navy rounded-full px-3 py-0.5 sm:px-4">
                {line.pill}
              </span>
              {line.post}
            </p>
          </Reveal>
        </Beat>
      ))}

      {/* Beat 6: final CTA */}
      <Beat id="precios-cta" videoSrc={bloomVideo3}>
        <div className="max-w-[28rem] mx-auto">
          <Reveal>
            <div className="bg-black/45 backdrop-blur-lg border border-white/15 p-8 sm:p-12 text-center">
              <h2 className="font-heroDisplay text-[26px] sm:text-[32px] text-white mb-3">
                ¿Hablamos de tu proyecto?
              </h2>
              <p className="text-white/60 text-[14px] sm:text-[15px] mb-7 max-w-[22em] mx-auto">
                Contanos qué necesitás y te decimos qué tiene sentido armar — sin vueltas.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-gold text-navy px-7 py-4 rounded-full text-[15px] font-medium hover:bg-[#c79656] transition-colors"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </Beat>
    </div>
  );
}
