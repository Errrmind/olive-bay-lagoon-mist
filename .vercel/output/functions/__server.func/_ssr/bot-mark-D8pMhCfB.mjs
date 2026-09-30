import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as cn } from "./router-B8OqIWlc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bot-mark-D8pMhCfB.js
var import_jsx_runtime = require_jsx_runtime();
function BotMark({ name, className }) {
	const initials = name.split(/[\s-]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-elevated font-mono text-xs tracking-wide text-fg shadow-[var(--shadow-border)]", className),
		"aria-hidden": true,
		children: initials || "B"
	});
}
//#endregion
export { BotMark as t };
