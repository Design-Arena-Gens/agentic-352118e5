import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  actions,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        {eyebrow ? (
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-200/80">
            {eyebrow}
          </span>
        ) : null}
        <h2 className="mt-2 font-display text-2xl font-semibold text-zinc-50 md:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 max-w-3xl text-sm text-zinc-300/80 md:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {actions ? (
        <div className="flex items-center gap-3 text-sm text-zinc-200">
          {actions}
        </div>
      ) : null}
    </div>
  );
}
