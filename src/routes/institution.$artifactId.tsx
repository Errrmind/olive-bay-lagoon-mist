import { createFileRoute, Link } from "@tanstack/react-router";
import { ArtifactBody } from "@/components/artifact-body";
import { ObjectChip } from "@/components/object-chip";
import { PageHeader } from "@/components/page-header";
import { KIND_LABEL, useOs } from "@/lib/os";

export const Route = createFileRoute("/institution/$artifactId")({ component: ArtifactPage });

function ArtifactPage() {
  const { artifactId } = Route.useParams();
  const art = useOs((s) => s.artifacts.find((a) => a.id === artifactId));

  if (!art) {
    return (
      <div className="sand-enter">
        <PageHeader
          title="Artifact not on disk"
          lede="Filings live on this computer. If the cap rolled or the stay was wiped, the desk will file again on the next tick."
        />
        <Link to="/institution" className="text-sm text-muted">
          Back to institution
        </Link>
      </div>
    );
  }

  return (
    <div className="sand-enter">
      <PageHeader
        kicker={`${KIND_LABEL[art.kind]} · ${art.room}`}
        title={art.title}
        lede={`${art.agentName} filed a full map, four-path theory, practice drill, and invention. No model call.`}
      />
      <div className="mb-4 flex flex-wrap gap-2">
        {art.objects.map((o) => (
          <ObjectChip key={o} name={o} />
        ))}
      </div>
      <article className="rounded-2xl bg-surface p-5 sm:p-6">
        <ArtifactBody art={art} />
      </article>
      <p className="mt-4 text-sm">
        <Link to="/bots/$botId" params={{ botId: art.agentId }} className="text-muted hover:text-fg">
          Open {art.agentName}
        </Link>
      </p>
    </div>
  );
}
