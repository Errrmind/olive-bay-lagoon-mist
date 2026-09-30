import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { imagination, instincts, objects, reality, teachingDocs, teachingWiki } from "@/data/doctrine";

export const Route = createFileRoute("/doctrine")({ component: DoctrinePage });

function DoctrinePage() {
  return (
    <div className="sand-enter space-y-10">
      <PageHeader
        kicker="Two layers on the same table"
        title="Doctrine"
        lede="Imagination first, then the room we actually live in. Nothing in a reconstructed packet should be quoted as an internal memo."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl bg-surface p-5 sm:p-6">
          <h2 className="font-display text-2xl tracking-display italic">Imagination</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">{imagination}</p>
        </article>
        <article className="rounded-2xl bg-surface p-5 sm:p-6">
          <h2 className="font-display text-2xl tracking-display">Reality</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">{reality}</p>
        </article>
      </div>

      <section>
        <h2 className="mb-4 font-display text-2xl tracking-display">Instincts the docs had to kill</h2>
        <div className="overflow-hidden rounded-2xl bg-surface">
          {instincts.map((row) => (
            <div key={row.instinct} className="grid gap-1 border-b border-line px-5 py-4 last:border-b-0 md:grid-cols-2 md:gap-8">
              <p className="text-sm text-fg">{row.instinct}</p>
              <p className="text-sm leading-relaxed text-muted">{row.lesson}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-2 font-display text-2xl tracking-display">{teachingDocs.title}</h2>
        <p className="mb-5 max-w-2xl text-sm leading-relaxed text-muted">{teachingDocs.lede}</p>
        <div className="grid gap-4 lg:grid-cols-3">
          <Lesson title="After reading" items={teachingDocs.after} />
          <Lesson title="Developers" items={teachingDocs.developers} />
          <Lesson title="Admins" items={teachingDocs.admins} />
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-subtle">{teachingDocs.tone}</p>
      </section>

      <section className="rounded-2xl bg-surface p-5 sm:p-6">
        <h2 className="font-display text-2xl tracking-display">{teachingWiki.title}</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{teachingWiki.grokipedia}</p>
        <p className="mt-4 text-[15px] leading-relaxed text-muted">{teachingWiki.relation}</p>
      </section>

      <section>
        <h2 className="mb-4 font-display text-2xl tracking-display">Objects</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {objects.map((o) => (
            <article key={o.name} className="rounded-2xl bg-surface p-4">
              <p className="font-mono text-[11px] text-subtle">{o.where}</p>
              <p className="mt-2 font-medium text-fg">{o.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{o.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function Lesson({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <article className="rounded-2xl bg-surface p-5">
      <h3 className="font-mono text-[11px] tracking-[0.16em] text-subtle uppercase">{title}</h3>
      <ol className="mt-3 space-y-2">
        {items.map((item, i) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
            <span className="font-mono text-[11px] text-subtle tabular-nums">{String(i + 1).padStart(2, "0")}</span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </article>
  );
}
