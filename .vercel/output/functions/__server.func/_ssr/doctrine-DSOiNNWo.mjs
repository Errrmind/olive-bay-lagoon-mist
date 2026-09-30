//#region node_modules/.nitro/vite/services/ssr/assets/doctrine-DSOiNNWo.js
var gates = [
	{
		n: 1,
		name: "Category",
		question: "Chatbot feature, or a new product object?",
		verdict: "Cleared",
		note: "Teammates, not chat. Build is a harness. Bot is a coworker with a desk.",
		when: "Decision layer · 2026"
	},
	{
		n: 2,
		name: "Platform",
		question: "Runs on the user’s machine, or a hosted computer?",
		verdict: "Cleared",
		note: "Build: your repo. Bot: one persistent cloud computer per account.",
		when: "Split the two products"
	},
	{
		n: 3,
		name: "Model",
		question: "Is Grok 4.x good enough at tool use to ship without humiliation?",
		verdict: "Cleared",
		note: "Grok 4.5 default in Build. Grok 4.6 jointly trained with Cursor. Bot has no model picker.",
		when: "4.5 / 4.6"
	},
	{
		n: 4,
		name: "Trust",
		question: "Approvals, takeover, secrets, privacy — or paste the password in chat?",
		verdict: "Cleared",
		note: "Take over the computer. Auto-review on desktop. No VPN client on the box.",
		when: "Design essay + docs"
	},
	{
		n: 5,
		name: "Distribution",
		question: "Which subscriptions include it, and does linking SuperGrok mutate Cursor?",
		verdict: "Cleared",
		note: "Link is a usage grant, permanent. Bot meters on Cursor. Business seats do not link.",
		when: "Late August 2026 drift"
	},
	{
		n: 6,
		name: "Docs",
		question: "Can a stranger install it without a staff member sitting next to them?",
		verdict: "Cleared",
		note: "docs.x.ai/grok-bot, cursor.com/help, CLI install.sh. First 300 were still hands-on.",
		when: "Launch week"
	},
	{
		n: 7,
		name: "Launch",
		question: "Internal dogfood → limited plans → every paid plan → Enterprise.",
		verdict: "Cleared",
		note: "Build: May–August 2026. Bot: 11 August public, 3 September Enterprise.",
		when: "11 Aug / 3 Sep 2026"
	}
];
var timeline = [
	{
		date: "Mar 2023",
		event: "xAI founded. Research cofounders from DeepMind, Google, OpenAI, Microsoft."
	},
	{
		date: "2023–25",
		event: "Grok models, API, apps, Colossus. Chat as the first surface."
	},
	{
		date: "27 Oct 2025",
		event: "Grokipedia 0.1. Truth-layer bet. Not how Build or Bot were specified."
	},
	{
		date: "Feb 2026",
		event: "SpaceX absorbs xAI. Cofounder exodus. Musk: it was not built right the first time."
	},
	{
		date: "Apr 2026",
		event: "Michael Nicolls president. Cursor option on the table."
	},
	{
		date: "May 2026",
		event: "Grok Build CLI early beta for SuperGrok and X Premium+."
	},
	{
		date: "Jun 2026",
		event: "SpaceX signs ~$60B stock deal for Anysphere (Cursor). /goal ships in Build."
	},
	{
		date: "Jul 2026",
		event: "xai-org/grok-build published. Mostly Rust. Harness is inspectable."
	},
	{
		date: "Mid-Aug 2026",
		event: "Cursor deal closes. SpaceXAI brand on new work."
	},
	{
		date: "11 Aug 2026",
		event: "Grok Bot public beta. Code name Sand. Isolated seven-week build."
	},
	{
		date: "3 Sep 2026",
		event: "Bot Enterprise. Design essay: persistent agents, not disposable chats."
	}
];
var instincts = [
	{
		instinct: "This is Grok chat with extra buttons",
		lesson: "Bot is teammates plus a computer. Build is a harness in your repo. Different products."
	},
	{
		instinct: "Each Bot is a separate secure machine",
		lesson: "One computer per account. Screens are not isolation."
	},
	{
		instinct: "I can paste the password in the thread",
		lesson: "Take over the computer. Sessions persist after."
	},
	{
		instinct: "Closing the laptop stops the agent",
		lesson: "Cloud work continues. The device is a remote."
	},
	{
		instinct: "Heavy makes a smarter Bot",
		lesson: "Same models. Bigger weekly grant."
	},
	{
		instinct: "I bought Grok Business so I have Bot",
		lesson: "Business is grok.com seats. Bot links individual SuperGrok or Cursor Teams."
	},
	{
		instinct: "Reset is the first fix",
		lesson: "Retry → restart app → Recover → Update → Reset last."
	},
	{
		instinct: "Two subscriptions stack",
		lesson: "Bot takes the larger grant. Link is permanent."
	},
	{
		instinct: "Skills and memory are the same",
		lesson: "Skills and tools are account-wide. Memory and routines belong to one Bot."
	},
	{
		instinct: "Fine-tune the mind by paying more",
		lesson: "Compound files, skills, routines, corrections. Not new weights."
	}
];
var recovery = [
	{
		id: "retry",
		name: "Retry",
		pain: "None",
		copy: "The task failed. Run it again. Daemons die when the computer sleeps — that is expected, not a wipe."
	},
	{
		id: "restart",
		name: "Restart app",
		pain: "Local",
		copy: "The desktop or mobile client is confused. The hosted computer keeps its disk. App updates are separate from image updates."
	},
	{
		id: "recover",
		name: "Recover computer",
		pain: "Low",
		copy: "The box is unreachable. Bring the same disk back. Chat history is off the box, so this does not erase conversations."
	},
	{
		id: "update",
		name: "Update",
		pain: "Medium",
		copy: "Rebuild the Agent Computer image. Durable /workspace, cookies, and supported logins persist. Team Setup is how tools return."
	},
	{
		id: "reset",
		name: "Reset",
		pain: "High",
		copy: "Return to snapshot. Last, not first. You are betting on durable disk. Do not make this the reflex."
	}
];
var objects = [
	{
		name: "Bot",
		where: "Bot-level",
		copy: "Name, avatar, title, memory, presence. One job. Not a chat tab."
	},
	{
		name: "Chat",
		where: "Disposable",
		copy: "A thread with a Bot. Chats die. The Bot does not."
	},
	{
		name: "Computer",
		where: "Account-level",
		copy: "One persistent cloud desktop per user. Shared cookies, files, shell."
	},
	{
		name: "Routine",
		where: "Bot-level",
		copy: "Starts work without a prompt. The coworker who already sat down."
	},
	{
		name: "Skill",
		where: "Account-level",
		copy: "Tools the whole roster can use. Memory stays with one Bot."
	}
];
var imagination = "The movie version: a clean chain of command, one meeting with Elon, every role walking in with a stamped requirements packet, and Grok Build plus Grok Bot leaving that room as two finished products.";
var reality = "Reality is messier, and it is the layer that should be treated as true unless a source is named. SpaceX absorbed xAI in February 2026, then bought Cursor’s parent Anysphere. Grok Bot — internally Sand — was the first joint SpaceXAI–Cursor product: four weeks to an internal working product, three more to public launch. Grok Build is a separate surface: a Rust CLI/TUI, later GitHub, later a describe-and-watch canvas. They share a model family and a CEO. They do not share a codebase or a billing meter.";
var teachingDocs = {
	title: "What official docs were trying to teach",
	lede: "Read as a curriculum, not a feature list. The docs argue with the user’s first instinct.",
	after: [
		"Install the right surface (CLI vs Bot app).",
		"Sign in with the account that should own the meter.",
		"Complete one task that does not need a login.",
		"Complete one task that does need takeover.",
		"Save the stable path as a skill and optionally a routine.",
		"Find usage and stop overflow.",
		"Recover a sick computer without wiping the week."
	],
	developers: [
		"Plan, then approve, then diff.",
		"Put conventions in AGENTS.md.",
		"Plugins are pinned commits, not random curl.",
		"/goal is for work that should not need you every thirty seconds.",
		"The harness is inspectable; the weights are not in that repo.",
		"You can point the same harness at local inference."
	],
	admins: [
		"Enable is org-wide and Enterprise-only.",
		"Computers can be recreated; durable disk is the thing you are betting on.",
		"Network policy is egress, not drop this VM on our LAN.",
		"Team Setup is how tools come back after an image rebuild.",
		"There is still no Bot-only spend cap — use the account cap."
	],
	tone: "Operational, not mystical. The design essay is the one poetic document. Everything else is wait for active work to finish before recovery. They were teaching people to treat agents like coworkers who have a desk, not like a search box."
};
var teachingWiki = {
	title: "What Grokipedia and the encyclopedias were trying to teach",
	grokipedia: "Musk framed Grokipedia as a massive improvement on Wikipedia. Version 0.1 launched 27 October 2025 with on the order of 885,000 AI-written articles. The stated aim: do not treat Wikipedia as default ground truth; generate an AI-native encyclopedia at millions-of-articles scale. The later public record taught something else: pages stopped updating, critiques of bias, and a product that still leaned on Wikipedia as source material. Generating 885,000 pages is a launch. Keeping them alive is an institution.",
	relation: "If you only read Grokipedia, you would think the project was rewrite the world’s articles. If you only read official Bot/Build docs, you would think the project was give people coworkers and a coding harness. Reality in 2026 is the second sentence wearing the first sentence’s brand."
};
//#endregion
export { reality as a, teachingWiki as c, objects as i, timeline as l, imagination as n, recovery as o, instincts as r, teachingDocs as s, gates as t };
