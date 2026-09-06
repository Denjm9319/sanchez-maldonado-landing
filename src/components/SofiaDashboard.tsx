const ROWS = [
  { label: "Consultas nuevas", value: 128, pct: 82, color: "#0E7C7B" },
  { label: "Citas", value: 54, pct: 46, color: "#D6A75C" },
  { label: "Seguimientos", value: 87, pct: 63, color: "#142B3D" },
  { label: "Recepción", value: 43, pct: 31, color: "#6B7280" },
];

export default function SofiaDashboard() {
  return (
    <div className="bg-white text-navy rounded-[22px] shadow-[0_30px_70px_rgba(5,18,28,0.35)] p-[clamp(24px,3.4vw,40px)]">
      <div className="flex flex-wrap gap-3.5 items-baseline justify-between mb-7">
        <div>
          <h3 className="text-[clamp(22px,2.4vw,28px)]">Tu recepción, bajo control</h3>
          <p className="text-xs text-secondary mt-2 tracking-[0.04em]">Demo — métricas ilustrativas</p>
        </div>
        <span className="text-xs font-medium text-teal bg-teal/10 px-3.5 py-1.5 rounded-full">
          +18% actividad
        </span>
      </div>
      <div className="grid gap-[clamp(24px,3vw,44px)] items-center [grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr))]">
        <div>
          <p className="font-display text-[clamp(56px,8vw,88px)] leading-none">312</p>
          <p className="text-[13.5px] text-secondary mt-2.5 tracking-[0.02em]">interacciones gestionadas</p>
          <div className="mt-[26px] grid gap-3.5">
            {ROWS.map((row) => (
              <div key={row.label} className="grid grid-cols-[1fr_auto] gap-2.5 items-center text-[13.5px]">
                <span className="text-body">{row.label}</span>
                <span className="tabular-nums text-secondary">{row.value}</span>
                <div className="col-span-full h-1 bg-navy/[0.08] rounded-full">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${row.pct}%`, background: row.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-cream rounded-2xl px-5 pt-[22px] pb-4">
          <p className="text-xs tracking-[0.16em] uppercase text-secondary mb-3.5">Últimos 7 días</p>
          <svg
            viewBox="0 0 320 140"
            width="100%"
            height="150"
            role="img"
            aria-label="Gráfico ilustrativo de interacciones de los últimos siete días"
            className="block overflow-visible"
          >
            <path
              d="M0 108 L53 92 L107 96 L160 62 L213 70 L267 38 L320 26 L320 140 L0 140 Z"
              fill="rgba(14,124,123,0.09)"
            />
            <polyline
              points="0,108 53,92 107,96 160,62 213,70 267,38 320,26"
              fill="none"
              stroke="#0E7C7B"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="[stroke-dasharray:620] animate-dash"
            />
            <circle cx="320" cy="26" r="4.5" fill="#D6A75C" />
          </svg>
          <div className="flex justify-between text-[11px] text-secondary mt-2.5 tracking-[0.06em]">
            <span>L</span>
            <span>M</span>
            <span>M</span>
            <span>J</span>
            <span>V</span>
            <span>S</span>
            <span>D</span>
          </div>
        </div>
      </div>
    </div>
  );
}
