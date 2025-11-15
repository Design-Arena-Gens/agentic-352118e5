type MetricCardProps = {
  label: string;
  value: string;
  delta?: string;
  trend?: "up" | "down" | "steady";
  caption?: string;
};

export function MetricCard({
  label,
  value,
  delta,
  trend = "steady",
  caption,
}: MetricCardProps) {
  const trendColor =
    trend === "up"
      ? "text-emerald-300"
      : trend === "down"
        ? "text-rose-300"
        : "text-sky-300";

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur transition hover:border-teal-200/40 hover:shadow-[0_10px_40px_-20px_rgba(34,211,238,0.7)]">
      <div className="absolute inset-px rounded-2xl border border-white/5 opacity-0 transition group-hover:opacity-100" />
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
          {label}
        </span>
        {delta ? (
          <span className={`text-xs font-medium ${trendColor}`}>{delta}</span>
        ) : null}
      </div>
      <p className="mt-4 font-display text-3xl font-semibold text-white">
        {value}
      </p>
      {caption ? (
        <p className="mt-3 text-xs text-zinc-400">{caption}</p>
      ) : null}
    </div>
  );
}
