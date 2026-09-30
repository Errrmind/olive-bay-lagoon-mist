import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/page-header";
import {
  CANON_IDS,
  CATEGORIES,
  clampId,
  formatPageId,
  pagesInCategory,
  searchWiki,
  WIKI_SIZE,
  wikiTitle,
} from "@/data/wiki";

export const Route = createFileRoute("/wiki/")({ component: WikiHome });

function WikiHome() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [jump, setJump] = useState("");
  const [cat, setCat] = useState(CATEGORIES[0]!.id);
  const [page, setPage] = useState(0);
  const limit = 24;

  const results = useMemo(() => (q.trim() ? searchWiki(q, 30) : []), [q]);
  const listing = useMemo(() => pagesInCategory(cat, page * limit, limit), [cat, page]);

  const goJump = () => {
    const trimmed = jump.replace(/[, ]/g, "");
    if (!trimmed) return;
    const raw = Number(trimmed);
    if (!Number.isFinite(raw)) return;
    void navigate({ to: "/wiki/$pageId", params: { pageId: String(clampId(raw)) } });
  };

  return (
    <div className="sand-enter">
      <PageHeader
        kicker="Grokipedia stay"
        title="885,000 pages, kept alive"
        lede="Version 0.1 printed a launch count. This stay is the institution: every page is addressable, categorized, and still open to a correction. Each article carries a map, theory, practice, and invention. Generated on this computer. No model call."
        action={
          <button
            type="button"
            onClick={() =>
              void navigate({
                to: "/wiki/$pageId",
                params: { pageId: String(Math.floor(Math.random() * WIKI_SIZE)) },
              })
            }
            className="inline-flex h-11 items-center rounded-xl bg-elevated px-4 text-sm text-fg"
          >
            Random page
          </button>
        }
      />

      <p className="mb-6 font-mono text-xs text-subtle tabular-nums">
        {WIKI_SIZE.toLocaleString("en-GB")} articles · {CATEGORIES.length} categories · pages 0–10 are canon objects
      </p>

      <form
        className="mb-4 flex flex-col gap-2 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          goJump();
        }}
      >
        <label className="sr-only" htmlFor="wiki-jump">
          Jump to page number
        </label>
        <input
          id="wiki-jump"
          value={jump}
          onChange={(e) => setJump(e.target.value)}
          placeholder="Jump to any of 885,000 — page number"
          className="h-11 min-w-0 flex-1 rounded-xl bg-surface px-4 text-sm text-fg placeholder:text-subtle shadow-[var(--shadow-border)]"
        />
        <button type="submit" className="h-11 rounded-xl bg-accent px-4 text-sm text-accent-fg">
          Open page
        </button>
      </form>

      <label className="sr-only" htmlFor="wiki-search">
        Search Grokipedia
      </label>
      <input
        id="wiki-search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search title, category, or page number"
        className="mb-4 h-11 w-full rounded-xl bg-surface px-4 text-sm text-fg placeholder:text-subtle shadow-[var(--shadow-border)]"
      />

      {q.trim() ? (
        <ul className="mb-8 grid gap-2">
          {results.length === 0 ? (
            <li className="rounded-2xl bg-surface px-5 py-8 text-center text-sm text-muted">No pages in that query.</li>
          ) : (
            results.map((r) => (
              <li key={r.id}>
                <Link
                  to="/wiki/$pageId"
                  params={{ pageId: String(r.id) }}
                  className="block rounded-2xl bg-surface px-4 py-3 no-underline hover:shadow-[var(--shadow-border-hover)]"
                >
                  <p className="font-mono text-xs text-subtle">
                    {r.category} · {formatPageId(r.id)}
                  </p>
                  <p className="mt-1 text-sm text-fg">{r.title}</p>
                </Link>
              </li>
            ))
          )}
        </ul>
      ) : (
        <>
          <div className="mb-4 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setCat(c.id);
                  setPage(0);
                }}
                className={`h-10 rounded-full px-3 text-sm ${
                  cat === c.id ? "bg-accent text-accent-fg" : "bg-surface text-muted hover:text-fg"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
          <p className="mb-3 font-mono text-xs text-subtle tabular-nums">
            {listing.cat.name} · {listing.total.toLocaleString("en-GB")} pages · map {formatPageId(listing.cat.start)}–
            {formatPageId(listing.cat.end - 1)}
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {listing.items.map((item) => (
              <li key={item.id}>
                <Link
                  to="/wiki/$pageId"
                  params={{ pageId: String(item.id) }}
                  className="block rounded-2xl bg-surface px-4 py-3 no-underline hover:shadow-[var(--shadow-border-hover)]"
                >
                  <p className="font-mono text-xs text-subtle">{formatPageId(item.id)}</p>
                  <p className="mt-1 text-sm text-fg">{item.title}</p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between text-sm">
            <button
              type="button"
              className="h-11 rounded-xl px-4 text-muted hover:bg-elevated hover:text-fg disabled:opacity-40"
              disabled={page === 0}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
            >
              Previous
            </button>
            <span className="font-mono text-xs text-subtle tabular-nums">{page + 1}</span>
            <button
              type="button"
              className="h-11 rounded-xl px-4 text-muted hover:bg-elevated hover:text-fg disabled:opacity-40"
              disabled={listing.offset + listing.items.length >= listing.total}
              onClick={() => setPage((p) => p + 1)}
            >
              Next
            </button>
          </div>
        </>
      )}

      <section className="mt-10 rounded-2xl bg-surface p-5">
        <h2 className="font-display text-xl tracking-display">Canon objects</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {CANON_IDS.map((id) => (
            <li key={id}>
              <Link to="/wiki/$pageId" params={{ pageId: String(id) }} className="text-muted hover:text-fg">
                {formatPageId(id)} · {wikiTitle(id)}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
