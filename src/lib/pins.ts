import { create } from "zustand";
import { persist } from "zustand/middleware";

export type PinKind = "role" | "agent" | "session";
export type Pin = { kind: PinKind; id: string };

type PinsState = {
  pins: Pin[];
  notes: string;
  toggle: (pin: Pin) => void;
  has: (pin: Pin) => boolean;
  setNotes: (notes: string) => void;
};

export const usePins = create<PinsState>()(
  persist(
    (set, get) => ({
      pins: [],
      notes: "",
      toggle: (pin) =>
        set((s) => {
          const exists = s.pins.some((p) => p.kind === pin.kind && p.id === pin.id);
          return {
            pins: exists
              ? s.pins.filter((p) => !(p.kind === pin.kind && p.id === pin.id))
              : [...s.pins, pin],
          };
        }),
      has: (pin) => get().pins.some((p) => p.kind === pin.kind && p.id === pin.id),
      setNotes: (notes) => set({ notes }),
    }),
    { name: "sand-command", skipHydration: true },
  ),
);
