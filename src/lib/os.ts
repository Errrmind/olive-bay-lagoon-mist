import { create } from "zustand";
import { persist } from "zustand/middleware";
import { agents } from "@/data/catalog";
import {
  composeArtifact,
  enabledAgents,
  nextKind,
  type Artifact,
  type ArtifactKind,
  type ObjectName,
} from "@/lib/work";

export type { Artifact, ArtifactKind, ObjectName };
export {
  KIND_LABEL,
  KINDS,
  OBJECTS,
  ROOMS,
  composeArtifact,
  neighborAgents,
  presenceOf,
  roomForAgent,
} from "@/lib/work";

export type LaunchStay = "internal" | "dogfood" | "public" | "enterprise";

export const LAUNCH_STAYS: { id: LaunchStay; label: string; short: string; copy: string }[] = [
  {
    id: "internal",
    label: "Internal working product",
    short: "Internal",
    copy: "Isolated team. First line of code to a working product. Not a Cursor sidebar.",
  },
  {
    id: "dogfood",
    label: "Dogfood",
    short: "Dogfood",
    copy: "Staff and the first three hundred. Hands-on onboarding is still the product.",
  },
  {
    id: "public",
    label: "Public beta",
    short: "Public",
    copy: "11 August 2026 stay. Teammates with a computer, billed through Cursor.",
  },
  {
    id: "enterprise",
    label: "Enterprise",
    short: "Enterprise",
    copy: "3 September 2026. Org enable, network, Team Setup, action recording.",
  },
];

export type ChatMsg = { role: "user" | "bot"; text: string; at: number };

export type Chat = {
  id: string;
  botId: string;
  botName: string;
  title: string;
  messages: ChatMsg[];
};

export type ShellLine = { at: number; line: string };

type Persisted = {
  launchStay: LaunchStay;
  artifacts: Artifact[];
  chats: Chat[];
  recycle: Chat[];
  shell: ShellLine[];
  routineOff: Record<string, boolean>;
  installedSkills: string[];
  tickCursor: number;
  lastTick: number;
};

type OsState = Persisted & {
  setLaunchStay: (s: LaunchStay) => void;
  startOpen: boolean;
  setStartOpen: (v: boolean) => void;
  hydrated: boolean;
  markHydrated: () => void;
  tick: (count?: number) => void;
  sitDown: (botId: string) => void;
  sitFloor: () => void;
  setRoutine: (botId: string, on: boolean) => void;
  installSkill: (id: string, on: boolean) => void;
  openChat: (botId: string, botName: string) => string;
  sendChat: (chatId: string, text: string) => void;
  closeChat: (chatId: string) => void;
};

function rid() {
  return Math.random().toString(36).slice(2, 10);
}

function localReply(botName: string, text: string) {
  return `${botName} (packet, not a model call): I stay when this chat dies. You wrote “${text.slice(0, 140)}”. I will file it as a routine if it repeats, a skill if the whole roster should have it. Memory stays with me. No tokens spent.`;
}

const ART_CAP = 120;
const SHELL_CAP = 48;

function fileFrom(agentId: string, salt: number, at: number): Artifact | null {
  const agent = agents.find((a) => a.id === agentId) ?? agents[0];
  if (!agent) return null;
  const kind: ArtifactKind = nextKind(salt);
  return composeArtifact(agent, kind, salt, at);
}

const emptyPersist = (): Persisted => ({
  launchStay: "internal",
  artifacts: [],
  chats: [],
  recycle: [],
  shell: [],
  routineOff: {},
  installedSkills: agents.map((a) => a.id),
  tickCursor: 0,
  lastTick: 0,
});

export const useOs = create<OsState>()(
  persist(
    (set, get) => ({
      ...emptyPersist(),
      setLaunchStay: (launchStay) => set({ launchStay }),
      startOpen: false,
      setStartOpen: (startOpen) => set({ startOpen }),
      hydrated: false,
      markHydrated: () => set({ hydrated: true }),
      tick: (count = 4) => {
        const live = enabledAgents(get().routineOff);
        if (live.length === 0) return;
        const at = Date.now();
        const cursor = get().tickCursor;
        const next: Artifact[] = [];
        const lines: ShellLine[] = [];
        const n = Math.max(1, Math.min(count, live.length));
        for (let i = 0; i < n; i++) {
          const agent = live[(cursor + i) % live.length]!;
          const art = fileFrom(agent.id, cursor + i, at);
          if (!art) continue;
          next.push(art);
          lines.push({
            at,
            line: `${agent.display} sat down · ${art.kind} · ${art.room} · no meter`,
          });
        }
        set((s) => ({
          lastTick: at,
          tickCursor: cursor + n,
          artifacts: [...next, ...s.artifacts].slice(0, ART_CAP),
          shell: [...lines, ...s.shell].slice(0, SHELL_CAP),
        }));
      },
      sitDown: (botId) => {
        const at = Date.now();
        const art = fileFrom(botId, at, at);
        if (!art) return;
        const agent = agents.find((a) => a.id === botId);
        set((s) => ({
          lastTick: at,
          artifacts: [art, ...s.artifacts].slice(0, ART_CAP),
          shell: [
            { at, line: `${agent?.display ?? botId} sat down without a prompt · ${art.kind} · ${art.room}` },
            ...s.shell,
          ].slice(0, SHELL_CAP),
        }));
      },
      sitFloor: () => get().tick(8),
      setRoutine: (botId, on) =>
        set((s) => ({
          routineOff: { ...s.routineOff, [botId]: !on },
        })),
      installSkill: (id, on) =>
        set((s) => ({
          installedSkills: on
            ? s.installedSkills.includes(id)
              ? s.installedSkills
              : [...s.installedSkills, id]
            : s.installedSkills.filter((x) => x !== id),
        })),
      openChat: (botId, botName) => {
        const id = rid();
        const chat: Chat = {
          id,
          botId,
          botName,
          title: `Chat · ${botName}`,
          messages: [
            {
              role: "bot",
              text: `${botName} is present. This thread is disposable. I am not. One job stays with me when you discard the tab.`,
              at: Date.now(),
            },
          ],
        };
        set((s) => ({ chats: [chat, ...s.chats].slice(0, 24) }));
        return id;
      },
      sendChat: (chatId, text) => {
        const t = text.trim();
        if (!t) return;
        set((s) => ({
          chats: s.chats.map((c) => {
            if (c.id !== chatId) return c;
            const user: ChatMsg = { role: "user", text: t, at: Date.now() };
            const bot: ChatMsg = { role: "bot", text: localReply(c.botName, t), at: Date.now() };
            return { ...c, messages: [...c.messages, user, bot] };
          }),
        }));
      },
      closeChat: (chatId) =>
        set((s) => {
          const hit = s.chats.find((c) => c.id === chatId);
          return {
            chats: s.chats.filter((c) => c.id !== chatId),
            recycle: hit ? [hit, ...s.recycle].slice(0, 12) : s.recycle,
          };
        }),
    }),
    {
      name: "sand-os",
      version: 2,
      skipHydration: true,
      partialize: (s): Persisted => ({
        launchStay: s.launchStay,
        artifacts: s.artifacts,
        chats: s.chats,
        recycle: s.recycle,
        shell: s.shell,
        routineOff: s.routineOff,
        installedSkills: s.installedSkills,
        tickCursor: s.tickCursor,
        lastTick: s.lastTick,
      }),
      migrate: (persisted, version): Persisted => {
        const p = persisted as Partial<Persisted>;
        if (version < 2) return emptyPersist();
        return {
          launchStay: p.launchStay ?? "internal",
          artifacts: Array.isArray(p.artifacts) ? p.artifacts : [],
          chats: Array.isArray(p.chats) ? p.chats : [],
          recycle: Array.isArray(p.recycle) ? p.recycle : [],
          shell: Array.isArray(p.shell) ? p.shell : [],
          routineOff: p.routineOff ?? {},
          installedSkills: p.installedSkills ?? agents.map((a) => a.id),
          tickCursor: p.tickCursor ?? 0,
          lastTick: p.lastTick ?? 0,
        };
      },
    },
  ),
);

export function stayLabel(id: LaunchStay) {
  return LAUNCH_STAYS.find((s) => s.id === id)?.label ?? id;
}
