import { Link } from "@tanstack/react-router";
import { Minus, Square, X } from "lucide-react";
import { titleForPath } from "@/data/apps";

export function WindowFrame({
  pathname,
  children,
}: {
  pathname: string;
  children: React.ReactNode;
}) {
  const title = titleForPath(pathname);
  return (
    <section className="flex h-full min-h-0 flex-col bg-bg">
      <header className="flex h-10 shrink-0 items-center gap-2 border-b border-line bg-surface px-2">
        <p className="flex-1 truncate px-2 text-sm text-fg">{title}</p>
        <Link
          to="/"
          aria-label="Minimize to desktop"
          className="inline-flex size-10 items-center justify-center text-muted no-underline hover:bg-elevated hover:text-fg"
        >
          <Minus className="size-3.5" />
        </Link>
        <span className="inline-flex size-10 items-center justify-center text-subtle" aria-hidden>
          <Square className="size-3" />
        </span>
        <Link
          to="/"
          aria-label="Close"
          className="inline-flex size-10 items-center justify-center text-muted no-underline hover:bg-danger/20 hover:text-danger"
        >
          <X className="size-3.5" />
        </Link>
      </header>
      <div id="main" className="min-h-0 flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <div className="mx-auto max-w-[1100px]">{children}</div>
      </div>
    </section>
  );
}
