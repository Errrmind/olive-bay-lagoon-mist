import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { PinButton } from "@/components/pin-button";
import { Badge } from "@/components/ui/badge";
import { getRole, laneLabel, roles } from "@/data/catalog";

export const Route = createFileRoute("/org/$roleId")({ component: RolePage });

function RolePage() {
  const { roleId } = Route.useParams();
  const role = getRole(roleId);

  if (!role) {
    return (
      <div className="sand-enter">
        <PageHeader title="Role not in the packet" lede="That function is not in the reconstructed org." />
        <Link to="/org" className="text-sm text-muted">
          Back to org
        </Link>
      </div>
    );
  }

  const i = roles.findIndex((r) => r.id === role.id);
  const prev = i > 0 ? roles[i - 1] : null;
  const next = i >= 0 && i < roles.length - 1 ? roles[i + 1] : null;

  return (
    <div className="sand-enter">
      <PageHeader
        kicker={`${String(role.index).padStart(2, "0")} · ${role.callsign}`}
        title={role.title}
        lede={role.publicRecord}
        action={<PinButton pin={{ kind: "role", id: role.id }} label="Pin role" />}
      />

      <div className="mb-6">
        <Badge>{laneLabel[role.lane] ?? role.lane}</Badge>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="rounded-2xl bg-surface p-5 sm:p-6">
          <h2 className="font-mono text-[11px] tracking-[0.16em] text-subtle uppercase">Reconstructed job packet</h2>
          {role.packet.length ? (
            <ol className="mt-4 space-y-3">
              {role.packet.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                  <span className="font-mono text-[11px] text-subtle tabular-nums">{String(idx + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          ) : (
            <p className="mt-4 text-sm text-muted">No numbered packet on this role.</p>
          )}
        </section>

        <section className="rounded-2xl bg-surface p-5 sm:p-6">
          <h2 className="font-mono text-[11px] tracking-[0.16em] text-subtle uppercase">Tools and materials</h2>
          <ul className="mt-4 space-y-2">
            {role.tools.map((t) => (
              <li key={t} className="text-[15px] leading-relaxed text-muted">
                {t}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-4 rounded-2xl bg-surface p-5 sm:p-6">
        <h2 className="font-mono text-[11px] tracking-[0.16em] text-subtle uppercase">Done means</h2>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-muted">{role.done}</p>
      </section>

      <nav className="mt-8 flex items-center justify-between gap-4 text-sm">
        {prev ? (
          <Link to="/org/$roleId" params={{ roleId: prev.id }} className="text-muted no-underline hover:text-fg">
            ← {prev.short}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to="/org/$roleId" params={{ roleId: next.id }} className="text-muted no-underline hover:text-fg">
            {next.short} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
