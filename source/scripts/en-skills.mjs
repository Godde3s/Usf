// EN content — Skills section (12 pages)
const mk = (path, title, description, blocks) => ({ path: `skills/${path}`, title, description, blocks })

export const pages = [
  mk('languages.md', 'Languages — Any Language the Job Needs',
    'Python, JavaScript/TypeScript, Go, PHP, C#, SQL, C/C++ and PLC languages — honest production readiness across nine languages.',
    [
      { t: 'p', x: 'I refuse the "one true language" religion. Languages are tools with shapes, and the job decides which shape fits. These percentages are honest self-assessments of production readiness — not course certificates.' },
      { t: 'table', x: [
        ['Language', 'Readiness', 'Where I use it'],
        ['Python', '99%', 'API bridges, agents, automation, scrapers — GhostBrain, Hermes, panels.'],
        ['JavaScript / TypeScript', '98%', 'Full-stack web, edge Workers, panels, this portfolio.'],
        ['PHP', '98%', 'Laravel services, classic deploys, quick client products.'],
        ['SQL', '100%', 'Schema design, tuning, reporting across Postgres/MySQL.'],
        ['Ladder (LD)', '96%', 'PLC logic on real production lines.'],
        ['Structured Text (ST)', '96%', 'IEC 61131-3 industrial control programs.'],
        ['Go', '94%', 'NetPilot, OmniRouter, glm-free-api — CLIs and services.'],
        ['C#', '93%', '.NET backends, desktop tools, WPF/MAUI.'],
        ['C / C++', '78%', 'HardwarePT, embedded experiments, performance cores.']
      ] },
      { t: 'p', x: 'The pattern behind the list: high-level languages for velocity, systems languages for control, and industrial languages because somebody has to make the physical world behave. New languages are a weekend problem, not a career decision — the [agentic workflow](/en/agentic/overview/) makes ramp-up even cheaper, since agents write idiomatic scaffolding in any ecosystem while I supply the judgment.' }
    ]),
  mk('web.md', 'Web Frontend — Interfaces That Feel Instant',
    'React, Vue, Next.js, Tailwind, state management and accessibility — building fast, modern web interfaces.',
    [
      { t: 'p', x: 'The frontend is where users judge everything they will never see. I build interfaces that load fast, degrade gracefully and feel immediate — because a beautiful backend behind a janky UI is a tree falling in an empty forest.' },
      { t: 'h2', x: 'The toolbox' },
      { t: 'table', x: [
        ['Concern', 'Tools'],
        ['Frameworks', 'React, Vue, Angular, Next.js, Nuxt'],
        ['Styling', 'Tailwind CSS, CSS architecture, design tokens, RTL'],
        ['State', 'Pinia, Zustand, Redux Toolkit, query caches'],
        ['Mobile & Desktop', 'React Native, Expo, Flutter, Ionic, Electron, Tauri'],
        ['Performance', 'Code splitting, image budgets, Core Web Vitals']
      ] },
      { t: 'p', x: 'This very site is a working demonstration: a cloned VitePress theme adapted to four locales with full RTL support for Persian and Arabic — typography, padding and icon direction all flip cleanly. My admin panels for [Usf Panel](/en/projects/usf-panel/) follow the same rules under far tighter constraints: single-file backends with polished, responsive frontends.' },
      { t: 'tip', title: 'RTL is a feature', x: 'Half my users read right-to-left. Treating RTL as an afterthought is shipping a broken product to them — so I design for it from the first commit.' }
    ]),
  mk('backend.md', 'Backend & APIs — Services Built to Stay Up',
    'FastAPI, Gin, Laravel, .NET, Express — designing and operating backend services and APIs that survive real traffic.',
    [
      { t: 'p', x: 'My backend philosophy is boring on purpose: clear contracts, explicit failure, and services that restart themselves without drama. The exciting part is what the services enable — free-tier AI infrastructure, proxy panels serving real users, bridges that turn web accounts into APIs.' },
      { t: 'h2', x: 'Stacks I ship with' },
      { t: 'table', x: [
        ['Stack', 'Sweet spot'],
        ['Python — FastAPI / Django', 'APIs, agents, async I/O bridges (GhostBrain, Hermes).'],
        ['Go — Gin / stdlib', 'Single-binary services and CLIs (NetPilot, OmniRouter).'],
        ['PHP — Laravel', 'Full products with auth, queues and admin panels.'],
        ['C# — ASP.NET', 'Enterprise-style services and desktop backends.'],
        ['Node — Express / Fastify', 'Edge Workers, real-time glue, rapid prototypes.']
      ] },
      { t: 'h2', x: 'Non-negotiables' },
      { t: 'list', x: [
        '**Health endpoints** on anything long-running — my own tooling ([NetPilot](/en/projects/netpilot/)) monitors them.',
        '**Graceful degradation** — a dead upstream must degrade features, never take the process down.',
        '**Structured logs** from day one, because debugging by vibes does not scale past 2 AM.',
        '**Contract tests** for anything another system depends on — including agents.'
      ] },
      { t: 'p', x: 'The pattern across my projects: the [free-api bridges](/en/projects/glm-free-api/) handle hostile, rate-limited upstreams; the [panels](/en/projects/usf-panel/) handle multi-user state; the [routers](/en/projects/omnirouter/) handle failure between them. Same principles, different pressure points.' }
    ]),
  mk('networking.md', 'Networking — The Open Internet Toolbox',
    'TCP/IP, DNS, proxies, VLESS tunnels, edge networks — deep practical networking for hostile environments.',
    [
      { t: 'p', x: 'Networking is my specialty under pressure: I build for networks that actively fight back. That means fluency from packets to platforms — how a TLS handshake dies, why a subscription link breaks, where a tunnel leaks DNS.' },
      { t: 'h2', x: 'Competence map' },
      { t: 'table', x: [
        ['Layer', 'Skills'],
        ['Fundamentals', 'TCP/IP, DNS, HTTP/2–3, TLS, routing, NAT, capture analysis'],
        ['Proxy tech', 'VLESS, VMess, Trojan, Reality; Clash, v2ray, sing-box configs'],
        ['Edge & CDN', 'Cloudflare Workers, KV, 300+ PoP distribution, WAF rules'],
        ['Diagnostics', 'Port scanning, TCP ping, TLS inspection ([NetPilot](/en/projects/netpilot/))'],
        ['Operations', 'Multi-platform redundancy, zero-downtime migrations']
      ] },
      { t: 'p', x: 'This is the domain where my [panel family](/en/projects/usf-panel/) lives, and it shapes everything else: my API bridges assume throttling, my routers assume upstream death, and my deploys assume any single platform can disappear overnight. Redundancy is not paranoia — it is the baseline SLA of a free and open connection.' },
      { t: 'quote', x: 'A network you can trust is built, not hoped for.' }
    ]),
  mk('security.md', 'Security — Offense Informed, Defense Minded',
    'Pentesting toolkit, XSS research, static analysis — finding holes before someone else does.',
    [
      { t: 'p', x: 'I learned security from the offensive side — building scanners, studying XSS, auditing source for unsafe patterns — because you cannot defend a system you cannot attack. That lens now runs over everything I ship, especially agent-written code.' },
      { t: 'h2', x: 'The toolkit' },
      { t: 'list', x: [
        '**Static analysis** — my [explorer](https://github.com/Godde3s/explorer) project hunts vulnerable patterns and unsafe code paths in source trees.',
        '**Web exploitation research** — XSS flows, reverse-access patterns ([access](https://github.com/Godde3s/access)), bug-hunting utilities ([thehunter](https://github.com/Godde3s/thehunter)).',
        '**Tooling literacy** — the classic collection ([Collection-](https://github.com/Godde3s/Collection-)) every practitioner should know how to read.',
        '**Hardening practice** — token + 2FA admin panels, encrypted session vaults, minimum-surface deploys.'
      ] },
      { t: 'h2', x: 'Security in the agentic era' },
      { t: 'p', x: 'Agents write more code than ever, and they write it *confidently* — including the insecure kind. My review checklist therefore treats every generated diff as untrusted input: injection surfaces, auth bypasses, secrets handling, dependency provenance. The [method page](/en/about/how-i-work/) calls this the human review step; in security terms it is the only step that matters.' },
      { t: 'warning', title: 'Ethics clause', x: 'My offensive work targets systems I own or am authorized to test. Anything else is a crime, not a skill.' }
    ]),
  mk('ai-llm.md', 'AI & LLM Infrastructure — The Free-Tier Architect',
    'API bridges, model routers, agent runtimes and self-hosting — building AI infrastructure that costs nothing to run.',
    [
      { t: 'p', x: 'Anyone can call a paid API. The interesting engineering is building **infrastructure on free tiers that behaves like a paid one** — and that is precisely what my AI projects do, in layers.' },
      { t: 'h2', x: 'The layers' },
      { t: 'table', x: [
        ['Layer', 'Project', 'Job'],
        ['Access', '[GLM Free API](/en/projects/glm-free-api/), [GhostBrain](/en/projects/ghost-brain/), qwen/deepseek bridges', 'Turn free web models into real OpenAI/Anthropic-compatible APIs.'],
        ['Routing', '[OmniRouter](/en/projects/omnirouter/)', 'Load balancing, weights, quotas, failover across providers.'],
        ['Coordination', '[Hermes Stack](/en/projects/hermes-stack/)', 'Agent runtime + automations + console, self-hosted and free.'],
        ['Consumption', '[OpenCode · Codex · Claude Code](/en/agentic/overview/)', 'Agent fleet doing real engineering work through the stack.']
      ] },
      { t: 'p', x: 'The design rules are consistent: never depend on one provider, never trust a free tier to stay free, always keep an escape hatch. When a bridge dies, the router benches it; when a platform turns hostile, the [panel discipline](/en/about/networking/) applies — migrate in minutes. The result is a multi-model AI stack with a monthly bill of exactly zero.' },
      { t: 'p', x: 'On the ML side itself I work with TensorFlow, PyTorch, OpenCV and Hugging Face tooling — enough depth to fine-tune, embed and evaluate, which is usually all a product actually needs.' }
    ]),
  mk('devops.md', 'DevOps & Deploy — Five Platforms, One Command',
    'HF Spaces, Railway, Render, Fly.io, Koyeb, Cloudflare Workers — deploying resilient services on free tiers.',
    [
      { t: 'p', x: 'Deployment is where hobbies become products. I maintain deploy paths on six platforms and treat "one command" as a hard requirement — because when a platform turns hostile or a region goes down, migration speed *is* uptime.' },
      { t: 'h2', x: 'Platform playbook' },
      { t: 'table', x: [
        ['Platform', 'What I run there'],
        ['Hugging Face Spaces', 'Hermes Stack, AI bridges — generous free compute.'],
        ['Cloudflare Workers', 'usf-edge panels — KV state, 300+ PoPs, no cold starts.'],
        ['Railway / Render / Fly.io / Koyeb', 'Panels and APIs — each with its own anti-blocking quirks.'],
        ['VPS (Linux)', 'Classic deployments, tunnels, monitoring.']
      ] },
      { t: 'list', x: [
        '**Docker** when the platform supports it; **Procfiles and buildpacks** when it does not.',
        '**CI habits** — GitHub Actions for tests and builds; deploys stay boring on purpose.',
        '**Observability** — structured logs, uptime pings from my own tooling, alerting to Telegram.',
        '**Secrets discipline** — environment variables, encrypted vaults, nothing in git.'
      ] },
      { t: 'p', x: 'The philosophy matches my [networking mindset](/en/about/networking/): every deploy is one takedown away from dying, so every deploy has a documented twin on another platform. My panels literally ship five deploy commands for this reason.' }
    ]),
  mk('plc.md', 'Industrial PLC — Where Software Meets Steel',
    'PLC programming in Ladder and Structured Text (IEC 61131-3), HMI design, SCADA logic — automation on real production lines.',
    [
      { t: 'p', x: 'Before web APIs, there were wires. Industrial automation taught me that software has consequences you can hear — a bad line of logic does not throw an exception, it stops a production line or pinches a finger. I program PLCs in **Ladder Diagram** and **Structured Text** under IEC 61131-3, and I design the HMIs operators actually use.' },
      { t: 'h2', x: 'What I do on the floor' },
      { t: 'table', x: [
        ['Area', 'Practice'],
        ['Logic', 'Ladder (LD) for discrete control; Structured Text (ST) for math and sequences.'],
        ['HMI', 'Screens operators can read at a glance, in their language, with honest alarms.'],
        ['SCADA thinking', 'Tag naming, alarm rationalization, data logging that survives audits.'],
        ['Safety', 'Interlocks first, convenience second — always.']
      ] },
      { t: 'p', x: 'Automation made me a better software engineer in three specific ways: I respect **state machines** (a line is one giant state machine), I write **defensive code** (sensors lie, contacts weld), and I document as if the next reader is standing next to a running machine — because sometimes they are.' },
      { t: 'quote', x: 'In industrial control, uptime is measured in tons, not nines.' }
    ]),
  mk('databases.md', 'Databases — Modeled and Tuned',
    'PostgreSQL, MySQL, MongoDB, Redis, Firebase — schema design, query tuning and honest trade-offs.',
    [
      { t: 'p', x: 'Most performance problems I meet are database problems wearing a frontend costume. I design schemas deliberately, measure before optimizing, and pick engines by workload instead of fashion.' },
      { t: 'h2', x: 'Engine choices I actually make' },
      { t: 'table', x: [
        ['Engine', 'When I choose it'],
        ['PostgreSQL', 'Default OLTP: panels, APIs, anything with relations and constraints.'],
        ['MySQL / MariaDB', 'Shared-hosting realities and legacy stacks.'],
        ['MongoDB', 'Document-shaped, rapidly evolving data — session vaults, logs.'],
        ['Redis', 'Caching, queues, rate limiting, session state.'],
        ['Firebase / Supabase', 'Zero-ops products and prototypes that still need auth + data.']
      ] },
      { t: 'list', x: [
        '**Schema design** — normalization where integrity matters, deliberate denormalization where reads dominate.',
        '**Query tuning** — EXPLAIN plans, index strategy, N+1 hunting.',
        '**Migrations** — versioned, reversible, rehearsed on staging.',
        '**Backups** — automated, tested, and actually restorable (the only kind that count).'
      ] }
    ]),
  mk('git.md', 'Git & Workflow — Discipline That Scales',
    'Branching strategy, review discipline, conventional commits and CI habits for solo and agent-team development.',
    [
      { t: 'p', x: 'Git is the contract between past me, future me and the agents working on my behalf. My workflow rules are simple enough to follow at 2 AM and strict enough that agent-generated diffs stay reviewable.' },
      { t: 'h2', x: 'The rules' },
      { t: 'list', x: [
        '**Small, single-purpose branches.** One idea per branch — human or agent authored.',
        '**Conventional commits.** `feat:`, `fix:`, `refactor:` — changelogs write themselves.',
        '**Review everything.** Especially agent code; trust is granted per-diff, never per-tool.',
        '**Main stays deployable.** If `main` breaks, fixing it outranks everything else.',
        '**Tags for releases.** Every shipped state is retrievable forever.'
      ] },
      { t: 'p', x: 'With agents in the loop this discipline stops being optional: three sandboxes producing diffs in parallel only works if history stays clean and each change is isolated. The [agentic method](/en/about/how-i-work/) depends on git being boring and predictable — exactly what I want from infrastructure.' }
    ]),
  mk('terminal.md', 'Terminal & Linux — The Unix Toolbox',
    'WSL2, shell scripting, SSH, systemd and the Unix toolbox — the environment where all my work actually happens.',
    [
      { t: 'p', x: 'My primary work environment is a terminal — usually WSL2 on Windows giving me both worlds, or a bare Linux box for services. Fluency here is not nostalgia; it is leverage. Every tool I use, including every agent, ultimately drives the same Unix primitives.' },
      { t: 'h2', x: 'Daily drivers' },
      { t: 'table', x: [
        ['Area', 'Tools'],
        ['Shell', 'bash/zsh, pipes, jq, awk/sed one-liners, fzf'],
        ['Remote', 'SSH keys and agents, tmux sessions, port forwarding'],
        ['Services', 'systemd units, cron, log rotation'],
        ['Containers', 'Docker, compose, minimal images'],
        ['Inspection', 'htop, ss/netstat, strace, journalctl']
      ] },
      { t: 'p', x: 'This is also where my [NetPilot](/en/projects/netpilot/) philosophy came from: the best terminal tools do one job, stay fast, and compose. I hold my own tools — and my agents\' output — to the same standard. A command that cannot be piped is a command I will rewrite.' }
    ]),
  mk('architecture.md', 'Architecture — Designing for Change',
    'From single-file services to distributed systems — modularity, failure domains and evolution as first-class concerns.',
    [
      { t: 'p', x: 'Architecture is the set of decisions that are expensive to change later. My bias: start as small as possible — sometimes a [single file](/en/projects/glm-free-api/) — but with seams in the right places, so growth means replacing modules instead of rewriting systems.' },
      { t: 'h2', x: 'Principles I design by' },
      { t: 'list', x: [
        '**Failure domains.** Anything that can die should die alone — routers isolate providers, panels isolate users.',
        '**Boring technology first.** Innovation budget spent on the one thing that is actually new.',
        '**Interfaces over implementations.** The OpenAI API shape became a standard precisely because contracts outlive products.',
        '**State is the hard part.** Keep it small, keep it explicit, back it up, and know where every byte lives.',
        '**Evolution paths.** Every design gets a "when this outgrows itself" note — written while the trade-offs are fresh.'
      ] },
      { t: 'p', x: 'The portfolio of projects itself follows this arc: bridges ([one file](/en/projects/glm-free-api/)) grew into routers ([OmniRouter](/en/projects/omnirouter/)), routers grew into stacks ([Hermes](/en/projects/hermes-stack/)) — each step replacing a module, not rewriting a system. That, to me, is what "versatile engineer" actually means: not knowing everything, but building so that you can learn anything next.' }
    ])
]
