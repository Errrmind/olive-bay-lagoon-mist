import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { BotMark } from "@/components/bot-mark";
import { ObjectChip } from "@/components/object-chip";
import { PageHeader } from "@/components/page-header";
import { PinButton } from "@/components/pin-button";
import { getAgent, laneLabel } from "@/data/catalog";
import { KIND_LABEL, presenceOf, roomForAgent, useOs } from "@/lib/os";

export const Route = createFileRoute("/bots/$botId")({ component: BotPage });

function BotPage() {
  const { botId } = Route.useParams();
  const bot = getAgent(botId);
  const artifacts = useOs((s) => s.artifacts);
  const lastTick = useOs((s) => s.lastTick);
  const chats = useOs((s) => s.chats.filter((c) => c.botId === botId));
  const openChat = useOs((s) => s.openChat);
  const sendChat = useOs((s) => s.sendChat);
  const closeChat = useOs((s) => s.closeChat);
  const sitDown = useOs((s) => s.sitDown);
  const routineOff = useOs((s) => s.routineOff);
  const setRoutine = useOs((s) => s.setRoutine);
  const installed = useOs((s) => s.installedSkills.includes(botId));
  const [draft, setDraft] = useState("");
  const chat = chats[0];

  if (!bot) {
    return (
      <div className="sand-enter">
        <PageHeader title="Bot not on this computer" lede="That coworker is not in the rebuilt roster." />
        <Link to="/bots" className="text-sm text-muted">
          Back to roster
        </Link>
      </div>
    );
  }

  const room = roomForAgent(bot.lane);
  const mine = artifacts.filter((a) => a.agentId === bot.id);
  const presence = presenceOf(bot.id, artifacts, lastTick);
  const routineOn = !routineOff[bot.id];

  return (
    <div className="sand-enter">
      <PageHeader
        kicker="Bot-level"
        title={bot.display}
        lede={bot.description}
        action={<PinButton pin={{ kind: "agent", id: bot.id }} label="Pin Bot" />}
      />

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <BotMark name={bot.display} className="size-12 text-sm" />
        <ObjectChip name="Bot" />
        <span className="rounded-full bg-ok/10 px-2.5 py-1 font-mono text-xs text-ok uppercase">{presence}</span>
        <span className="font-mono text-xs text-subtle">
          {laneLabel[bot.lane] ?? bot.lane} · {room.name}
        </span>
      </div>

      <section className="mb-4 rounded-2xl bg-surface p-5">
        <h2 className="font-mono text-xs tracking-widest text-subtle uppercase">One job</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">{bot.mandate}</p>
      </section>

      <div className="mb-4 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl bg-surface p-4">
          <p className="font-mono text-xs text-subtle">Memory</p>
          <p className="mt-1 font-display text-2xl tabular-nums">{mine.length}</p>
          <p className="mt-1 text-sm text-muted">Artifacts filed by this Bot</p>
        </div>
        <div className="rounded-2xl bg-surface p-4">
          <p className="font-mono text-xs text-subtle">Routine</p>
          <p className="mt-1 font-display text-2xl">{routineOn ? "Seated" : "Paused"}</p>
          <button
            type="button"
            className="mt-3 h-11 rounded-xl bg-accent px-3 text-sm text-accent-fg"
            onClick={() => sitDown(bot.id)}
          >
            Sit down
          </button>
        </div>
        <div className="rounded-2xl bg-surface p-4">
          <p className="font-mono text-xs text-subtle">Skill</p>
          <p className="mt-1 font-display text-2xl">{installed ? "On box" : "Off"}</p>
          <Link
            to="/fleet/$agentId"
            params={{ agentId: bot.id }}
            className="mt-3 inline-flex h-11 items-center text-sm text-muted hover:text-fg"
          >
            Open packet
          </Link>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <button
          type="button"
          className="h-11 rounded-xl bg-elevated px-4 text-sm text-fg"
          onClick={() => setRoutine(bot.id, !routineOn)}
        >
          {routineOn ? "Pause routine" : "Resume routine"}
        </button>
        <button
          type="button"
          className="h-11 rounded-xl bg-elevated px-4 text-sm text-fg"
          onClick={() => openChat(bot.id, bot.display)}
        >
          New chat
        </button>
      </div>

      {chat ? (
        <section className="mb-4 rounded-2xl bg-surface p-5">
          <div className="flex items-center justify-between gap-2">
            <h2 className="font-display text-lg tracking-display">Disposable chat</h2>
            <button type="button" className="h-10 px-3 text-sm text-danger" onClick={() => closeChat(chat.id)}>
              Discard thread
            </button>
          </div>
          <p className="mt-1 text-sm text-muted">Chats die. This Bot does not.</p>
          <div className="mt-3 max-h-56 space-y-2 overflow-y-auto">
            {chat.messages.map((m, i) => (
              <p key={i} className="text-sm leading-relaxed text-muted">
                <span className="font-medium text-fg">{m.role === "bot" ? bot.display : "You"} · </span>
                {m.text}
              </p>
            ))}
          </div>
          <form
            className="mt-3 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              sendChat(chat.id, draft);
              setDraft("");
            }}
          >
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Thread only"
              className="h-11 min-w-0 flex-1 rounded-xl bg-elevated px-3 text-sm text-fg placeholder:text-subtle"
            />
            <button type="submit" className="h-11 rounded-xl bg-accent px-3 text-sm text-accent-fg">
              Send
            </button>
          </form>
        </section>
      ) : null}

      <h2 className="mb-3 font-display text-2xl tracking-display">Memory</h2>
      {mine.length === 0 ? (
        <p className="rounded-2xl bg-surface px-5 py-8 text-sm text-muted">
          Waiting on the first sit-down. The routine will file without a prompt.
        </p>
      ) : (
        <ul className="grid gap-3">
          {mine.slice(0, 12).map((a) => (
            <li key={a.id}>
              <Link
                to="/institution/$artifactId"
                params={{ artifactId: a.id }}
                className="block rounded-2xl bg-surface p-5 no-underline hover:shadow-[var(--shadow-border-hover)]"
              >
                <p className="font-mono text-xs text-subtle">
                  {KIND_LABEL[a.kind]} · {a.room}
                </p>
                <p className="mt-1 text-sm font-medium text-fg">{a.title}</p>
                <p className="mt-2 line-clamp-2 text-sm text-muted">{a.map.conceptual}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
