import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { R as meta, S as WIKI_SIZE, d as LAUNCH_STAYS, f as stayLabel, g as OBJECTS, h as KIND_LABEL, k as agents, l as DESK_APPS, p as useOs } from "./router-B8OqIWlc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BxqyqGvH.js
var import_jsx_runtime = require_jsx_runtime();
function Desktop() {
	const stay = useOs((s) => s.launchStay);
	const setStay = useOs((s) => s.setLaunchStay);
	const artifacts = useOs((s) => s.artifacts);
	const last = artifacts[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "main",
		className: "sand-wallpaper relative h-full overflow-y-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "pointer-events-none absolute right-6 bottom-20 hidden font-display text-6xl tracking-display text-fg/5 italic sm:block",
			children: "Sand"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative grid gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:grid-cols-[auto_minmax(0,24rem)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-2 lg:content-start",
				children: DESK_APPS.map((app) => {
					const Icon = app.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: app.to,
						className: "flex min-h-24 flex-col items-center justify-center gap-2 rounded-xl px-2 py-3 text-center no-underline hover:bg-elevated/80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-11 items-center justify-center rounded-xl bg-surface text-fg shadow-[var(--shadow-border)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs leading-tight text-fg",
								children: app.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden font-mono text-xs text-subtle sm:block",
								children: app.kicker
							})
						]
					}) }, app.id);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-2xl bg-surface p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs tracking-widest text-subtle uppercase",
								children: "Launch stay"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-2xl tracking-display text-fg",
								children: stayLabel(stay)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 grid grid-cols-2 gap-2",
								children: LAUNCH_STAYS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setStay(s.id),
									className: `min-h-11 rounded-xl px-2 py-2 text-xs leading-tight ${stay === s.id ? "bg-accent text-accent-fg" : "bg-elevated text-muted hover:text-fg"}`,
									children: s.short
								}, s.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/computer",
								className: "mt-4 inline-block text-sm text-muted hover:text-fg",
								children: "This Computer"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-2xl bg-surface p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs tracking-widest text-subtle uppercase",
							children: "Objects"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2",
							children: OBJECTS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-fg",
									children: o.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-subtle",
									children: [" · ", o.where]
								})]
							}, o.name))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-2xl bg-surface p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs tracking-widest text-subtle uppercase",
								children: "Alive"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-3 grid grid-cols-2 gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "font-mono text-xs text-subtle",
										children: "Pages"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "font-display text-xl tabular-nums",
										children: WIKI_SIZE.toLocaleString("en-GB")
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "font-mono text-xs text-subtle",
										children: "Bots"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "font-display text-xl tabular-nums",
										children: agents.length
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "font-mono text-xs text-subtle",
										children: "Artifacts"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "font-display text-xl tabular-nums",
										children: artifacts.length
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "font-mono text-xs text-subtle",
										children: "Sessions"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "font-display text-xl tabular-nums",
										children: meta.sessionCount
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted",
								children: last ? `${last.agentName} filed ${KIND_LABEL[last.kind]} in ${last.room}.` : "Agents file maps, theory, practice, and inventions on a local tick. No tokens."
							}),
							last ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/institution/$artifactId",
								params: { artifactId: last.id },
								className: "mt-3 inline-block text-sm text-muted hover:text-fg",
								children: "Open filing"
							}) : null
						]
					})
				]
			})]
		})]
	});
}
//#endregion
export { Desktop as component };
