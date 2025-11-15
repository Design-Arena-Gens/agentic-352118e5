type AutomationStatus = "stable" | "optimizing" | "launching";

type PipelineStage = {
  id: string;
  name: string;
  description: string;
  owner: string;
  cadences: string[];
  status: AutomationStatus;
};

const statusMap: Record<AutomationStatus, { label: string; color: string }> = {
  stable: {
    label: "Stable",
    color: "bg-emerald-400/20 text-emerald-200",
  },
  optimizing: {
    label: "Optimizing",
    color: "bg-sky-400/10 text-sky-200",
  },
  launching: {
    label: "Launching",
    color: "bg-amber-400/20 text-amber-200",
  },
};

type AutomationPipelineProps = {
  title: string;
  stages: PipelineStage[];
};

export function AutomationPipeline({ title, stages }: AutomationPipelineProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.18),transparent_55%)] opacity-80" />
      <div className="relative">
        <h3 className="font-display text-xl text-teal-100">{title}</h3>
        <ol className="mt-6 space-y-6">
          {stages.map((stage, index) => {
            const status = statusMap[stage.status];
            return (
              <li
                key={stage.id}
                className="relative rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-teal-200/40 bg-teal-400/10 font-semibold text-teal-100">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400">
                      {stage.owner}
                    </p>
                    <h4 className="mt-1 font-display text-lg text-white">
                      {stage.name}
                    </h4>
                  </div>
                  <span
                    className={`ml-auto rounded-full px-3 py-1 text-xs font-medium ${status.color}`}
                  >
                    {status.label}
                  </span>
                </div>
                <p className="mt-3 text-sm text-zinc-300/80">
                  {stage.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-300/70">
                  {stage.cadences.map((cadence) => (
                    <span
                      key={cadence}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                    >
                      {cadence}
                    </span>
                  ))}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
