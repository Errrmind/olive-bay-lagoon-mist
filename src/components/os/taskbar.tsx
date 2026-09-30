import { Link, useRouterState } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { DESK_APPS, TASKBAR_PINNED } from "@/data/apps";
import { stayLabel, useOs } from "@/lib/os";
import { cn } from "@/lib/cn";

export function Taskbar({ onSearch }: { onSearch: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const startOpen = useOs((s) => s.startOpen);
  const setStartOpen = useOs((s) => s.setStartOpen);
  const stay = useOs((s) => s.launchStay);
  const [clock, setClock] = useState("--:--");

  useEffect(() => {
    const stamp = () =>
      setClock(
        new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
      );
    stamp();
    const t = window.setInterval(stamp, 1000);
    return () => window.clearInterval(t);
  }, []);

  const pinned = TASKBAR_PINNED.map((id) => DESK_APPS.find((a) => a.id === id)!).filter(Boolean);

  return (
    <footer className="relative z-50 flex h-12 shrink-0 items-center gap-1 border-t border-line bg-surface px-1 sm:px-2">
      <button
        type="button"
        onClick={() => setStartOpen(!startOpen)}
        aria-expanded={startOpen}
        aria-label="Start"
        className={cn(
          "flex h-10 items-center gap-2 rounded-lg px-3 text-sm",
          startOpen ? "bg-elevated text-fg" : "text-fg hover:bg-elevated",
        )}
      >
        <span className="font-display text-lg leading-none italic">S</span>
        <span className="hidden sm:inline">Start</span>
      </button>

      <Link
        to="/"
        className={cn(
          "hidden h-10 items-center rounded-lg px-3 text-sm no-underline sm:flex",
          pathname === "/" ? "bg-elevated text-fg" : "text-muted hover:bg-elevated hover:text-fg",
        )}
      >
        Desktop
      </Link>

      <div className="flex min-w-0 flex-1 items-center gap-0.5 overflow-x-auto">
        {pinned.map((app) => {
          const Icon = app.icon;
          const on = pathname === app.to || pathname.startsWith(`${app.to}/`);
          return (
            <Link
              key={app.id}
              to={app.to}
              title={app.label}
              className={cn(
                "inline-flex size-10 shrink-0 items-center justify-center rounded-lg no-underline",
                on ? "bg-elevated text-fg" : "text-muted hover:bg-elevated hover:text-fg",
              )}
            >
              <Icon className="size-4" />
            </Link>
          );
        })}
      </div>

      <button
        type="button"
        onClick={onSearch}
        className="inline-flex size-10 items-center justify-center rounded-lg text-muted hover:bg-elevated hover:text-fg"
        aria-label="Search"
      >
        <Search className="size-4" />
      </button>

      <Link
        to="/computer"
        className="hidden h-10 max-w-[10rem] items-center truncate rounded-lg px-2 font-mono text-xs text-subtle no-underline hover:bg-elevated hover:text-fg sm:flex"
      >
        {stayLabel(stay)}
      </Link>
      <span className="inline-flex items-center gap-2 px-2 font-mono text-xs text-subtle">
        <span className="size-1.5 rounded-full bg-ok" />
        <span className="tabular-nums">{clock}</span>
      </span>
    </footer>
  );
}
