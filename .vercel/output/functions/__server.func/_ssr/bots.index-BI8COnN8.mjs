import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { F as laneLabel, k as agents, p as useOs, v as presenceOf, y as roomForAgent } from "./router-B8OqIWlc.mjs";
import { t as PageHeader } from "./page-header-GuyGRSk_.mjs";
import { t as BotMark } from "./bot-mark-D8pMhCfB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bots.index-BI8COnN8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BotsPage() {
	const artifacts = useOs((s) => s.artifacts);
	const lastTick = useOs((s) => s.lastTick);
	const chats = useOs((s) => s.chats);
	const openChat = useOs((s) => s.openChat);
	const sendChat = useOs((s) => s.sendChat);
	const closeChat = useOs((s) => s.closeChat);
	const sitDown = useOs((s) => s.sitDown);
	const [active, setActive] = (0, import_react.useState)(chats[0]?.id ?? null);
	const [draft, setDraft] = (0, import_react.useState)("");
	const chat = chats.find((c) => c.id === active) ?? chats[0];
	const counts = (0, import_react.useMemo)(() => {
		const m = /* @__PURE__ */ new Map();
		for (const a of artifacts) m.set(a.agentId, (m.get(a.agentId) ?? 0) + 1);
		return m;
	}, [artifacts]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sand-enter",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Bot-level",
			title: "Bots",
			lede: "Name, avatar, title, memory, presence. One job. Not a chat tab. Open a thread if you must — then throw the thread away."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-[1fr_20rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-2 sm:grid-cols-2",
				children: agents.map((a) => {
					const room = roomForAgent(a.lane);
					const presence = presenceOf(a.id, artifacts, lastTick);
					const memory = counts.get(a.id) ?? 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BotMark, { name: a.display }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-mono text-xs text-subtle",
										children: [
											laneLabel[a.lane] ?? a.lane,
											" · ",
											room.name
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-1 text-sm font-medium text-fg",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/bots/$botId",
											params: { botId: a.id },
											className: "hover:text-fg",
											children: a.display
										})
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 line-clamp-2 text-sm text-muted",
								children: a.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 font-mono text-xs text-subtle",
								children: [
									presence,
									" · ",
									memory,
									" memories"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex flex-wrap gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/bots/$botId",
										params: { botId: a.id },
										className: "inline-flex h-11 items-center rounded-xl bg-elevated px-3 text-sm text-fg",
										children: "Open Bot"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "h-11 rounded-xl px-3 text-sm text-muted hover:text-fg",
										onClick: () => sitDown(a.id),
										children: "Sit down"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "h-11 rounded-xl px-3 text-sm text-muted hover:text-fg",
										onClick: () => {
											const id = openChat(a.id, a.display);
											setActive(id);
										},
										children: "New chat"
									})
								]
							})
						]
					}, a.id);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "rounded-2xl bg-surface p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg tracking-display",
							children: "Chats"
						}), chat ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "h-10 rounded-xl px-3 text-sm text-danger hover:bg-elevated",
							onClick: () => {
								closeChat(chat.id);
								setActive(null);
							},
							children: "Discard thread"
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Disposable. The Bot is not."
					}),
					chats.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-subtle",
						children: "No open threads."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-1",
						children: chats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActive(c.id),
							className: `w-full rounded-lg px-2 py-2 text-left text-sm ${chat?.id === c.id ? "bg-elevated text-fg" : "text-muted hover:text-fg"}`,
							children: c.title
						}) }, c.id))
					}), chat ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "max-h-64 space-y-2 overflow-y-auto",
							children: chat.messages.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm leading-relaxed text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-medium text-fg",
									children: [m.role === "bot" ? chat.botName : "You", " · "]
								}), m.text]
							}, i))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-3 flex gap-2",
							onSubmit: (e) => {
								e.preventDefault();
								sendChat(chat.id, draft);
								setDraft("");
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: draft,
								onChange: (e) => setDraft(e.target.value),
								placeholder: "Message stays in this thread",
								className: "h-11 min-w-0 flex-1 rounded-xl bg-elevated px-3 text-sm text-fg placeholder:text-subtle"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "h-11 rounded-xl bg-accent px-3 text-sm text-accent-fg",
								children: "Send"
							})]
						})]
					}) : null] })
				]
			})]
		})]
	});
}
//#endregion
export { BotsPage as component };
