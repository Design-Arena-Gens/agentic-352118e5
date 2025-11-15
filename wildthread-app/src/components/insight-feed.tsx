type Insight = {
  id: string;
  category: "finance" | "marketing" | "product" | "operations";
  title: string;
  impact: string;
  action: string;
  confidence: number;
};

const categoryStyles: Record<
  Insight["category"],
  { label: string; badge: string; glow: string }
> = {
  finance: {
    label: "Finance",
    badge: "bg-emerald-400/10 text-emerald-200",
    glow: "shadow-[0_0_25px_rgba(52,211,153,0.25)]",
  },
  marketing: {
    label: "Marketing",
    badge: "bg-rose-400/10 text-rose-200",
    glow: "shadow-[0_0_25px_rgba(251,113,133,0.2)]",
  },
  product: {
    label: "Product",
    badge: "bg-sky-400/10 text-sky-200",
    glow: "shadow-[0_0_25px_rgba(56,189,248,0.25)]",
  },
  operations: {
    label: "Ops",
    badge: "bg-violet-400/10 text-violet-200",
    glow: "shadow-[0_0_25px_rgba(167,139,250,0.25)]",
  },
};

type InsightFeedProps = {
  insights: Insight[];
};

export function InsightFeed({ insights }: InsightFeedProps) {
  return (
    <div className="space-y-3">
      {insights.map((insight) => {
        const category = categoryStyles[insight.category];
        return (
          <div
            key={insight.id}
            className={`relative overflow-hidden rounded-3xl border border-white/10 bg-black/50 p-5 backdrop-blur ${category.glow}`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
            <div className="relative flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.35em] ${category.badge}`}
                >
                  {category.label}
                </span>
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                  Confidence {Math.round(insight.confidence * 100)}%
                </div>
              </div>
              <h4 className="font-display text-lg text-white">
                {insight.title}
              </h4>
              <p className="text-sm text-zinc-300/90">{insight.impact}</p>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-teal-100/90">
                {insight.action}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
