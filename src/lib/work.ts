import { agents } from "@/data/catalog";
import type { Agent } from "@/data/types";

export type ObjectName = "Bot" | "Chat" | "Computer" | "Routine" | "Skill";

export const OBJECTS: { name: ObjectName; where: string; copy: string }[] = [
  { name: "Bot", where: "Bot-level", copy: "Name, avatar, title, memory, presence. One job. Not a chat tab." },
  { name: "Chat", where: "Disposable", copy: "A thread with a Bot. Chats die. The Bot does not." },
  { name: "Computer", where: "Account-level", copy: "One persistent cloud desktop per user. Shared cookies, files, shell." },
  { name: "Routine", where: "Bot-level", copy: "Starts work without a prompt. The coworker who already sat down." },
  { name: "Skill", where: "Account-level", copy: "Tools the whole roster can use. Memory stays with one Bot." },
];

export type ArtifactKind = "map" | "theory" | "practice" | "invention";

export const KINDS: ArtifactKind[] = ["map", "theory", "practice", "invention"];

export const KIND_LABEL: Record<ArtifactKind, string> = {
  map: "Map",
  theory: "Theory",
  practice: "Practice",
  invention: "Invention",
};

export type FourPath = {
  direct: string;
  lateral: string;
  radical: string;
  hybrid: string;
  pick: keyof Omit<FourPath, "pick" | "why">;
  why: string;
};

export type Artifact = {
  id: string;
  agentId: string;
  agentName: string;
  kind: ArtifactKind;
  title: string;
  room: string;
  wing: string;
  at: number;
  objects: ObjectName[];
  skillId: string;
  map: {
    conceptual: string;
    nodes: string[];
    upstream: string;
    downstream: string;
  };
  theory: {
    claim: string;
    paths: FourPath;
  };
  practice: {
    drill: string;
    steps: string[];
    rollback: string;
  };
  invention: {
    name: string;
    risk: string;
    staff: string;
  };
};

export const ROOMS = [
  { id: "apex", name: "Apex chamber", wing: "command" },
  { id: "sand", name: "Sand incubation", wing: "bot" },
  { id: "harness", name: "Harness forge", wing: "build" },
  { id: "theory", name: "Theory wing", wing: "institution" },
  { id: "practice", name: "Practice floor", wing: "institution" },
  { id: "foundry", name: "Invention foundry", wing: "institution" },
  { id: "privatelab", name: "PrivateLab", wing: "institution" },
  { id: "stacks", name: "Archive stacks", wing: "docs" },
  { id: "gate", name: "Trust gate", wing: "trust" },
] as const;

const ROOM_FOR_LANE: Record<string, string> = {
  command: "apex",
  bot: "sand",
  build: "harness",
  model: "theory",
  platform: "harness",
  clients: "practice",
  trust: "gate",
  eng: "foundry",
  ops: "practice",
  intel: "theory",
  docs: "stacks",
  self: "privatelab",
  growth: "privatelab",
};

export function roomForAgent(lane: string) {
  const id = ROOM_FOR_LANE[lane] ?? "privatelab";
  return ROOMS.find((r) => r.id === id) ?? ROOMS[6];
}

export function rid() {
  return Math.random().toString(36).slice(2, 10);
}

function mulberry(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashStr(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

function pick<T>(rng: () => number, arr: readonly T[]): T {
  return arr[Math.floor(rng() * arr.length) % arr.length]!;
}

function clip(s: string, n: number) {
  const t = s.replace(/\s+/g, " ").trim();
  if (t.length <= n) return t;
  return `${t.slice(0, n).trimEnd()}…`;
}

function sentences(text: string, min = 18) {
  return text
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length >= min);
}

const OBJECTS_FOR_KIND: Record<ArtifactKind, ObjectName[]> = {
  map: ["Bot", "Computer", "Skill"],
  theory: ["Bot", "Routine", "Skill"],
  practice: ["Bot", "Routine", "Computer"],
  invention: ["Bot", "Computer", "Skill"],
};

const LATERAL = [
  "local-first CRDTs on the computer disk",
  "a TUI instead of a canvas",
  "routines that fire without a prompt",
  "capability passing instead of a shared secret",
  "fork-first weights on the dual PC",
  "an inspectable harness pointed at local inference",
];

const RADICAL = [
  "delete the chat object and keep only presence",
  "one computer per Bot instead of per account",
  "no hosted box — everything on the Pavilion node",
  "a new meter, which this stay refuses",
];

const HYBRID = [
  "keep the shipped object, staff the desk that already exists",
  "file on this computer, publish later if the stay moves",
  "one living routine plus account-wide skills",
  "takeover for secrets, packets for the rest",
];

const RISKS = [
  "Reset used as a reflex wipes the week the institution was betting on",
  "A chat tab that outlives the Bot trains the wrong instinct",
  "Skills treated as memory leak the roster into one blob",
  "A second meter between Bot and Build splits the company in the product",
];

export function neighborAgents(agentId: string) {
  const i = Math.max(0, agents.findIndex((a) => a.id === agentId));
  const n = agents.length || 1;
  const up = agents[(i - 1 + n) % n]!;
  const down = agents[(i + 1) % n]!;
  return { up, down, index: i };
}

export function composeArtifact(agent: Agent, kind: ArtifactKind, salt: number, at = Date.now()): Artifact {
  const rng = mulberry(hashStr(agent.id) ^ (salt + kind.length * 17));
  const room = roomForAgent(agent.lane);
  const { up, down } = neighborAgents(agent.id);
  const lead = clip(agent.mandate || agent.description, 280);
  const job = clip(agent.description, 120);
  const topic = clip(agent.display, 48);
  const bits = sentences(agent.mandate || agent.description);
  const pickPath = pick(rng, ["direct", "lateral", "radical", "hybrid"] as const);
  const objects = OBJECTS_FOR_KIND[kind];

  const paths: FourPath = {
    direct: `Keep ${agent.display} as the shipped coworker. The packet stays on disk. ${job}`,
    lateral: `Lateral: ${pick(rng, LATERAL)}. ${agent.display} still owns memory; the roster borrows the skill.`,
    radical: `Radical: ${pick(rng, RADICAL)}. Named so it can be refused.`,
    hybrid: `Hybrid this week: ${pick(rng, HYBRID)}. ${room.name} can staff it without a new headcount.`,
    pick: pickPath,
    why: `Pick ${pickPath} because this stay is an internal working product. Rollback is the recovery order, not a new model call.`,
  };

  const steps = [
    `Open ${agent.display}. Confirm presence. Do not open a chat unless a human must take over.`,
    bits[0] ? clip(bits[0], 180) : `Run one task from the ${agent.display} packet without a login.`,
    bits[1] ? clip(bits[1], 180) : `If a secret is required, take over the computer. Do not paste it into a thread.`,
    `Save the stable path as a skill (account) if the whole roster needs it. Leave memory on this Bot.`,
    `File the ${kind} in ${room.name}. Tick continues even if this window closes.`,
  ];

  const inventionName = pick(rng, [
    `${topic} as a desk, not a tab`,
    `Packet-native ${kind} for ${topic}`,
    `Least-destructive ${topic}`,
    `Fork-first ${topic}`,
  ]);

  return {
    id: rid(),
    agentId: agent.id,
    agentName: agent.display,
    kind,
    title: `${KIND_LABEL[kind]} · ${agent.display}`,
    room: room.name,
    wing: room.wing,
    at,
    objects,
    skillId: agent.id,
    map: {
      conceptual: `${agent.display} maps ${room.name} (${room.wing}). Objects on the desk: ${objects.join(", ")}. One job: ${job} Conceptual chain: mandate → routine → ${kind} → institution. ${lead}`,
      nodes: [
        agent.display,
        room.name,
        KIND_LABEL[kind],
        objects[0]!,
        "Institution",
      ],
      upstream: up.display,
      downstream: down.display,
    },
    theory: {
      claim: `Treat ${agent.display} as a Bot object with a desk, not a chat feature. ${lead}`,
      paths,
    },
    practice: {
      drill: `Drill without a model call. Packet stays on this computer. ${clip(agent.description, 200)}`,
      steps,
      rollback: "Retry → restart app → Recover computer → Update image → Reset last. Chat history is off the box.",
    },
    invention: {
      name: inventionName,
      risk: pick(rng, RISKS),
      staff: `${room.name} files it. Upstream ${up.display}, downstream ${down.display}. No new meter.`,
    },
  };
}

export function nextKind(n: number): ArtifactKind {
  return KINDS[n % KINDS.length]!;
}

export function enabledAgents(off: Record<string, boolean>) {
  return agents.filter((a) => !off[a.id]);
}

export function presenceOf(agentId: string, artifacts: Artifact[], lastTick: number) {
  const latest = artifacts.find((a) => a.agentId === agentId);
  if (latest && lastTick && Date.now() - latest.at < 45_000) return "Working" as const;
  if (latest) return "Present" as const;
  return "Seated" as const;
}
