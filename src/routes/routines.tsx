import { createFileRoute, Link } from "@tanstack/react-router";
import { BotMark } from "@/components/bot-mark";
import { PageHeader } from "@/components/page-header";
import { agents } from "@/data/catalog";
import { KIND_LABEL, presenceOf, roomForAgent, useOs } from "@/lib/os";

export const Route = createFileRoute("/routines")({ component: RoutinesPage });

function RoutinesPage() {
  const artifacts = useOs((s) => s.artifacts);
  const lastTick = useOs((s) => s.lastTick);
  const routineOff = useOs((s) => s.routineOff);
  const setRoutine = useOs((s) => s.setRoutine);
  const sitDown = useOs((s) => s.sitDown);
  const sitFloor = useOs((s) => s.sitFloor);

  return (
    <div className="sand-enter">
      <PageHeader
        kicker="Bot-level"
        title="Routines"
        lede="Work that starts without a prompt. The coworker who already sat down. Each Bot files a rotating map, theory, practice, and invention into the institution — not into a chat."
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

      <p className="mb-6 text-sm text-muted">
        Last tick {lastTick ? "on this computer" : "pending"}. Skills are account-wide. Memory of the filing stays with
        the Bot.
      </p>

      <ul className="grid gap-2">
        {agents.map((a) => {
          const filed = artifacts.filter((x) => x.agentId === a.id);
          const room = roomForAgent(a.lane);
          const on = !routineOff[a.id];
          const last = filed[0];
          const presence = presenceOf(a.id, artifacts, lastTick);
          return (
            <li key={a.id} className="flex flex-col gap-3 rounded-2xl bg-surface px-4 py-4 sm:flex-row sm:items-center">
              <BotMark name={a.display} />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-fg">
                  <Link to="/bots/$botId" params={{ botId: a.id }}>
                    {a.display}
                  </Link>
                </p>
                <p className="text-sm text-muted">
                  {room.name} · {presence} · {filed.length} filings
                  {last ? ` · last ${KIND_LABEL[last.kind]}` : ""}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => sitDown(a.id)}
                  className="h-11 rounded-xl bg-elevated px-3 text-sm text-fg"
                >
                  Sit down
                </button>
                <button
                  type="button"
                  onClick={() => setRoutine(a.id, !on)}
                  className="h-11 rounded-xl px-3 text-sm text-muted hover:text-fg"
                >
                  {on ? "Pause" : "Resume"}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
