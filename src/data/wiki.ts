/** Procedural Grokipedia: 885,000 pages, generated on demand. No stored files. No model API. */

import type { ObjectName } from "@/lib/work";

export const WIKI_SIZE = 885_000;

export type WikiCategory = {
  id: string;
  name: string;
  start: number;
  end: number;
};

const WEIGHTS: { id: string; name: string; w: number }[] = [
  { id: "universe", name: "Universe", w: 9 },
  { id: "agents", name: "Persistent agents", w: 10 },
  { id: "compute", name: "Compute", w: 8 },
  { id: "harness", name: "Harness", w: 6 },
  { id: "computer", name: "Agent computer", w: 7 },
  { id: "firmware", name: "Firmware", w: 5 },
  { id: "network", name: "Network", w: 5 },
  { id: "institution", name: "Institution", w: 8 },
  { id: "theory", name: "Theory", w: 9 },
  { id: "practice", name: "Practice", w: 9 },
  { id: "invention", name: "Invention", w: 8 },
  { id: "trust", name: "Trust", w: 4 },
  { id: "docs", name: "Doctrine", w: 4 },
  { id: "hardware", name: "Hardware", w: 5 },
  { id: "browser", name: "Browser", w: 3 },
];

const totalW = WEIGHTS.reduce((n, c) => n + c.w, 0);

export const CATEGORIES: WikiCategory[] = (() => {
  let cursor = 0;
  return WEIGHTS.map((c, i) => {
    const slice = i === WEIGHTS.length - 1 ? WIKI_SIZE - cursor : Math.floor((c.w / totalW) * WIKI_SIZE);
    const start = cursor;
    const end = cursor + slice;
    cursor = end;
    return { id: c.id, name: c.name, start, end };
  });
})();

export function categoryOf(id: number): WikiCategory {
  const n = clampId(id);
  for (const c of CATEGORIES) if (n >= c.start && n < c.end) return c;
  return CATEGORIES[CATEGORIES.length - 1]!;
}

export function clampId(id: number) {
  if (!Number.isFinite(id)) return 0;
  const n = Math.trunc(id);
  if (n < 0) return 0;
  if (n >= WIKI_SIZE) return WIKI_SIZE - 1;
  return n;
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

function pick<T>(rng: () => number, arr: readonly T[]): T {
  return arr[Math.floor(rng() * arr.length) % arr.length]!;
}

const HEADS: Record<string, string[]> = {
  universe: ["Colossus", "Truth layer", "Grokipedia", "Training run", "World model", "Citation graph"],
  agents: ["Persistent teammate", "Bot object", "Routine", "Presence", "Memory compound", "One-job roster"],
  compute: ["Inference grant", "Token meter", "Context window", "Post-training", "Joint Cursor trace"],
  harness: ["Plan-and-approve", "AGENTS.md", "Tool loop", "/goal", "ACP session", "Worktree"],
  computer: ["Durable disk", "Shared cookies", "Recover order", "Sleep/wake", "Team Setup", "Takeover"],
  firmware: ["UEFI route", "Coreboot map", "InsydeH2O", "Capsule update", "Boot chain"],
  network: ["Egress policy", "No-VPN rule", "Private network gap", "Etisalat path", "DNS sovereignty"],
  institution: ["PrivateLab", "Foundry desk", "Theory wing", "Practice floor", "Archive stacks"],
  theory: ["Four-path analysis", "Invention-by-default", "Object model", "Category gate", "Truth vs action"],
  practice: ["First 300 users", "Onboarding path", "Recovery drill", "Skill install", "Routine start"],
  invention: ["Hybrid path", "Lateral primitive", "Radical rollback", "Fork point", "Sovereign stack"],
  trust: ["Auto-review", "Secret card", "Approval surface", "Privacy mode", "Audit log"],
  docs: ["Instinct table", "Empty state", "Support script", "Curriculum", "Launch copy"],
  hardware: ["Dual PC", "Pavilion node", "Latitude node", "NVMe enclosure", "Bare-metal"],
  browser: ["Computer-use", "Cookie jar", "Preview pane", "Takeover keyboard", "Gecko fork"],
};

const TAILS = [
  "as a product object",
  "in the 2026 record",
  "without a chat tab",
  "on a durable disk",
  "inside one account",
  "after the Cursor close",
  "for the first three hundred",
  "as an institution problem",
  "with least-destructive order",
  "under SpaceXAI brand",
];

const OBJECT_FOR_CAT: Record<string, ObjectName> = {
  universe: "Computer",
  agents: "Bot",
  compute: "Skill",
  harness: "Skill",
  computer: "Computer",
  firmware: "Computer",
  network: "Computer",
  institution: "Routine",
  theory: "Bot",
  practice: "Routine",
  invention: "Skill",
  trust: "Computer",
  docs: "Skill",
  hardware: "Computer",
  browser: "Computer",
};

export type WikiPage = {
  id: number;
  title: string;
  category: WikiCategory;
  object: ObjectName;
  lead: string;
  sections: { heading: string; body: string }[];
  sources: string[];
  seeAlso: { id: number; title: string }[];
  alive: boolean;
};

const CANON: Record<number, { title: string; lead: string; object: ObjectName }> = {
  0: {
    title: "Grokipedia",
    object: "Computer",
    lead: "xAI product launched 27 October 2025 as a truth layer: on the order of 885,000 AI-written articles in version 0.1. Generating that many pages is a launch. Keeping them alive is an institution.",
  },
  1: {
    title: "Persistent agent",
    object: "Bot",
    lead: "A Bot is a named coworker with memory, presence, a computer, and routines. Chats are disposable. The Bot is not.",
  },
  2: {
    title: "Agent computer",
    object: "Computer",
    lead: "One persistent cloud desktop per account. Screens are not isolation. /workspace is durable. Reset is last, not first.",
  },
  3: {
    title: "Grok Build",
    object: "Skill",
    lead: "An agent in your repo and terminal. You are the developer. The computer is yours. The harness is inspectable; the weights are not in that repo.",
  },
  4: {
    title: "Grok Bot",
    object: "Bot",
    lead: "Code name Sand. An agent with its own cloud computer. You are the manager of teammates. Four weeks to an internal product, three more to public launch on 11 August 2026.",
  },
  5: {
    title: "Launch stay",
    object: "Computer",
    lead: "The editable stage a product sits in: internal working product, dogfood, public beta, Enterprise. Staff print a date only after the stay is named.",
  },
  6: {
    title: "Chat",
    object: "Chat",
    lead: "A thread with a Bot. Chats die. The Bot does not. Official docs spent a year arguing with the instinct that the tab is the product.",
  },
  7: {
    title: "Routine",
    object: "Routine",
    lead: "Work that starts without a prompt. The coworker who already sat down. Memory of the filing stays with one Bot; the cadence is Bot-level.",
  },
  8: {
    title: "Skill",
    object: "Skill",
    lead: "Tools the whole roster can use. Account-level. Memory stays with the Bot who ran the skill. Team Setup is how tools return after an image rebuild.",
  },
  9: {
    title: "Institution",
    object: "Routine",
    lead: "The foundry that keeps 885,000 pages and every living Bot filing maps, theory, practice, and inventions. A launch count is not a desk.",
  },
  10: {
    title: "Invention-by-default",
    object: "Skill",
    lead: "Four paths on every decision: direct (shipped object), lateral (different primitive), radical (named risk), hybrid (what this desk can staff this week). Then pick with a rollback.",
  },
};

export function wikiTitle(id: number): string {
  const n = clampId(id);
  if (CANON[n]) return CANON[n]!.title;
  const cat = categoryOf(n);
  const rng = mulberry(n + 17);
  const local = n - cat.start;
  return `${pick(rng, HEADS[cat.id] ?? HEADS.theory!)} ${pick(rng, TAILS)} (${cat.name} ${local + 1})`;
}

export function pageObject(id: number): ObjectName {
  const n = clampId(id);
  if (CANON[n]) return CANON[n]!.object;
  const cat = categoryOf(n);
  if (n % 23 === 0) return "Chat";
  return OBJECT_FOR_CAT[cat.id] ?? "Computer";
}

function relatedIds(id: number): number[] {
  const n = clampId(id);
  const cat = categoryOf(n);
  const rng = mulberry(n + 333);
  const out = new Set<number>();
  if (n > 0) out.add(n - 1);
  if (n < WIKI_SIZE - 1) out.add(n + 1);
  out.add(cat.start);
  out.add(Math.min(cat.end - 1, cat.start + Math.floor((cat.end - cat.start) / 2)));
  for (const k of Object.keys(CANON)) out.add(Number(k));
  while (out.size < 12) {
    out.add(cat.start + Math.floor(rng() * Math.max(1, cat.end - cat.start)));
  }
  return [...out].filter((x) => x !== n).slice(0, 8);
}

export function wikiPage(id: number): WikiPage {
  const n = clampId(id);
  const cat = categoryOf(n);
  const rng = mulberry(n + 99);
  const title = wikiTitle(n);
  const object = pageObject(n);
  const canon = CANON[n];
  const local = n - cat.start;
  const lead =
    canon?.lead ??
    `${title} is a reconstructed encyclopedic entry in the SAND Grokipedia stay. It is page ${n.toLocaleString("en-GB")} of ${WIKI_SIZE.toLocaleString("en-GB")}, slot ${local + 1} in ${cat.name}. The page is generated from the category packet on this computer, not from a live model call. Alive means the institution still accepts a correction.`;

  const map = `Map. Category ${cat.name} occupies pages ${cat.start.toLocaleString("en-GB")}–${(cat.end - 1).toLocaleString("en-GB")} (${(cat.end - cat.start).toLocaleString("en-GB")} articles). This page sits at ${n.toLocaleString("en-GB")}. Neighbors: ${Math.max(0, n - 1).toLocaleString("en-GB")} and ${Math.min(WIKI_SIZE - 1, n + 1).toLocaleString("en-GB")}. Product object: ${object}. Conceptual chain: name the object → staff a desk → file theory, practice, and invention → keep the page correctable. Generating the slice was a launch. Walking it is the institution.`;

  const theory = `Theory. Treat “${title}” as an object, not a feature. ${pick(rng, [
    "If it cannot be named, recovered, and staffed, it is not an institution.",
    "Chat is a thread. The Bot is the coworker who still has a desk when the thread dies.",
    "Build runs on your machine. Bot runs on a hosted computer. They share a model family and a CEO, not a meter.",
    "Invention-by-default requires four paths: direct, lateral, radical, hybrid — then pick with a rollback.",
    "Skills are account-wide tools. Memory and routines belong to one Bot.",
    "One computer per account. Screens are not a security boundary.",
  ])} Direct path keeps the shipped ${object}. Lateral path uses ${pick(rng, [
    "local-first CRDTs on the durable disk",
    "capability passing instead of a shared secret",
    "a TUI instead of a canvas",
    "routines without a prompt",
  ])}. Radical path names the risk: ${pick(rng, [
    "a second meter between Bot and Build",
    "Reset as the first fix",
    "a chat tab that outlives the coworker",
    "one Bot per isolated machine",
  ])}. Hybrid path is what ${cat.name} can staff this week on an internal working product.`;

  const practice = `Practice. ${pick(rng, [
    "Complete one task that does not need a login, then one that needs takeover.",
    "Save the stable path as a skill (account-level) and a routine (Bot-level).",
    "Recovery order: retry, restart app, Recover, Update, Reset last.",
    "Do not paste a password in chat. Take over the computer.",
    "Sit the Bot down without a prompt. The filing is the proof of presence.",
    "Edit the launch stay before printing a date.",
  ])} Operational steps: (1) open the ${object} that owns this page, (2) run a packet task with no model call, (3) file map / theory / practice / invention into the institution, (4) leave memory on one Bot. The first three hundred users still needed a human sitting next to the box. This stay does not pretend otherwise.`;

  const invention = `Invention. Direct path keeps ${object} as shipped in the 2026 record. Lateral path ${pick(rng, [
    "stores the encyclopedia as a function of page id, not as 885,000 files",
    "lets routines compound files instead of fine-tuning weights",
    "puts Team Setup in front of image rebuilds so skills return",
    "treats discarded chats as a recycle bin, not as deleted coworkers",
  ])}. Radical path would ${pick(rng, [
    "print a live model call on every page view",
    "wipe /workspace on sleep",
    "bill Bot and Build on one meter",
    "make Grokipedia the product and Bot a skin",
  ])} — named so it can be refused. Hybrid this week: keep pages addressable on this computer, keep every Bot filing, keep the stay editable. Rollback is the recovery order.`;

  const institution = `Institution. Page ${n.toLocaleString("en-GB")} stays alive because a desk still accepts a correction, not because a launch count was printed on 27 October 2025. ${cat.name} is staffed from the reconstructed roster. If you only read Grokipedia you would think the project was rewrite the world’s articles. If you only read official Bot/Build docs you would think the project was give people coworkers and a coding harness. Reality in 2026 is the second sentence wearing the first sentence’s brand. This page is the second sentence, filed under the first.`;

  const seeAlso = relatedIds(n).map((rid) => ({ id: rid, title: wikiTitle(rid) }));

  return {
    id: n,
    title,
    category: cat,
    object,
    lead,
    sections: [
      { heading: "Lead", body: lead },
      { heading: "Map", body: map },
      { heading: "Theory", body: theory },
      { heading: "Practice", body: practice },
      { heading: "Invention", body: invention },
      { heading: "Institution", body: institution },
    ],
    sources: [
      "SpaceXAI, Designing Grok Bot for a world of persistent agents (3 September 2026)",
      "docs.x.ai / cursor.com/help reconstructed curriculum",
      "Grokipedia 0.1 public record, 27 October 2025",
      `SAND Grokipedia stay · page ${n} / ${WIKI_SIZE}`,
    ],
    seeAlso,
    alive: true,
  };
}

export function pagesInCategory(catId: string, offset: number, limit: number) {
  const cat = CATEGORIES.find((c) => c.id === catId) ?? CATEGORIES[0]!;
  const start = cat.start + Math.max(0, offset);
  const out: { id: number; title: string }[] = [];
  for (let i = start; i < cat.end && out.length < limit; i++) {
    out.push({ id: i, title: wikiTitle(i) });
  }
  return { cat, total: cat.end - cat.start, offset: Math.max(0, offset), items: out };
}

export function searchWiki(q: string, limit = 24) {
  const query = q.trim();
  if (!query) return [] as { id: number; title: string; category: string }[];
  const asNum = Number(query.replace(/[, ]/g, ""));
  const hits: { id: number; title: string; category: string }[] = [];
  if (Number.isInteger(asNum) && asNum >= 0 && asNum < WIKI_SIZE) {
    hits.push({ id: asNum, title: wikiTitle(asNum), category: categoryOf(asNum).name });
  }
  for (const [id, v] of Object.entries(CANON)) {
    if (v.title.toLowerCase().includes(query.toLowerCase()) || v.lead.toLowerCase().includes(query.toLowerCase())) {
      const n = Number(id);
      if (!hits.some((h) => h.id === n)) hits.push({ id: n, title: v.title, category: categoryOf(n).name });
    }
  }
  for (const c of CATEGORIES) {
    if (c.name.toLowerCase().includes(query.toLowerCase()) && hits.length < limit) {
      hits.push({ id: c.start, title: wikiTitle(c.start), category: c.name });
    }
  }
  const rng = mulberry(hashStr(query.toLowerCase()));
  let guard = 0;
  while (hits.length < limit && guard < limit * 40) {
    guard += 1;
    const id = Math.floor(rng() * WIKI_SIZE);
    const title = wikiTitle(id);
    if (title.toLowerCase().includes(query.toLowerCase()) || guard % 7 === 0) {
      if (!hits.some((h) => h.id === id)) {
        hits.push({ id, title, category: categoryOf(id).name });
      }
    }
  }
  return hits.slice(0, limit);
}

function hashStr(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

export function formatPageId(id: number) {
  return clampId(id).toLocaleString("en-GB");
}

export const CANON_IDS = Object.keys(CANON).map(Number).sort((a, b) => a - b);
