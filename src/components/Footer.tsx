import { Link, useLocation } from "react-router-dom";
import { CONTACT_EMAIL, SOCIAL_LINKS, WHATSAPP_LINK } from "../config/site";

export default function Footer() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  return (
    <footer
      className={
        isHome
          ? "relative bg-black/30 backdrop-blur-[2px] text-cream/72"
          : "bg-[#0a0a0a] text-cream/72"
      }
    >
      <div className="max-w-[1180px] mx-auto px-6 pt-[clamp(50px,7vw,84px)] pb-[clamp(30px,4vw,44px)] grid gap-[clamp(28px,4vw,56px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr))]">
        <div>
          <p className="font-display text-xl text-cream">DeXa</p>
          <p className="text-[10.5px] tracking-[0.22em] uppercase text-gold mt-1.5">AI Solutions</p>
          <p className="mt-[18px] leading-[1.7] text-[15px] max-w-[26em] text-cream/80">
            Diseño, marketing e inteligencia artificial para negocios que quieren crecer.
          </p>
        </div>
        <div className="grid gap-2.5 content-start text-[14.5px]">
          <p className="text-[11px] tracking-[0.2em] uppercase text-cream/45 mb-1">Explorar</p>
          <Link to="/proyectos" className="text-cream/85 hover:text-gold">
            Proyectos
          </Link>
          <Link to="/productos" className="text-cream/85 hover:text-gold">
            Productos
          </Link>
          <Link to="/blog" className="text-cream/85 hover:text-gold">
            Blog
          </Link>
        </div>
        <div className="grid gap-2.5 content-start text-[14.5px]">
          <p className="text-[11px] tracking-[0.2em] uppercase text-cream/45 mb-1">Contacto</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-cream/85 hover:text-gold">
            Hablar por WhatsApp
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-cream/85 hover:text-gold">
            {CONTACT_EMAIL}
          </a>
        </div>
        <div className="grid gap-2.5 content-start text-[14.5px]">
          <p className="text-[11px] tracking-[0.2em] uppercase text-cream/45 mb-1">Redes</p>
          <a href={SOCIAL_LINKS.instagram} className="text-cream/85 hover:text-gold">
            Instagram
          </a>
          <a href={SOCIAL_LINKS.linkedin} className="text-cream/85 hover:text-gold">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="max-w-[1180px] mx-auto px-6 pt-5 pb-7 text-[12.5px] text-cream/45">
          © 2026 DeXa AI Solutions
        </div>
      </div>
    </footer>
  );
}
