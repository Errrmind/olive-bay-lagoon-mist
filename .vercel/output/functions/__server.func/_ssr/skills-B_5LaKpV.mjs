import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as formatBytes, F as laneLabel, k as agents, p as useOs } from "./router-B8OqIWlc.mjs";
import { t as PageHeader } from "./page-header-GuyGRSk_.mjs";
import { t as Badge } from "./badge-BVjK8_mj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/skills-B_5LaKpV.js
var import_jsx_runtime = require_jsx_runtime();
function SkillsPage() {
	const installed = useOs((s) => s.installedSkills);
	const installSkill = useOs((s) => s.installSkill);
	const artifacts = useOs((s) => s.artifacts);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sand-enter",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: "Account-level",
				title: "Skills",
				lede: "Tools the whole roster can use. Memory stays with one Bot. Team Setup is how they return after an image rebuild. Uninstalling a skill does not delete the coworker."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-6 font-mono text-xs text-subtle tabular-nums",
				children: [
					installed.length,
					" of ",
					agents.length,
					" installed on this computer"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-3 sm:grid-cols-2",
				children: agents.map((a) => {
					const on = installed.includes(a.id);
					const used = artifacts.filter((x) => x.skillId === a.id).length;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl bg-surface p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: laneLabel[a.lane] ?? a.lane }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-subtle",
									children: formatBytes(a.zipBytes)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-sm font-medium text-fg",
								children: a.display
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 line-clamp-3 text-sm leading-relaxed text-muted",
								children: a.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 font-mono text-xs text-subtle",
								children: [
									on ? "Installed" : "Off this box",
									" · ",
									used,
									" memories on Bots"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => installSkill(a.id, !on),
									className: "h-11 rounded-xl bg-elevated px-3 text-sm text-fg hover:shadow-[var(--shadow-border-hover)]",
									children: on ? "Uninstall" : "Install"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/fleet/$agentId",
									params: { agentId: a.id },
									className: "inline-flex h-11 items-center rounded-xl px-3 text-sm text-muted hover:text-fg",
									children: "Packet"
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
export { SkillsPage as component };
