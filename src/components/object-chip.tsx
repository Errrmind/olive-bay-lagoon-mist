import { cn } from "@/lib/cn";
import type { ObjectName } from "@/lib/work";

export function ObjectChip({ name, className }: { name: ObjectName | string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-elevated px-2.5 py-1 font-mono text-xs tracking-wide text-muted uppercase",
        className,
      )}
    >
      {name}
    </span>
  );
}
