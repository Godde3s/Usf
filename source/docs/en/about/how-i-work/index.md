---
title: "The Agentic Method"
description: "How Reza Bazdar ships production software with OpenCode, Codex, Claude Code and the Hermes agent — brief, generate, review, deploy."
---

# The Agentic Method

I practice **agentic coding** as a daily discipline, not a demo trick. My daily drivers are **OpenCode**, **OpenAI Codex** and **Claude Code**, orchestrated by **Hermes Agent** — my own self-hosted agent infrastructure. Together they behave like a small engineering team that never sleeps, and I am its tech lead.

This is not "AI writes everything while I watch". Delegating to agents is a skill with the same seriousness as writing code by hand: you learn to write specs instead of functions, to design review checkpoints instead of debug sessions, and to audit diffs the way a senior engineer reviews a junior — respectfully, but relentlessly.

## The loop that ships features

1. **Brief the agents.** I turn an idea into a precise, testable specification: scope, edge cases, acceptance criteria. A good brief is 80% of the result.
2. **Generate and iterate.** Agents implement in parallel — one refactors, another writes tests, a third prepares deployment. I steer, unblock and re-scope in real time.
3. **Human review.** I audit every diff myself: security, architecture, edge cases, performance. Agent output is a proposal, never a promise.
4. **Deploy and monitor.** Ship to the edge, watch logs and metrics, and feed every lesson back into the next brief.

<figure class="concept-illustration">
  <img src="/assets/img/agentic-loop.svg" alt="The four-step agentic loop: brief, generate, review, deploy" loading="lazy" />
  <figcaption>The loop I run every day — with humans exactly where judgment matters.</figcaption>
</figure>

## Why this is a real engineering skill

Directing agents exposes weaknesses that typing speed never will. If your architecture is vague, agents amplify the vagueness. If your tests are weak, agents pass them confidently. If your spec is ambiguous, you get ten creative interpretations you did not ask for. Working this way forces me to think more clearly than traditional development ever did — the agents are mirrors, and they are unforgiving.

> The skill of the next decade is not typing faster — it is directing intelligent agents with the precision of a senior engineer and the taste of a product designer.

Every project on this site — from the [NetPilot](/en/projects/netpilot/) network toolkit to this very portfolio — was designed, reviewed and shipped through that loop. The [Agentic Coding](/en/agentic/overview/) section breaks down each tool I use.
