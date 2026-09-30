import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Markdown } from "@/components/md";
import { PageHeader } from "@/components/page-header";
import { PinButton } from "@/components/pin-button";
import { Badge } from "@/components/ui/badge";
import { formatWhen, getSession, loadFullArchive } from "@/data/catalog";
import type { Session } from "@/data/types";

export const Route = createFileRoute("/archive/$sessionId")({ component: SessionPage });

function SessionPage() {
  const { sessionId } = Route.useParams();
  const listed = getSession(sessionId);
  const [full, setFull] = useState<Session | null>(listed ?? null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let live = true;
    loadFullArchive()
      .then((all) => {
        if (!live) return;
        const hit = all.find((s) => s.id === sessionId);
        if (hit) setFull(hit);
      })
      .catch((e: unknown) => {
        if (!live) return;
        setErr(e instanceof Error ? e.message : "Could not load session body");
      });
    return () => {
      live = false;
    };
  }, [sessionId]);

  if (!listed && !full) {
    return (
      <div className="sand-enter">
        <PageHeader title="Session not in the corpus" lede="That thread was not in the rebuilt archive." />
        <Link to="/archive" className="text-sm text-muted">
          Back to archive
        </Link>
      </div>
    );
  }

  const s = full ?? listed!;

  return (
    <div className="sand-enter">
      <PageHeader
        kicker={formatWhen(s.updated || s.created)}
        title={s.title}
        lede={s.excerpt}
        action={<PinButton pin={{ kind: "session", id: s.id }} label="Pin session" />}
      />

      <div className="mb-6 flex flex-wrap gap-2">
        {s.tags.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
        {s.spaces.map((sp) => (
          <Badge key={sp} tone="neutral">
            {sp}
          </Badge>
        ))}
        <span className="font-mono text-[11px] text-subtle">{s.turns} turns</span>
      </div>

      <article className="rounded-2xl bg-surface p-5 sm:p-6">
        {err ? <p className="text-sm text-danger">{err}</p> : null}
        {s.body ? (
          <Markdown source={s.body} />
        ) : (
          <p className="text-sm text-muted">Loading the rebuilt packet…</p>
        )}
        {s.body && s.chars > s.body.length ? (
          <p className="mt-6 text-sm text-subtle">Showing the rebuilt lead of this session. Original ran longer.</p>
        ) : null}
      </article>
    </div>
  );
}
