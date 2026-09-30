import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Star } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { c as cn, u as usePins } from "./router-B8OqIWlc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pin-button-BEJbXNiL.js
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-[opacity,background-color,box-shadow,transform] duration-150 disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98]", {
	variants: {
		variant: {
			primary: "bg-accent text-accent-fg hover:opacity-90",
			ghost: "text-fg hover:bg-elevated",
			outline: "text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)] hover:bg-elevated",
			subtle: "bg-elevated text-fg hover:bg-elevated/80"
		},
		size: {
			sm: "h-9 rounded-lg px-3 text-sm",
			md: "h-11 rounded-xl px-4 text-sm",
			icon: "size-11 rounded-xl",
			"icon-sm": "size-9 rounded-lg"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function PinButton({ pin, label }) {
	const on = usePins((s) => s.pins.some((p) => p.kind === pin.kind && p.id === pin.id));
	const toggle = usePins((s) => s.toggle);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		variant: on ? "primary" : "outline",
		size: label ? "sm" : "icon-sm",
		"aria-pressed": on,
		"aria-label": on ? "Unpin" : "Pin",
		onClick: (e) => {
			e.preventDefault();
			e.stopPropagation();
			toggle(pin);
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("size-3.5", on && "fill-current") }), label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: on ? "Pinned" : label }) : null]
	});
}
//#endregion
export { PinButton as t };
