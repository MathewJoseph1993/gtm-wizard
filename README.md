# GTM Wizard

[![CI](https://github.com/MathewJoseph1993/gtm-wizard/actions/workflows/ci.yml/badge.svg)](https://github.com/MathewJoseph1993/gtm-wizard/actions/workflows/ci.yml)
[![PyPI](https://img.shields.io/pypi/v/gtm-wizard)](https://pypi.org/project/gtm-wizard/)
[![Python](https://img.shields.io/badge/python-3.10%20|%203.11%20|%203.12-blue)](https://www.python.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Website](https://img.shields.io/badge/website-gtmwizard.io-blue)](https://gtmwizard.io)

> **The GTM Engineer in your pocket.**

AI-powered go-to-market intelligence with benchmarks, signals, and coaching. Open-source, self-hosted option available, cloud version coming soon.

**Note:** GTM = Go-To-Market, not Google Tag Manager.

## What is GTM Wizard?

GTM Wizard helps founders and GTM teams answer one question: **"Am I failing or is this normal?"**

| Problem | Solution |
|---------|----------|
| "My reply rate is 2%. Is that bad?" | Traffic Light signals (RED/YELLOW/GREEN) with benchmarks |
| "I've been at this for 2 weeks with no results" | Day 21 Breakthrough - education on the persistence gap |
| "What should I do differently?" | AI coaching with GTM expertise |
| "I want control over my data" | Self-hosted option OR cloud at [gtmwizard.io](https://gtmwizard.io) |

## Features

### Dashboard (Coming in v0.3)

- **Traffic Light Signals** - RED/YELLOW/GREEN based on industry benchmarks
- **Streak Visualizer** - GitHub-style activity graph for consistency
- **Day 21 Breakthrough** - Educational module on the persistence gap
- **AI Coaching** - BYOK chat with GTM expertise

### MCP Server (Available Now - v0.2.1)

The GTM expertise engine, usable with Claude Desktop, Cursor, or any MCP client.

| Tool | Purpose |
|------|---------|
| `score_lead` | Calculate lead scores with transparent breakdown |
| `classify_role` | Classify job titles into decision-making tiers |
| `determine_routing` | Route leads to appropriate engagement tracks |

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  GTM WIZARD                                                  │
│                                                              │
│  ┌─────────────────┐  ┌─────────────────┐  ┌──────────────┐ │
│  │   Dashboard     │  │   AI Layer      │  │  MCP Server  │ │
│  │   (Next.js)     │  │   (LiteLLM)     │  │  (Python)    │ │
│  │                 │  │                 │  │              │ │
│  │  • Traffic      │  │  • BYOK         │  │  • Lead      │ │
│  │    Light        │  │  • OpenAI       │  │    Scoring   │ │
│  │  • Streak       │  │  • Anthropic    │  │  • Routing   │ │
│  │    Visualizer   │  │  • Ollama       │  │  • GTM       │ │
│  │  • Settings     │  │                 │  │    Expertise │ │
│  └────────┬────────┘  └────────┬────────┘  └──────┬───────┘ │
│           │                    │                   │         │
│           └────────────────────┼───────────────────┘         │
│                                │                             │
│                    ┌───────────┴───────────┐                 │
│                    │     PocketBase        │                 │
│                    │   (Database + Auth)   │                 │
│                    └───────────────────────┘                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Installation

### MCP Server Only (Available Now)

```bash
pip install gtm-wizard
```

Add to Claude Desktop config:

```json
{
  "mcpServers": {
    "gtm-wizard": {
      "command": "uvx",
      "args": ["gtm-wizard"]
    }
  }
}
```

### Full Platform

**Cloud (Coming Soon):** [gtmwizard.io](https://gtmwizard.io)

**Self-Hosted:**
```bash
git clone https://github.com/MathewJoseph1993/gtm-wizard
cd gtm-wizard
docker-compose up -d
```

## Tech Stack

| Component | Technology | Why |
|-----------|------------|-----|
| **Frontend** | Next.js + shadcn/ui | Largest ecosystem, best AI assistance |
| **Backend** | PocketBase | Single binary, zero-config |
| **AI Layer** | LiteLLM | BYOK, 100+ providers |
| **MCP Server** | Python + FastMCP | GTM expertise tools |
| **Deployment** | Docker Compose | One-command self-hosting |

## Project Structure

```
gtm-wizard/
├── packages/
│   ├── mcp-server/      # GTM expertise engine (Python)
│   ├── dashboard/       # Web UI (Next.js)
│   └── ai-agent/        # AI orchestration (Python + LiteLLM)
├── pocketbase/          # Database + Auth
├── docs/                # Vision, research, planning
└── docker-compose.yml   # One-command deployment
```

## Roadmap

| Version | Focus | Status |
|---------|-------|--------|
| v0.1 | MCP Foundation | Complete |
| v0.2 | Lead Intelligence Tools | Complete |
| **v0.3** | **Dashboard MVP** | **In Progress** |
| v0.4 | Instantly Integration | Planned |
| v0.5 | AI Coaching | Planned |

See [ROADMAP.md](ROADMAP.md) for details.

## Development

```bash
# MCP Server
cd packages/mcp-server
uv sync --all-extras
make test

# Dashboard
cd packages/dashboard
npm install
npm run dev
```

## Contributing

Contributions welcome! See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT License - see [LICENSE](LICENSE).

---

*Built by [Mathew Joseph](https://github.com/MathewJoseph1993) - GTM Engineer with 8 years experience*
