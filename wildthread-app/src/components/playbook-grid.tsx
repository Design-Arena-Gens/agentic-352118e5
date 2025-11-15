type Playbook = {
  id: string;
  title: string;
  objective: string;
  kpis: string[];
  automations: string[];
  status: "deployed" | "testing" | "queued";
};

const statusLabels: Record<
  Playbook["status"],
  { label: string; className: string }
> = {
  deployed: {
    label: "Deployed",
    className:
      "bg-emerald-400/10 text-emerald-200 border border-emerald-400/40",
  },
  testing: {
    label: "Testing",
    className: "bg-sky-400/10 text-sky-200 border border-sky-400/40",
  },
  queued: {
    label: "Queued",
    className: "bg-amber-400/10 text-amber-200 border border-amber-400/40",
  },
};

type PlaybookGridProps = {
  playbooks: Playbook[];
};

export function PlaybookGrid({ playbooks }: PlaybookGridProps) {
  return (
    <div className="grid gap-5 xl:grid-cols-3">
      {playbooks.map((playbook) => {
        const status = statusLabels[playbook.status];
        return (
          <div
            key={playbook.id}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-black/40 p-6"
          >
            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl text-white">
                  {playbook.title}
                </h3>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] ${status.className}`}
                >
                  {status.label}
                </span>
              </div>
              <p className="mt-3 text-sm text-zinc-300/80">
                {playbook.objective}
              </p>
              <div className="mt-4">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                  KPIs under watch
                </p>
                <ul className="mt-2 space-y-2 text-sm text-zinc-200">
                  {playbook.kpis.map((kpi) => (
                    <li
                      key={kpi}
                      className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/5 px-3 py-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                      {kpi}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                  Automations firing
                </p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-zinc-200/90">
                  {playbook.automations.map((automation) => (
                    <span
                      key={automation}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                    >
                      {automation}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
