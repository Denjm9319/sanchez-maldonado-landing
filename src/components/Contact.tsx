import Reveal from "./Reveal";
import { WHATSAPP_LINK } from "../config/site";

export default function Contact() {
  return (
    <section id="contacto" className="relative bg-black/25 backdrop-blur-[2px] text-cream">
      <Reveal className="max-w-[700px] mx-auto px-6 py-[clamp(78px,11vw,150px)] text-center">
        <h2 className="font-heroDisplay text-[clamp(32px,4.6vw,54px)] leading-[1.08] text-cream mb-6 [text-wrap:pretty]">
          Contanos qué querés mejorar.
        </h2>
        <p className="text-[clamp(16px,1.4vw,18px)] leading-[1.75] text-cream/78 max-w-[32em] mx-auto mb-10">
          Escribinos por WhatsApp y contanos sobre tu negocio. Sin formularios ni vueltas — te
          respondemos directamente y vemos qué tendría sentido implementar.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-whatsapp text-[#08361A] px-8 py-[18px] rounded-full text-[16px] font-medium hover:bg-cream hover:text-navy"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.03c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.02.07-1.75-.11-.42-.1-.97-.29-1.67-.59-2.95-1.27-4.88-4.24-5.03-4.44-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.59-.37.79-.37s.39 0 .56.01c.18.01.42-.07.66.5.24.58.82 2 .89 2.14.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.61.17.3.75 1.24 1.61 2.01 1.11.99 2.04 1.3 2.34 1.45.3.15.47.12.65-.07.17-.2.75-.87.95-1.17.2-.3.4-.25.66-.15.27.1 1.68.79 1.97.94.29.15.48.22.55.34.07.13.07.75-.17 1.43z" />
          </svg>
          Hablar por WhatsApp
        </a>
      </Reveal>
    </section>
  );
}
