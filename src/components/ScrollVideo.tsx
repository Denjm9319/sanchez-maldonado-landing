import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

interface ScrollVideoProps {
  src: string;
  poster?: string;
  /** Pixels of scroll over which the video scrubs from first to last frame. Defaults to the full page's scrollable height. */
  scrubRange?: number;
}

const MAX_FRAMES = 40;
const MIN_FRAMES = 20;
const EXTRACTION_FPS = 3;
const MAX_FRAME_WIDTH = 960;

/**
 * Extracts the video into a sequence of frames on mount, then scrubs through
 * them on scroll via a canvas + rAF loop instead of seeking <video> directly
 * (which is janky/throttled on scroll in most browsers). The raw <video>
 * stays visible as a live fallback until extraction finishes, so there is
 * never a blank frame.
 */
export default function ScrollVideo({ src, poster, scrubRange }: ScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<ImageBitmap[]>([]);
  const [framesReady, setFramesReady] = useState(false);
  const [debugStatus, setDebugStatus] = useState("iniciando…");
  const reduce = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduce || framesReady) return;
    const p = video.play();
    if (p && p.catch) p.catch(() => {});
  }, [reduce, framesReady]);

  useEffect(() => {
    if (reduce) {
      setDebugStatus("movimiento reducido activado en el sistema — no se intenta la animación");
      return;
    }
    let cancelled = false;
    let objectUrl: string | null = null;

    async function extract() {
      try {
        setDebugStatus("descargando video…");
        const res = await fetch(src);
        const blob = await res.blob();
        if (cancelled) return;
        objectUrl = URL.createObjectURL(blob);

        const source = document.createElement("video");
        source.src = objectUrl;
        source.muted = true;
        source.playsInline = true;
        await new Promise<void>((resolve, reject) => {
          source.onloadedmetadata = () => resolve();
          source.onerror = () => reject(new Error("video metadata failed"));
        });
        if (cancelled) return;

        const duration = source.duration;
        const frameCount = Math.min(
          MAX_FRAMES,
          Math.max(MIN_FRAMES, Math.round(duration * EXTRACTION_FPS))
        );
        const scale = Math.min(1, MAX_FRAME_WIDTH / source.videoWidth);
        const w = Math.round(source.videoWidth * scale);
        const h = Math.round(source.videoHeight * scale);

        const off = document.createElement("canvas");
        off.width = w;
        off.height = h;
        const offCtx = off.getContext("2d");
        if (!offCtx) throw new Error("no 2d context");

        const frames: ImageBitmap[] = [];
        for (let i = 0; i < frameCount; i++) {
          if (cancelled) break;
          setDebugStatus(`extrayendo frame ${i + 1}/${frameCount}…`);
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
            // Some browsers never fire "seeked" for a target very close to the
            // last frame — don't let one bad seek hang extraction forever.
            const timeout = setTimeout(finish, 1500);
            source.addEventListener("seeked", onSeeked);
            source.currentTime = t;
          });
          if (cancelled) break;
          offCtx.drawImage(source, 0, 0, w, h);
          const bitmap = await createImageBitmap(off);
          frames.push(bitmap);
        }

        if (cancelled) {
          frames.forEach((f) => f.close());
          return;
        }
        framesRef.current = frames;
        setFramesReady(true);
        setDebugStatus("listo ✓");
      } catch (err) {
        // Extraction failed or was cancelled — the <video> fallback stays visible permanently.
        if (!cancelled) {
          console.warn("ScrollVideo: frame extraction failed, falling back to plain video", err);
          setDebugStatus(`error: ${err instanceof Error ? err.message : String(err)}`);
        }
      }
    }

    extract();

    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
      framesRef.current.forEach((f) => f.close());
      framesRef.current = [];
    };
  }, [src, reduce]);

  useEffect(() => {
    if (reduce) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let raf = 0;
    let smoothed = 0;
    let targetProgress = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
    };
    resize();
    window.addEventListener("resize", resize);

    const onScroll = () => {
      const range = scrubRange ?? Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      targetProgress = Math.min(1, Math.max(0, window.scrollY / range));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const tick = () => {
      smoothed += (targetProgress - smoothed) * 0.1;
      const frames = framesRef.current;
      if (frames.length > 1) {
        const idx = Math.min(frames.length - 1, Math.round(smoothed * (frames.length - 1)));
        const frame = frames[idx];
        const cw = canvas.width;
        const ch = canvas.height;
        const frameScale = Math.max(cw / frame.width, ch / frame.height);
        const fw = frame.width * frameScale;
        const fh = frame.height * frameScale;
        ctx.drawImage(frame, (cw - fw) / 2, (ch - fh) / 2, fw, fh);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrubRange, reduce]);

  return (
    <div className="absolute inset-0 bg-[#0a0a0a]" aria-hidden="true">
      {!framesReady && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="auto"
          poster={poster}
          src={src}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full block ${framesReady ? "" : "invisible"}`}
      />
      {/* Temporary on-page diagnostic — remove once the mobile/desktop looping report is resolved. */}
      <div className="fixed left-3 bottom-3 z-[80] bg-black/80 text-white text-[11px] px-2.5 py-1.5 rounded-md font-sans pointer-events-none">
        video: {debugStatus}
      </div>
    </div>
  );
}
