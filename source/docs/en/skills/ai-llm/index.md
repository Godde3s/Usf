---
title: "AI & LLM Infrastructure — The Free-Tier Architect"
description: "API bridges, model routers, agent runtimes and self-hosting — building AI infrastructure that costs nothing to run."
---

# AI & LLM Infrastructure — The Free-Tier Architect

Anyone can call a paid API. The interesting engineering is building **infrastructure on free tiers that behaves like a paid one** — and that is precisely what my AI projects do, in layers.

## The layers

| Layer | Project | Job |
| --- | --- | --- |
| Access | [GLM Free API](/en/projects/glm-free-api/), [GhostBrain](/en/projects/ghost-brain/), qwen/deepseek bridges | Turn free web models into real OpenAI/Anthropic-compatible APIs. |
| Routing | [OmniRouter](/en/projects/omnirouter/) | Load balancing, weights, quotas, failover across providers. |
| Coordination | [Hermes Stack](/en/projects/hermes-stack/) | Agent runtime + automations + console, self-hosted and free. |
| Consumption | [OpenCode · Codex · Claude Code](/en/agentic/overview/) | Agent fleet doing real engineering work through the stack. |

The design rules are consistent: never depend on one provider, never trust a free tier to stay free, always keep an escape hatch. When a bridge dies, the router benches it; when a platform turns hostile, the [panel discipline](/en/about/networking/) applies — migrate in minutes. The result is a multi-model AI stack with a monthly bill of exactly zero.

On the ML side itself I work with TensorFlow, PyTorch, OpenCV and Hugging Face tooling — enough depth to fine-tune, embed and evaluate, which is usually all a product actually needs.
