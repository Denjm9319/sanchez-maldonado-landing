import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";

interface DragRowProps<T extends { id: string }> {
  items: T[];
  renderCard: (item: T) => ReactNode;
  onOpen: (item: T) => void;
  speed?: number;
  cardWidthClass?: string;
  emptyMessage?: string;
  /** Minimum cards per loop — short lists (e.g. a filtered category with 1-2
   * items) repeat until they reach this count, so the row never looks mostly
   * empty on a wide screen. */
  minPerLoop?: number;
}

/**
 * A row that auto-scrolls in a seamless loop and can also be grabbed and
 * dragged with inertia (rAF-driven, not CSS keyframes). A click that doesn't
 * move the pointer more than a few px still opens the card as normal.
 */
export default function DragRow<T extends { id: string }>({
  items,
  renderCard,
  onOpen,
  speed = 0.4,
  cardWidthClass = "w-[240px] sm:w-[280px]",
  emptyMessage = "No hay resultados en esta categoría todavía.",
  minPerLoop = 8,
}: DragRowProps<T>) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const draggingRef = useRef(false);
  const movedRef = useRef(0);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  const repeatsPerLoop = items.length ? Math.max(1, Math.ceil(minPerLoop / items.length)) : 0;
  const loop = Array(repeatsPerLoop).fill(items).flat();
  const slides = items.length ? [...loop, ...loop] : [];

  useEffect(() => {
    if (!items.length) return;
    let rafId: number;

    const tick = () => {
      const track = trackRef.current;
      if (track) {
        if (!draggingRef.current) {
          if (Math.abs(velocityRef.current) > 0.1) {
            offsetRef.current += velocityRef.current;
            velocityRef.current *= 0.95;
          } else {
            velocityRef.current = 0;
            offsetRef.current -= speed;
          }
        }
        const halfWidth = track.scrollWidth / 2;
        if (halfWidth > 0) {
          if (offsetRef.current <= -halfWidth) offsetRef.current += halfWidth;
          if (offsetRef.current > 0) offsetRef.current -= halfWidth;
        }
        track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [items, speed]);

  const onPointerDown = (e: ReactPointerEvent) => {
    draggingRef.current = true;
    setIsDragging(true);
    velocityRef.current = 0;
    movedRef.current = 0;
    (e.target as Element).setPointerCapture(e.pointerId);
    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    lastXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
  };

  const onPointerMove = (e: ReactPointerEvent) => {
    if (!draggingRef.current) return;
    const now = performance.now();
    const dt = now - lastTimeRef.current || 16;
    const dx = e.clientX - lastXRef.current;
    velocityRef.current = (dx / dt) * 16;
    offsetRef.current = dragStartOffsetRef.current + (e.clientX - dragStartXRef.current);
    movedRef.current = Math.max(movedRef.current, Math.abs(e.clientX - dragStartXRef.current));
    lastXRef.current = e.clientX;
    lastTimeRef.current = now;
  };

  const endDrag = () => {
    draggingRef.current = false;
    setIsDragging(false);
  };

  if (!items.length) {
    return <p className="text-cream/50 text-[14.5px]">{emptyMessage}</p>;
  }

  return (
    <div className="overflow-hidden">
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className={`flex w-max gap-4 sm:gap-5 py-2 select-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ willChange: "transform", touchAction: "pan-y" }}
      >
        {slides.map((item, i) => (
          <button
            key={`${item.id}-${i}`}
            type="button"
            onClick={() => {
              if (movedRef.current < 6) onOpen(item);
            }}
            aria-haspopup="dialog"
            className={`group text-left bg-white/5 rounded-[16px] overflow-hidden border border-white/15 p-0 cursor-pointer shrink-0 ${cardWidthClass}`}
          >
            {renderCard(item)}
          </button>
        ))}
      </div>
    </div>
  );
}
