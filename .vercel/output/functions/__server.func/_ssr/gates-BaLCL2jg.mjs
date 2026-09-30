import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as PageHeader } from "./page-header-GuyGRSk_.mjs";
import { t as Badge } from "./badge-BVjK8_mj.mjs";
import { l as timeline, t as gates } from "./doctrine-DSOiNNWo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gates-BaLCL2jg.js
var import_jsx_runtime = require_jsx_runtime();
function GatesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sand-enter",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: "Seven gates",
				title: "What a project had to pass",
				lede: "Reconstructed from public org reporting. Titles below the CEO line are function titles, not a claim that a badge said exactly this string."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-3",
				children: gates.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-2xl bg-surface p-5 sm:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-[11px] tracking-[0.16em] text-subtle uppercase",
								children: [
									"Gate ",
									String(g.n).padStart(2, "0"),
									" · ",
									g.when
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "ok",
								children: g.verdict
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-2xl tracking-display text-fg",
							children: g.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[15px] text-fg",
							children: g.question
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: g.note
						})
					]
				}, g.n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 mb-4 font-display text-2xl tracking-display",
				children: "Public record"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "overflow-hidden rounded-2xl bg-surface",
				children: timeline.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid gap-1 border-b border-line px-5 py-4 last:border-b-0 sm:grid-cols-[8.5rem_1fr] sm:gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[12px] text-subtle",
						children: t.date
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm leading-relaxed text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "sr-only",
							children: [
								"Item ",
								i + 1,
								". "
							]
						}), t.event]
					})]
				}, t.date))
			})
		]
	});
}
//#endregion
export { GatesPage as component };
