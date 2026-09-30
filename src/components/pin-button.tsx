import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Pin, usePins } from "@/lib/pins";
import { cn } from "@/lib/cn";

export function PinButton({ pin, label }: { pin: Pin; label?: string }) {
  const on = usePins((s) => s.pins.some((p) => p.kind === pin.kind && p.id === pin.id));
  const toggle = usePins((s) => s.toggle);

  return (
    <Button
      variant={on ? "primary" : "outline"}
      size={label ? "sm" : "icon-sm"}
      aria-pressed={on}
      aria-label={on ? "Unpin" : "Pin"}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(pin);
      }}
    >
      <Star className={cn("size-3.5", on && "fill-current")} />
      {label ? <span>{on ? "Pinned" : label}</span> : null}
    </Button>
  );
}
