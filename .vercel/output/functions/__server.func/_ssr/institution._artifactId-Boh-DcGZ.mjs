import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { h as KIND_LABEL, i as Route$4, p as useOs } from "./router-B8OqIWlc.mjs";
import { t as PageHeader } from "./page-header-GuyGRSk_.mjs";
import { t as ObjectChip } from "./object-chip-vBjtZ9iA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/institution._artifactId-Boh-DcGZ.js
var import_jsx_runtime = require_jsx_runtime();
function ArtifactBody({ art }) {
	const p = art.theory.paths;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-mono text-xs tracking-widest text-subtle uppercase",
					children: "Map"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: art.map.conceptual
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 flex flex-wrap gap-2",
					children: art.map.nodes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-full bg-elevated px-3 py-1 font-mono text-xs text-muted",
						children: n
					}, n))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 font-mono text-xs text-subtle",
					children: [
						"Upstream ",
						art.map.upstream,
						" · Downstream ",
						art.map.downstream
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-mono text-xs tracking-widest text-subtle uppercase",
					children: "Theory"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: art.theory.claim
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-3 grid gap-3 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, {
							k: "Direct",
							v: p.direct,
							on: p.pick === "direct"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, {
							k: "Lateral",
							v: p.lateral,
							on: p.pick === "lateral"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, {
							k: "Radical",
							v: p.radical,
							on: p.pick === "radical"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, {
							k: "Hybrid",
							v: p.hybrid,
							on: p.pick === "hybrid"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-fg",
					children: p.why
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-mono text-xs tracking-widest text-subtle uppercase",
					children: "Practice"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: art.practice.drill
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted",
					children: art.practice.steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, s))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-subtle",
					children: art.practice.rollback
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-mono text-xs tracking-widest text-subtle uppercase",
					children: "Invention"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-display text-xl tracking-display text-fg",
					children: art.invention.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: art.invention.risk
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: art.invention.staff
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-xs text-subtle",
				children: [
					KIND_LABEL[art.kind],
					" · ",
					art.objects.join(" · "),
					" · skill",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/fleet/$agentId",
						params: { agentId: art.skillId },
						className: "text-muted hover:text-fg",
						children: art.skillId
					})
				]
			})
		]
	});
}
function Path({ k, v, on }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-xl p-3 ${on ? "bg-accent text-accent-fg" : "bg-elevated"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
			className: `font-mono text-xs uppercase ${on ? "text-accent-fg/70" : "text-subtle"}`,
			children: [k, on ? " · pick" : ""]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: `mt-1 text-sm leading-relaxed ${on ? "text-accent-fg" : "text-muted"}`,
			children: v
		})]
	});
}
function ArtifactPage() {
	const { artifactId } = Route$4.useParams();
	const art = useOs((s) => s.artifacts.find((a) => a.id === artifactId));
	if (!art) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sand-enter",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Artifact not on disk",
			lede: "Filings live on this computer. If the cap rolled or the stay was wiped, the desk will file again on the next tick."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/institution",
			className: "text-sm text-muted",
			children: "Back to institution"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sand-enter",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: `${KIND_LABEL[art.kind]} · ${art.room}`,
				title: art.title,
				lede: `${art.agentName} filed a full map, four-path theory, practice drill, and invention. No model call.`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 flex flex-wrap gap-2",
				children: art.objects.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ObjectChip, { name: o }, o))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
				className: "rounded-2xl bg-surface p-5 sm:p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtifactBody, { art })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/bots/$botId",
					params: { botId: art.agentId },
					className: "text-muted hover:text-fg",
					children: ["Open ", art.agentName]
				})
			})
		]
	});
}
//#endregion
export { ArtifactPage as component };
