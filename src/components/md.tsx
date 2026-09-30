import { Fragment, type ReactNode } from "react";

function inlineFmt(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-medium text-fg">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={i} className="rounded-sm bg-elevated px-1 py-0.5 font-mono text-[0.85em] text-fg">
          {part.slice(1, -1)}
        </code>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export function Markdown({ source, className }: { source: string; className?: string }) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const out: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i] ?? "";

    if (line.startsWith("```")) {
      const buf: string[] = [];
      i += 1;
      while (i < lines.length && !(lines[i] ?? "").startsWith("```")) {
        buf.push(lines[i] ?? "");
        i += 1;
      }
      i += 1;
      out.push(
        <pre
          key={key++}
          className="my-3 overflow-x-auto rounded-xl bg-elevated p-4 font-mono text-[13px] leading-relaxed text-fg"
        >
          <code>{buf.join("\n")}</code>
        </pre>,
      );
      continue;
    }

    if (line.startsWith("# ")) {
      out.push(
        <h2 key={key++} className="mt-8 mb-3 font-display text-2xl tracking-display text-fg">
          {inlineFmt(line.slice(2))}
        </h2>,
      );
      i += 1;
      continue;
    }
    if (line.startsWith("## ")) {
      out.push(
        <h3 key={key++} className="mt-6 mb-2 font-sans text-sm font-medium tracking-wide text-muted uppercase">
          {inlineFmt(line.slice(3))}
        </h3>,
      );
      i += 1;
      continue;
    }
    if (line.startsWith("### ")) {
      out.push(
        <h4 key={key++} className="mt-4 mb-1 text-[15px] font-medium text-fg">
          {inlineFmt(line.slice(4))}
        </h4>,
      );
      i += 1;
      continue;
    }

    if (line.trim() === "---") {
      out.push(<hr key={key++} className="my-6 border-line" />);
      i += 1;
      continue;
    }

    if (/^\s*[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i] ?? "")) {
        items.push((lines[i] ?? "").replace(/^\s*[-*]\s+/, ""));
        i += 1;
      }
      out.push(
        <ul key={key++} className="my-3 space-y-1.5 pl-0">
          {items.map((item, idx) => (
            <li key={idx} className="flex gap-3 text-[15px] leading-relaxed text-muted">
              <span className="mt-[0.6em] size-1 shrink-0 rounded-full bg-subtle" />
              <span>{inlineFmt(item)}</span>
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i] ?? "")) {
        items.push((lines[i] ?? "").replace(/^\s*\d+\.\s+/, ""));
        i += 1;
      }
      out.push(
        <ol key={key++} className="my-3 list-decimal space-y-1.5 pl-5 text-[15px] leading-relaxed text-muted">
          {items.map((item, idx) => (
            <li key={idx}>{inlineFmt(item)}</li>
          ))}
        </ol>,
      );
      continue;
    }

    if (line.trim() === "") {
      i += 1;
      continue;
    }

    const buf = [line];
    i += 1;
    while (i < lines.length && (lines[i] ?? "").trim() !== "" && !/^(#{1,3} |```|---|\s*[-*]\s+|\s*\d+\.\s+)/.test(lines[i] ?? "")) {
      buf.push(lines[i] ?? "");
      i += 1;
    }
    out.push(
      <p key={key++} className="my-2.5 text-[15px] leading-relaxed text-muted">
        {inlineFmt(buf.join(" "))}
      </p>,
    );
  }

  return <div className={className}>{out}</div>;
}
