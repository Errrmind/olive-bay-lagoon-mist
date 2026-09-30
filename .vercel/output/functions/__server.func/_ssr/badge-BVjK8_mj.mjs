import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as cn } from "./router-B8OqIWlc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-BVjK8_mj.js
var import_jsx_runtime = require_jsx_runtime();
var tones = {
	neutral: "text-fg bg-elevated",
	ok: "text-ok bg-ok/10",
	warn: "text-warn bg-warn/10",
	muted: "text-muted bg-elevated"
};
function Badge({ children, tone = "muted", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[11px] tracking-wide uppercase", tones[tone], className),
		children
	});
}
//#endregion
export { Badge as t };
