type TaskItem = {
  id: string;
  title: string;
  owner: string;
  cadence: string;
  playbook: string;
  dependencies?: string[];
};

type TaskBoardProps = {
  columns: {
    title: string;
    subtitle: string;
    color: string;
    items: TaskItem[];
  }[];
};

export function TaskBoard({ columns }: TaskBoardProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {columns.map((column) => (
        <div
          key={column.title}
          className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-5"
        >
          <div
            className="absolute inset-0 opacity-80"
            style={{
              background:
                column.color === "emerald"
                  ? "radial-gradient(circle at top, rgba(52, 211, 153, 0.18), transparent 65%)"
                  : column.color === "violet"
                    ? "radial-gradient(circle at top, rgba(192, 132, 252, 0.18), transparent 65%)"
                    : "radial-gradient(circle at top, rgba(96, 165, 250, 0.18), transparent 65%)",
            }}
          />
          <div className="relative">
            <h3 className="font-display text-xl text-white">{column.title}</h3>
            <p className="mt-1 text-xs uppercase tracking-[0.35em] text-zinc-300/70">
              {column.subtitle}
            </p>
            <div className="mt-4 space-y-4">
              {column.items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-white/10 bg-black/40 p-4 shadow-inner"
                >
                  <p className="text-sm font-semibold text-white">
                    {item.title}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-zinc-300/70">
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
                      {item.owner}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
                      {item.cadence}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
                      {item.playbook}
                    </span>
                  </div>
                  {item.dependencies && item.dependencies.length ? (
                    <div className="mt-3 text-xs text-zinc-400">
                      <p className="uppercase tracking-[0.3em] text-zinc-500">
                        Depends on
                      </p>
                      <ul className="mt-1 list-disc space-y-1 pl-4 marker:text-zinc-400">
                        {item.dependencies.map((dep) => (
                          <li key={dep}>{dep}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
