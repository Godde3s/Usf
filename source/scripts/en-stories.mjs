// EN content — Project Stories (4 pages)
export const pages = [
  {
    path: 'vibe-stories/story-1.md',
    title: 'NetPilot: One Binary, Every Answer',
    description: 'The story of building NetPilot — a pure-Go network toolkit that compresses five admin tools into one static binary.',
    blocks: [
      { t: 'p', x: 'Every sysadmin has that folder of half-installed tools: one for port scanning, one for pinging, one for health checks, all with different flags and output formats. **NetPilot** ([GitHub](https://github.com/Godde3s/netpilot)) started when I got tired of being that sysadmin.' },
      { t: 'h2', x: 'The constraint that shaped it' },
      { t: 'p', x: 'I gave myself one rule: **the deliverable is a single static binary**. No runtime, no dependencies, no installer. That single constraint decided the language (Go), the architecture (stdlib first), and the UX (subcommands that read like sentences). It also made the project the perfect testbed for agent-team development — the spec was crisp enough that [agents](/en/agentic/overview/) could implement commands in parallel while I reviewed.' },
      { t: 'h2', x: 'What building it taught me' },
      { t: 'list', x: [
        '**Concurrency design beats concurrency folklore** — a worker pool with real timeouts outperformed three "optimized" drafts.',
        '**Output is an API** — stable JSON output turned the CLI into a building block other scripts (and agents) can consume.',
        '**Restraint scales** — five well-made commands beat thirty half-made ones.'
      ] },
      { t: 'p', x: 'Today NetPilot is the first thing I deploy on any new box, and the standard by which I judge every CLI I build — including the ones agents build for me.' }
    ]
  },
  {
    path: 'vibe-stories/story-2.md',
    title: 'OmniRouter: Taming Model Chaos',
    description: 'Why I built OmniRouter — the story of turning model churn into a config file, with load balancing and failover in one Go binary.',
    blocks: [
      { t: 'p', x: 'The AI ecosystem moves at scroll speed. The model that powered my week is deprecated by Friday, prices flip, free tiers appear and vanish. My apps kept breaking for reasons that had nothing to do with my code — so I made the churn someone else\'s problem. That someone is **[OmniRouter](https://github.com/Godde3s/omnirouter)**.' },
      { t: 'h2', x: 'The insight' },
      { t: 'p', x: 'The OpenAI chat-completions format won. It is the interface every client already speaks. So OmniRouter presents exactly that interface to your app, and speaks whatever each upstream needs on the other side — GLM, Qwen, DeepSeek, custom endpoints. Your code changes **never**; the config file changes weekly.' },
      { t: 'h2', x: 'The hard parts' },
      { t: 'list', x: [
        '**Streaming honesty** — relaying SSE token-for-token without buffering surprises took careful plumbing.',
        '**Failure detection** — distinguishing "model is slow" from "model is dying" needs rolling health windows, not single-shot probes.',
        '**Fair rotation** — weighted round-robin with quotas, so cheap capacity gets used before premium tokens.'
      ] },
      { t: 'p', x: 'Together with the [free-api bridges](/en/projects/glm-free-api/), OmniRouter gives me something absurd on paper and essential in practice: a multi-model AI stack with **zero monthly cost** and one config file to rule them all.' }
    ]
  },
  {
    path: 'vibe-stories/story-3.md',
    title: 'Usf Panel: Tunnels vs. Censorship',
    description: 'Building proxy panels for an environment where blocking is an arms race — the story and philosophy behind Usf Panel and its family.',
    blocks: [
      { t: 'p', x: 'Some software is a convenience; some is a lifeline. My panel family — **Usf Panel**, usf-edge, edge-pp, Render-usf — belongs to the second kind. They manage VLESS tunnels and subscriptions for people whose internet is routinely filtered, including mine.' },
      { t: 'h2', x: 'The threat model is real' },
      { t: 'p', x: 'Building for censored networks changes every design decision. Platforms themselves become attack surfaces: when one provider starts mass-banning proxy workloads, your users go dark — so every panel I ship deploys to **five platforms with one command**, and edge variants keep state in Cloudflare KV across 300+ PoPs where there is no server to seize.' },
      { t: 'h2', x: 'Engineering under fire' },
      { t: 'list', x: [
        '**Subscription links** must regenerate cleanly across Clash, v2ray and sing-box — one broken format means one stranded user.',
        '**Multi-user quotas** keep one heavy user from exposing everyone.',
        '**Admin hardening** — token + 2FA — because the panel itself is the juiciest target.',
        '**Migration drills** — I practice platform-to-platform moves before I need them, not during an outage.'
      ] },
      { t: 'p', x: 'The full design philosophy is in the [networking section](/en/about/networking/); the flagship\'s details are in [Usf Panel](/en/projects/usf-panel/). What the story boils down to: treat access to information as critical infrastructure, and engineer it with that respect.' }
    ]
  },
  {
    path: 'vibe-stories/story-4.md',
    title: 'This Portfolio: One Design, Two Languages',
    description: 'The meta-story: how this very site was specified, cloned from Usf\'s design system, translated into two languages and shipped by an agent team.',
    blocks: [
      { t: 'p', x: 'You are looking at the most self-referential project in my portfolio: **this website**. It is a faithful rebuild of the [Usf](https://Godde3schina.github.io/Usf/en/) design system — the exact VitePress theme, layout and behavior — with every text and image replaced by my own content, in **two languages**: English and Spanish.' },
      { t: 'h2', x: 'Why clone a course site?' },
      { t: 'p', x: 'Because it is honest about what good engineering is: find something excellent, understand it completely, then adapt it with respect. The theme\'s Apple-style home, its glass navigation, the typing tagline, the MacBook-framed story carousel — all of it was studied, ported and re-anchored to a new engine version, then filled with a life it was never written for.' },
      { t: 'h2', x: 'What made it non-trivial' },
      { t: 'list', x: [
        '**A real i18n layer** — the language switcher, per-locale routes and localized UI chrome (settings panel, slides, code toggles) all work end to end.',
        '**Custom wordmark** — the script "Usf" logo is generated from a real font into SVG paths so the animated welcome screen could keep its draw-on effect.',
        '**Fourteen new illustrations** — every card and story cover generated to match the theme\'s pastel aesthetic.',
        '**Agent-team assembly** — theme port, content, translations and deployment ran as parallel agent workstreams, coordinated the [Hermes way](/en/agentic/hermes/).'
      ] },
      { t: 'p', x: 'The source of truth lives at [github.com/Godde3s/Usf](https://github.com/Godde3s/Usf) — public, naturally. If you are reading this on the live site, the deploy pipeline worked; if you are reading it on GitHub, the pipeline is one `vitepress build` away.' }
    ]
  }
]
