import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { agents, formatBytes, laneLabel } from "@/data/catalog";
import type { Lane } from "@/data/types";

export const Route = createFileRoute("/fleet/")({ component: FleetPage });

const LANES: Array<Lane | "all"> = ["all", "eng", "ops", "intel", "docs", "platform", "trust", "self"];

function FleetPage() {
  const [q, setQ] = useState("");
  const [lane, setLane] = useState<Lane | "all">("all");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return agents.filter((a) => {
      if (lane !== "all" && a.lane !== lane) return false;
      if (!query) return true;
      return `${a.display} ${a.description} ${a.mandate} ${a.triggers.join(" ")}`.toLowerCase().includes(query);
    });
  }, [q, lane]);

  return (
    <div className="sand-enter">
      <PageHeader
        kicker="Account-level packets"
        title="Skill bodies"
        lede="Every specialist packet rebuilt from the original zips. Skills are account-wide tools. Memory of using them stays with one Bot. Install or remove them on Skills."
        action={
          <Link to="/skills" className="inline-flex h-11 items-center text-sm text-muted hover:text-fg">
            Skills on this computer
          </Link>
        }
      />

      <div className="mb-6 flex flex-col gap-3">
        <label className="sr-only" htmlFor="fleet-search">
          Filter fleet
        </label>
        <input
          id="fleet-search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Filter by name, mandate, trigger"
          className="h-11 w-full rounded-xl bg-surface px-4 text-sm text-fg placeholder:text-subtle shadow-[var(--shadow-border)]"
        />
        <div className="flex flex-wrap gap-2">
          {LANES.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLane(l)}
              className={`h-10 rounded-full px-3 text-sm ${
                lane === l ? "bg-accent text-accent-fg" : "bg-surface text-muted hover:text-fg"
              }`}
            >
              {l === "all" ? "All" : laneLabel[l]}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-4 font-mono text-[11px] text-subtle tabular-nums">
        {filtered.length} of {agents.length}
      </p>

      {filtered.length === 0 ? (
        <p className="rounded-2xl bg-surface px-5 py-10 text-center text-sm text-muted">No agent matches that filter.</p>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {filtered.map((a) => (
            <Link
              key={a.id}
              to="/fleet/$agentId"
              params={{ agentId: a.id }}
              className="rounded-2xl bg-surface p-5 no-underline transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
            >
              <div className="flex items-center justify-between gap-3">
                <Badge>{laneLabel[a.lane] ?? a.lane}</Badge>
                <span className="font-mono text-[11px] text-subtle">{formatBytes(a.zipBytes)}</span>
              </div>
              <h2 className="mt-3 text-[17px] font-medium text-fg">{a.display}</h2>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{a.description}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
