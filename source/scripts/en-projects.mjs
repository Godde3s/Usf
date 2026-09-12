// EN content — Projects section (6 pages)
export const pages = [
  {
    path: 'projects/netpilot.md',
    title: 'NetPilot — Go Network Toolkit',
    description: 'A single-binary network toolkit in pure Go: port scanner, TCP ping, HTTP health checks, DNS lookups. Zero dependencies, cross-platform.',
    blocks: [
      { t: 'p', x: '**[NetPilot](https://github.com/Godde3s/netpilot)** is my answer to a simple annoyance: checking network reachability should not require installing five different tools or memorizing `nmap` flags. NetPilot compiles to **one static binary in pure Go** — no runtime, no dependencies, no scripts — and answers the questions I ask networks every day.' },
      { t: 'h2', x: 'What it does' },
      { t: 'table', x: [
        ['Command', 'Job'],
        ['`scan`', 'Fast TCP port scanning with worker pools and timeouts.'],
        ['`tping`', 'TCP-level ping that works where ICMP is blocked.'],
        ['`http`', 'HTTP health checks with status, latency and TLS info.'],
        ['`dns`', 'A/AAAA/MX/TXT lookups against any resolver.'],
        ['`info`', 'Interface and routing summary for quick triage.']
      ] },
      { t: 'h2', x: 'Why pure Go' },
      { t: 'p', x: 'Because deployment is the whole point. A network tool that needs Python, Node or a dozen system libraries fails exactly where you need it most — a minimal VPS, a container in a broken cluster, a friend\'s Windows laptop at 2 AM. `go build` produces one binary per platform; `CGO_ENABLED=0` keeps it portable. The concurrency model (goroutines + channels) makes the scanner fast without thread headaches.' },
      { t: 'code', lang: 'bash', x: `# scan the well-known range of a host\n./netpilot scan example.com --ports 1-1024 --workers 200\n\n# tcp-ping a flaky service\./netpilot tping db.internal:5432 --count 10\n\n# health-check with JSON output for scripts\n./netpilot http https://api.example.com/health --json` },
      { t: 'h2', x: 'What I learned building it' },
      { t: 'p', x: 'The interesting engineering was not the scanning — it was the edge cases: rate-limiting yourself so you do not DoS your own gateway, handling half-open connections, honoring timeouts that actually mean something, and making JSON output stable enough to script against. It also became my reference project for learning how far agent teams can take a well-specified CLI.' },
      { t: 'tip', title: 'Try it', x: 'Clone, `go build`, done: [github.com/Godde3s/netpilot](https://github.com/Godde3s/netpilot) — MIT licensed.' }
    ]
  },
  {
    path: 'projects/omnirouter.md',
    title: 'OmniRouter — One Endpoint for Every Model',
    description: 'A Go router that puts GLM, Qwen, DeepSeek and custom APIs behind one OpenAI-compatible endpoint with load balancing and failover.',
    blocks: [
      { t: 'p', x: '**[OmniRouter](https://github.com/Godde3s/omnirouter)** exists because model churn is real. One week GLM is the best value, the next week Qwen wins on context, and DeepSeek is always there for code. Rewiring your app every time the leaderboard moves is not engineering — so I built a router that makes the leaderboard a config file.' },
      { t: 'h2', x: 'The idea' },
      { t: 'p', x: 'Your application speaks **one protocol** — the OpenAI chat completions API, which has become the lingua franca of LLMs. OmniRouter speaks every upstream dialect on the other side: GLM, Qwen, DeepSeek, and any custom HTTP API you register. Between the two it provides round-robin load balancing, automatic failover when a provider degrades, per-route quotas and unified streaming.' },
      { t: 'code', lang: 'yaml', x: `upstreams:\n  - name: glm\n    base_url: https://api.zhipuai.example/v1\n    weight: 3\n  - name: qwen\n    base_url: https://dashscope.example/compatible-mode/v1\n    weight: 2\n  - name: deepseek\n    base_url: https://api.deepseek.example/v1\n    weight: 1\nstrategy: round-robin\nfailover: auto` },
      { t: 'h2', x: 'Engineering details worth stealing' },
      { t: 'list', x: [
        '**Health tracking per upstream** — a provider that starts 500-ing gets benched automatically and re-probed in the background.',
        '**Streaming passthrough** — SSE chunks are relayed as they arrive, so token-by-token latency stays honest.',
        '**Quotas and weights** — cheap providers take more traffic; premium ones are reserved for hard prompts.',
        '**Single Go binary** — same philosophy as [NetPilot](/en/projects/netpilot/): the router must never be the thing that is down.'
      ] },
      { t: 'p', x: 'OmniRouter also anchors my agentic workflow: OpenCode and other agents route through it, which means switching the brain behind my whole toolchain is a one-line config change. It pairs naturally with [Hermes Stack](/en/projects/hermes-stack/), which hosts it for free.' }
    ]
  },
  {
    path: 'projects/glm-free-api.md',
    title: 'GLM Free API — Single File Bridge',
    description: 'A complete OpenAI- and Anthropic-compatible API for GLM in a single Go file. No browser, no headless Chrome, account pool included.',
    blocks: [
      { t: 'p', x: '**[GLM Free API](https://github.com/Godde3s/glm-free-api)** is my most-starred repository, and the premise is almost rude in its simplicity: a complete API bridge to GLM in **one Go file**, with **zero browser automation**. No headless Chrome eating RAM, no puppeteer flakiness — just HTTP done properly.' },
      { t: 'h2', x: 'The problem it solves' },
      { t: 'p', x: 'GLM\'s web chat is free but locked to a browser. Existing bridges wrapped that browser in automation, which meant memory blowups, captcha churn and crashes under load. I went the opposite way: reverse-engineered the web session flow, then implemented the protocol natively in Go. The result starts in milliseconds and scales to concurrent requests without a single browser process.' },
      { t: 'h2', x: 'Features' },
      { t: 'list', x: [
        '**OpenAI-compatible** `/v1/chat/completions` — drop-in for any existing client.',
        '**Anthropic-compatible** `/v1/messages` — so Claude-flavored tooling works too.',
        '**Account pool** — rotate multiple sessions, mark dead ones, stay under rate limits.',
        '**Streaming** — real SSE, not fake chunked responses.',
        '**One file** — `go build`, run, done. Read the whole implementation in one sitting.'
      ] },
      { t: 'quote', x: 'One file is not a stunt. It is a statement that infrastructure should be readable — you can audit every line in ten minutes.' },
      { t: 'p', x: 'The same architecture spawned siblings: [GhostBrain](/en/projects/ghost-brain/) (Gemini), qwen-free-api and deepseek-free-api. Together with [OmniRouter](/en/projects/omnirouter/), they form a complete free-tier AI infrastructure that costs nothing to run.' }
    ]
  },
  {
    path: 'projects/ghost-brain.md',
    title: 'GhostBrain — Gemini to API',
    description: 'Turn a free Gemini web account into a real OpenAI + Anthropic-compatible API: secure session binding, multi-account pools, SSE streaming.',
    blocks: [
      { t: 'p', x: '**[GhostBrain](https://github.com/Godde3s/GhostBrain)** resurrects a free Gemini web account as real infrastructure. The web app gives you a powerful model behind a chat page; GhostBrain lifts it out and serves it as a proper API — with the polish that implies: secure session binding, multi-account pools, SSE streaming and persistence.' },
      { t: 'h2', x: 'Design decisions' },
      { t: 'p', x: 'The fragile part of any web-account bridge is the session. GhostBrain treats it as a first-class citizen: cookies are stored encrypted, sessions are health-checked and rotated before they die instead of after, and accounts are pooled so no single identity absorbs all the traffic. When a session does die, the pool quietly marks it and keeps serving — your client never sees a 401.' },
      { t: 'table', x: [
        ['Concern', 'Approach'],
        ['Session security', 'Encrypted cookie vault, no plaintext secrets on disk.'],
        ['Reliability', 'Background health probes + automatic rotation.'],
        ['Compatibility', 'OpenAI `/v1/chat/completions` and Anthropic `/v1/messages`.'],
        ['Streaming', 'Native SSE relay, token-for-token.'],
        ['Language', 'Python — async I/O end to end.']
      ] },
      { t: 'h2', x: 'Where it fits my stack' },
      { t: 'p', x: 'GhostBrain is the Python sibling of [GLM Free API](/en/projects/glm-free-api/), and both are upstreams my [OmniRouter](/en/projects/omnirouter/) happily load-balances. Deployed together on free tiers — Hugging Face Spaces, Railway, Render — they give me a multi-model API fleet whose monthly bill is exactly zero. That combination is what my [Hermes Stack](/en/projects/hermes-stack/) ships as a one-click package.' },
      { t: 'tip', title: 'Responsible use', x: 'Free-tier bridges live on someone else\'s generosity. GhostBrain rate-limits itself and rotates accounts precisely so it stays polite — use it like a guest, not a looter.' }
    ]
  },
  {
    path: 'projects/hermes-stack.md',
    title: 'Hermes Stack — Self-hosted AI Brain',
    description: 'Hermes Agent + 9Router + OmniRouter packed into one free Hugging Face Space — a self-hosted AI brain deployable in minutes.',
    blocks: [
      { t: 'p', x: '**[Hermes Stack](https://github.com/Godde3s/hermes-stack)** is the project that ties my whole AI infrastructure together. It packages **Hermes Agent**, **9Router** and **OmniRouter** into a single Hugging Face Space that deploys in minutes and costs nothing. One click, and you own a cloud-hosted AI brain: an agent runtime, a model router and a console to drive both.' },
      { t: 'h2', x: 'What is inside' },
      { t: 'table', x: [
        ['Component', 'Role'],
        ['Hermes Agent', 'The brain — plans tasks, calls tools, runs automations, remembers context.'],
        ['9Router', 'Multi-provider model routing for nine upstream families.'],
        ['OmniRouter', 'My Go router adding weights, quotas and failover on top.'],
        ['HF Space', 'Free hosting with zero cold-start pain for this class of workload.']
      ] },
      { t: 'h2', x: 'Why it matters' },
      { t: 'p', x: 'Most "AI assistant" setups are either a hosted SaaS you don\'t control or a local rig you can\'t reach from your phone. Hermes Stack is the third option: **self-hosted, cloud-reachable, and free**. I use it as the coordinator for my other agents — it holds API routes, serves as a webhook brain for automations, and gives every tool in my chain a stable, roammable endpoint.' },
      { t: 'olist', x: [
        'Fork the Space (or deploy from the repo with one command).',
        'Paste your upstream keys — or point it at free bridges like [GLM Free API](/en/projects/glm-free-api/).',
        'Talk to it from Telegram, curl, or any OpenAI-compatible client.'
      ] },
      { t: 'p', x: 'The [Agentic Coding](/en/agentic/hermes/) section covers how Hermes drives the rest of my toolchain day to day. This portfolio itself was coordinated through it — briefs, reviews and deploys all routed through a stack that costs less than a coffee. Which is to say: exactly nothing.' }
    ]
  },
  {
    path: 'projects/usf-panel.md',
    title: 'Usf Panel — VLESS Manager',
    description: 'Premium VLESS tunnel and subscription manager: multi-user, Clash/v2ray/sing-box sync, one-command deploys to HF, Railway, Render, Fly, Koyeb.',
    blocks: [
      { t: 'p', x: '**Usf Panel** is the flagship of my networking work: a premium **VLESS tunnel and subscription manager** built as a single-file FastAPI application. It manages multi-user access, generates subscription links that Clash, v2ray and sing-box consume natively, and deploys to five platforms with one command each.' },
      { t: 'h2', x: 'Why another panel' },
      { t: 'p', x: 'Existing panels are either enterprise-heavy (a full server farm to run one tunnel) or toy-grade (no user management, no stats, no resilience). Usf Panel takes the middle path seriously: one Python file you can read, a real admin panel with token + 2FA, per-user traffic accounting, and deploy targets matched to how censorship actually evolves — when one platform gets aggressive, you move in minutes, not days.' },
      { t: 'table', x: [
        ['Capability', 'Detail'],
        ['Protocols', 'VLESS over WS/TLS, Reality-ready configs.'],
        ['Subscriptions', 'Auto-generated links; Clash / v2ray / sing-box compatible.'],
        ['Users', 'Multi-user with quotas, expiry and traffic stats.'],
        ['Admin', 'Token + 2FA hardened panel, audit log.'],
        ['Deploy', 'Hugging Face · Railway · Render · Fly.io · Koyeb — one command each.']
      ] },
      { t: 'h2', x: 'The family' },
      { t: 'p', x: 'Usf Panel is not alone — it is the center of a family that covers every hosting philosophy: **usf-edge** runs the same idea entirely on Cloudflare Workers with KV state across 300+ PoPs; **edge-pp** extends edgetunnel with a full user-management panel; **Render-usf** targets Render with anti-blocking measures; **Usf-Pnl-pro** packages multi-platform deployment. The [networking section](/en/about/networking/) explains why redundancy across platforms is a design requirement, not an option.' },
      { t: 'warning', title: 'A note on responsibility', x: 'These tools exist to restore access to information, not to break into anything. They ship with hardening — not exploits — and I expect users to respect the laws of their own jurisdictions.' }
    ]
  }
]
