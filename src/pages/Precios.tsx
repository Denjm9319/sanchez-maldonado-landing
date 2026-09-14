import { useEffect, useRef } from "react";
import { useSEO } from "../hooks/useSEO";
import { useReducedMotion } from "../hooks/useReducedMotion";
import ScrollVideo from "../components/ScrollVideo";
import { PRICING, WHATSAPP_LINK, waLink } from "../config/site";
import bloomVideo1 from "../assets/video/precios-bloom-1.mp4";
import bloomVideo2 from "../assets/video/precios-bloom-2.mp4";
import bloomVideo3 from "../assets/video/precios-bloom-3.mp4";

type VideoKey = "v1" | "v2" | "v3";
const VIDEO_KEYS: VideoKey[] = ["v1", "v2", "v3"];

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
// Cover-fit would zoom a landscape video in hard on a narrow phone screen
// (crop ~75% off each side) and can land on an empty/dark patch of the
// source footage. Capping the zoom relative to a plain "contain" fit keeps
// the crop reasonable and avoids that.
const MAX_ZOOM = 1.55;

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

function getActiveVideoKey(p: number): VideoKey {
  return p <= 0.333 ? "v1" : p <= 0.666 ? "v2" : "v3";
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

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRefs = useRef<Record<VideoKey, HTMLVideoElement | null>>({ v1: null, v2: null, v3: null });
  const videoStateRef = useRef({
    durations: { v1: 8, v2: 8, v3: 8 } as Record<VideoKey, number>,
    seeking: { v1: false, v2: false, v3: false } as Record<VideoKey, boolean>,
    pendingSeek: { v1: -1, v2: -1, v3: -1 } as Record<VideoKey, number>,
  });
  // Pre-extracted frames per video, drawn straight to canvas so scrubbing
  // doesn't depend on live <video> seeks (which are slow/janky on scroll,
  // especially on mobile). Kept in a ref, not state, so the rAF loop below
  // picks them up mid-flight without needing to restart.
  const framesRef = useRef<Record<VideoKey, ImageBitmap[]>>({ v1: [], v2: [], v3: [] });

  useEffect(() => {
    if (reduce) return;
    let cancelled = false;
    const sources: Record<VideoKey, string> = { v1: bloomVideo1, v2: bloomVideo2, v3: bloomVideo3 };

    async function extractOne(key: VideoKey): Promise<ImageBitmap[]> {
      const res = await fetch(sources[key]);
      const blob = await res.blob();
      if (cancelled) return [];
      const objectUrl = URL.createObjectURL(blob);
      try {
        const source = document.createElement("video");
        source.src = objectUrl;
        source.muted = true;
        source.playsInline = true;
        await new Promise<void>((resolve, reject) => {
          source.onloadedmetadata = () => resolve();
          source.onerror = () => reject(new Error("video metadata failed"));
        });
        if (cancelled) return [];

        const duration = source.duration;
        const frameCount = Math.min(40, Math.max(20, Math.round(duration * 3)));
        const scale = Math.min(1, 960 / source.videoWidth);
        const w = Math.round(source.videoWidth * scale);
        const h = Math.round(source.videoHeight * scale);
        const off = document.createElement("canvas");
        off.width = w;
        off.height = h;
        const offCtx2 = off.getContext("2d");
        if (!offCtx2) return [];

        const frames: ImageBitmap[] = [];
        for (let i = 0; i < frameCount; i++) {
          if (cancelled) break;
          const t = Math.min(i / (frameCount - 1), 0.999) * duration;
          await new Promise<void>((resolve) => {
            let done = false;
            const finish = () => {
              if (done) return;
              done = true;
              source.removeEventListener("seeked", onSeeked);
              clearTimeout(timeout);
              resolve();
            };
            const onSeeked = () => finish();
            const timeout = setTimeout(finish, 1500);
            source.addEventListener("seeked", onSeeked);
            source.currentTime = t;
          });
          if (cancelled) break;
          offCtx2.clearRect(0, 0, w, h);
          offCtx2.drawImage(source, 0, 0, w, h);
          frames.push(await createImageBitmap(off));
        }
        return frames;
      } finally {
        URL.revokeObjectURL(objectUrl);
      }
    }

    (async () => {
      try {
        const [v1, v2, v3] = await Promise.all([extractOne("v1"), extractOne("v2"), extractOne("v3")]);
        if (cancelled) return;
        framesRef.current = { v1, v2, v3 };
      } catch (err) {
        if (!cancelled) console.warn("Precios: frame extraction failed, falling back to live video seek", err);
      }
    })();

    return () => {
      cancelled = true;
      (Object.keys(framesRef.current) as VideoKey[]).forEach((key) => {
        framesRef.current[key].forEach((f) => f.close());
      });
      framesRef.current = { v1: [], v2: [], v3: [] };
    };
  }, [reduce]);

  useEffect(() => {
    if (reduce) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const state = videoStateRef.current;
    const videos = videoRefs.current;

    // This canvas only ever shows a heavily blurred/tinted backdrop video —
    // it doesn't need retina sharpness, and drawing a full-screen frame at
    // 2x resolution every tick was real, measurable cost on high-DPI PC
    // monitors (part of why the scroll felt heavy there).
    const dpr = 1;
    const resizeCanvas = () => {
      // CSS "100vh"/"100dvh" isn't reliable here — on real mobile browsers
      // 100vh overshoots the actually-visible area (it doesn't discount the
      // address bar), and which of the two wins depends on Tailwind's own
      // utility ordering, which isn't something to build on. Setting the
      // pin's height directly from window.innerHeight sidesteps all of that
      // and matches exactly what the scroll-progress math below already
      // assumes.
      if (pinRef.current) pinRef.current.style.height = `${window.innerHeight}px`;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function safeSeek(key: VideoKey, targetTime: number) {
      const video = videos[key];
      if (!video) return;
      const dur = state.durations[key] || video.duration || 8;
      const clamped = Math.max(0, Math.min(targetTime, dur - 0.05));
      if (Math.abs(video.currentTime - clamped) < 0.01) return;
      if (state.seeking[key]) {
        state.pendingSeek[key] = clamped;
        return;
      }
      state.seeking[key] = true;
      state.pendingSeek[key] = -1;
      video.currentTime = clamped;
    }

    function drawFrame(p: number, localP: number) {
      const key = getActiveVideoKey(p);
      const cW = canvas!.width;
      const cH = canvas!.height;
      if (cW === 0 || cH === 0) return;

      const frames = framesRef.current[key];
      let source: CanvasImageSource;
      let sW: number, sH: number;
      if (frames.length > 1) {
        const idx = Math.min(frames.length - 1, Math.round(localP * (frames.length - 1)));
        const frame = frames[idx];
        source = frame;
        sW = frame.width;
        sH = frame.height;
      } else {
        const video = videos[key];
        if (!video || video.readyState < 2) return;
        source = video;
        sW = video.videoWidth || 1920;
        sH = video.videoHeight || 1080;
      }

      const scaleContain = Math.min(cW / sW, cH / sH);
      const scaleCover = Math.max(cW / sW, cH / sH);
      const scale = Math.min(scaleCover, scaleContain * MAX_ZOOM);
      const dW = sW * scale;
      const dH = sH * scale;
      const oX = (cW - dW) / 2;
      const oY = (cH - dH) / 2;

      // Drawing straight to the visible canvas (no intermediate offscreen
      // composite) — that extra full-frame buffer/copy was doubling the
      // per-tick draw cost for no real benefit once frames come from stable
      // pre-extracted bitmaps instead of a live, mid-seek <video>.
      ctx!.clearRect(0, 0, cW, cH);
      ctx!.drawImage(source, oX, oY, dW, dH);
    }

    const seekedHandlers: Partial<Record<VideoKey, () => void>> = {};
    const metaHandlers: Partial<Record<VideoKey, () => void>> = {};

    VIDEO_KEYS.forEach((key) => {
      const video = videos[key];
      if (!video) return;
      const onSeeked = () => {
        state.seeking[key] = false;
        if (state.pendingSeek[key] >= 0) {
          const t = state.pendingSeek[key];
          state.pendingSeek[key] = -1;
          safeSeek(key, t);
        }
      };
      const onMeta = () => {
        const d = video.duration;
        if (d && !isNaN(d) && d > 0 && d !== Infinity) state.durations[key] = d;
      };
      seekedHandlers[key] = onSeeked;
      metaHandlers[key] = onMeta;
      video.addEventListener("seeked", onSeeked);
      video.addEventListener("loadedmetadata", onMeta);
      if (video.readyState >= 1) onMeta();
    });

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
        // `top` must be explicitly set to "auto" here — the "top-0" utility
        // class is still applied underneath, and clearing the inline value
        // to "" let that class win, which pinned the box to the top of the
        // container instead of letting `bottom:0` place it. That's what made
        // the whole page go black right as the final CTA should appear.
        pin.style.position = "absolute";
        pin.style.top = "auto";
        pin.style.bottom = "0";
      } else {
        pin.style.position = "fixed";
        pin.style.top = "0";
        pin.style.bottom = "auto";
      }
    }

    function tick() {
      current += (getTarget() - current) * 0.09;
      const p = current;
      updatePin();

      // Background video: 3 segments, one active third of the scroll each
      const activeKey = getActiveVideoKey(p);
      const localP =
        activeKey === "v1"
          ? clamp01(p * 3)
          : activeKey === "v2"
            ? clamp01((p - 0.333) * 3)
            : clamp01((p - 0.666) * 3);
      // Once frames are extracted for this segment, drawFrame reads them
      // directly and there's no need to keep seeking the live <video> — that
      // seek is only a fallback while extraction is still in flight.
      if (framesRef.current[activeKey].length <= 1) {
        safeSeek(activeKey, localP * (videoStateRef.current.durations[activeKey] || 8));
      }
      drawFrame(p, localP);

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

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resizeCanvas);
      VIDEO_KEYS.forEach((key) => {
        const video = videos[key];
        if (!video) return;
        const onSeeked = seekedHandlers[key];
        const onMeta = metaHandlers[key];
        if (onSeeked) video.removeEventListener("seeked", onSeeked);
        if (onMeta) video.removeEventListener("loadedmetadata", onMeta);
      });
    };
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
            <ScrollVideo src={bloomVideo1} />
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
        <div className="absolute inset-0 bg-[#0a0a0a]" aria-hidden="true">
          {(["v1", "v2", "v3"] as VideoKey[]).map((key, i) => (
            <video
              key={key}
              ref={(el) => {
                videoRefs.current[key] = el;
              }}
              src={[bloomVideo1, bloomVideo2, bloomVideo3][i]}
              muted
              playsInline
              preload="auto"
              className="hidden"
            />
          ))}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
        </div>
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

        {/* Intro card */}
        <div
          ref={introRef}
          className="absolute left-6 bottom-6 sm:left-12 sm:bottom-12 z-20 w-[min(92vw,540px)]"
          style={{ willChange: "transform, opacity, filter" }}
        >
          <div className="bg-black/50 backdrop-blur-lg border border-white/15 rounded-[4px] p-8 pb-24 sm:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.35)] relative">
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full sm:w-[min(94vw,940px)]">
          <div ref={plansGroupRef} style={{ opacity: 0 }}>
          <div className="flex sm:grid sm:grid-cols-3 gap-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none px-6 sm:px-0 sm:justify-items-center [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {PLANS.map((plan, i) => (
              <div
                key={plan.title}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                style={{ opacity: 0, willChange: "transform, opacity, filter" }}
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
            className="w-full max-w-[28rem] bg-black/45 backdrop-blur-lg border border-white/15 p-8 sm:p-12 text-center"
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
