import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { C as clampId, D as wikiPage, S as WIKI_SIZE, n as Route, w as formatPageId } from "./router-B8OqIWlc.mjs";
import { t as PageHeader } from "./page-header-GuyGRSk_.mjs";
import { t as ObjectChip } from "./object-chip-vBjtZ9iA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wiki._pageId-D2GDjIr3.js
var import_jsx_runtime = require_jsx_runtime();
function WikiArticle() {
	const { pageId } = Route.useParams();
	const id = clampId(Number(pageId));
	const page = wikiPage(id);
	const prev = id > 0 ? id - 1 : null;
	const next = id < 884999 ? id + 1 : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sand-enter",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: `${page.category.name} · ${formatPageId(page.id)} / ${WIKI_SIZE.toLocaleString("en-GB")}`,
				title: page.title,
				lede: page.lead
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-ok/10 px-2.5 py-1 font-mono text-xs text-ok uppercase",
						children: "Alive"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ObjectChip, { name: page.object }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/wiki",
						className: "rounded-full bg-elevated px-2.5 py-1 text-xs text-muted",
						children: page.category.name
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "space-y-6 rounded-2xl bg-surface p-5 sm:p-6",
				children: [
					page.sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-mono text-xs tracking-widest text-subtle uppercase",
						children: s.heading
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[15px] leading-relaxed text-muted",
						children: s.body
					})] }, s.heading)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-mono text-xs tracking-widest text-subtle uppercase",
						children: "See also"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 grid gap-2 sm:grid-cols-2",
						children: page.seeAlso.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/wiki/$pageId",
							params: { pageId: String(r.id) },
							className: "text-sm text-muted hover:text-fg",
							children: [
								formatPageId(r.id),
								" · ",
								r.title
							]
						}) }, r.id))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-mono text-xs tracking-widest text-subtle uppercase",
						children: "Sources"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 space-y-1",
						children: page.sources.map((src) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-sm text-subtle",
							children: src
						}, src))
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mt-6 flex items-center justify-between gap-3 text-sm",
				children: [prev != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/wiki/$pageId",
					params: { pageId: String(prev) },
					className: "text-muted hover:text-fg",
					children: ["← ", formatPageId(prev)]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), next != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/wiki/$pageId",
					params: { pageId: String(next) },
					className: "text-muted hover:text-fg",
					children: [formatPageId(next), " →"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})]
			})
		]
	});
}
//#endregion
export { WikiArticle as component };
