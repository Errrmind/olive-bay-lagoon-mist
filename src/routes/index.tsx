import { createFileRoute, Link } from "@tanstack/react-router";
import { DESK_APPS } from "@/data/apps";
import { agents, meta } from "@/data/catalog";
import { WIKI_SIZE } from "@/data/wiki";
import { KIND_LABEL, LAUNCH_STAYS, OBJECTS, stayLabel, useOs } from "@/lib/os";

export const Route = createFileRoute("/")({ component: Desktop });

function Desktop() {
  const stay = useOs((s) => s.launchStay);
  const setStay = useOs((s) => s.setLaunchStay);
  const artifacts = useOs((s) => s.artifacts);
  const last = artifacts[0];

  return (
    <div id="main" className="sand-wallpaper relative h-full overflow-y-auto">
      <p className="pointer-events-none absolute right-6 bottom-20 hidden font-display text-6xl tracking-display text-fg/5 italic sm:block">
        Sand
      </p>

      <div className="relative grid gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:grid-cols-[auto_minmax(0,24rem)]">
        <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-2 lg:content-start">
          {DESK_APPS.map((app) => {
            const Icon = app.icon;
            return (
              <li key={app.id}>
                <Link
                  to={app.to}
                  className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-xl px-2 py-3 text-center no-underline hover:bg-elevated/80"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-surface text-fg shadow-[var(--shadow-border)]">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-xs leading-tight text-fg">{app.label}</span>
                  <span className="hidden font-mono text-xs text-subtle sm:block">{app.kicker}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <aside className="space-y-3">
          <article className="rounded-2xl bg-surface p-5">
            <p className="font-mono text-xs tracking-widest text-subtle uppercase">Launch stay</p>
            <p className="mt-2 font-display text-2xl tracking-display text-fg">{stayLabel(stay)}</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {LAUNCH_STAYS.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setStay(s.id)}
                  className={`min-h-11 rounded-xl px-2 py-2 text-xs leading-tight ${
                    stay === s.id ? "bg-accent text-accent-fg" : "bg-elevated text-muted hover:text-fg"
                  }`}
                >
                  {s.short}
                </button>
              ))}
            </div>
            <Link to="/computer" className="mt-4 inline-block text-sm text-muted hover:text-fg">
              This Computer
            </Link>
          </article>

          <article className="rounded-2xl bg-surface p-5">
            <p className="font-mono text-xs tracking-widest text-subtle uppercase">Objects</p>
            <ul className="mt-3 space-y-2">
              {OBJECTS.map((o) => (
                <li key={o.name} className="text-sm">
                  <span className="font-medium text-fg">{o.name}</span>
                  <span className="text-subtle"> · {o.where}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl bg-surface p-5">
            <p className="font-mono text-xs tracking-widest text-subtle uppercase">Alive</p>
            <dl className="mt-3 grid grid-cols-2 gap-3">
              <div>
                <dt className="font-mono text-xs text-subtle">Pages</dt>
                <dd className="font-display text-xl tabular-nums">{WIKI_SIZE.toLocaleString("en-GB")}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-subtle">Bots</dt>
                <dd className="font-display text-xl tabular-nums">{agents.length}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-subtle">Artifacts</dt>
                <dd className="font-display text-xl tabular-nums">{artifacts.length}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-subtle">Sessions</dt>
                <dd className="font-display text-xl tabular-nums">{meta.sessionCount}</dd>
              </div>
            </dl>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {last
                ? `${last.agentName} filed ${KIND_LABEL[last.kind]} in ${last.room}.`
                : "Agents file maps, theory, practice, and inventions on a local tick. No tokens."}
            </p>
            {last ? (
              <Link
                to="/institution/$artifactId"
                params={{ artifactId: last.id }}
                className="mt-3 inline-block text-sm text-muted hover:text-fg"
              >
                Open filing
              </Link>
            ) : null}
          </article>
        </aside>
      </div>
    </div>
  );
}
