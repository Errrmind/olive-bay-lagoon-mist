import agentsJson from "./agents.json";
import archiveJson from "./archive.json";
import metaJson from "./meta.json";
import rolesJson from "./roles.json";
import type { Agent, Lane, Meta, Role, Session } from "./types";

export const roles = rolesJson as Role[];
export const agents = agentsJson as Agent[];
export const sessions = archiveJson as Session[];
export const meta = metaJson as Meta;

export const laneLabel: Record<string, string> = {
  command: "Command",
  bot: "Bot lane",
  build: "Build lane",
  model: "Model",
  platform: "Platform",
  clients: "Clients",
  trust: "Trust",
  eng: "Engineering",
  ops: "Ops",
  intel: "Intel",
  docs: "Docs",
  self: "Self",
  growth: "Growth",
};

export function getRole(id: string) {
  return roles.find((r) => r.id === id);
}

export function getAgent(id: string) {
  return agents.find((a) => a.id === id);
}

export function getSession(id: string) {
  return sessions.find((s) => s.id === id);
}

export function agentsByLane() {
  const map = new Map<Lane, Agent[]>();
  for (const a of agents) {
    const list = map.get(a.lane) ?? [];
    list.push(a);
    map.set(a.lane, list);
  }
  return map;
}

export function formatBytes(n: number) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(1)} MB`;
}

export function formatWhen(iso: string | null) {
  if (!iso) return "undated";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso.slice(0, 10);
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

let agentsCache: Agent[] | null = null;
let agentsPromise: Promise<Agent[]> | null = null;

export function loadFullAgents(): Promise<Agent[]> {
  if (agentsCache) return Promise.resolve(agentsCache);
  if (agentsPromise) return agentsPromise;
  agentsPromise = fetch("/data/agents.json")
    .then((r) => {
      if (!r.ok) throw new Error("Fleet packets unavailable");
      return r.json() as Promise<Agent[]>;
    })
    .then((data) => {
      agentsCache = data;
      return data;
    })
    .finally(() => {
      agentsPromise = null;
    });
  return agentsPromise;
}

let fullCache: Session[] | null = null;
let fullPromise: Promise<Session[]> | null = null;

export function loadFullArchive(): Promise<Session[]> {
  if (fullCache) return Promise.resolve(fullCache);
  if (fullPromise) return fullPromise;
  fullPromise = fetch("/data/archive.json")
    .then((r) => {
      if (!r.ok) throw new Error("Archive corpus unavailable");
      return r.json() as Promise<Session[]>;
    })
    .then((data) => {
      fullCache = data;
      return data;
    })
    .finally(() => {
      fullPromise = null;
    });
  return fullPromise;
}
