import { cn } from "@/lib/cn";

export function BotMark({ name, className }: { name: string; className?: string }) {
  const initials = name
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <span
      className={cn(
        "inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-elevated font-mono text-xs tracking-wide text-fg shadow-[var(--shadow-border)]",
        className,
      )}
      aria-hidden
    >
      {initials || "B"}
    </span>
  );
}
