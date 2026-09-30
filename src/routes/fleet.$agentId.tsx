import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Markdown } from "@/components/md";
import { PageHeader } from "@/components/page-header";
import { PinButton } from "@/components/pin-button";
import { Badge } from "@/components/ui/badge";
import { formatBytes, getAgent, laneLabel, loadFullAgents } from "@/data/catalog";

export const Route = createFileRoute("/fleet/$agentId")({ component: AgentPage });

function AgentPage() {
  const { agentId } = Route.useParams();
  const listed = getAgent(agentId);
  const [body, setBody] = useState(listed?.body || listed?.mandate || "");
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let live = true;
    loadFullAgents()
      .then((all) => {
        if (!live) return;
        const hit = all.find((a) => a.id === agentId);
        if (hit?.body) setBody(hit.body);
      })
      .catch((e: unknown) => {
        if (!live) return;
        setErr(e instanceof Error ? e.message : "Could not load skill body");
      });
    return () => {
      live = false;
    };
  }, [agentId]);

  if (!listed) {
    return (
      <div className="sand-enter">
        <PageHeader title="Agent not in the fleet" lede="That skill packet is not in the rebuilt roster." />
        <Link to="/fleet" className="text-sm text-muted">
          Back to fleet
        </Link>
      </div>
    );
  }

  return (
    <div className="sand-enter">
      <PageHeader
        kicker={listed.name}
        title={listed.display}
        lede={listed.description}
        action={<PinButton pin={{ kind: "agent", id: listed.id }} label="Pin agent" />}
      />

      <div className="mb-6 flex flex-wrap items-center gap-2">
        <Badge>{laneLabel[listed.lane] ?? listed.lane}</Badge>
        <Badge tone="neutral">v{listed.version}</Badge>
        <span className="font-mono text-[11px] text-subtle">{formatBytes(listed.zipBytes)}</span>
      </div>

      {listed.triggers.length ? (
        <section className="mb-4 rounded-2xl bg-surface p-5">
          <h2 className="font-mono text-[11px] tracking-[0.16em] text-subtle uppercase">Activation</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {listed.triggers.map((t) => (
              <li key={t} className="rounded-full bg-elevated px-3 py-1.5 text-sm text-muted">
                {t}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mb-4 rounded-2xl bg-surface p-5">
        <h2 className="font-mono text-[11px] tracking-[0.16em] text-subtle uppercase">Files in the packet</h2>
        <ul className="mt-3 grid gap-1 sm:grid-cols-2">
          {listed.files.map((f) => (
            <li key={f} className="font-mono text-[12px] text-muted">
              {f}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl bg-surface p-5 sm:p-6">
        <h2 className="font-mono text-[11px] tracking-[0.16em] text-subtle uppercase">Skill body</h2>
        {err ? <p className="mt-3 text-sm text-danger">{err}</p> : null}
        {body ? <Markdown source={body} className="mt-2" /> : <p className="mt-3 text-sm text-muted">Loading packet…</p>}
      </section>
    </div>
  );
}
