const NOISE_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export default function AmbientBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div
        className="absolute -top-[15%] -left-[10%] w-[60vw] h-[60vw] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(214,167,92,0.14) 0%, rgba(214,167,92,0) 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute top-[25%] -right-[18%] w-[55vw] h-[55vw] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(20,43,61,0.55) 0%, rgba(20,43,61,0) 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-[-20%] left-[15%] w-[50vw] h-[50vw] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(214,167,92,0.10) 0%, rgba(214,167,92,0) 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("${NOISE_SVG}")`,
          opacity: 0.05,
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
}
