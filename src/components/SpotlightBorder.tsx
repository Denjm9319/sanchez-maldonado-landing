import { useRef, type CSSProperties, type MouseEvent, type ReactNode } from "react";

interface SpotlightBorderProps {
  children: ReactNode;
  radius?: string;
  size?: number;
  intensity?: number;
  className?: string;
}

/**
 * A 1px gradient border that glows warm gold around the cursor. Tracked
 * per-element (not window-wide) so it stays cheap with several cards on
 * screen at once.
 */
export default function SpotlightBorder({
  children,
  radius = "rounded-2xl",
  size = 480,
  intensity = 0.5,
  className = "",
}: SpotlightBorderProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    ref.current!.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    ref.current!.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  const resetSpot = () => {
    ref.current?.style.setProperty("--spot-x", "-200px");
    ref.current?.style.setProperty("--spot-y", "-200px");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={resetSpot}
      className={`relative ${radius} ${className}`}
    >
      {children}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 ${radius}`}
        style={
          {
            background: `radial-gradient(${size}px circle at var(--spot-x, -200px) var(--spot-y, -200px), rgba(214,167,92,${intensity}), rgba(214,167,92,0) 60%)`,
            padding: "1px",
            WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          } as CSSProperties
        }
      />
    </div>
  );
}
