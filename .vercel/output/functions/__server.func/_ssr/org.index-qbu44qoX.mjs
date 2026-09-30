import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { F as laneLabel, z as roles } from "./router-B8OqIWlc.mjs";
import { t as PageHeader } from "./page-header-GuyGRSk_.mjs";
import { t as Badge } from "./badge-BVjK8_mj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/org.index-qbu44qoX.js
var import_jsx_runtime = require_jsx_runtime();
function OrgPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sand-enter",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Twelve functions",
			title: "The room that had to exist",
			lede: "Reconstructed job packets from what shipped — not leaked HR docs. If the product exists, someone had to sign these requirements."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 md:grid-cols-2",
			children: roles.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/org/$roleId",
				params: { roleId: r.id },
				className: "group rounded-2xl bg-surface p-5 no-underline transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)] sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-[11px] tracking-[0.16em] text-subtle",
							children: [
								String(r.index).padStart(2, "0"),
								" · ",
								r.callsign
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: laneLabel[r.lane] ?? r.lane })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-2xl tracking-display text-fg",
						children: r.short
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 line-clamp-3 text-sm leading-relaxed text-muted",
						children: r.publicRecord
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-subtle",
						children: [
							r.packet.length,
							" requirements · ",
							r.tools.length,
							" materials"
						]
					})
				]
			}, r.id))
		})]
	});
}
//#endregion
export { OrgPage as component };
