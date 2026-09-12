// EN content — About section (4 pages)
export const pages = [
  {
    path: 'about/profile.md',
    title: 'Profile & Mission',
    description: 'Reza Bazdar (Godde3s) — creative full-stack software engineer from Iran. Web, apps, networks, industrial automation and AI infrastructure, built end-to-end.',
    blocks: [
      { t: 'p', x: 'I am **Reza Bazdar** — most people online know me as **Godde3s** or **Usf**. I am a creative, all-round software engineer from Iran, and I build things end-to-end: websites, applications, APIs, network infrastructure, industrial automation and AI systems. If it runs on a computer — or on a PLC next to a production line — I can build it, and I probably have.' },
      { t: 'p', x: 'My story is not the classic computer-science-to-big-tech pipeline. It is the story of someone who refused to accept that any system is a black box. Proxy panels, API bridges, port scanners, e-commerce sites, ladder logic — I took all of them apart, understood them, and rebuilt them better. That curiosity became a career, and the career became a toolbox that covers the entire stack.' },
      { t: 'h2', x: 'What I actually do' },
      { t: 'p', x: 'On most days you will find me doing one of four things: designing and shipping full-stack web products, building networking and anti-censorship infrastructure, wiring coding agents together so they ship production software, or programming industrial controllers. The common thread is ownership — I take problems from a vague idea to something real people depend on, and I stay responsible for the result.' },
      { t: 'table', x: [
        ['Area', 'What that means in practice'],
        ['Full-Stack Web & Apps', 'React, Vue, Next.js on the front; FastAPI, Gin, Laravel and .NET behind; databases modeled, migrated and tuned.'],
        ['Networking & Proxies', 'VLESS tunnels, subscription panels, edge deployments across Cloudflare, HF Spaces, Railway, Render, Fly.io and Koyeb.'],
        ['AI & Agentic Coding', 'OpenAI/Anthropic-compatible bridges, model routers, and daily agent-driven development with OpenCode, Codex, Claude Code and my own Hermes stack.'],
        ['Industrial Automation', 'PLC programming in Ladder and Structured Text (IEC 61131-3), HMI design and SCADA logic.']
      ] },
      { t: 'h2', x: 'Why "creative" is not a decoration' },
      { t: 'p', x: 'Anyone can follow a tutorial. The real work starts when the tutorial ends — when the API has no SDK, the network blocks half the internet, the hardware speaks a protocol nobody documented, and the deadline is yesterday. That is where creativity stops being a personality trait and becomes an engineering discipline: combining tools that were never meant to work together, inventing a fallback when the primary path dies, and shipping anyway.' },
      { t: 'tip', title: 'The mission', x: 'Build software that is genuinely useful, honest about what it does, and free to inspect. Everything I ship is public on [GitHub](https://github.com/Godde3s) — you can read every line of it.' },
      { t: 'h2', x: 'Numbers that describe me' },
      { t: 'list', x: [
        '**9+ programming languages** used in production: Python, JavaScript/TypeScript, Go, PHP, C#, C/C++, SQL, Ladder, Structured Text.',
        '**30+ public repositories** — API bridges, model routers, proxy panels, security tools and this very portfolio.',
        '**2 languages** this site speaks: English and Español — with clean i18n wiring ready for more.',
        '**1 rule**: every project must run, not just compile.'
      ] },
      { t: 'p', x: 'If any of that resonates — an idea, a broken system, an impossible deadline — my inbox is open. The fastest ways to reach me are Telegram and the contact details at the bottom of every page.' }
    ]
  },
  {
    path: 'about/how-i-work.md',
    title: 'The Agentic Method',
    description: 'How Reza Bazdar ships production software with OpenCode, Codex, Claude Code and the Hermes agent — brief, generate, review, deploy.',
    blocks: [
      { t: 'p', x: 'I practice **agentic coding** as a daily discipline, not a demo trick. My daily drivers are **OpenCode**, **OpenAI Codex** and **Claude Code**, orchestrated by **Hermes Agent** — my own self-hosted agent infrastructure. Together they behave like a small engineering team that never sleeps, and I am its tech lead.' },
      { t: 'p', x: 'This is not "AI writes everything while I watch". Delegating to agents is a skill with the same seriousness as writing code by hand: you learn to write specs instead of functions, to design review checkpoints instead of debug sessions, and to audit diffs the way a senior engineer reviews a junior — respectfully, but relentlessly.' },
      { t: 'h2', x: 'The loop that ships features' },
      { t: 'olist', x: [
        '**Brief the agents.** I turn an idea into a precise, testable specification: scope, edge cases, acceptance criteria. A good brief is 80% of the result.',
        '**Generate and iterate.** Agents implement in parallel — one refactors, another writes tests, a third prepares deployment. I steer, unblock and re-scope in real time.',
        '**Human review.** I audit every diff myself: security, architecture, edge cases, performance. Agent output is a proposal, never a promise.',
        '**Deploy and monitor.** Ship to the edge, watch logs and metrics, and feed every lesson back into the next brief.'
      ] },
      { t: 'figure', src: '/assets/img/agentic-loop.svg', alt: 'The four-step agentic loop: brief, generate, review, deploy', caption: 'The loop I run every day — with humans exactly where judgment matters.' },
      { t: 'h2', x: 'Why this is a real engineering skill' },
      { t: 'p', x: 'Directing agents exposes weaknesses that typing speed never will. If your architecture is vague, agents amplify the vagueness. If your tests are weak, agents pass them confidently. If your spec is ambiguous, you get ten creative interpretations you did not ask for. Working this way forces me to think more clearly than traditional development ever did — the agents are mirrors, and they are unforgiving.' },
      { t: 'quote', x: 'The skill of the next decade is not typing faster — it is directing intelligent agents with the precision of a senior engineer and the taste of a product designer.' },
      { t: 'p', x: 'Every project on this site — from the [NetPilot](/en/projects/netpilot/) network toolkit to this very portfolio — was designed, reviewed and shipped through that loop. The [Agentic Coding](/en/agentic/overview/) section breaks down each tool I use.' }
    ]
  },
  {
    path: 'about/networking.md',
    title: 'Networks & Freedom',
    description: 'Proxies, VLESS tunnels, subscription panels and edge deployments — Reza Bazdar builds infrastructure for an open internet.',
    blocks: [
      { t: 'p', x: 'I grew up behind filters. Where I live, parts of the internet are routinely unreachable — not because servers are down, but because someone decided they should be. That reality turned networking from a hobby into a survival skill, and the survival skill into a specialty: building infrastructure that keeps people connected.' },
      { t: 'p', x: 'My work in this area is practical rather than theoretical. I design and operate **VLESS tunnels and proxy panels**, manage multi-user subscription systems with Clash, v2ray and sing-box compatibility, and deploy edge infrastructure across Cloudflare Workers, Hugging Face Spaces, Railway, Render, Fly.io and Koyeb. Each of my panel projects — [Usf Panel](/en/projects/usf-panel/), usf-edge, edge-pp, Render-usf — attacks the same problem from a different platform, because blocking is an arms race and single points of failure get people cut off.' },
      { t: 'h2', x: 'What I actually build' },
      { t: 'list', x: [
        '**Tunnel panels** — multi-user VLESS management with subscription links, traffic stats and one-command deploys.',
        '**Edge deployments** — proxy state on Cloudflare KV across 300+ PoPs, zero cold starts, no servers to seize.',
        '**Diagnostics** — pure-Go tooling like [NetPilot](/en/projects/netpilot/) for port scanning, TCP ping and HTTP health checks.',
        '**Resilience patterns** — multi-platform redundancy so one takedown never equals zero access.'
      ] },
      { t: 'info', title: 'Why this matters', x: 'In an environment where connectivity itself is contested, a proxy panel is not a gadget — it is a lifeline for work, education and free information. I treat it with the seriousness of critical infrastructure.' },
      { t: 'h2', x: 'The mindset' },
      { t: 'p', x: 'Networking taught me how systems fail: gracefully, partially, and always at the worst moment. It taught me to read packet captures the way other people read error messages, to distrust "temporarily blocked", and to always have a second path, a third fallback and a fourth idea. Those instincts bleed into everything else I build — redundant APIs, failover model routing, and panels that assume the network is hostile.' },
      { t: 'p', x: 'If your project needs to survive a hostile network — or you just want your stack to stop falling over when a region goes dark — that is exactly the kind of problem I enjoy most.' }
    ]
  },
  {
    path: 'about/principles.md',
    title: 'Engineering Principles',
    description: 'The working principles behind every project Reza Bazdar ships: run it, own it, secure it, document it, improve it.',
    blocks: [
      { t: 'p', x: 'Principles are cheap to write and expensive to keep. These are the ones I actually keep — the same ones I audit agent-written code against before anything ships.' },
      { t: 'h2', x: '1. It must run' },
      { t: 'p', x: 'A project that compiles but does not run is a sketch, not software. Every repository I publish comes with a working entry point, real configuration and a deployment path. [GLM Free API](/en/projects/glm-free-api/) is one Go file that serves real traffic; [NetPilot](/en/projects/netpilot/) is a single binary you can execute in seconds. "Works on my machine" is where I start, not where I stop.' },
      { t: 'h2', x: '2. Own the whole stack' },
      { t: 'p', x: 'When something breaks at 2 AM, the person who understands only their own layer points at everyone else. I deliberately keep skills sharp across the whole pipeline — front, back, database, network, deployment — so the buck stops with someone who can actually fix it. Full-stack is not a buzzword here; it is an incident-response strategy.' },
      { t: 'h2', x: '3. Security is a habit, not a feature' },
      { t: 'p', x: 'I write offensive tooling — scanners, analyzers, exploit research — so that defensive thinking is never theoretical. Every panel ships with token + 2FA admin access, every API bridge with account isolation, every deployment with the minimum surface I can manage. Agents make this even more important: machine-written code must be audited by a human who knows what attacks look like.' },
      { t: 'h2', x: '4. Write it down' },
      { t: 'p', x: 'A README is a promise. I document setup, architecture decisions and limitations honestly — including the things that do not work yet. The [Persian guides](https://github.com/Godde3s/fa-guides) I publish exist because good documentation in your own language can be the difference between learning and giving up.' },
      { t: 'h2', x: '5. Improve other people\'s work, with credit' },
      { t: 'p', x: 'Standing on giants is how software evolves. When I fork or extend someone\'s project, I study it first, improve it meaningfully, and credit loudly. That is how I treat the open-source I build on, and how I expect my own work to be treated.' },
      { t: 'tip', title: 'The meta-principle', x: 'Ship small, ship honest, ship again. Momentum beats perfection — but honesty about the current state is never negotiable.' }
    ]
  }
]
