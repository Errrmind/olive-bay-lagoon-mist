import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { BotMark } from "@/components/bot-mark";
import { PageHeader } from "@/components/page-header";
import { agents, laneLabel } from "@/data/catalog";
import { presenceOf, roomForAgent, useOs } from "@/lib/os";

export const Route = createFileRoute("/bots/")({ component: BotsPage });

function BotsPage() {
  const artifacts = useOs((s) => s.artifacts);
  const lastTick = useOs((s) => s.lastTick);
  const chats = useOs((s) => s.chats);
  const openChat = useOs((s) => s.openChat);
  const sendChat = useOs((s) => s.sendChat);
  const closeChat = useOs((s) => s.closeChat);
  const sitDown = useOs((s) => s.sitDown);
  const [active, setActive] = useState<string | null>(chats[0]?.id ?? null);
  const [draft, setDraft] = useState("");
  const chat = chats.find((c) => c.id === active) ?? chats[0];

  const counts = useMemo(() => {
    const m = new Map<string, number>();
    for (const a of artifacts) m.set(a.agentId, (m.get(a.agentId) ?? 0) + 1);
    return m;
  }, [artifacts]);

  return (
    <div className="sand-enter">
      <PageHeader
        kicker="Bot-level"
        title="Bots"
        lede="Name, avatar, title, memory, presence. One job. Not a chat tab. Open a thread if you must — then throw the thread away."
      />

      <div className="grid gap-4 lg:grid-cols-[1fr_20rem]">
        <ul className="grid gap-2 sm:grid-cols-2">
          {agents.map((a) => {
            const room = roomForAgent(a.lane);
            const presence = presenceOf(a.id, artifacts, lastTick);
            const memory = counts.get(a.id) ?? 0;
            return (
              <li key={a.id} className="rounded-2xl bg-surface p-4">
                <div className="flex gap-3">
                  <BotMark name={a.display} />
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-xs text-subtle">
                      {laneLabel[a.lane] ?? a.lane} · {room.name}
                    </p>
                    <h2 className="mt-1 text-sm font-medium text-fg">
                      <Link to="/bots/$botId" params={{ botId: a.id }} className="hover:text-fg">
                        {a.display}
                      </Link>
                    </h2>
                  </div>
                </div>
                <p className="mt-3 line-clamp-2 text-sm text-muted">{a.description}</p>
                <p className="mt-2 font-mono text-xs text-subtle">
                  {presence} · {memory} memories
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Link
                    to="/bots/$botId"
                    params={{ botId: a.id }}
                    className="inline-flex h-11 items-center rounded-xl bg-elevated px-3 text-sm text-fg"
                  >
                    Open Bot
                  </Link>
                  <button
                    type="button"
                    className="h-11 rounded-xl px-3 text-sm text-muted hover:text-fg"
                    onClick={() => sitDown(a.id)}
                  >
                    Sit down
                  </button>
                  <button
                    type="button"
                    className="h-11 rounded-xl px-3 text-sm text-muted hover:text-fg"
                    onClick={() => {
                      const id = openChat(a.id, a.display);
                      setActive(id);
                    }}
                  >
                    New chat
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

        <aside className="rounded-2xl bg-surface p-4">
          <div className="flex items-center justify-between gap-2">
            <h2 className="font-display text-lg tracking-display">Chats</h2>
            {chat ? (
              <button
                type="button"
                className="h-10 rounded-xl px-3 text-sm text-danger hover:bg-elevated"
                onClick={() => {
                  closeChat(chat.id);
                  setActive(null);
                }}
              >
                Discard thread
              </button>
            ) : null}
          </div>
          <p className="mt-1 text-sm text-muted">Disposable. The Bot is not.</p>
          {chats.length === 0 ? (
            <p className="mt-6 text-sm text-subtle">No open threads.</p>
          ) : (
            <>
              <ul className="mt-3 space-y-1">
                {chats.map((c) => (
                  <li key={c.id}>
                    <button
                      type="button"
                      onClick={() => setActive(c.id)}
                      className={`w-full rounded-lg px-2 py-2 text-left text-sm ${
                        chat?.id === c.id ? "bg-elevated text-fg" : "text-muted hover:text-fg"
                      }`}
                    >
                      {c.title}
                    </button>
                  </li>
                ))}
              </ul>
              {chat ? (
                <div className="mt-4">
                  <div className="max-h-64 space-y-2 overflow-y-auto">
                    {chat.messages.map((m, i) => (
                      <p key={i} className="text-sm leading-relaxed text-muted">
                        <span className="font-medium text-fg">{m.role === "bot" ? chat.botName : "You"} · </span>
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
                      placeholder="Message stays in this thread"
                      className="h-11 min-w-0 flex-1 rounded-xl bg-elevated px-3 text-sm text-fg placeholder:text-subtle"
                    />
                    <button type="submit" className="h-11 rounded-xl bg-accent px-3 text-sm text-accent-fg">
                      Send
                    </button>
                  </form>
                </div>
              ) : null}
            </>
          )}
        </aside>
      </div>
    </div>
  );
}
