type CalendarEntry = {
  channel: string;
  deliverable: string;
  automation: string;
  assets: string[];
};

type CalendarDay = {
  day: string;
  theme: string;
  focus: string;
  entries: CalendarEntry[];
};

type WeeklyCalendarProps = {
  days: CalendarDay[];
};

export function WeeklyCalendar({ days }: WeeklyCalendarProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {days.map((day) => (
        <div
          key={day.day}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-5 backdrop-blur"
        >
          <div className="relative">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl text-white">{day.day}</h3>
              <span className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.3em] text-teal-100">
                {day.theme}
              </span>
            </div>
            <p className="mt-2 text-sm text-zinc-300">{day.focus}</p>
            <div className="mt-4 space-y-4">
              {day.entries.map((entry) => (
                <div
                  key={`${day.day}-${entry.channel}`}
                  className="rounded-2xl border border-white/10 bg-black/40 p-4 shadow-inner"
                >
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-zinc-400">
                    <span>{entry.channel}</span>
                    <span className="text-teal-200">{entry.automation}</span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-white">
                    {entry.deliverable}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-300/80">
                    {entry.assets.map((asset) => (
                      <span
                        key={`${entry.channel}-${asset}`}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1"
                      >
                        {asset}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
