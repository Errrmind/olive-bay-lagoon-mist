import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { agents } from "@/data/catalog";
import { KIND_LABEL, KINDS, ROOMS, roomForAgent, useOs, type ArtifactKind } from "@/lib/os";

export const Route = createFileRoute("/institution/")({ component: InstitutionPage });

function InstitutionPage() {
  const artifacts = useOs((s) => s.artifacts);
  const sitFloor = useOs((s) => s.sitFloor);
  const [kind, setKind] = useState<ArtifactKind | "all">("all");

  const byRoom = ROOMS.map((room) => ({
    room,
    bots: agents.filter((a) => roomForAgent(a.lane).id === room.id),
    filed: artifacts.filter((a) => a.room === room.name),
  }));

  const shown = kind === "all" ? artifacts : artifacts.filter((a) => a.kind === kind);

  return (
    <div className="sand-enter">
      <PageHeader
        kicker="Mapped foundry"
        title="Institution"
        lede="Generating 885,000 pages is a launch. Keeping them alive is an institution. Every desk files a full map, four-path theory, practice drill, and invention on a local tick — no new meter."
        action={
          <button
            type="button"
            onClick={() => sitFloor()}
            className="h-11 rounded-xl bg-accent px-4 text-sm text-accent-fg"
          >
            Sit the floor down
          </button>
        }
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {byRoom.map(({ room, bots, filed }) => (
          <article key={room.id} className="rounded-2xl bg-surface p-5">
            <p className="font-mono text-xs tracking-widest text-subtle uppercase">{room.wing}</p>
            <h2 className="mt-2 font-display text-xl tracking-display">{room.name}</h2>
            <p className="mt-2 font-mono text-xs text-subtle tabular-nums">
              {bots.length} bots · {filed.length} artifacts
            </p>
            <ul className="mt-3 space-y-1">
              {bots.slice(0, 4).map((b) => (
                <li key={b.id}>
                  <Link to="/bots/$botId" params={{ botId: b.id }} className="text-sm text-muted hover:text-fg">
                    {b.display}
                  </Link>
                </li>
              ))}
              {bots.length === 0 ? <li className="text-sm text-subtle">Unstaffed this stay</li> : null}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-10 mb-3 flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-2xl tracking-display">Filed artifacts</h2>
        <div className="flex flex-wrap gap-2">
          <KindBtn id="all" on={kind === "all"} set={() => setKind("all")} />
          {KINDS.map((k) => (
            <KindBtn key={k} id={KIND_LABEL[k]} on={kind === k} set={() => setKind(k)} />
          ))}
        </div>
      </div>
      {shown.length === 0 ? (
        <p className="rounded-2xl bg-surface px-5 py-8 text-center text-sm text-muted">
          Waiting on the first local tick. Agents write without a model call.
        </p>
      ) : (
        <ul className="grid gap-3">
          {shown.slice(0, 32).map((a) => (
            <li key={a.id}>
              <Link
                to="/institution/$artifactId"
                params={{ artifactId: a.id }}
                className="block rounded-2xl bg-surface p-5 no-underline hover:shadow-[var(--shadow-border-hover)]"
              >
                <p className="font-mono text-xs text-subtle">
                  {KIND_LABEL[a.kind]} · {a.room} · {a.agentName}
                </p>
                <h3 className="mt-1 text-sm font-medium text-fg">{a.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{a.map.conceptual}</p>
                <p className="mt-2 font-mono text-xs text-subtle">{a.objects.join(" · ")}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function KindBtn({ id, on, set }: { id: string; on: boolean; set: () => void }) {
  return (
    <button
      type="button"
      onClick={set}
      className={`h-10 rounded-full px-3 text-sm ${on ? "bg-accent text-accent-fg" : "bg-surface text-muted hover:text-fg"}`}
    >
      {id}
    </button>
  );
}
