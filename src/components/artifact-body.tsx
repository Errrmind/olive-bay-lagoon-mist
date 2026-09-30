import { Link } from "@tanstack/react-router";
import { KIND_LABEL, type Artifact } from "@/lib/os";

export function ArtifactBody({ art }: { art: Artifact }) {
  const p = art.theory.paths;
  return (
    <div className="space-y-6">
      <section>
        <h3 className="font-mono text-xs tracking-widest text-subtle uppercase">Map</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{art.map.conceptual}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {art.map.nodes.map((n) => (
            <li key={n} className="rounded-full bg-elevated px-3 py-1 font-mono text-xs text-muted">
              {n}
            </li>
          ))}
        </ul>
        <p className="mt-3 font-mono text-xs text-subtle">
          Upstream {art.map.upstream} · Downstream {art.map.downstream}
        </p>
      </section>

      <section>
        <h3 className="font-mono text-xs tracking-widest text-subtle uppercase">Theory</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{art.theory.claim}</p>
        <dl className="mt-3 grid gap-3 sm:grid-cols-2">
          <Path k="Direct" v={p.direct} on={p.pick === "direct"} />
          <Path k="Lateral" v={p.lateral} on={p.pick === "lateral"} />
          <Path k="Radical" v={p.radical} on={p.pick === "radical"} />
          <Path k="Hybrid" v={p.hybrid} on={p.pick === "hybrid"} />
        </dl>
        <p className="mt-3 text-sm leading-relaxed text-fg">{p.why}</p>
      </section>

      <section>
        <h3 className="font-mono text-xs tracking-widest text-subtle uppercase">Practice</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{art.practice.drill}</p>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted">
          {art.practice.steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
        <p className="mt-3 text-sm text-subtle">{art.practice.rollback}</p>
      </section>

      <section>
        <h3 className="font-mono text-xs tracking-widest text-subtle uppercase">Invention</h3>
        <p className="mt-2 font-display text-xl tracking-display text-fg">{art.invention.name}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{art.invention.risk}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{art.invention.staff}</p>
      </section>

      <p className="font-mono text-xs text-subtle">
        {KIND_LABEL[art.kind]} · {art.objects.join(" · ")} · skill{" "}
        <Link to="/fleet/$agentId" params={{ agentId: art.skillId }} className="text-muted hover:text-fg">
          {art.skillId}
        </Link>
      </p>
    </div>
  );
}

function Path({ k, v, on }: { k: string; v: string; on: boolean }) {
  return (
    <div className={`rounded-xl p-3 ${on ? "bg-accent text-accent-fg" : "bg-elevated"}`}>
      <dt className={`font-mono text-xs uppercase ${on ? "text-accent-fg/70" : "text-subtle"}`}>
        {k}
        {on ? " · pick" : ""}
      </dt>
      <dd className={`mt-1 text-sm leading-relaxed ${on ? "text-accent-fg" : "text-muted"}`}>{v}</dd>
    </div>
  );
}
