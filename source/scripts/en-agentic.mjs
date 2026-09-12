// EN content — Agentic Coding section (5 pages)
export const pages = [
  {
    path: 'agentic/overview.md',
    title: 'Agentic Coding — Directing Agent Teams',
    description: 'How I use OpenCode, Codex, Claude Code and Hermes Agent to ship production software — the overview of my agentic workflow.',
    blocks: [
      { t: 'p', x: 'Agentic coding is the practice of directing autonomous coding agents the way a tech lead directs a team: with clear specs, tight review loops and full accountability. It is my daily method for shipping software, and I consider it the single most important engineering skill I have built in the last three years.' },
      { t: 'p', x: 'My toolchain is deliberate. **OpenCode** for fast, model-agnostic pair programming in the terminal. **Codex** for parallel execution across isolated sandboxes. **Claude Code** for deep, codebase-wide planning and refactors. **Hermes Agent** — my own stack — routing models and orchestrating the other three. Different tools, different strengths, one workflow.' },
      { t: 'h2', x: 'The core loop' },
      { t: 'stepbar', x: ['Brief the agents', 'Generate & iterate', 'Human review', 'Deploy & monitor'] },
      { t: 'p', x: 'The loop is exactly the four steps described in [The Agentic Method](/en/about/how-i-work/): brief, generate, review, deploy. What changes per tool is *where each step happens* — OpenCode lives in my terminal next to vim, Codex fans work out into sandboxes, Claude Code plans before it touches a file, and Hermes coordinates long-running tasks and keeps everyone supplied with the right model.' },
      { t: 'h2', x: 'What agents changed about my engineering' },
      { t: 'list', x: [
        '**Specs became a first-class artifact.** A precise brief is worth more than a clever prompt.',
        '**Review became a superpower.** Reading diffs fast — and suspiciously — is now a core skill.',
        '**Architecture matters more, not less.** Agents amplify good structure and expose bad structure instantly.',
        '**Testing got serious.** If the test suite is weak, agents will happily produce confident garbage.'
      ] },
      { t: 'info', title: 'Proof, not promises', x: 'This portfolio — four locales, a cloned VitePress theme, custom components and RTL support — was built through this loop. So were NetPilot, OmniRouter and every panel in the [projects](/en/projects/netpilot/) section.' },
      { t: 'p', x: 'The following pages document each tool: [OpenCode](/en/agentic/opencode/), [Codex](/en/agentic/codex/), [Claude Code](/en/agentic/claude-code/) and [Hermes Agent](/en/agentic/hermes/).' }
    ]
  },
  {
    path: 'agentic/opencode.md',
    title: 'OpenCode — My Terminal Pair Programmer',
    description: 'OpenCode: open-source terminal coding agent. Model-agnostic, provider-switchable mid-task, perfect pair for omnirouter routing.',
    blocks: [
      { t: 'p', x: '**OpenCode** is the open-source terminal coding agent I reach for first. It pairs with me inside the terminal — reading files, editing code, running commands — and, crucially, it is **model-agnostic**: the provider can be switched mid-task without losing the conversation.' },
      { t: 'h2', x: 'Why it earns the first slot' },
      { t: 'list', x: [
        '**Terminal-native.** It lives where I already work; no context switch to a GUI.',
        '**Model freedom.** GLM for cheap iteration, Claude for hard reasoning, DeepSeek for code — switched on the fly.',
        '**Omnirouter synergy.** Pointing OpenCode at my own [OmniRouter](/en/projects/omnirouter/) endpoint means the "provider" is actually a load-balanced fleet with failover.',
        '**Fast loop.** Small edits, quick questions, test runs — the 30-second tasks that happen fifty times a day.'
      ] },
      { t: 'code', lang: 'bash', x: `# point opencode at my own router\nexport OPENAI_BASE_URL=http://localhost:8787/v1\nopencode\n\n> refactor src/scan.go: extract the worker pool,\n> add tests for timeout handling, keep the CLI identical` },
      { t: 'h2', x: 'How I use it in the loop' },
      { t: 'p', x: 'OpenCode owns the **inner loop**: quick refactors, dependency bumps, "explain this stack trace", draft a function with tests. When a task grows beyond a single sitting — multi-file features, architecture moves — I graduate it to [Claude Code](/en/agentic/claude-code/) for planning, or fan it out to [Codex](/en/agentic/codex/) if it parallelizes. Knowing *which agent to brief* is half of the [method](/en/agentic/overview/).' }
    ]
  },
  {
    path: 'agentic/codex.md',
    title: 'Codex — Parallel Execution Engine',
    description: 'OpenAI Codex as my parallel task engine: isolated sandboxes, fan-out refactors, long-running tasks with reviewable diffs.',
    blocks: [
      { t: 'p', x: '**Codex** is where my work fans out. OpenAI\'s agent runs tasks in **isolated sandboxes** — each with its own copy of the repository — which makes it the right tool whenever a change decomposes into independent pieces: bumping dependencies across packages, applying one mechanical refactor to forty files, or generating variants of a feature to compare.' },
      { t: 'h2', x: 'The fan-out pattern' },
      { t: 'olist', x: [
        'Decompose the task into pieces that cannot conflict — one sandbox per piece.',
        'Write the brief so each piece has identical acceptance criteria.',
        'Let them run in parallel; collect the diffs.',
        'Review like a merge master: accept, reject, or send back with a sharper brief.'
      ] },
      { t: 'p', x: 'The discipline that makes this safe is the same as any parallel system: **isolate what can conflict, sequence what cannot.** Two agents editing the same module is not parallelism; it is a merge conflict with extra steps. My briefs therefore state file boundaries explicitly.' },
      { t: 'h2', x: 'Where Codex beats everything else' },
      { t: 'list', x: [
        '**Mechanical scale.** "Rename X to Y everywhere and fix the imports" — torture for a human, trivial for a sandbox farm.',
        '**Option generation.** Three implementations of one function, compared side by side, beats agonizing over one.',
        '**Background patience.** Long installs, big test suites, dataset generation — tasks I don\'t want to babysit.'
      ] },
      { t: 'tip', title: 'Combined with the rest', x: 'Codex produces the parts; [Claude Code](/en/agentic/claude-code/) integrates them; [Hermes](/en/agentic/hermes/) keeps the fleet supplied with models through [OmniRouter](/en/projects/omnirouter/).' }
    ]
  },
  {
    path: 'agentic/claude-code.md',
    title: 'Claude Code — The Planner-Executor',
    description: 'Claude Code: multi-step planning, tool use and codebase-wide edits with surgical precision. The agent behind this very site.',
    blocks: [
      { t: 'p', x: '**Claude Code** is Anthropic\'s agentic CLI, and it occupies a specific seat in my workflow: the **planner-executor**. Where other agents shine at speed or scale, Claude Code shines at *depth* — holding a whole codebase in mind, planning multi-step changes, and executing them with surgical precision across dozens of files.' },
      { t: 'h2', x: 'What makes it different' },
      { t: 'list', x: [
        '**Plans before it touches code.** For any non-trivial task it produces an explicit plan I can correct — the cheapest possible place to fix a mistake.',
        '**Whole-codebase edits.** Search, understand, then edit coherently — not file-by-file blind patches.',
        '**Tool discipline.** It shows its work: commands run, tests executed, diffs staged.',
        '**Taste.** In practice, its refactors read like a careful senior engineer wrote them, which minimizes my review surface.'
      ] },
      { t: 'quote', x: 'This portfolio is a Claude Code build: a full VitePress theme clone adapted to four locales with RTL support — planned once, reviewed by me, shipped in this shape.' },
      { t: 'h2', x: 'How I brief it' },
      { t: 'p', x: 'The better the plan I can critique, the better the result. So my briefs for Claude Code state the goal, the constraints, the definition of done — and explicitly invite a plan before execution. Then I do what the human is for: I read the plan, attack the weak points, and only then let it run. The pattern is described in [The Agentic Method](/en/about/how-i-work/).' },
      { t: 'p', x: 'Claude Code also plays the integrator role after [Codex](/en/agentic/codex/) fan-outs: reconciling diffs, resolving the overlaps, and running the full suite before anything reaches a branch I care about.' }
    ]
  },
  {
    path: 'agentic/hermes.md',
    title: 'Hermes Agent — My Own Infrastructure',
    description: 'Hermes Agent: self-hosted AI brain (hermes-stack) that routes models, runs automations and keeps my agent fleet supplied.',
    blocks: [
      { t: 'p', x: '**Hermes Agent** is the piece I built myself: the coordinator layer of my entire agentic setup, shipped as [hermes-stack](https://github.com/Godde3s/hermes-stack) on a free Hugging Face Space. Where the other tools are individuals, Hermes is the *manager* — it routes models, holds context, runs automations, and keeps every other agent supplied with the right brain at the right time.' },
      { t: 'h2', x: 'What Hermes actually does all day' },
      { t: 'list', x: [
        '**Model routing.** Every request from every tool can flow through my [OmniRouter](/en/projects/omnirouter/) — cheap models for grunt work, premium ones for judgment calls.',
        '**Automation brain.** Webhook-triggered tasks: watch a repo, ping me on Telegram when a deploy breaks, summarize overnight CI logs.',
        '**Context keeper.** Long-running projects keep their briefs, decisions and state with Hermes, not scattered across terminal scrolls.',
        '**Roaming endpoint.** Any OpenAI-compatible client can talk to it — my phone\'s app, a cron job, another agent.'
      ] },
      { t: 'h2', x: 'Why self-host it?' },
      { t: 'p', x: 'Because dependence is a design decision. A hosted "AI assistant" can change pricing, rate-limit me, or vanish — and in my region, it can also be blocked outright. Hermes Stack runs on infrastructure I control, behind routers I control, with fallbacks I configured. When a provider dies, nothing in my workflow changes; the router simply stops asking.' },
      { t: 'figure', src: '/assets/img/agentic-loop.svg', alt: 'Hermes coordinating OpenCode, Codex and Claude Code', caption: 'One brain, three specialists, zero vendor lock-in.' },
      { t: 'tip', title: 'Deploy your own', x: 'The whole stack is one click from the repo: [github.com/Godde3s/hermes-stack](https://github.com/Godde3s/hermes-stack) — free tier friendly, documented, mine to improve in public.' }
    ]
  }
]
