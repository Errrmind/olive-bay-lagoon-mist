import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { B as sessions, R as meta, j as formatWhen } from "./router-B8OqIWlc.mjs";
import { t as PageHeader } from "./page-header-GuyGRSk_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/archive.index-DuXdQjDY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TAGS = ["all", ...Object.keys(meta.tagCounts).sort()];
function ArchivePage() {
	const [q, setQ] = (0, import_react.useState)("");
	const [tag, setTag] = (0, import_react.useState)("all");
	const [space, setSpace] = (0, import_react.useState)("all");
	const filtered = (0, import_react.useMemo)(() => {
		const query = q.trim().toLowerCase();
		return sessions.filter((s) => {
			if (tag !== "all" && !s.tags.includes(tag)) return false;
			if (space !== "all" && !s.spaces.includes(space)) return false;
			if (!query) return true;
			return `${s.title} ${s.excerpt} ${s.tags.join(" ")}`.toLowerCase().includes(query);
		});
	}, [
		q,
		tag,
		space
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sand-enter",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: "Three hundred fifty sessions",
				title: "Knowledge archive",
				lede: "Rebuilt from the groktoperp library. Search the corpus, pin a thread, read the packet. Full text loads when you open a session."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "sr-only",
						htmlFor: "archive-search",
						children: "Search archive"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "archive-search",
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Search titles and excerpts",
						className: "h-11 w-full rounded-xl bg-surface px-4 text-sm text-fg placeholder:text-subtle shadow-[var(--shadow-border)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: meta.spaces.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setSpace(s.name === space ? "all" : s.name),
							className: `h-10 rounded-full px-3 text-sm ${space === s.name ? "bg-accent text-accent-fg" : "bg-surface text-muted hover:text-fg"}`,
							children: [
								s.name,
								" ",
								s.count
							]
						}, s.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: TAGS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setTag(t),
							className: `h-9 rounded-full px-3 text-[13px] ${tag === t ? "bg-elevated text-fg" : "text-subtle hover:text-fg"}`,
							children: t
						}, t))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-4 font-mono text-[11px] text-subtle tabular-nums",
				children: [
					filtered.length,
					" of ",
					sessions.length
				]
			}),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-2xl bg-surface px-5 py-10 text-center text-sm text-muted",
				children: "Nothing in the archive matches."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-3",
				children: filtered.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/archive/$sessionId",
					params: { sessionId: s.id },
					className: "block rounded-2xl bg-surface p-5 no-underline transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] text-subtle",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatWhen(s.updated || s.created) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [s.turns, " turns"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.tags.slice(0, 3).join(" · ") })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-[16px] font-medium leading-snug text-fg",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 line-clamp-2 text-sm leading-relaxed text-muted",
							children: s.excerpt
						})
					]
				}) }, s.id))
			})
		]
	});
}
//#endregion
export { ArchivePage as component };
