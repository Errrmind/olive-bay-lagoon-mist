import { cn } from "@/lib/cn";

type Tone = "neutral" | "ok" | "warn" | "muted";

const tones: Record<Tone, string> = {
  neutral: "text-fg bg-elevated",
  ok: "text-ok bg-ok/10",
  warn: "text-warn bg-warn/10",
  muted: "text-muted bg-elevated",
};

export function Badge({
  children,
  tone = "muted",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[11px] tracking-wide uppercase",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
