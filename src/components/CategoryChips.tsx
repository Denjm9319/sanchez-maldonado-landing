interface CategoryChipsProps<T extends string> {
  categories: { id: T; label: string }[];
  active: T;
  onChange: (id: T) => void;
}

export default function CategoryChips<T extends string>({
  categories,
  active,
  onChange,
}: CategoryChipsProps<T>) {
  if (categories.length <= 2) return null;
  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0 sm:flex-wrap mb-8">
      {categories.map((c) => (
        <button
          key={c.id}
          type="button"
          onClick={() => onChange(c.id)}
          aria-pressed={active === c.id}
          className={`shrink-0 whitespace-nowrap text-[13px] px-4 py-2 rounded-full border transition-colors ${
            active === c.id
              ? "bg-gold text-navy border-gold"
              : "border-white/15 text-cream/70 hover:border-white/35 hover:text-cream"
          }`}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
