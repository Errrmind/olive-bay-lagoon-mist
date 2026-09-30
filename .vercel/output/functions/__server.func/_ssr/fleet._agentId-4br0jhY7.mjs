import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as formatBytes, F as laneLabel, I as loadFullAgents, M as getAgent, a as Route$6 } from "./router-B8OqIWlc.mjs";
import { t as Markdown } from "./md-BRN4tTgV.mjs";
import { t as PageHeader } from "./page-header-GuyGRSk_.mjs";
import { t as PinButton } from "./pin-button-BEJbXNiL.mjs";
import { t as Badge } from "./badge-BVjK8_mj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/fleet._agentId-4br0jhY7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AgentPage() {
	const { agentId } = Route$6.useParams();
	const listed = getAgent(agentId);
	const [body, setBody] = (0, import_react.useState)(listed?.body || listed?.mandate || "");
	const [err, setErr] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let live = true;
		loadFullAgents().then((all) => {
			if (!live) return;
			const hit = all.find((a) => a.id === agentId);
			if (hit?.body) setBody(hit.body);
		}).catch((e) => {
			if (!live) return;
			setErr(e instanceof Error ? e.message : "Could not load skill body");
		});
		return () => {
			live = false;
		};
	}, [agentId]);
	if (!listed) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sand-enter",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Agent not in the fleet",
			lede: "That skill packet is not in the rebuilt roster."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/fleet",
			className: "text-sm text-muted",
			children: "Back to fleet"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sand-enter",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: listed.name,
				title: listed.display,
				lede: listed.description,
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinButton, {
					pin: {
						kind: "agent",
						id: listed.id
					},
					label: "Pin agent"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: laneLabel[listed.lane] ?? listed.lane }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						tone: "neutral",
						children: ["v", listed.version]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[11px] text-subtle",
						children: formatBytes(listed.zipBytes)
					})
				]
			}),
			listed.triggers.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-4 rounded-2xl bg-surface p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-[11px] tracking-[0.16em] text-subtle uppercase",
					children: "Activation"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 flex flex-wrap gap-2",
					children: listed.triggers.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-full bg-elevated px-3 py-1.5 text-sm text-muted",
						children: t
					}, t))
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-4 rounded-2xl bg-surface p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-[11px] tracking-[0.16em] text-subtle uppercase",
					children: "Files in the packet"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 grid gap-1 sm:grid-cols-2",
					children: listed.files.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "font-mono text-[12px] text-muted",
						children: f
					}, f))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl bg-surface p-5 sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-mono text-[11px] tracking-[0.16em] text-subtle uppercase",
						children: "Skill body"
					}),
					err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-danger",
						children: err
					}) : null,
					body ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, {
						source: body,
						className: "mt-2"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "Loading packet…"
					})
				]
			})
		]
	});
}
//#endregion
export { AgentPage as component };
