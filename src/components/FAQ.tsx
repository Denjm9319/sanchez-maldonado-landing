import { useState } from "react";
import Reveal from "./Reveal";
import { FAQ_ITEMS } from "../config/site";

export default function FAQ() {
  const [open, setOpen] = useState<number>(-1);

  return (
    <Reveal id="faq" className="max-w-[900px] mx-auto px-6 py-[clamp(78px,11vw,150px)]">
      <h2 className="text-[clamp(30px,4.2vw,50px)] leading-[1.12] mb-[clamp(34px,4vw,54px)]">
        Preguntas frecuentes
      </h2>
      <div className="border-t border-navy/[0.12]">
        {FAQ_ITEMS.map((item, i) => {
          const expanded = open === i;
          return (
            <div key={item.q} className="border-b border-navy/[0.12]">
              <button
                type="button"
                aria-expanded={expanded}
                onClick={() => setOpen(expanded ? -1 : i)}
                className="w-full flex gap-[18px] items-center justify-between text-left bg-transparent border-none py-6 cursor-pointer text-[clamp(16px,1.7vw,19px)] font-display"
              >
                {item.q}
                <span aria-hidden="true" className="text-teal font-sans text-xl">
                  +
                </span>
              </button>
              {expanded && (
                <p className="pb-6 text-secondary leading-[1.75] text-[15.5px] max-w-[46em]">{item.a}</p>
              )}
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}
