import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { h as KIND_LABEL, k as agents, p as useOs, v as presenceOf, y as roomForAgent } from "./router-B8OqIWlc.mjs";
import { t as PageHeader } from "./page-header-GuyGRSk_.mjs";
import { t as BotMark } from "./bot-mark-D8pMhCfB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routines-Bi2GbJSX.js
var import_jsx_runtime = require_jsx_runtime();
function RoutinesPage() {
	const artifacts = useOs((s) => s.artifacts);
	const lastTick = useOs((s) => s.lastTick);
	const routineOff = useOs((s) => s.routineOff);
	const setRoutine = useOs((s) => s.setRoutine);
	const sitDown = useOs((s) => s.sitDown);
	const sitFloor = useOs((s) => s.sitFloor);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sand-enter",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: "Bot-level",
				title: "Routines",
				lede: "Work that starts without a prompt. The coworker who already sat down. Each Bot files a rotating map, theory, practice, and invention into the institution — not into a chat.",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => sitFloor(),
					className: "h-11 rounded-xl bg-accent px-4 text-sm text-accent-fg",
					children: "Sit the floor down"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-6 text-sm text-muted",
				children: [
					"Last tick ",
					lastTick ? "on this computer" : "pending",
					". Skills are account-wide. Memory of the filing stays with the Bot."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-2",
				children: agents.map((a) => {
					const filed = artifacts.filter((x) => x.agentId === a.id);
					const room = roomForAgent(a.lane);
					const on = !routineOff[a.id];
					const last = filed[0];
					const presence = presenceOf(a.id, artifacts, lastTick);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-col gap-3 rounded-2xl bg-surface px-4 py-4 sm:flex-row sm:items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BotMark, { name: a.display }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-fg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/bots/$botId",
										params: { botId: a.id },
										children: a.display
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted",
									children: [
										room.name,
										" · ",
										presence,
										" · ",
										filed.length,
										" filings",
										last ? ` · last ${KIND_LABEL[last.kind]}` : ""
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => sitDown(a.id),
									className: "h-11 rounded-xl bg-elevated px-3 text-sm text-fg",
									children: "Sit down"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setRoutine(a.id, !on),
									className: "h-11 rounded-xl px-3 text-sm text-muted hover:text-fg",
									children: on ? "Pause" : "Resume"
								})]
							})
						]
					}, a.id);
				})
			})
		]
	});
}
//#endregion
export { RoutinesPage as component };
