import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { C as clampId, E as searchWiki, O as wikiTitle, S as WIKI_SIZE, T as pagesInCategory, b as CANON_IDS, w as formatPageId, x as CATEGORIES } from "./router-B8OqIWlc.mjs";
import { t as PageHeader } from "./page-header-GuyGRSk_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wiki.index-DP7cTajN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function WikiHome() {
	const navigate = useNavigate();
	const [q, setQ] = (0, import_react.useState)("");
	const [jump, setJump] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)(CATEGORIES[0].id);
	const [page, setPage] = (0, import_react.useState)(0);
	const limit = 24;
	const results = (0, import_react.useMemo)(() => q.trim() ? searchWiki(q, 30) : [], [q]);
	const listing = (0, import_react.useMemo)(() => pagesInCategory(cat, page * limit, limit), [cat, page]);
	const goJump = () => {
		const trimmed = jump.replace(/[, ]/g, "");
		if (!trimmed) return;
		const raw = Number(trimmed);
		if (!Number.isFinite(raw)) return;
		navigate({
			to: "/wiki/$pageId",
			params: { pageId: String(clampId(raw)) }
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sand-enter",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: "Grokipedia stay",
				title: "885,000 pages, kept alive",
				lede: "Version 0.1 printed a launch count. This stay is the institution: every page is addressable, categorized, and still open to a correction. Each article carries a map, theory, practice, and invention. Generated on this computer. No model call.",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => void navigate({
						to: "/wiki/$pageId",
						params: { pageId: String(Math.floor(Math.random() * WIKI_SIZE)) }
					}),
					className: "inline-flex h-11 items-center rounded-xl bg-elevated px-4 text-sm text-fg",
					children: "Random page"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-6 font-mono text-xs text-subtle tabular-nums",
				children: [
					WIKI_SIZE.toLocaleString("en-GB"),
					" articles · ",
					CATEGORIES.length,
					" categories · pages 0–10 are canon objects"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mb-4 flex flex-col gap-2 sm:flex-row",
				onSubmit: (e) => {
					e.preventDefault();
					goJump();
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "sr-only",
						htmlFor: "wiki-jump",
						children: "Jump to page number"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "wiki-jump",
						value: jump,
						onChange: (e) => setJump(e.target.value),
						placeholder: "Jump to any of 885,000 — page number",
						className: "h-11 min-w-0 flex-1 rounded-xl bg-surface px-4 text-sm text-fg placeholder:text-subtle shadow-[var(--shadow-border)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "h-11 rounded-xl bg-accent px-4 text-sm text-accent-fg",
						children: "Open page"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "sr-only",
				htmlFor: "wiki-search",
				children: "Search Grokipedia"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "wiki-search",
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Search title, category, or page number",
				className: "mb-4 h-11 w-full rounded-xl bg-surface px-4 text-sm text-fg placeholder:text-subtle shadow-[var(--shadow-border)]"
			}),
			q.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mb-8 grid gap-2",
				children: results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-2xl bg-surface px-5 py-8 text-center text-sm text-muted",
					children: "No pages in that query."
				}) : results.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/wiki/$pageId",
					params: { pageId: String(r.id) },
					className: "block rounded-2xl bg-surface px-4 py-3 no-underline hover:shadow-[var(--shadow-border-hover)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-xs text-subtle",
						children: [
							r.category,
							" · ",
							formatPageId(r.id)
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-fg",
						children: r.title
					})]
				}) }, r.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 flex flex-wrap gap-2",
					children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setCat(c.id);
							setPage(0);
						},
						className: `h-10 rounded-full px-3 text-sm ${cat === c.id ? "bg-accent text-accent-fg" : "bg-surface text-muted hover:text-fg"}`,
						children: c.name
					}, c.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-3 font-mono text-xs text-subtle tabular-nums",
					children: [
						listing.cat.name,
						" · ",
						listing.total.toLocaleString("en-GB"),
						" pages · map ",
						formatPageId(listing.cat.start),
						"–",
						formatPageId(listing.cat.end - 1)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-2 sm:grid-cols-2",
					children: listing.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/wiki/$pageId",
						params: { pageId: String(item.id) },
						className: "block rounded-2xl bg-surface px-4 py-3 no-underline hover:shadow-[var(--shadow-border-hover)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs text-subtle",
							children: formatPageId(item.id)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-fg",
							children: item.title
						})]
					}) }, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center justify-between text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "h-11 rounded-xl px-4 text-muted hover:bg-elevated hover:text-fg disabled:opacity-40",
							disabled: page === 0,
							onClick: () => setPage((p) => Math.max(0, p - 1)),
							children: "Previous"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-subtle tabular-nums",
							children: page + 1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "h-11 rounded-xl px-4 text-muted hover:bg-elevated hover:text-fg disabled:opacity-40",
							disabled: listing.offset + listing.items.length >= listing.total,
							onClick: () => setPage((p) => p + 1),
							children: "Next"
						})
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 rounded-2xl bg-surface p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl tracking-display",
					children: "Canon objects"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: CANON_IDS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/wiki/$pageId",
						params: { pageId: String(id) },
						className: "text-muted hover:text-fg",
						children: [
							formatPageId(id),
							" · ",
							wikiTitle(id)
						]
					}) }, id))
				})]
			})
		]
	});
}
//#endregion
export { WikiHome as component };
