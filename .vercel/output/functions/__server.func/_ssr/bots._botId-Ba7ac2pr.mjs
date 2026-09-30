import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { F as laneLabel, M as getAgent, h as KIND_LABEL, o as Route$8, p as useOs, v as presenceOf, y as roomForAgent } from "./router-B8OqIWlc.mjs";
import { t as PageHeader } from "./page-header-GuyGRSk_.mjs";
import { t as PinButton } from "./pin-button-BEJbXNiL.mjs";
import { t as BotMark } from "./bot-mark-D8pMhCfB.mjs";
import { t as ObjectChip } from "./object-chip-vBjtZ9iA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bots._botId-Ba7ac2pr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BotPage() {
	const { botId } = Route$8.useParams();
	const bot = getAgent(botId);
	const artifacts = useOs((s) => s.artifacts);
	const lastTick = useOs((s) => s.lastTick);
	const chats = useOs((s) => s.chats.filter((c) => c.botId === botId));
	const openChat = useOs((s) => s.openChat);
	const sendChat = useOs((s) => s.sendChat);
	const closeChat = useOs((s) => s.closeChat);
	const sitDown = useOs((s) => s.sitDown);
	const routineOff = useOs((s) => s.routineOff);
	const setRoutine = useOs((s) => s.setRoutine);
	const installed = useOs((s) => s.installedSkills.includes(botId));
	const [draft, setDraft] = (0, import_react.useState)("");
	const chat = chats[0];
	if (!bot) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sand-enter",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Bot not on this computer",
			lede: "That coworker is not in the rebuilt roster."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/bots",
			className: "text-sm text-muted",
			children: "Back to roster"
		})]
	});
	const room = roomForAgent(bot.lane);
	const mine = artifacts.filter((a) => a.agentId === bot.id);
	const presence = presenceOf(bot.id, artifacts, lastTick);
	const routineOn = !routineOff[bot.id];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sand-enter",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: "Bot-level",
				title: bot.display,
				lede: bot.description,
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinButton, {
					pin: {
						kind: "agent",
						id: bot.id
					},
					label: "Pin Bot"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex flex-wrap items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BotMark, {
						name: bot.display,
						className: "size-12 text-sm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ObjectChip, { name: "Bot" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-ok/10 px-2.5 py-1 font-mono text-xs text-ok uppercase",
						children: presence
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-xs text-subtle",
						children: [
							laneLabel[bot.lane] ?? bot.lane,
							" · ",
							room.name
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-4 rounded-2xl bg-surface p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-xs tracking-widest text-subtle uppercase",
					children: "One job"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: bot.mandate
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs text-subtle",
								children: "Memory"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-display text-2xl tabular-nums",
								children: mine.length
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: "Artifacts filed by this Bot"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs text-subtle",
								children: "Routine"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-display text-2xl",
								children: routineOn ? "Seated" : "Paused"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "mt-3 h-11 rounded-xl bg-accent px-3 text-sm text-accent-fg",
								onClick: () => sitDown(bot.id),
								children: "Sit down"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs text-subtle",
								children: "Skill"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-display text-2xl",
								children: installed ? "On box" : "Off"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/fleet/$agentId",
								params: { agentId: bot.id },
								className: "mt-3 inline-flex h-11 items-center text-sm text-muted hover:text-fg",
								children: "Open packet"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "h-11 rounded-xl bg-elevated px-4 text-sm text-fg",
					onClick: () => setRoutine(bot.id, !routineOn),
					children: routineOn ? "Pause routine" : "Resume routine"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "h-11 rounded-xl bg-elevated px-4 text-sm text-fg",
					onClick: () => openChat(bot.id, bot.display),
					children: "New chat"
				})]
			}),
			chat ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-4 rounded-2xl bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg tracking-display",
							children: "Disposable chat"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "h-10 px-3 text-sm text-danger",
							onClick: () => closeChat(chat.id),
							children: "Discard thread"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Chats die. This Bot does not."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 max-h-56 space-y-2 overflow-y-auto",
						children: chat.messages.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm leading-relaxed text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-medium text-fg",
								children: [m.role === "bot" ? bot.display : "You", " · "]
							}), m.text]
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-3 flex gap-2",
						onSubmit: (e) => {
							e.preventDefault();
							sendChat(chat.id, draft);
							setDraft("");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: draft,
							onChange: (e) => setDraft(e.target.value),
							placeholder: "Thread only",
							className: "h-11 min-w-0 flex-1 rounded-xl bg-elevated px-3 text-sm text-fg placeholder:text-subtle"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "h-11 rounded-xl bg-accent px-3 text-sm text-accent-fg",
							children: "Send"
						})]
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 font-display text-2xl tracking-display",
				children: "Memory"
			}),
			mine.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-2xl bg-surface px-5 py-8 text-sm text-muted",
				children: "Waiting on the first sit-down. The routine will file without a prompt."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-3",
				children: mine.slice(0, 12).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/institution/$artifactId",
					params: { artifactId: a.id },
					className: "block rounded-2xl bg-surface p-5 no-underline hover:shadow-[var(--shadow-border-hover)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-xs text-subtle",
							children: [
								KIND_LABEL[a.kind],
								" · ",
								a.room
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm font-medium text-fg",
							children: a.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 line-clamp-2 text-sm text-muted",
							children: a.map.conceptual
						})
					]
				}) }, a.id))
			})
		]
	});
}
//#endregion
export { BotPage as component };
