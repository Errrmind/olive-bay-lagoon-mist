import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { laneLabel, roles } from "@/data/catalog";

export const Route = createFileRoute("/org/")({ component: OrgPage });

function OrgPage() {
  return (
    <div className="sand-enter">
      <PageHeader
        kicker="Twelve functions"
        title="The room that had to exist"
        lede="Reconstructed job packets from what shipped — not leaked HR docs. If the product exists, someone had to sign these requirements."
      />
      <div className="grid gap-3 md:grid-cols-2">
        {roles.map((r) => (
          <Link
            key={r.id}
            to="/org/$roleId"
            params={{ roleId: r.id }}
            className="group rounded-2xl bg-surface p-5 no-underline transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)] sm:p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="font-mono text-[11px] tracking-[0.16em] text-subtle">
                {String(r.index).padStart(2, "0")} · {r.callsign}
              </p>
              <Badge>{laneLabel[r.lane] ?? r.lane}</Badge>
            </div>
            <h2 className="mt-3 font-display text-2xl tracking-display text-fg">{r.short}</h2>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{r.publicRecord}</p>
            <p className="mt-4 text-sm text-subtle">
              {r.packet.length} requirements · {r.tools.length} materials
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
