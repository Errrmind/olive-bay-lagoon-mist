import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { gates, timeline } from "@/data/doctrine";

export const Route = createFileRoute("/gates")({ component: GatesPage });

function GatesPage() {
  return (
    <div className="sand-enter">
      <PageHeader
        kicker="Seven gates"
        title="What a project had to pass"
        lede="Reconstructed from public org reporting. Titles below the CEO line are function titles, not a claim that a badge said exactly this string."
      />

      <ol className="space-y-3">
        {gates.map((g) => (
          <li key={g.n} className="rounded-2xl bg-surface p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-[11px] tracking-[0.16em] text-subtle uppercase">
                Gate {String(g.n).padStart(2, "0")} · {g.when}
              </p>
              <Badge tone="ok">{g.verdict}</Badge>
            </div>
            <h2 className="mt-3 font-display text-2xl tracking-display text-fg">{g.name}</h2>
            <p className="mt-2 text-[15px] text-fg">{g.question}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{g.note}</p>
          </li>
        ))}
      </ol>

      <h2 className="mt-12 mb-4 font-display text-2xl tracking-display">Public record</h2>
      <ol className="overflow-hidden rounded-2xl bg-surface">
        {timeline.map((t, i) => (
          <li key={t.date} className="grid gap-1 border-b border-line px-5 py-4 last:border-b-0 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
            <p className="font-mono text-[12px] text-subtle">{t.date}</p>
            <p className="text-sm leading-relaxed text-muted">
              <span className="sr-only">Item {i + 1}. </span>
              {t.event}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
