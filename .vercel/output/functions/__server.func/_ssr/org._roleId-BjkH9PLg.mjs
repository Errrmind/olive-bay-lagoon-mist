import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { F as laneLabel, N as getRole, r as Route$2, z as roles } from "./router-B8OqIWlc.mjs";
import { t as PageHeader } from "./page-header-GuyGRSk_.mjs";
import { t as PinButton } from "./pin-button-BEJbXNiL.mjs";
import { t as Badge } from "./badge-BVjK8_mj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/org._roleId-BjkH9PLg.js
var import_jsx_runtime = require_jsx_runtime();
function RolePage() {
	const { roleId } = Route$2.useParams();
	const role = getRole(roleId);
	if (!role) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sand-enter",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Role not in the packet",
			lede: "That function is not in the reconstructed org."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/org",
			className: "text-sm text-muted",
			children: "Back to org"
		})]
	});
	const i = roles.findIndex((r) => r.id === role.id);
	const prev = i > 0 ? roles[i - 1] : null;
	const next = i >= 0 && i < roles.length - 1 ? roles[i + 1] : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sand-enter",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: `${String(role.index).padStart(2, "0")} · ${role.callsign}`,
				title: role.title,
				lede: role.publicRecord,
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinButton, {
					pin: {
						kind: "role",
						id: role.id
					},
					label: "Pin role"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: laneLabel[role.lane] ?? role.lane })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-2xl bg-surface p-5 sm:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-mono text-[11px] tracking-[0.16em] text-subtle uppercase",
						children: "Reconstructed job packet"
					}), role.packet.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-4 space-y-3",
						children: role.packet.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-[15px] leading-relaxed text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px] text-subtle tabular-nums",
								children: String(idx + 1).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
						}, idx))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted",
						children: "No numbered packet on this role."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-2xl bg-surface p-5 sm:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-mono text-[11px] tracking-[0.16em] text-subtle uppercase",
						children: "Tools and materials"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2",
						children: role.tools.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-[15px] leading-relaxed text-muted",
							children: t
						}, t))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-4 rounded-2xl bg-surface p-5 sm:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-[11px] tracking-[0.16em] text-subtle uppercase",
					children: "Done means"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-3xl text-[15px] leading-relaxed text-muted",
					children: role.done
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mt-8 flex items-center justify-between gap-4 text-sm",
				children: [prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/org/$roleId",
					params: { roleId: prev.id },
					className: "text-muted no-underline hover:text-fg",
					children: ["← ", prev.short]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/org/$roleId",
					params: { roleId: next.id },
					className: "text-muted no-underline hover:text-fg",
					children: [next.short, " →"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})]
			})
		]
	});
}
//#endregion
export { RolePage as component };
