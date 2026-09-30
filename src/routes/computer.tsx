import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHeader } from "@/components/page-header";
import { recovery } from "@/data/doctrine";
import { agents, meta } from "@/data/catalog";
import { WIKI_SIZE } from "@/data/wiki";
import { usePins } from "@/lib/pins";
import { LAUNCH_STAYS, useOs } from "@/lib/os";

export const Route = createFileRoute("/computer")({ component: ComputerPage });

function ComputerPage() {
  const stay = useOs((s) => s.launchStay);
  const setStay = useOs((s) => s.setLaunchStay);
  const artifacts = useOs((s) => s.artifacts.length);
  const chats = useOs((s) => s.chats.length);
  const recycle = useOs((s) => s.recycle);
  const shell = useOs((s) => s.shell);
  const skills = useOs((s) => s.installedSkills.length);
  const notes = usePins((s) => s.notes);
  const setNotes = usePins((s) => s.setNotes);
  const [step, setStep] = useState<(typeof recovery)[number]["id"]>(recovery[0]!.id);
  const [ready, setReady] = useState(false);
  const active = recovery.find((r) => r.id === step) ?? recovery[0]!;

  useEffect(() => {
    setReady(true);
  }, []);

  const drives = [
    { to: "/wiki" as const, letter: "C:", name: "Grokipedia", detail: `${WIKI_SIZE.toLocaleString("en-GB")} pages` },
    { to: "/bots" as const, letter: "B:", name: "Bots", detail: `${agents.length} coworkers` },
    { to: "/institution" as const, letter: "I:", name: "Institution", detail: `${artifacts} artifacts` },
    { to: "/skills" as const, letter: "S:", name: "Skills", detail: `${skills} installed` },
    { to: "/routines" as const, letter: "R:", name: "Routines", detail: "Sit down without a prompt" },
  ];

  return (
    <div className="sand-enter">
      <PageHeader
        kicker="Account-level"
        title="This Computer"
        lede="One persistent cloud desktop per user. Shared cookies, files, shell. Screens are not a security boundary. Launch stay is editable here."
      />

      <section className="mb-4 rounded-2xl bg-surface p-5 sm:p-6">
        <h2 className="font-mono text-xs tracking-widest text-subtle uppercase">Launch stay</h2>
        <p className="mt-2 text-sm text-muted">
          Print a date only after the stay is named. Internal working product is the default God Model stay.
        </p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {LAUNCH_STAYS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setStay(s.id)}
              className={`rounded-2xl p-4 text-left ${
                stay === s.id ? "bg-accent text-accent-fg" : "bg-elevated text-fg hover:shadow-[var(--shadow-border-hover)]"
              }`}
            >
              <p className="text-sm font-medium">{s.label}</p>
              <p className={`mt-1 text-sm leading-relaxed ${stay === s.id ? "text-accent-fg/80" : "text-muted"}`}>
                {s.copy}
              </p>
            </button>
          ))}
        </div>
      </section>

      <section className="mb-4">
        <h2 className="mb-3 font-display text-xl tracking-display">This PC</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {drives.map((d) => (
            <li key={d.letter}>
              <Link
                to={d.to}
                className="flex items-center gap-4 rounded-2xl bg-surface px-4 py-4 no-underline hover:shadow-[var(--shadow-border-hover)]"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-elevated font-mono text-sm text-fg">
                  {d.letter}
                </span>
                <span>
                  <span className="block text-sm font-medium text-fg">{d.name}</span>
                  <span className="block font-mono text-xs text-subtle">{d.detail}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-4 grid gap-3 sm:grid-cols-3">
        <Stat label="Disk pages" value={WIKI_SIZE.toLocaleString("en-GB")} />
        <Stat label="Bots on this box" value={String(agents.length)} />
        <Stat label="Chats (disposable)" value={String(chats)} />
        <Stat label="Artifacts" value={String(artifacts)} />
        <Stat label="Archive sessions" value={String(meta.sessionCount)} />
        <Stat label="Meter" value="None local" />
      </section>

      <section className="mb-4 rounded-2xl bg-surface p-5 sm:p-6">
        <h2 className="font-display text-xl tracking-display">Shell</h2>
        <p className="mt-1 text-sm text-muted">Local tick transcript. Agents file without a model call.</p>
        {shell.length === 0 ? (
          <p className="mt-4 font-mono text-xs text-subtle">Waiting on first sit-down.</p>
        ) : (
          <ul className="mt-4 max-h-48 space-y-1 overflow-y-auto font-mono text-xs text-muted">
            {shell.slice(0, 24).map((l, i) => (
              <li key={`${l.at}-${i}`}>{l.line}</li>
            ))}
          </ul>
        )}
      </section>

      <section className="mb-4 rounded-2xl bg-surface p-5 sm:p-6">
        <h2 className="font-display text-xl tracking-display">Notes on disk</h2>
        {ready ? (
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Shared cookies, files, shell. This box keeps the note."
            className="mt-3 min-h-28 w-full rounded-xl bg-elevated p-3 text-sm text-fg placeholder:text-subtle"
          />
        ) : (
          <p className="mt-3 min-h-28 rounded-xl bg-elevated p-3 text-sm text-subtle">Notes load with this computer.</p>
        )}
      </section>

      <section className="mb-4 rounded-2xl bg-surface p-5 sm:p-6">
        <h2 className="font-display text-xl tracking-display">Recycle</h2>
        <p className="mt-1 text-sm text-muted">Discarded chats. The Bot was not deleted.</p>
        {recycle.length === 0 ? (
          <p className="mt-4 text-sm text-subtle">Empty.</p>
        ) : (
          <ul className="mt-3 space-y-1">
            {recycle.map((c) => (
              <li key={c.id} className="text-sm text-muted">
                {c.title}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="rounded-2xl bg-surface p-5 sm:p-6">
        <h2 className="font-display text-xl tracking-display">Recovery order</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {recovery.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setStep(r.id)}
              className={`h-10 rounded-xl px-3 text-sm ${
                step === r.id ? "bg-accent text-accent-fg" : "bg-elevated text-muted hover:text-fg"
              }`}
            >
              {r.name}
            </button>
          ))}
        </div>
        <p className="mt-4 text-sm font-medium text-fg">{active.pain} pain</p>
        <p className="mt-1 text-sm leading-relaxed text-muted">{active.copy}</p>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-surface px-4 py-4">
      <p className="font-mono text-xs text-subtle">{label}</p>
      <p className="mt-1 font-display text-2xl tracking-display tabular-nums">{value}</p>
    </div>
  );
}
