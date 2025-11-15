type Integration = {
  name: string;
  provider: string;
  role: string;
  automation: string[];
  status: "live" | "syncing" | "backlog";
};

const statusStyles: Record<
  Integration["status"],
  { label: string; className: string }
> = {
  live: {
    label: "Live",
    className:
      "border-emerald-400/50 bg-emerald-400/10 text-emerald-100 shadow-[0_0_30px_rgba(52,211,153,0.25)]",
  },
  syncing: {
    label: "Syncing",
    className:
      "border-sky-400/40 bg-sky-400/10 text-sky-100 shadow-[0_0_25px_rgba(56,189,248,0.25)]",
  },
  backlog: {
    label: "Backlog",
    className:
      "border-amber-400/40 bg-amber-400/10 text-amber-100 shadow-[0_0_20px_rgba(251,191,36,0.2)]",
  },
};

type IntegrationStackProps = {
  integrations: Integration[];
};

export function IntegrationStack({ integrations }: IntegrationStackProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {integrations.map((integration) => {
        const status = statusStyles[integration.status];
        return (
          <article
            key={integration.name}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/50 p-5 backdrop-blur"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
            <div className="relative flex h-full flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                    {integration.provider}
                  </p>
                  <h3 className="font-display text-xl text-white">
                    {integration.name}
                  </h3>
                </div>
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-medium ${status.className}`}
                >
                  {status.label}
                </span>
              </div>
              <p className="text-sm text-zinc-300/80">{integration.role}</p>
              <div className="mt-auto">
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
                  Automations
                </p>
                <ul className="mt-3 space-y-2 text-sm text-zinc-200">
                  {integration.automation.map((automation) => (
                    <li
                      key={automation}
                      className="flex items-center gap-2 rounded-2xl border border-white/5 bg-white/5 px-4 py-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-60" />
                      {automation}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
