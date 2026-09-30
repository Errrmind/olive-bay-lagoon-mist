import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/md-BRN4tTgV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function inlineFmt(text) {
	return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, i) => {
		if (part.startsWith("**") && part.endsWith("**")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
			className: "font-medium text-fg",
			children: part.slice(2, -2)
		}, i);
		if (part.startsWith("`") && part.endsWith("`")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
			className: "rounded-sm bg-elevated px-1 py-0.5 font-mono text-[0.85em] text-fg",
			children: part.slice(1, -1)
		}, i);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: part }, i);
	});
}
function Markdown({ source, className }) {
	const lines = source.replace(/\r\n/g, "\n").split("\n");
	const out = [];
	let i = 0;
	let key = 0;
	while (i < lines.length) {
		const line = lines[i] ?? "";
		if (line.startsWith("```")) {
			const buf = [];
			i += 1;
			while (i < lines.length && !(lines[i] ?? "").startsWith("```")) {
				buf.push(lines[i] ?? "");
				i += 1;
			}
			i += 1;
			out.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "my-3 overflow-x-auto rounded-xl bg-elevated p-4 font-mono text-[13px] leading-relaxed text-fg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: buf.join("\n") })
			}, key++));
			continue;
		}
		if (line.startsWith("# ")) {
			out.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-8 mb-3 font-display text-2xl tracking-display text-fg",
				children: inlineFmt(line.slice(2))
			}, key++));
			i += 1;
			continue;
		}
		if (line.startsWith("## ")) {
			out.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-6 mb-2 font-sans text-sm font-medium tracking-wide text-muted uppercase",
				children: inlineFmt(line.slice(3))
			}, key++));
			i += 1;
			continue;
		}
		if (line.startsWith("### ")) {
			out.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "mt-4 mb-1 text-[15px] font-medium text-fg",
				children: inlineFmt(line.slice(4))
			}, key++));
			i += 1;
			continue;
		}
		if (line.trim() === "---") {
			out.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "my-6 border-line" }, key++));
			i += 1;
			continue;
		}
		if (/^\s*[-*]\s+/.test(line)) {
			const items = [];
			while (i < lines.length && /^\s*[-*]\s+/.test(lines[i] ?? "")) {
				items.push((lines[i] ?? "").replace(/^\s*[-*]\s+/, ""));
				i += 1;
			}
			out.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "my-3 space-y-1.5 pl-0",
				children: items.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3 text-[15px] leading-relaxed text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-[0.6em] size-1 shrink-0 rounded-full bg-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: inlineFmt(item) })]
				}, idx))
			}, key++));
			continue;
		}
		if (/^\s*\d+\.\s+/.test(line)) {
			const items = [];
			while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i] ?? "")) {
				items.push((lines[i] ?? "").replace(/^\s*\d+\.\s+/, ""));
				i += 1;
			}
			out.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "my-3 list-decimal space-y-1.5 pl-5 text-[15px] leading-relaxed text-muted",
				children: items.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: inlineFmt(item) }, idx))
			}, key++));
			continue;
		}
		if (line.trim() === "") {
			i += 1;
			continue;
		}
		const buf = [line];
		i += 1;
		while (i < lines.length && (lines[i] ?? "").trim() !== "" && !/^(#{1,3} |```|---|\s*[-*]\s+|\s*\d+\.\s+)/.test(lines[i] ?? "")) {
			buf.push(lines[i] ?? "");
			i += 1;
		}
		out.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "my-2.5 text-[15px] leading-relaxed text-muted",
			children: inlineFmt(buf.join(" "))
		}, key++));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className,
		children: out
	});
}
//#endregion
export { Markdown as t };
