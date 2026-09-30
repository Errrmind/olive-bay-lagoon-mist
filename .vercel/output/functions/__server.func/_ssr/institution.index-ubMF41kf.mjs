import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as ROOMS, h as KIND_LABEL, k as agents, m as KINDS, p as useOs, y as roomForAgent } from "./router-B8OqIWlc.mjs";
import { t as PageHeader } from "./page-header-GuyGRSk_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/institution.index-ubMF41kf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function InstitutionPage() {
	const artifacts = useOs((s) => s.artifacts);
	const sitFloor = useOs((s) => s.sitFloor);
	const [kind, setKind] = (0, import_react.useState)("all");
	const byRoom = ROOMS.map((room) => ({
		room,
		bots: agents.filter((a) => roomForAgent(a.lane).id === room.id),
		filed: artifacts.filter((a) => a.room === room.name)
	}));
	const shown = kind === "all" ? artifacts : artifacts.filter((a) => a.kind === kind);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sand-enter",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: "Mapped foundry",
				title: "Institution",
				lede: "Generating 885,000 pages is a launch. Keeping them alive is an institution. Every desk files a full map, four-path theory, practice drill, and invention on a local tick — no new meter.",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => sitFloor(),
					className: "h-11 rounded-xl bg-accent px-4 text-sm text-accent-fg",
					children: "Sit the floor down"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: byRoom.map(({ room, bots, filed }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs tracking-widest text-subtle uppercase",
							children: room.wing
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-xl tracking-display",
							children: room.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 font-mono text-xs text-subtle tabular-nums",
							children: [
								bots.length,
								" bots · ",
								filed.length,
								" artifacts"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 space-y-1",
							children: [bots.slice(0, 4).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/bots/$botId",
								params: { botId: b.id },
								className: "text-sm text-muted hover:text-fg",
								children: b.display
							}) }, b.id)), bots.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-sm text-subtle",
								children: "Unstaffed this stay"
							}) : null]
						})
					]
				}, room.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 mb-3 flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-display",
					children: "Filed artifacts"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KindBtn, {
						id: "all",
						on: kind === "all",
						set: () => setKind("all")
					}), KINDS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KindBtn, {
						id: KIND_LABEL[k],
						on: kind === k,
						set: () => setKind(k)
					}, k))]
				})]
			}),
			shown.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-2xl bg-surface px-5 py-8 text-center text-sm text-muted",
				children: "Waiting on the first local tick. Agents write without a model call."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-3",
				children: shown.slice(0, 32).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/institution/$artifactId",
					params: { artifactId: a.id },
					className: "block rounded-2xl bg-surface p-5 no-underline hover:shadow-[var(--shadow-border-hover)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-xs text-subtle",
							children: [
								KIND_LABEL[a.kind],
								" · ",
								a.room,
								" · ",
								a.agentName
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 text-sm font-medium text-fg",
							children: a.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 line-clamp-3 text-sm leading-relaxed text-muted",
							children: a.map.conceptual
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-mono text-xs text-subtle",
							children: a.objects.join(" · ")
						})
					]
				}) }, a.id))
			})
		]
	});
}
function KindBtn({ id, on, set }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: set,
		className: `h-10 rounded-full px-3 text-sm ${on ? "bg-accent text-accent-fg" : "bg-surface text-muted hover:text-fg"}`,
		children: id
	});
}
//#endregion
export { InstitutionPage as component };
