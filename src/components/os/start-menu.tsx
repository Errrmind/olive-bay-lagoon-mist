import { Link } from "@tanstack/react-router";
import { DESK_APPS } from "@/data/apps";
import { stayLabel, useOs } from "@/lib/os";
import { WIKI_SIZE } from "@/data/wiki";
import { meta } from "@/data/catalog";

export function StartMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const stay = useOs((s) => s.launchStay);
  const artifacts = useOs((s) => s.artifacts.length);

  if (!open) return null;

  return (
    <div className="absolute inset-0 z-40">
      <button type="button" className="absolute inset-0" aria-label="Dismiss start" onClick={onClose} />
      <div className="absolute bottom-14 left-2 w-[min(420px,calc(100%-1rem))] overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-border)]">
        <div className="border-b border-line px-4 py-4">
          <p className="font-display text-2xl tracking-display italic">Sand</p>
          <p className="mt-1 text-sm text-muted">God Model · Windows stay · {stayLabel(stay)}</p>
          <p className="mt-2 text-sm text-subtle">Bot · Chat · Computer · Routine · Skill</p>
          <p className="mt-2 font-mono text-xs text-subtle tabular-nums">
            {WIKI_SIZE.toLocaleString("en-GB")} pages · {meta.agentCount} bots · {artifacts} artifacts
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-1 p-2" aria-label="Start">
          {DESK_APPS.map((app) => {
            const Icon = app.icon;
            return (
              <Link
                key={app.id}
                to={app.to}
                onClick={onClose}
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-fg no-underline hover:bg-elevated"
              >
                <Icon className="size-4 text-muted" />
                <span>
                  <span className="block">{app.label}</span>
                  <span className="block font-mono text-xs text-subtle">{app.kicker}</span>
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
