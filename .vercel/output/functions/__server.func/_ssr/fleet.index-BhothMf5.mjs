import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as formatBytes, F as laneLabel, k as agents } from "./router-B8OqIWlc.mjs";
import { t as PageHeader } from "./page-header-GuyGRSk_.mjs";
import { t as Badge } from "./badge-BVjK8_mj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/fleet.index-BhothMf5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LANES = [
	"all",
	"eng",
	"ops",
	"intel",
	"docs",
	"platform",
	"trust",
	"self"
];
function FleetPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const [lane, setLane] = (0, import_react.useState)("all");
	const filtered = (0, import_react.useMemo)(() => {
		const query = q.trim().toLowerCase();
		return agents.filter((a) => {
			if (lane !== "all" && a.lane !== lane) return false;
			if (!query) return true;
			return `${a.display} ${a.description} ${a.mandate} ${a.triggers.join(" ")}`.toLowerCase().includes(query);
		});
	}, [q, lane]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sand-enter",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: "Account-level packets",
				title: "Skill bodies",
				lede: "Every specialist packet rebuilt from the original zips. Skills are account-wide tools. Memory of using them stays with one Bot. Install or remove them on Skills.",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/skills",
					className: "inline-flex h-11 items-center text-sm text-muted hover:text-fg",
					children: "Skills on this computer"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "sr-only",
						htmlFor: "fleet-search",
						children: "Filter fleet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "fleet-search",
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Filter by name, mandate, trigger",
						className: "h-11 w-full rounded-xl bg-surface px-4 text-sm text-fg placeholder:text-subtle shadow-[var(--shadow-border)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: LANES.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setLane(l),
							className: `h-10 rounded-full px-3 text-sm ${lane === l ? "bg-accent text-accent-fg" : "bg-surface text-muted hover:text-fg"}`,
							children: l === "all" ? "All" : laneLabel[l]
						}, l))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-4 font-mono text-[11px] text-subtle tabular-nums",
				children: [
					filtered.length,
					" of ",
					agents.length
				]
			}),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-2xl bg-surface px-5 py-10 text-center text-sm text-muted",
				children: "No agent matches that filter."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: filtered.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/fleet/$agentId",
					params: { agentId: a.id },
					className: "rounded-2xl bg-surface p-5 no-underline transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: laneLabel[a.lane] ?? a.lane }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px] text-subtle",
								children: formatBytes(a.zipBytes)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-[17px] font-medium text-fg",
							children: a.display
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 line-clamp-3 text-sm leading-relaxed text-muted",
							children: a.description
						})
					]
				}, a.id))
			})
		]
	});
}
//#endregion
export { FleetPage as component };
