import { cn } from "@/lib/cn";

export function PageHeader({
  kicker,
  title,
  lede,
  action,
  className,
}: {
  kicker?: string;
  title: string;
  lede?: string;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between", className)}>
      <div className="max-w-2xl">
        {kicker ? (
          <p className="mb-2 font-mono text-[11px] tracking-[0.18em] text-subtle uppercase">{kicker}</p>
        ) : null}
        <h1 className="font-display text-[2rem] leading-[1.1] tracking-display text-fg md:text-[2.5rem]">{title}</h1>
        {lede ? <p className="mt-3 text-[15px] leading-relaxed text-muted">{lede}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </header>
  );
}
