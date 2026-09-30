import { createFileRoute, Link } from "@tanstack/react-router";
import { ObjectChip } from "@/components/object-chip";
import { PageHeader } from "@/components/page-header";
import { clampId, formatPageId, wikiPage, WIKI_SIZE } from "@/data/wiki";

export const Route = createFileRoute("/wiki/$pageId")({ component: WikiArticle });

function WikiArticle() {
  const { pageId } = Route.useParams();
  const id = clampId(Number(pageId));
  const page = wikiPage(id);
  const prev = id > 0 ? id - 1 : null;
  const next = id < WIKI_SIZE - 1 ? id + 1 : null;

  return (
    <div className="sand-enter">
      <PageHeader
        kicker={`${page.category.name} · ${formatPageId(page.id)} / ${WIKI_SIZE.toLocaleString("en-GB")}`}
        title={page.title}
        lede={page.lead}
      />

      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-ok/10 px-2.5 py-1 font-mono text-xs text-ok uppercase">Alive</span>
        <ObjectChip name={page.object} />
        <Link to="/wiki" className="rounded-full bg-elevated px-2.5 py-1 text-xs text-muted">
          {page.category.name}
        </Link>
      </div>

      <article className="space-y-6 rounded-2xl bg-surface p-5 sm:p-6">
        {page.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="font-mono text-xs tracking-widest text-subtle uppercase">{s.heading}</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.body}</p>
          </section>
        ))}
        <section>
          <h2 className="font-mono text-xs tracking-widest text-subtle uppercase">See also</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {page.seeAlso.map((r) => (
              <li key={r.id}>
                <Link
                  to="/wiki/$pageId"
                  params={{ pageId: String(r.id) }}
                  className="text-sm text-muted hover:text-fg"
                >
                  {formatPageId(r.id)} · {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-mono text-xs tracking-widest text-subtle uppercase">Sources</h2>
          <ul className="mt-2 space-y-1">
            {page.sources.map((src) => (
              <li key={src} className="text-sm text-subtle">
                {src}
              </li>
            ))}
          </ul>
        </section>
      </article>

      <nav className="mt-6 flex items-center justify-between gap-3 text-sm">
        {prev != null ? (
          <Link to="/wiki/$pageId" params={{ pageId: String(prev) }} className="text-muted hover:text-fg">
            ← {formatPageId(prev)}
          </Link>
        ) : (
          <span />
        )}
        {next != null ? (
          <Link to="/wiki/$pageId" params={{ pageId: String(next) }} className="text-muted hover:text-fg">
            {formatPageId(next)} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
