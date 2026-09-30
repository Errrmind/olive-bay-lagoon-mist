import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { agents, formatBytes, laneLabel } from "@/data/catalog";
import { useOs } from "@/lib/os";

export const Route = createFileRoute("/skills")({ component: SkillsPage });

function SkillsPage() {
  const installed = useOs((s) => s.installedSkills);
  const installSkill = useOs((s) => s.installSkill);
  const artifacts = useOs((s) => s.artifacts);

  return (
    <div className="sand-enter">
      <PageHeader
        kicker="Account-level"
        title="Skills"
        lede="Tools the whole roster can use. Memory stays with one Bot. Team Setup is how they return after an image rebuild. Uninstalling a skill does not delete the coworker."
      />

      <p className="mb-6 font-mono text-xs text-subtle tabular-nums">
        {installed.length} of {agents.length} installed on this computer
      </p>

      <ul className="grid gap-3 sm:grid-cols-2">
        {agents.map((a) => {
          const on = installed.includes(a.id);
          const used = artifacts.filter((x) => x.skillId === a.id).length;
          return (
            <li key={a.id} className="rounded-2xl bg-surface p-5">
              <div className="flex items-center justify-between gap-3">
                <Badge>{laneLabel[a.lane] ?? a.lane}</Badge>
                <span className="font-mono text-xs text-subtle">{formatBytes(a.zipBytes)}</span>
              </div>
              <h2 className="mt-3 text-sm font-medium text-fg">{a.display}</h2>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{a.description}</p>
              <p className="mt-2 font-mono text-xs text-subtle">
                {on ? "Installed" : "Off this box"} · {used} memories on Bots
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => installSkill(a.id, !on)}
                  className="h-11 rounded-xl bg-elevated px-3 text-sm text-fg hover:shadow-[var(--shadow-border-hover)]"
                >
                  {on ? "Uninstall" : "Install"}
                </button>
                <Link
                  to="/fleet/$agentId"
                  params={{ agentId: a.id }}
                  className="inline-flex h-11 items-center rounded-xl px-3 text-sm text-muted hover:text-fg"
                >
                  Packet
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
