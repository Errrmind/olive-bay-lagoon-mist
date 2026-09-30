import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Bot,
  Building2,
  CalendarClock,
  FileStack,
  Monitor,
  ScrollText,
  Shield,
  Users,
  Wrench,
} from "lucide-react";

export type AppPath =
  | "/computer"
  | "/wiki"
  | "/bots"
  | "/routines"
  | "/skills"
  | "/fleet"
  | "/institution"
  | "/org"
  | "/archive"
  | "/gates"
  | "/doctrine";

export type DeskApp = {
  id: string;
  to: AppPath;
  label: string;
  kicker: string;
  icon: LucideIcon;
};

export const DESK_APPS: DeskApp[] = [
  { id: "computer", to: "/computer", label: "This Computer", kicker: "Account", icon: Monitor },
  { id: "wiki", to: "/wiki", label: "Grokipedia", kicker: "885,000", icon: BookOpen },
  { id: "bots", to: "/bots", label: "Bots", kicker: "Bot-level", icon: Bot },
  { id: "routines", to: "/routines", label: "Routines", kicker: "Bot-level", icon: CalendarClock },
  { id: "skills", to: "/skills", label: "Skills", kicker: "Account", icon: Wrench },
  { id: "institution", to: "/institution", label: "Institution", kicker: "Foundry", icon: Building2 },
  { id: "org", to: "/org", label: "Org", kicker: "Twelve", icon: Users },
  { id: "archive", to: "/archive", label: "Archive", kicker: "350", icon: FileStack },
  { id: "gates", to: "/gates", label: "Gates", kicker: "Seven", icon: Shield },
  { id: "doctrine", to: "/doctrine", label: "Doctrine", kicker: "Stay", icon: ScrollText },
];

export const TASKBAR_PINNED = ["computer", "wiki", "bots", "institution", "skills"] as const;

export const ROUTE_TITLE: Record<string, string> = {
  "/": "Desktop",
  "/computer": "This Computer",
  "/wiki": "Grokipedia",
  "/bots": "Bots",
  "/routines": "Routines",
  "/skills": "Skills",
  "/fleet": "Skills",
  "/institution": "Institution",
  "/org": "Org",
  "/archive": "Archive",
  "/gates": "Gates",
  "/doctrine": "Doctrine",
};

export function titleForPath(pathname: string) {
  if (ROUTE_TITLE[pathname]) return ROUTE_TITLE[pathname];
  if (pathname.startsWith("/wiki/")) return "Grokipedia";
  if (pathname.startsWith("/bots/")) return "Bot";
  if (pathname.startsWith("/fleet/")) return "Skill";
  if (pathname.startsWith("/skills")) return "Skills";
  if (pathname.startsWith("/institution/")) return "Artifact";
  if (pathname.startsWith("/org/")) return "Org";
  if (pathname.startsWith("/archive/")) return "Archive";
  return "SAND";
}
