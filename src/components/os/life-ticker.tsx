import { useEffect } from "react";
import { useOs } from "@/lib/os";
import { usePins } from "@/lib/pins";

/** Local heartbeat. Agents file artifacts on this machine. No model call. */
export function LifeTicker() {
  const tick = useOs((s) => s.tick);
  const markHydrated = useOs((s) => s.markHydrated);

  useEffect(() => {
    void useOs.persist.rehydrate();
    void usePins.persist.rehydrate();
    markHydrated();
    const kick = window.setTimeout(() => tick(8), 400);
    const t = window.setInterval(() => tick(), 12000);
    return () => {
      window.clearTimeout(kick);
      window.clearInterval(t);
    };
  }, [tick, markHydrated]);

  return null;
}
