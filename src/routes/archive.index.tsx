import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/page-header";
import { formatWhen, meta, sessions } from "@/data/catalog";

export const Route = createFileRoute("/archive/")({ component: ArchivePage });

const TAGS = ["all", ...Object.keys(meta.tagCounts).sort()];

function ArchivePage() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("all");
  const [space, setSpace] = useState("all");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return sessions.filter((s) => {
      if (tag !== "all" && !s.tags.includes(tag)) return false;
      if (space !== "all" && !s.spaces.includes(space)) return false;
      if (!query) return true;
      return `${s.title} ${s.excerpt} ${s.tags.join(" ")}`.toLowerCase().includes(query);
    });
  }, [q, tag, space]);

  return (
    <div className="sand-enter">
      <PageHeader
        kicker="Three hundred fifty sessions"
        title="Knowledge archive"
        lede="Rebuilt from the groktoperp library. Search the corpus, pin a thread, read the packet. Full text loads when you open a session."
      />

      <div className="mb-5 flex flex-col gap-3">
        <label className="sr-only" htmlFor="archive-search">
          Search archive
        </label>
        <input
          id="archive-search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search titles and excerpts"
          className="h-11 w-full rounded-xl bg-surface px-4 text-sm text-fg placeholder:text-subtle shadow-[var(--shadow-border)]"
        />
        <div className="flex flex-wrap gap-2">
          {meta.spaces.map((s) => (
            <button
              key={s.name}
              type="button"
              onClick={() => setSpace(s.name === space ? "all" : s.name)}
              className={`h-10 rounded-full px-3 text-sm ${
                space === s.name ? "bg-accent text-accent-fg" : "bg-surface text-muted hover:text-fg"
              }`}
            >
              {s.name} {s.count}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {TAGS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTag(t)}
              className={`h-9 rounded-full px-3 text-[13px] ${
                tag === t ? "bg-elevated text-fg" : "text-subtle hover:text-fg"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-4 font-mono text-[11px] text-subtle tabular-nums">
        {filtered.length} of {sessions.length}
      </p>

      {filtered.length === 0 ? (
        <p className="rounded-2xl bg-surface px-5 py-10 text-center text-sm text-muted">Nothing in the archive matches.</p>
      ) : (
        <ul className="grid gap-3">
          {filtered.map((s) => (
            <li key={s.id}>
              <Link
                to="/archive/$sessionId"
                params={{ sessionId: s.id }}
                className="block rounded-2xl bg-surface p-5 no-underline transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] text-subtle">
                  <span>{formatWhen(s.updated || s.created)}</span>
                  <span>{s.turns} turns</span>
                  <span>{s.tags.slice(0, 3).join(" · ")}</span>
                </div>
                <h2 className="mt-2 text-[16px] font-medium leading-snug text-fg">{s.title}</h2>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{s.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
