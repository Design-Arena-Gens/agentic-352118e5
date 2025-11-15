type ProductConcept = {
  id: string;
  name: string;
  storyline: string;
  basePrice: string;
  retailPrice: string;
  margin: string;
  keywords: string[];
  launchStatus: "queued" | "live" | "design";
};

const launchStyles: Record<
  ProductConcept["launchStatus"],
  { label: string; className: string }
> = {
  live: {
    label: "Live",
    className: "bg-emerald-400/10 text-emerald-200 border border-emerald-300/40",
  },
  queued: {
    label: "Queued",
    className: "bg-sky-400/10 text-sky-200 border border-sky-300/40",
  },
  design: {
    label: "Design Lab",
    className:
      "bg-rose-400/10 text-rose-200 border border-rose-300/40",
  },
};

type ProductShowcaseProps = {
  concepts: ProductConcept[];
};

export function ProductShowcase({ concepts }: ProductShowcaseProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {concepts.map((concept) => {
        const status = launchStyles[concept.launchStatus];
        return (
          <div
            key={concept.id}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.12),transparent_60%)]" />
            <div className="relative flex h-full flex-col gap-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl text-white">
                    {concept.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                    Capsule Collection
                  </p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] ${status.className}`}
                >
                  {status.label}
                </span>
              </div>
              <p className="text-sm text-zinc-300/85">{concept.storyline}</p>
              <div className="grid grid-cols-3 gap-2 text-xs text-zinc-200">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p className="uppercase tracking-[0.25em] text-zinc-400">
                    Base
                  </p>
                  <p className="mt-2 font-display text-lg text-white">
                    {concept.basePrice}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p className="uppercase tracking-[0.25em] text-zinc-400">
                    Retail
                  </p>
                  <p className="mt-2 font-display text-lg text-white">
                    {concept.retailPrice}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p className="uppercase tracking-[0.25em] text-zinc-400">
                    Margin
                  </p>
                  <p className="mt-2 font-display text-lg text-teal-200">
                    {concept.margin}
                  </p>
                </div>
              </div>
              <div className="mt-auto flex flex-wrap gap-2 text-xs text-zinc-200/90">
                {concept.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
