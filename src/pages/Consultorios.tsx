import { useEffect, useState } from "react";
import Reveal from "../components/Reveal";
import { waLink, PAGINA_MESSAGE } from "../config/site";
import { useSEO } from "../hooks/useSEO";
import denisPhoto from "../assets/brand/denis-miniatura.jpg";
import logoMark from "../assets/brand/mark-transparent.png";
import marcelaBritoShot from "../assets/projects/marcela-brito-shot.webp";
import dentaWebShot from "../assets/projects/denta-web-shot.webp";
import dental2Shot from "../assets/projects/dental2-shot.png";

/**
 * Offer landing for dental practices (/consultorios). Not linked from the
 * nav and noindexed: it's sent by WhatsApp to dentists who reach out.
 * Authority comes from the method (AIDA), the contrast with a regular web
 * agency and real work — never from invented clients or numbers.
 */

// Palette "Editorial" (chosen 06-oct-2026): white, black and the logo's coral; Zodiak + Satoshi.
const THEME = {
  fonts: ["https://api.fontshare.com/v2/css?f[]=zodiak@400,500&display=swap", "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"],
  vars: {
    "--bg": "#FFFFFF", "--alt": "#F2EFE9", "--ink": "#111111", "--ink2": "rgba(17,17,17,.70)", "--ink3": "rgba(17,17,17,.45)",
    "--line": "rgba(17,17,17,.12)", "--accent": "#DD5136", "--accent-ink": "#FFFFFF", "--dark": "#111111", "--on-dark": "#FFFFFF",
    "--fd": "'Zodiak', serif", "--fb": "'Satoshi', sans-serif",
  },
};

// Paste the video URL (YouTube embed) once the VSL is recorded.
const VSL_EMBED_URL = "";

const WA_MESSAGE = PAGINA_MESSAGE;

const VERSUS = [
  { them: "Empieza por los colores y el diseño.", us: "Empezamos por cómo decide un paciente: urgencias, obras sociales, miedo al dolor." },
  { them: "Te muestra un boceto y te pide que confíes.", us: "Te mostramos tu página terminada antes de que pagues." },
  { them: "Usa la misma estructura para un gimnasio que para un consultorio.", us: "Cada parte de tu página tiene un trabajo: que el paciente te escriba." },
  { them: "Te entrega un link y pasa al próximo cliente.", us: "La publicamos juntos y cada mes te decimos cuántos te escribieron." },
];

const AIDA = [
  { name: "Atención", title: "Te encuentra", text: "Aparecés cuando buscan “dentista urgencia” o “implantes”, y lo primero que ven responde justo eso." },
  { name: "Interés", title: "Se queda", text: "Tus tratamientos explicados en su idioma: qué es, cuánto dura, si duele. Sin palabras de facultad." },
  { name: "Deseo", title: "Confía", text: "Reseñas reales, quién sos y cómo es tu consultorio. Al que no te conoce lo convencen tus pacientes." },
  { name: "Acción", title: "Te escribe", text: "WhatsApp en un toque, con el mensaje ya escrito. Obras sociales y horarios a la vista: nada que lo frene." },
];

const WORK = [
  { img: marcelaBritoShot, name: "Dra. Marcela Brito", kind: "Consultorio odontológico · sitio publicado", url: "https://dramarcelabrito.vercel.app/" },
  { img: dentaWebShot, name: "Denta Estética", kind: "Clínica dental estética · proyecto", url: "https://aesthetic-dental-clinic-sigma.vercel.app/" },
  { img: dental2Shot, name: "Dental Health", kind: "Clínica dental · proyecto", url: "https://lucid-dental-layout.lovable.app/" },
];

type Billing = "anual" | "mensual";

const PLANS = [
  {
    name: "Presencia",
    price: { anual: "USD 700", mensual: "USD 700" },
    note: { anual: "Un solo pago", mensual: "Un solo pago" },
    items: ["Página completa con el método AIDA", "Tu dirección propia (tunombre.com.ar)", "Publicación juntos por videollamada", "Placa de reseñas configurada"],
    who: "Si recién abrís tu consultorio o hoy no aparecés en ningún lado más que en Instagram.",
    featured: false,
  },
  {
    name: "Crecimiento",
    price: { anual: "USD 2.000", mensual: "USD 150/mes" },
    note: { anual: "El año completo, en un pago", mensual: "+ USD 800 al empezar" },
    items: ["Todo lo de Presencia", "Una página por tratamiento", "Informe mensual de consultas", "Una mejora por mes"],
    who: "Si ya vivís de las recomendaciones y querés que te encuentren también los que no te conocen.",
    featured: true,
  },
  {
    name: "Completo",
    price: { anual: "Desde USD 2.000", mensual: "Desde USD 2.000" },
    note: { anual: "+ asistente desde USD 687/mes", mensual: "+ asistente desde USD 687/mes" },
    items: ["Todo lo de Crecimiento", "Asistente que contesta WhatsApp y llamadas", "Recordatorio de turnos con confirmación", "Aviso a pacientes que no vuelven al control"],
    who: "Si tenés la agenda llena y se te escapan mensajes y llamadas mientras atendés.",
    featured: false,
  },
];

const GUARANTEES = [
  { title: "Pagás solo si te gusta lo que ves", text: "Te mostramos tu página terminada. Si no es lo que buscás, no pagás nada." },
  { title: "Lo que aprobás es lo que se publica", text: "El precio y lo que incluye quedan por escrito antes de empezar. Sin sorpresas." },
  { title: "Tu página al día durante 12 meses", text: "Google, WhatsApp y los celulares se actualizan todo el tiempo. Si un cambio de ellos afecta tu página, la ajustamos sin costo." },
  { title: "Si no llega el informe, ese mes no lo pagás", text: "En los planes mensuales, el informe es nuestra palabra. Si un mes no llega, no se cobra." },
];

const FAQS = [
  {
    q: "¿Por qué cuesta más que una web de $250.000?",
    a: "Porque no es un folleto. Está escrita y ordenada para que el paciente que no te conoce decida escribirte, la ves antes de pagar y, en los planes mensuales, sabés cuántos te escribieron. Una web barata te muestra; esta trabaja.",
  },
  {
    q: "¿La página es mía?",
    a: "Sí, toda. La hacemos a medida para vos y es tuya desde el primer día, con tu dirección propia. Si en algún momento dejás de pagar el plan mensual, la página sigue siendo tuya y sigue publicada: lo único que deja de llegar es el soporte, los informes y las mejoras.",
  },
  {
    q: "¿Tengo que hacer algo técnico?",
    a: "No. Nos contás qué querés cambiar y nos ocupamos de todo, también de tu dirección web. Solo el costo de la dirección va aparte.",
  },
  {
    q: "¿Cuánto tarda?",
    a: "Como te la mostramos casi terminada, es rápido. La fecha exacta te la confirmamos cuando veamos qué querés cambiar.",
  },
];

function WaButton({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a
      href={waLink(WA_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      className={`t-btn inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-[15px] font-medium transition active:scale-[0.98] hover:opacity-90 ${className}`}
    >
      {label}
      <span aria-hidden="true">→</span>
    </a>
  );
}

function Eyebrow({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <p className={`text-[11.5px] tracking-[0.26em] uppercase mb-5 font-medium ${onDark ? "opacity-60" : "t-ink3"}`}>{children}</p>
  );
}

/** Ring that fills a little more at each AIDA step (0..3). */
function StepRing({ step }: { step: number }) {
  return (
    <svg viewBox="0 0 16 16" className="w-6 h-6" aria-hidden="true">
      <circle cx="8" cy="8" r="6.6" fill="none" stroke="var(--accent)" strokeWidth="1.4" />
      {step > 0 && <circle cx="8" cy="8" r={step + 1} fill="var(--accent)" />}
    </svg>
  );
}

/** Example clinic page inside a phone, with two annotations. */
function PhoneHero() {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[290px]">
      <div className="cs-tip absolute z-20 -left-[176px] top-[118px] w-[170px] hidden xl:block">
        <p className="text-[12.5px] leading-snug t-ink2">
          <span className="t-ink font-semibold">Urgencias arriba.</span> El que tiene dolor decide en segundos.
        </p>
      </div>
      <div className="cs-tip absolute z-20 -right-[180px] top-[178px] w-[170px] hidden xl:block" style={{ animationDelay: "1.3s" }}>
        <p className="text-[12.5px] leading-snug t-ink2">
          <span className="t-ink font-semibold">WhatsApp en un toque,</span> con el mensaje ya escrito.
        </p>
      </div>
      <div className="relative rounded-[44px] border-[10px] border-[#121212] bg-[#121212] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.45)]">
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[86px] h-[22px] rounded-full bg-black z-10" aria-hidden="true" />
        <div className="rounded-[34px] overflow-hidden bg-[#F4F8FB] text-[#14304A] pt-10 pb-5 px-3.5 space-y-3" style={{ fontFamily: "Inter, sans-serif" }}>
          <p className="text-center text-[12.5px] font-semibold tracking-tight">Sonrisa Perfecta · Clínica dental</p>
          <div className="rounded-2xl bg-[#1E5B8C] text-white p-4">
            <p className="text-[10.5px] uppercase tracking-[0.14em] text-white/70">Urgencias hoy</p>
            <p className="text-[16px] leading-tight font-semibold mt-1">¿Te duele? Te atendemos en el día.</p>
            <span className="mt-3 inline-flex items-center bg-whatsapp text-white text-[11.5px] font-semibold rounded-full px-3 py-1.5 ring-4 ring-whatsapp/25">
              Escribinos por WhatsApp
            </span>
          </div>
          <div className="rounded-2xl bg-white p-3 shadow-sm">
            <p className="text-[#E8A317] text-[12px] tracking-[0.1em]">
              ★★★★★ <span className="text-[#14304A] text-[10.5px]">4,9 · 128 reseñas</span>
            </p>
            <p className="text-[11.5px] leading-snug mt-1 text-[#14304A]/80">“Me atendieron de urgencia un domingo.”</p>
          </div>
          <div className="rounded-2xl bg-white p-3 shadow-sm flex flex-wrap gap-1.5">
            {["Implantes", "Ortodoncia", "Blanqueamiento"].map((t) => (
              <span key={t} className="text-[10.5px] bg-[#E6EFF6] rounded-full px-2.5 py-1">
                {t}
              </span>
            ))}
          </div>
          <div className="rounded-2xl bg-white p-3 shadow-sm">
            <p className="text-[10.5px] text-[#14304A]/60">Obras sociales</p>
            <p className="text-[11.5px] mt-0.5">OSDE · Swiss Medical · Galeno</p>
          </div>
        </div>
      </div>
      <p className="text-center t-ink3 text-[11px] mt-4">Clínica de ejemplo</p>
    </div>
  );
}

export default function Consultorios() {
  useSEO({
    title: "Páginas web para consultorios odontológicos",
    description:
      "Páginas para consultorios odontológicos con el método AIDA. Te mostramos tu página terminada antes de pagar.",
    path: "/consultorios",
    noindex: true,
  });
  const [billing, setBilling] = useState<Billing>("anual");

  // Added once per theme and left in place: removing a stylesheet while its
  // fonts are still downloading leaves them stuck "loading".
  // Fontshare serves one family per stylesheet, so each font gets its own link.
  useEffect(() => {
    for (const href of THEME.fonts) {
      if (document.head.querySelector(`link[href="${href}"]`)) continue;
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="t-root t-bg t-ink" style={THEME.vars as React.CSSProperties}>
      <style>{`
        .t-root { font-family: var(--fb); }
        .t-bg { background: var(--bg); } .t-alt { background: var(--alt); }
        .t-ink { color: var(--ink); } .t-ink2 { color: var(--ink2); } .t-ink3 { color: var(--ink3); }
        .t-line { border-color: var(--line); } .t-accent { color: var(--accent); }
        .t-btn { background: var(--accent); color: var(--accent-ink); }
        .t-dark { background: var(--dark); color: var(--on-dark); }
        .t-display { font-family: var(--fd); letter-spacing: -0.02em; }
        @keyframes csUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: none; } }
        .cs-up { opacity: 0; animation: csUp .9s cubic-bezier(.22,1,.36,1) forwards; }
        .cs-tip { opacity: 0; animation: csUp .9s cubic-bezier(.22,1,.36,1) .9s forwards;
          padding: 12px 14px; border-radius: 14px; background: rgba(255,255,255,.75); backdrop-filter: blur(8px);
          box-shadow: 0 10px 30px -12px rgba(0,0,0,.25), inset 0 0 0 1px var(--line); }
        .cs-lift { transition: transform .6s cubic-bezier(.22,1,.36,1); }
        .cs-lift:hover { transform: translateY(-6px); }
        @media (prefers-reduced-motion: reduce) { .cs-up, .cs-tip { animation: none; opacity: 1; } .cs-lift:hover { transform: none; } }
      `}</style>

      {/* 1 · HERO */}
      <section className="relative overflow-hidden">
        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 pt-[clamp(120px,17vh,170px)] pb-[clamp(60px,9vw,110px)] grid gap-14 lg:grid-cols-[1.25fr_1fr] items-center">
          <div>
            <div className="cs-up flex items-center gap-3 mb-8">
              <img src={logoMark} alt="Mimoru Systems" height={36} className="h-9 w-auto" />
              <span className="t-ink3 text-[12px] tracking-[0.2em] uppercase font-medium">Páginas para consultorios odontológicos</span>
            </div>
            <h1 className="cs-up t-display font-medium text-[clamp(40px,6.2vw,80px)] leading-[1.02] mb-7" style={{ animationDelay: ".1s" }}>
              Mirá tu página terminada <span className="t-accent">antes de pagar un peso.</span>
            </h1>
            <p className="cs-up t-ink2 text-[clamp(16px,1.6vw,19px)] leading-[1.6] max-w-[33em] mb-9 [text-wrap:pretty]" style={{ animationDelay: ".2s" }}>
              La armamos con el método AIDA: el recorrido que hace un paciente desde que te encuentra en Google hasta
              que te escribe por WhatsApp. Si te convence, la publicamos juntos. Si no, no pagás.
            </p>
            <div className="cs-up flex flex-col sm:flex-row gap-3 sm:items-center" style={{ animationDelay: ".3s" }}>
              <WaButton label="Quiero ver mi página" />
              <a href="#metodo" className="t-line t-ink inline-flex items-center justify-center px-6 py-4 rounded-full border text-[15px] hover:opacity-70 transition-opacity">
                Cómo funciona el método
              </a>
            </div>
          </div>
          <div className="cs-up" style={{ animationDelay: ".35s" }}>
            <PhoneHero />
          </div>
        </div>
        {VSL_EMBED_URL && (
          <div className="relative max-w-[980px] mx-auto px-5 sm:px-8 pb-[clamp(60px,9vw,110px)]">
            <div className="aspect-video rounded-[24px] overflow-hidden bg-black">
              <iframe src={VSL_EMBED_URL} title="Cómo trabajamos con consultorios" className="w-full h-full" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
            </div>
          </div>
        )}
      </section>

      {/* 2 · AGENCIA COMÚN VS. MIMORU */}
      <section className="t-dark">
        <Reveal className="max-w-[1240px] mx-auto px-5 sm:px-8 py-[clamp(80px,11vw,140px)]">
          <Eyebrow onDark>La diferencia</Eyebrow>
          <h2 className="t-display font-medium text-[clamp(30px,4.6vw,58px)] leading-[1.05] max-w-[16em] mb-[clamp(40px,6vw,72px)]">
            Una agencia de webs te entrega un diseño. <span className="t-accent">Nosotros, un recorrido que termina en tu WhatsApp.</span>
          </h2>
          <div className="grid gap-px rounded-[24px] overflow-hidden" style={{ background: "rgba(255,255,255,.12)" }}>
            <div className="hidden md:grid grid-cols-2 gap-px">
              <p className="t-dark px-7 py-4 text-[12px] tracking-[0.2em] uppercase opacity-60">Una agencia de webs común</p>
              <p className="t-dark px-7 py-4 text-[12px] tracking-[0.2em] uppercase t-accent">Mimoru</p>
            </div>
            {VERSUS.map((v) => (
              <div key={v.us} className="grid md:grid-cols-2 gap-px">
                <p className="t-dark px-7 py-6 text-[16px] leading-[1.5] opacity-55">
                  <span className="md:hidden block text-[11px] tracking-[0.2em] uppercase mb-1.5">Agencia común</span>
                  {v.them}
                </p>
                <p className="t-dark px-7 py-6 text-[17px] leading-[1.5] font-medium">
                  <span className="md:hidden block text-[11px] tracking-[0.2em] uppercase mb-1.5 t-accent">Mimoru</span>
                  {v.us}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 3 · MÉTODO AIDA */}
      <section id="metodo" className="scroll-mt-24">
        <Reveal className="max-w-[1240px] mx-auto px-5 sm:px-8 py-[clamp(80px,11vw,140px)]">
          <Eyebrow>El método</Eyebrow>
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-16 items-end mb-[clamp(40px,5vw,64px)]">
            <h2 className="t-display font-medium text-[clamp(30px,4.4vw,56px)] leading-[1.05]">AIDA, aplicado a un consultorio.</h2>
            <p className="t-ink2 text-[16.5px] leading-[1.65] [text-wrap:pretty]">
              AIDA es el recorrido que hace cualquier persona antes de decidir: Atención, Interés, Deseo y Acción. Por
              eso no empezamos por los colores: empezamos por ese recorrido, y cada parte de tu página tiene un trabajo.
            </p>
          </div>
          <ol className="list-none p-0 m-0 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {AIDA.map((s, i) => (
              <li key={s.name} className="t-line border-t pt-6">
                <div className="flex items-center gap-3 mb-8">
                  <StepRing step={i} />
                  <span className="t-ink3 text-[12px] tracking-[0.18em] uppercase font-medium">{s.name}</span>
                </div>
                <h3 className="t-display font-medium text-[26px] mb-3">{s.title}</h3>
                <p className="t-ink2 text-[15.5px] leading-[1.6] [text-wrap:pretty]">{s.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* 4 · TRABAJO REAL + QUIÉN ESTÁ DETRÁS */}
      <section className="t-alt">
        <Reveal className="max-w-[1240px] mx-auto px-5 sm:px-8 py-[clamp(80px,11vw,140px)]">
          <Eyebrow>Lo que ya hicimos</Eyebrow>
          <h2 className="t-display font-medium text-[clamp(30px,4.4vw,56px)] leading-[1.05] max-w-[15em] mb-[clamp(36px,5vw,56px)]">
            No te mostramos promesas. Te mostramos páginas.
          </h2>
          <div className="grid gap-6 md:grid-cols-3 mb-[clamp(56px,8vw,96px)]">
            {WORK.map((w) => (
              <a key={w.name} href={w.url} target="_blank" rel="noopener noreferrer" className="cs-lift group block">
                <div className="aspect-[4/3] rounded-[20px] overflow-hidden bg-black/5 mb-4 shadow-[0_20px_40px_-25px_rgba(0,0,0,0.35)]">
                  <img src={w.img} alt={`Página de ${w.name}`} loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
                <p className="text-[17px] font-medium">{w.name}</p>
                <p className="t-ink3 text-[13.5px]">{w.kind}</p>
              </a>
            ))}
          </div>
          <div className="t-line grid sm:grid-cols-[auto_1fr] gap-6 sm:gap-8 items-center border-t pt-[clamp(40px,6vw,64px)]">
            <img src={denisPhoto} alt="Denis Maldonado" width={120} height={120} loading="lazy" className="w-[104px] h-[104px] sm:w-[120px] sm:h-[120px] rounded-full object-cover" />
            <div>
              <p className="t-ink3 text-[12px] tracking-[0.22em] uppercase mb-2 font-medium">Quién está detrás</p>
              <p className="text-[clamp(18px,2vw,22px)] leading-[1.5] max-w-[38em] [text-wrap:pretty]">
                Soy Denis, de Mimoru. Hablás conmigo desde el primer mensaje hasta que tu página está publicada, y también
                después. Sin intermediarios ni tickets.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 5 · PLANES + PARA QUIÉN + GARANTÍAS */}
      <Reveal className="max-w-[1240px] mx-auto px-5 sm:px-8 py-[clamp(80px,11vw,140px)]">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-[clamp(32px,4vw,52px)]">
          <div>
            <Eyebrow>Planes</Eyebrow>
            <h2 className="t-display font-medium text-[clamp(30px,4.4vw,56px)] leading-[1.05]">Elegí cuánto querés crecer.</h2>
          </div>
          <div className="t-line inline-flex self-start sm:self-auto rounded-full border p-1" role="group" aria-label="Forma de pago">
            {(["anual", "mensual"] as Billing[]).map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setBilling(b)}
                aria-pressed={billing === b}
                className={`px-5 py-2.5 rounded-full text-[14px] transition-colors ${billing === b ? "t-dark" : "t-ink2"}`}
              >
                {b === "anual" ? "Pago anual · ahorrás" : "Mes a mes"}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {PLANS.map((p) => (
            <div key={p.name} className="flex flex-col">
              <div
                className={`cs-lift relative flex flex-col flex-1 rounded-[28px] p-8 sm:p-9 ${p.featured ? "t-dark" : "t-line border bg-white/60"}`}
              >
                {p.featured && (
                  <span className="t-btn absolute -top-3 left-8 text-[11px] font-medium tracking-[0.12em] uppercase rounded-full px-3 py-1">
                    El que recomendamos
                  </span>
                )}
                <h3 className="t-display font-medium text-[30px] mb-8">{p.name}</h3>
                <p className="t-display font-medium text-[clamp(32px,3.6vw,46px)] leading-none mb-2">{p.price[billing]}</p>
                <p className={`text-[14px] mb-8 ${p.featured ? "opacity-60" : "t-ink3"}`}>{p.note[billing]}</p>
                <ul className={`list-none p-0 m-0 space-y-3 border-t pt-6 ${p.featured ? "border-white/15" : "t-line"}`}>
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-3 text-[15px] leading-[1.5]">
                      <svg viewBox="0 0 24 24" className="flex-none w-4 h-4 mt-[3px]" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="t-ink2 text-[14.5px] leading-[1.55] px-2 pt-5 [text-wrap:pretty]">
                <span className="t-ink font-medium">Para vos </span>
                {p.who.charAt(0).toLowerCase() + p.who.slice(1)}
              </p>
            </div>
          ))}
        </div>

        <div className="t-line mt-[clamp(56px,8vw,96px)] border-t pt-[clamp(40px,6vw,64px)]">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-16">
            <div>
              <Eyebrow>Nuestras garantías</Eyebrow>
              <h2 className="t-display font-medium text-[clamp(28px,3.8vw,46px)] leading-[1.06]">El riesgo lo corremos nosotros.</h2>
            </div>
            <div>
              <ul className="list-none p-0 m-0 grid sm:grid-cols-2 gap-x-8 gap-y-8 mb-8">
                {GUARANTEES.map((g, i) => (
                  <li key={g.title}>
                    <p className="t-accent t-display font-medium text-[15px] mb-2">0{i + 1}</p>
                    <h3 className="text-[18px] font-medium mb-2">{g.title}</h3>
                    <p className="t-ink2 text-[15px] leading-[1.6] [text-wrap:pretty]">{g.text}</p>
                  </li>
                ))}
              </ul>
              <p className="t-ink3 text-[14px] leading-[1.6] max-w-[40em]">
                Lo que no hacemos: prometerte una cantidad de pacientes. Eso no depende solo de una página, y quien te lo
                promete sin conocer tu consultorio te está vendiendo humo.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 6 · PREGUNTAS + CIERRE */}
      <section className="t-alt">
        <Reveal className="max-w-[880px] mx-auto px-5 sm:px-8 py-[clamp(80px,11vw,140px)]">
          <Eyebrow>Preguntas</Eyebrow>
          <div className="t-line divide-y border-y mb-[clamp(70px,9vw,110px)]" style={{ borderColor: "var(--line)" }}>
            {FAQS.map((f) => (
              <details key={f.q} className="group py-5" style={{ borderColor: "var(--line)" }}>
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-[17px] font-medium">
                  {f.q}
                  <span className="t-ink3 text-xl transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="t-ink2 text-[15.5px] leading-[1.65] mt-3">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center">
            <img src={logoMark} alt="" height={48} className="h-12 w-auto mx-auto mb-7" />
            <h2 className="t-display font-medium text-[clamp(34px,5.4vw,64px)] leading-[1.04] max-w-[13em] mx-auto mb-5">
              Mirá tu página antes de decidir.
            </h2>
            <p className="t-ink2 text-[17px] leading-[1.6] max-w-[31em] mx-auto mb-9">
              Escribinos por WhatsApp. La armamos con tu consultorio y te la mostramos. Si te convence, la publicamos
              juntos.
            </p>
            <WaButton label="Quiero ver mi página" />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
