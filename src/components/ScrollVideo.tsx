import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

interface ScrollVideoProps {
  src: string;
  poster: string;
  /** Pixels of scroll over which the video scrubs from first to last frame. */
  scrubRange?: number;
}

const MAX_FRAMES = 64;
const MIN_FRAMES = 24;
const EXTRACTION_FPS = 6;
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
  const reduce = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduce || framesReady) return;
    const p = video.play();
    if (p && p.catch) p.catch(() => {});
  }, [reduce, framesReady]);

  useEffect(() => {
    if (reduce) return;
    let cancelled = false;
    let objectUrl: string | null = null;

    async function extract() {
      try {
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
          const t = (i / (frameCount - 1)) * duration;
          await new Promise<void>((resolve) => {
            const onSeeked = () => {
              source.removeEventListener("seeked", onSeeked);
              resolve();
            };
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
      } catch {
        // Extraction failed or was cancelled — the <video> fallback stays visible permanently.
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
      const range = scrubRange ?? window.innerHeight * 1.05;
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
          className="w-full h-full object-cover"
        />
      )}
      <canvas ref={canvasRef} className={`w-full h-full block ${framesReady ? "" : "invisible"}`} />
    </div>
  );
}
