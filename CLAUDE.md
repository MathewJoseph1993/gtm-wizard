# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GTM Wizard is an open-source AI-powered GTM operating system. The core is an MCP (Model Context Protocol) server that packages Go-To-Market Engineering expertise for AI agents.

- **Website:** https://gtmwizard.io
- **PyPI:** https://pypi.org/project/gtm-wizard/
- **Current Version:** 0.2.1

## Development Commands

```bash
# Setup
uv sync --all-extras

# Run all checks (format, lint, type-check, test)
make all

# Individual commands
make test        # Pytest with coverage (80% threshold required)
make lint        # Ruff linter
make format      # Ruff formatter
make type-check  # Mypy strict mode
make serve       # Run MCP server locally
make inspect     # Open MCP Inspector at localhost:6274

# Run single test
uv run pytest packages/mcp-server/tests/test_tools.py::TestScoreLead -v

# Build and publish to PyPI
make build       # Build dist/
make publish     # Upload to PyPI
```

## Monorepo Architecture

```
gtm-wizard/
├── packages/
│   ├── mcp-server/           # GTM Expertise Engine (Python) - ACTIVE
│   │   ├── src/gtm_wizard/
│   │   │   ├── server.py     # MCP server entry point
│   │   │   ├── tools/        # Lead scoring, qualification functions
│   │   │   └── resources/    # Knowledge base (markdown)
│   │   └── tests/
│   ├── dashboard/            # Web Frontend (Next.js) - PLACEHOLDER
│   └── ai-agent/             # AI Orchestration (Python + LiteLLM) - PLACEHOLDER
├── docs/
│   ├── 00_vision/            # Architecture, pricing, vision
│   ├── 01_research/          # Market research, pain points
│   ├── 02_planning/          # MVP scope, stack research
│   ├── 03_decisions/         # Architecture Decision Records
│   └── session_handoffs/     # Session continuity
└── pyproject.toml            # Root config (points to packages/mcp-server)
```

## MCP Server (`packages/mcp-server/`)

### Entry Point

`server.py` implements three MCP primitives:
- **Tools** - Action functions (score_lead, classify_role, determine_routing, etc.)
- **Resources** - Knowledge base via `gtm://foundations/{resource-id}` URIs
- **Prompts** - Workflow templates (lead-qualification-workflow, icp-definition, etc.)

### Adding New Tools

1. Create functions in `packages/mcp-server/src/gtm_wizard/tools/` following `qualification.py` pattern
2. Register in `server.py`:
   - Add to `list_tools()` with input schema
   - Add handler in `call_tool()`
3. Write tests in `packages/mcp-server/tests/test_tools.py`

### Adding New Resources

1. Create markdown file in `packages/mcp-server/src/gtm_wizard/resources/foundations/`
2. Register URI pattern in `server.py` `list_resources()` and `read_resource()`

## Full Stack Development

```bash
# Terminal 1: PocketBase (database)
cd pocketbase && ./pocketbase serve

# Terminal 2: Dashboard (Next.js)
cd packages/dashboard && npm run dev

# Terminal 3: MCP Server (if needed)
uv run python -m gtm_wizard.server
```

## PocketBase Collections

| Collection | Purpose |
|------------|---------|
| `users` | Auth (built-in) |
| `api_keys` | AI provider keys (encrypted) |
| `tool_connections` | Instantly/Apollo connections |
| `daily_metrics` | Campaign performance data |
| `chat_history` | AI coaching conversations |
| `user_settings` | Onboarding, timezone, streak |

## Dashboard Key Files

| Component | Location |
|-----------|----------|
| Pages | `packages/dashboard/src/app/` |
| Traffic Light | `packages/dashboard/src/components/TrafficLight.tsx` |
| Auth Context | `packages/dashboard/src/contexts/AuthContext.tsx` |
| PocketBase client | `packages/dashboard/src/lib/pocketbase.ts` |

## Change Checklist

After restructuring/moving files:
- Update `.github/workflows/ci.yml` paths
- Update `pyproject.toml` if Python paths changed
- Update `Makefile` if command paths changed
- Run `make test` locally before pushing

## Commit Guidelines

- Clear, descriptive commit messages
- **NO** AI attribution ("Generated with Claude Code")
- **NO** Co-Authored-By lines mentioning Claude/AI

## Terminology (Public Code)

Avoid Cannonball GTM terminology:
- Use "Insight-Led Outreach" (not PVP)
- Use "Decision Trigger" (not EDP)
- Use "High-Intent Segment" (not PQS)

## Session Continuity

Check latest session handoff for ongoing work context:
```
docs/session_handoffs/SESSION_YYYY-MM-DD_*.md
```

## Key Documentation

| Document | Purpose |
|----------|---------|
| `docs/00_vision/ARCHITECTURE.md` | System architecture |
| `docs/02_planning/MVP_SCOPE.md` | v0.3 feature scope |
| `docs/02_planning/OSS_STACK_RESEARCH.md` | Technology decisions |
| `docs/03_decisions/ADR_*.md` | Architecture Decision Records |
