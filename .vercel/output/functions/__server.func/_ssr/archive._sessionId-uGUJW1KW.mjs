import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { L as loadFullArchive, P as getSession, j as formatWhen, s as Route$10 } from "./router-B8OqIWlc.mjs";
import { t as Markdown } from "./md-BRN4tTgV.mjs";
import { t as PageHeader } from "./page-header-GuyGRSk_.mjs";
import { t as PinButton } from "./pin-button-BEJbXNiL.mjs";
import { t as Badge } from "./badge-BVjK8_mj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/archive._sessionId-uGUJW1KW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SessionPage() {
	const { sessionId } = Route$10.useParams();
	const listed = getSession(sessionId);
	const [full, setFull] = (0, import_react.useState)(listed ?? null);
	const [err, setErr] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let live = true;
		loadFullArchive().then((all) => {
			if (!live) return;
			const hit = all.find((s) => s.id === sessionId);
			if (hit) setFull(hit);
		}).catch((e) => {
			if (!live) return;
			setErr(e instanceof Error ? e.message : "Could not load session body");
		});
		return () => {
			live = false;
		};
	}, [sessionId]);
	if (!listed && !full) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sand-enter",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Session not in the corpus",
			lede: "That thread was not in the rebuilt archive."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/archive",
			className: "text-sm text-muted",
			children: "Back to archive"
		})]
	});
	const s = full ?? listed;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sand-enter",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: formatWhen(s.updated || s.created),
				title: s.title,
				lede: s.excerpt,
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinButton, {
					pin: {
						kind: "session",
						id: s.id
					},
					label: "Pin session"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex flex-wrap gap-2",
				children: [
					s.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: t }, t)),
					s.spaces.map((sp) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "neutral",
						children: sp
					}, sp)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-[11px] text-subtle",
						children: [s.turns, " turns"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-2xl bg-surface p-5 sm:p-6",
				children: [
					err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-danger",
						children: err
					}) : null,
					s.body ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, { source: s.body }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Loading the rebuilt packet…"
					}),
					s.body && s.chars > s.body.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-subtle",
						children: "Showing the rebuilt lead of this session. Original ran longer."
					}) : null
				]
			})
		]
	});
}
//#endregion
export { SessionPage as component };
