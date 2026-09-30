import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CommandPalette } from "@/components/command-palette";
import { LifeTicker } from "@/components/os/life-ticker";
import { StartMenu } from "@/components/os/start-menu";
import { Taskbar } from "@/components/os/taskbar";
import { WindowFrame } from "@/components/os/window-frame";
import { useOs } from "@/lib/os";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [palette, setPalette] = useState(false);
  const startOpen = useOs((s) => s.startOpen);
  const setStartOpen = useOs((s) => s.setStartOpen);
  const isDesktop = pathname === "/";

  useEffect(() => {
    setStartOpen(false);
  }, [pathname, setStartOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPalette(true);
      }
      if (e.key === "/" && !e.metaKey && !e.ctrlKey) {
        const t = e.target as HTMLElement | null;
        if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
        e.preventDefault();
        setPalette(true);
      }
      if (e.key === "Escape") {
        setStartOpen(false);
        setPalette(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setStartOpen]);

  return (
    <div className="relative flex h-dvh flex-col overflow-hidden bg-bg text-fg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>

      <div className="relative min-h-0 flex-1 overflow-hidden">
        {isDesktop ? children : <WindowFrame pathname={pathname}>{children}</WindowFrame>}
        <StartMenu open={startOpen} onClose={() => setStartOpen(false)} />
      </div>

      <Taskbar onSearch={() => setPalette(true)} />
      <CommandPalette open={palette} onOpenChange={setPalette} />
      <LifeTicker />
    </div>
  );
}
