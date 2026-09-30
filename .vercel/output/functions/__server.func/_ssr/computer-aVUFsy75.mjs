import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { R as meta, S as WIKI_SIZE, d as LAUNCH_STAYS, k as agents, p as useOs, u as usePins } from "./router-B8OqIWlc.mjs";
import { t as PageHeader } from "./page-header-GuyGRSk_.mjs";
import { o as recovery } from "./doctrine-DSOiNNWo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/computer-aVUFsy75.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ComputerPage() {
	const stay = useOs((s) => s.launchStay);
	const setStay = useOs((s) => s.setLaunchStay);
	const artifacts = useOs((s) => s.artifacts.length);
	const chats = useOs((s) => s.chats.length);
	const recycle = useOs((s) => s.recycle);
	const shell = useOs((s) => s.shell);
	const skills = useOs((s) => s.installedSkills.length);
	const notes = usePins((s) => s.notes);
	const setNotes = usePins((s) => s.setNotes);
	const [step, setStep] = (0, import_react.useState)(recovery[0].id);
	const [ready, setReady] = (0, import_react.useState)(false);
	const active = recovery.find((r) => r.id === step) ?? recovery[0];
	(0, import_react.useEffect)(() => {
		setReady(true);
	}, []);
	const drives = [
		{
			to: "/wiki",
			letter: "C:",
			name: "Grokipedia",
			detail: `${WIKI_SIZE.toLocaleString("en-GB")} pages`
		},
		{
			to: "/bots",
			letter: "B:",
			name: "Bots",
			detail: `${agents.length} coworkers`
		},
		{
			to: "/institution",
			letter: "I:",
			name: "Institution",
			detail: `${artifacts} artifacts`
		},
		{
			to: "/skills",
			letter: "S:",
			name: "Skills",
			detail: `${skills} installed`
		},
		{
			to: "/routines",
			letter: "R:",
			name: "Routines",
			detail: "Sit down without a prompt"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sand-enter",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: "Account-level",
				title: "This Computer",
				lede: "One persistent cloud desktop per user. Shared cookies, files, shell. Screens are not a security boundary. Launch stay is editable here."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-4 rounded-2xl bg-surface p-5 sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-mono text-xs tracking-widest text-subtle uppercase",
						children: "Launch stay"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Print a date only after the stay is named. Internal working product is the default God Model stay."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid gap-2 sm:grid-cols-2",
						children: LAUNCH_STAYS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setStay(s.id),
							className: `rounded-2xl p-4 text-left ${stay === s.id ? "bg-accent text-accent-fg" : "bg-elevated text-fg hover:shadow-[var(--shadow-border-hover)]"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: s.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `mt-1 text-sm leading-relaxed ${stay === s.id ? "text-accent-fg/80" : "text-muted"}`,
								children: s.copy
							})]
						}, s.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 font-display text-xl tracking-display",
					children: "This PC"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-2 sm:grid-cols-2",
					children: drives.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: d.to,
						className: "flex items-center gap-4 rounded-2xl bg-surface px-4 py-4 no-underline hover:shadow-[var(--shadow-border-hover)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-11 items-center justify-center rounded-xl bg-elevated font-mono text-sm text-fg",
							children: d.letter
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm font-medium text-fg",
							children: d.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-mono text-xs text-subtle",
							children: d.detail
						})] })]
					}) }, d.letter))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-4 grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Disk pages",
						value: WIKI_SIZE.toLocaleString("en-GB")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Bots on this box",
						value: String(agents.length)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Chats (disposable)",
						value: String(chats)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Artifacts",
						value: String(artifacts)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Archive sessions",
						value: String(meta.sessionCount)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Meter",
						value: "None local"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-4 rounded-2xl bg-surface p-5 sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl tracking-display",
						children: "Shell"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Local tick transcript. Agents file without a model call."
					}),
					shell.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-mono text-xs text-subtle",
						children: "Waiting on first sit-down."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 max-h-48 space-y-1 overflow-y-auto font-mono text-xs text-muted",
						children: shell.slice(0, 24).map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: l.line }, `${l.at}-${i}`))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-4 rounded-2xl bg-surface p-5 sm:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl tracking-display",
					children: "Notes on disk"
				}), ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: notes,
					onChange: (e) => setNotes(e.target.value),
					placeholder: "Shared cookies, files, shell. This box keeps the note.",
					className: "mt-3 min-h-28 w-full rounded-xl bg-elevated p-3 text-sm text-fg placeholder:text-subtle"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 min-h-28 rounded-xl bg-elevated p-3 text-sm text-subtle",
					children: "Notes load with this computer."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-4 rounded-2xl bg-surface p-5 sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl tracking-display",
						children: "Recycle"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Discarded chats. The Bot was not deleted."
					}),
					recycle.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-subtle",
						children: "Empty."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-1",
						children: recycle.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-sm text-muted",
							children: c.title
						}, c.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl bg-surface p-5 sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl tracking-display",
						children: "Recovery order"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: recovery.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setStep(r.id),
							className: `h-10 rounded-xl px-3 text-sm ${step === r.id ? "bg-accent text-accent-fg" : "bg-elevated text-muted hover:text-fg"}`,
							children: r.name
						}, r.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm font-medium text-fg",
						children: [active.pain, " pain"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-relaxed text-muted",
						children: active.copy
					})
				]
			})
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-surface px-4 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-xs text-subtle",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-display text-2xl tracking-display tabular-nums",
			children: value
		})]
	});
}
//#endregion
export { ComputerPage as component };
