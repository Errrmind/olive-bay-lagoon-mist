export type Lane =
  | "command"
  | "bot"
  | "build"
  | "model"
  | "platform"
  | "clients"
  | "trust"
  | "eng"
  | "ops"
  | "intel"
  | "docs"
  | "self"
  | "growth";

export type Role = {
  id: string;
  index: number;
  title: string;
  short: string;
  callsign: string;
  lane: Lane;
  publicRecord: string;
  packet: string[];
  tools: string[];
  done: string;
  body: string;
};

export type Agent = {
  id: string;
  name: string;
  display: string;
  description: string;
  mandate: string;
  lane: Lane;
  version: string;
  triggers: string[];
  files: string[];
  body?: string;
  zipBytes: number;
};

export type Session = {
  id: string;
  title: string;
  uuid: string | null;
  created: string | null;
  updated: string | null;
  spaces: string[];
  tags: string[];
  turns: number;
  chars: number;
  excerpt: string;
  body?: string;
};

export type Meta = {
  rebuiltAt: string;
  roleCount: number;
  agentCount: number;
  sessionCount: number;
  spaces: { name: string; count: number }[];
  tagCounts: Record<string, number>;
  corpusBytes: number;
  source: string;
};
