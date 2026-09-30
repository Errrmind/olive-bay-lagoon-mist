import { useRouter } from "@tanstack/react-router";
import { Command } from "cmdk";
import { useMemo } from "react";
import { agents, roles, sessions } from "@/data/catalog";
import { CANON_IDS, wikiTitle } from "@/data/wiki";

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();

  const go = (to: string) => {
    onOpenChange(false);
    router.history.push(to);
  };

  const topSessions = useMemo(() => sessions.slice(0, 80), []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        className="absolute inset-0 bg-bg/70"
        aria-label="Close search"
        onClick={() => onOpenChange(false)}
      />
      <div className="relative mx-auto mt-[12vh] w-[min(640px,calc(100%-1.5rem))] overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-border)]">
        <Command label="Search SAND" className="bg-transparent text-fg">
          <Command.Input
            autoFocus
            placeholder="Search desktop, pages, bots, sessions"
            className="h-12 w-full border-b border-line bg-transparent px-4 text-[15px] outline-none placeholder:text-subtle"
          />
          <Command.List className="max-h-[min(420px,55vh)] overflow-y-auto p-2">
            <Command.Empty className="px-3 py-8 text-center text-sm text-muted">No match in the rebuilt corpus.</Command.Empty>

            <Command.Group heading="Surfaces" className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:tracking-[0.16em] [&_[cmdk-group-heading]]:text-subtle [&_[cmdk-group-heading]]:uppercase">
              <Item onSelect={() => go("/")}>Desktop</Item>
              <Item onSelect={() => go("/computer")}>This Computer</Item>
              <Item onSelect={() => go("/wiki")}>Grokipedia</Item>
              <Item onSelect={() => go("/bots")}>Bots</Item>
              <Item onSelect={() => go("/routines")}>Routines</Item>
              <Item onSelect={() => go("/skills")}>Skills</Item>
              <Item onSelect={() => go("/institution")}>Institution</Item>
              <Item onSelect={() => go("/org")}>Org</Item>
              <Item onSelect={() => go("/archive")}>Archive</Item>
              <Item onSelect={() => go("/gates")}>Gates</Item>
              <Item onSelect={() => go("/doctrine")}>Doctrine</Item>
            </Command.Group>

            <Command.Group heading="Canon pages" className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:tracking-[0.16em] [&_[cmdk-group-heading]]:text-subtle [&_[cmdk-group-heading]]:uppercase">
              {CANON_IDS.map((id) => (
                <Item key={id} onSelect={() => go(`/wiki/${id}`)}>
                  <span className="font-mono text-[11px] text-subtle">{id}</span>
                  <span>{wikiTitle(id)}</span>
                </Item>
              ))}
            </Command.Group>

            <Command.Group heading="Roles" className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:tracking-[0.16em] [&_[cmdk-group-heading]]:text-subtle [&_[cmdk-group-heading]]:uppercase">
              {roles.map((r) => (
                <Item key={r.id} onSelect={() => go(`/org/${r.id}`)}>
                  <span className="font-mono text-[11px] text-subtle">{r.callsign}</span>
                  <span>{r.short}</span>
                </Item>
              ))}
            </Command.Group>

            <Command.Group heading="Bots" className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:tracking-[0.16em] [&_[cmdk-group-heading]]:text-subtle [&_[cmdk-group-heading]]:uppercase">
              {agents.map((a) => (
                <Item key={a.id} onSelect={() => go(`/bots/${a.id}`)}>
                  {a.display}
                </Item>
              ))}
            </Command.Group>

            <Command.Group heading="Archive" className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:tracking-[0.16em] [&_[cmdk-group-heading]]:text-subtle [&_[cmdk-group-heading]]:uppercase">
              {topSessions.map((s) => (
                <Item key={s.id} onSelect={() => go(`/archive/${s.id}`)}>
                  {s.title}
                </Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}

function Item({ children, onSelect }: { children: React.ReactNode; onSelect: () => void }) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm text-muted data-[selected=true]:bg-elevated data-[selected=true]:text-fg"
    >
      {children}
    </Command.Item>
  );
}
