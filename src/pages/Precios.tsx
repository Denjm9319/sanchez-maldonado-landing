import { useEffect, useRef, useState } from "react";
import { useSEO } from "../hooks/useSEO";
import { useReducedMotion } from "../hooks/useReducedMotion";
import ScrollVideo from "../components/ScrollVideo";
import { PRICING, WHATSAPP_LINK, waLink } from "../config/site";
import heroVideo from "../assets/video/hero-aether.mp4";

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

const CONTAINER_VH = 500;

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

function applyStyle(el: HTMLElement | null, opacity: number, tx: number, ty: number, blur: number) {
  if (!el) return;
  el.style.opacity = String(opacity);
  el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
  el.style.filter = blur > 0.01 ? `blur(${blur}px)` : "none";
  el.style.pointerEvents = opacity > 0.4 ? "auto" : "none";
}

function cardWindow(
  p: number,
  enterStart: number,
  enterDur: number,
  exitStart: number,
  exitDur: number,
  tx: number,
  ty: number
) {
  let op = 0,
    bl = 16,
    x = tx,
    y = ty;
  if (p >= enterStart && p <= 0.333) {
    const r = clamp01((p - enterStart) / enterDur);
    op = r;
    bl = (1 - r) * 16;
    x = (1 - r) * tx;
    y = (1 - r) * ty;
  } else if (p > 0.333 && p <= exitStart + exitDur) {
    const r = clamp01((p - exitStart) / exitDur);
    op = 1 - r;
    bl = r * 16;
    x = r * tx;
    y = r * ty;
  }
  return { op, bl, x, y };
}

function missionWindow(p: number, inS: number, inE: number, holdE: number, outE: number) {
  let op = 0,
    bl = 20,
    y = 60;
  if (p >= inS && p < inE) {
    const r = clamp01((p - inS) / (inE - inS));
    op = r;
    bl = (1 - r) * 20;
    y = (1 - r) * 60;
  } else if (p >= inE && p <= holdE) {
    op = 1;
    bl = 0;
    y = 0;
  } else if (p > holdE && p <= outE) {
    const r = clamp01((p - holdE) / (outE - holdE));
    op = 1 - r;
    bl = r * 20;
    y = r * -60;
  } else if (p > outE) {
    op = 0;
    bl = 20;
    y = -60;
  }
  return { op, bl, y };
}

export default function Precios() {
  useSEO({
    title: "Precios",
    description:
      "Cómo armamos cada proyecto en DeXa: webs premium, agentes de IA y sistemas de crecimiento a medida del negocio, sin paquetes cerrados ni letra chica.",
    path: "/precios",
  });

  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const plansGroupRef = useRef<HTMLDivElement>(null);
  const missionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [scrubRange, setScrubRange] = useState<number>();

  useEffect(() => {
    function update() {
      if (containerRef.current) {
        setScrubRange(Math.max(1, containerRef.current.offsetHeight - window.innerHeight));
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (reduce) return;
    let raf = 0;
    let current = 0;

    function getTarget() {
      const el = containerRef.current;
      if (!el) return 0;
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return 0;
      return clamp01(-el.getBoundingClientRect().top / total);
    }

      function updatePin() {
        const el = containerRef.current;
        const pin = pinRef.current;
        if (!el || !pin) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        if (rect.bottom <= vh) {
          // Scrolled past the container: park the box at its bottom instead of
          // staying glued to the viewport (position:sticky isn't usable here —
          // this site's global overflow-x:hidden on <body> silently breaks it).
          pin.style.position = "absolute";
          pin.style.top = "";
          pin.style.bottom = "0";
        } else {
          pin.style.position = "fixed";
          pin.style.top = "0";
          pin.style.bottom = "";
        }
      }

    function tick() {
      current += (getTarget() - current) * 0.09;
      const p = current;
      updatePin();

      // Intro card: fades/slides out over the first 15% of scroll
      const f = clamp01(p / 0.15);
      applyStyle(introRef.current, 1 - f, f * -30, f * 30, f * 14);

      // Plan cards: staggered enter, hold through the middle third, staggered exit
      const windows: [number, number, number, number, number, number][] = [
        [0.15, 0.15, 0.333, 0.12, -30, 30],
        [0.18, 0.13, 0.333, 0.15, 0, 30],
        [0.21, 0.11, 0.333, 0.18, 30, 30],
      ];
      windows.forEach((w, i) => {
        const { op, bl, x, y } = cardWindow(p, ...w);
        applyStyle(cardRefs.current[i], op, x, y, bl);
      });
      const groupOp = cardWindow(p, 0.15, 0.15, 0.333, 0.18, 0, 0).op;
      if (plansGroupRef.current) {
        plansGroupRef.current.style.opacity = String(groupOp);
        plansGroupRef.current.style.pointerEvents = groupOp > 0.4 ? "auto" : "none";
      }

      // Mission lines: one at a time, full screen
      const missionTimings: [number, number, number, number][] = [
        [0.44, 0.47, 0.59, 0.62],
        [0.62, 0.65, 0.77, 0.8],
        [0.8, 0.83, 0.95, 0.98],
      ];
      missionTimings.forEach((w, i) => {
        const { op, bl, y } = missionWindow(p, ...w);
        applyStyle(missionRefs.current[i], op, 0, y, bl);
      });

      // Final CTA
      if (p > 0.93) {
        let opF = 0,
          blF = 20,
          yF = 60;
        if (p >= 0.94 && p < 0.97) {
          const r = clamp01((p - 0.94) / 0.03);
          opF = r;
          blF = (1 - r) * 20;
          yF = (1 - r) * 60;
        } else if (p >= 0.97) {
          opF = 1;
          blF = 0;
          yF = 0;
        }
        applyStyle(ctaRef.current, opF, 0, yF, blF);
      } else {
        applyStyle(ctaRef.current, 0, 0, 60, 20);
      }

      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  function scrollToPlans() {
    const el = containerRef.current;
    if (!el) return;
    window.scrollTo({ top: el.offsetHeight * 0.16, behavior: "smooth" });
  }

  if (reduce) {
    return (
      <section className="relative bg-black">
        <div className="relative min-h-[70vh]">
          <div className="absolute inset-0 -z-10">
            <ScrollVideo src={heroVideo} />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="max-w-[640px] mx-auto px-6 pt-[160px] pb-[80px] text-center">
            <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">Precios</p>
            <h1 className="font-heroDisplay text-[clamp(30px,4.5vw,50px)] leading-[1.15] text-white mb-5">
              Cada proyecto se arma según lo que el negocio necesita.
            </h1>
            <p className="text-white/70 text-[16px] leading-[1.7]">
              Sin paquetes cerrados ni letra chica. Contanos qué necesitás y armamos el proyecto justo
              para eso.
            </p>
          </div>
        </div>
        <div className="max-w-[1180px] mx-auto px-6 py-[clamp(60px,8vw,100px)] grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,270px),1fr))]">
          {PLANS.map((plan) => (
            <div
              key={plan.title}
              className={`rounded-[20px] p-[34px] px-7 flex flex-col gap-4 border ${
                plan.highlight ? "bg-gold/10 border-gold/40" : "bg-white/5 border-white/15"
              }`}
            >
              <p className="font-heroDisplay italic text-[14.5px] text-gold">{plan.quote}</p>
              <h3 className="font-heroDisplay text-2xl -mt-1.5 text-white">{plan.title}</h3>
              <p className="text-white/60 text-[15px] leading-[1.65] flex-1">{plan.desc}</p>
              <p className={`font-heroDisplay text-[26px] ${plan.highlight ? "text-gold" : "text-white"}`}>
                {plan.price}
              </p>
              <a
                href={waLink(plan.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-center px-5 py-3.5 rounded-full text-[14.5px] ${
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
        <div className="max-w-[640px] mx-auto px-6 pb-[clamp(80px,10vw,120px)] text-center">
          <h2 className="font-heroDisplay text-[clamp(24px,3vw,34px)] text-white mb-4">
            ¿Hablamos de tu proyecto?
          </h2>
          <p className="text-white/60 text-[15px] mb-7">
            Contanos qué necesitás y te decimos qué tiene sentido armar — sin vueltas.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-gold text-navy px-7 py-4 rounded-full text-[15px] font-medium hover:bg-[#c79656]"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </section>
    );
  }

  return (
    <div ref={containerRef} className="relative bg-black" style={{ height: `${CONTAINER_VH}vh` }}>
      <div ref={pinRef} className="fixed top-0 left-0 w-full h-screen overflow-hidden">
        <ScrollVideo src={heroVideo} scrubRange={scrubRange} />
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

        {/* Intro card */}
        <div className="absolute left-6 bottom-6 sm:left-12 sm:bottom-12 z-20 w-[min(92vw,540px)]">
          <div
            ref={introRef}
            className="bg-black/50 backdrop-blur-2xl border border-white/15 rounded-[4px] p-8 pb-24 sm:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.35)] relative"
            style={{ willChange: "transform, opacity, filter" }}
          >
            <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-4">Precios</p>
            <h1 className="font-heroDisplay text-[clamp(30px,4.2vw,50px)] leading-[1.1] text-white mb-4 max-w-[10em]">
              Cada proyecto se arma según lo que el negocio necesita.
            </h1>
            <p className="text-white/65 text-[14px] sm:text-[15px] leading-[1.65] max-w-[26em]">
              Sin paquetes cerrados ni letra chica. Contanos qué necesitás y armamos el proyecto justo
              para eso.
            </p>
            <button
              type="button"
              onClick={scrollToPlans}
              aria-label="Ver los planes"
              className="absolute left-4 bottom-4 right-auto sm:left-auto sm:-right-14 sm:bottom-10 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-gold text-navy flex items-center justify-center hover:bg-[#c79656] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 40 24"
                stroke="currentColor"
                strokeWidth="1.75"
                className="w-6 h-4 sm:w-7 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M29.5 4.5L37 12m0 0l-7.5 7.5M37 12H3"
                  transform="rotate(90 20 12)"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Plan cards */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[min(94vw,940px)]">
          <div ref={plansGroupRef} style={{ opacity: 0 }}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center">
            {PLANS.map((plan, i) => (
              <div
                key={plan.title}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                style={{ opacity: 0, willChange: "transform, opacity, filter" }}
                className={`w-[280px] max-w-full rounded-[4px] p-6 flex flex-col gap-3 border shadow-[0_30px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl ${
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
          <p className="mt-5 text-center text-[12.5px] text-white/45 max-w-[36em] mx-auto">
            El precio depende del alcance, integraciones, volumen y necesidades del negocio.
          </p>
          </div>
        </div>

        {/* Mission lines */}
        <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-12 pointer-events-none">
          <div className="relative w-full max-w-[56rem] h-full flex items-center justify-center">
            {MISSION_LINES.map((line, i) => (
              <div
                key={i}
                ref={(el) => {
                  missionRefs.current[i] = el;
                }}
                style={{ opacity: 0, willChange: "transform, opacity, filter" }}
                className="absolute text-center font-heroDisplay text-[26px] sm:text-[42px] lg:text-[52px] leading-[1.3] text-white"
              >
                {line.pre}
                <span className="inline-block bg-gold text-navy rounded-full px-3 py-0.5 sm:px-4">
                  {line.pill}
                </span>
                {line.post}
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="absolute inset-0 flex items-center justify-center px-6 pointer-events-none">
          <div
            ref={ctaRef}
            style={{ opacity: 0, willChange: "transform, opacity, filter" }}
            className="w-full max-w-[28rem] bg-black/45 backdrop-blur-2xl border border-white/15 p-8 sm:p-12 text-center"
          >
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
        </div>
      </div>
    </div>
  );
}
