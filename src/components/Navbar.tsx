import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS, WHATSAPP_LINK } from "../config/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const onResize = () => {
      const isNarrow = window.innerWidth < 900;
      setNarrow(isNarrow);
      if (!isNarrow) setMenuOpen(false);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="fixed top-3.5 inset-x-0 z-[60] flex justify-center px-3.5 pointer-events-none">
        <nav
          aria-label="Principal"
          className="pointer-events-auto w-full max-w-[1180px] bg-white/90 backdrop-blur-2xl border border-navy/10 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.25)] py-2.5 pl-5 pr-3 flex items-center gap-4"
        >
          <Link to="/#top" className="flex flex-col leading-[1.05] text-navy flex-none">
            <span className="font-display text-base tracking-tight">DeXa</span>
            <span className="text-[9.5px] tracking-[0.22em] uppercase text-secondary mt-0.5">
              AI Solutions
            </span>
          </Link>
          <div className="flex-1" />
          {!narrow && (
            <div className="flex gap-5 items-center text-[13.5px] text-navy">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} to={link.href} className="text-navy hover:text-teal">
                  {link.label}
                </Link>
              ))}
            </div>
          )}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-none bg-navy text-cream px-5 py-2.5 rounded-full text-[13.5px] font-medium hover:bg-teal"
          >
            Hablemos
          </a>
          {narrow && (
            <button
              type="button"
              aria-label="Abrir menú"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="w-[42px] h-[42px] border border-navy/10 bg-white rounded-full cursor-pointer flex items-center justify-center flex-none"
            >
              <span className="block w-4 h-2.5 border-t-[1.5px] border-b-[1.5px] border-navy" />
            </button>
          )}
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[55] bg-cream/95 backdrop-blur-md flex flex-col justify-center gap-1.5 p-8">
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 w-11 h-11 rounded-full border border-navy/10 bg-white cursor-pointer text-xl leading-none"
          >
            ×
          </button>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl text-navy py-2.5"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-navy text-cream px-6 py-4 rounded-full text-center text-[15px]"
          >
            Hablemos por WhatsApp
          </a>
        </div>
      )}
    </>
  );
}
