# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GTM Wizard is an MCP (Model Context Protocol) server that packages Go-To-Market Engineering expertise for AI agents. It exposes tools, prompts, and resources that AI agents can use for lead qualification, campaign design, and GTM decision-making.

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
uv run pytest tests/test_tools.py::TestScoreLead -v

# Build and publish to PyPI
make build       # Build dist/
make publish     # Upload to PyPI
```

## Code Architecture

### MCP Server Structure

```
src/gtm_wizard/
├── server.py              # MCP server entry point - handles all tool/resource/prompt routing
├── tools/
│   └── qualification.py   # Lead scoring, routing, classification functions
└── resources/
    └── foundations/       # Markdown knowledge files (GTM concepts)
```

### Entry Point

`server.py` is the main MCP server implementing three primitives:
- **Tools** - Action functions (score_lead, classify_role, determine_routing, etc.)
- **Resources** - Knowledge base via `gtm://foundations/{resource-id}` URIs
- **Prompts** - Workflow templates (lead-qualification-workflow, icp-definition, etc.)

### Adding New Tools

1. Create functions in `src/gtm_wizard/tools/` following the `qualification.py` pattern
2. Register in `server.py`:
   - Add to `list_tools()` with input schema
   - Add handler in `call_tool()`
3. Write tests in `tests/test_tools.py`

### Adding New Resources

1. Create markdown file in `src/gtm_wizard/resources/foundations/`
2. Register URI pattern in `server.py` `list_resources()` and `read_resource()`

### Adding New Prompts

1. Add prompt definition in `server.py` `list_prompts()`
2. Add handler in `get_prompt()` returning messages with arguments

## Testing

Tests are in `tests/` with separate files for tools, resources, and prompts:
- `tests/test_tools.py` - Tool function tests
- `tests/test_resources.py` - Resource loading tests
- `tests/test_prompts.py` - Prompt generation tests

Coverage threshold is 80% and enforced in CI.

## Commit Guidelines

- Clear, descriptive commit messages
- **NO** AI attribution ("Generated with Claude Code")
- **NO** Co-Authored-By lines mentioning Claude/AI

## Terminology (Public Code)

Avoid Cannonball GTM terminology in public-facing code:
- ❌ PVP, EDP, PQS, PEA Framework, F.I.N.D.

Use original terms:
- "Insight-Led Outreach" (not PVP)
- "Decision Trigger" (not EDP)
- "High-Intent Segment" (not PQS)

## Session Continuity

Check latest session handoff for ongoing work context:
```
docs/session_handoffs/SESSION_YYYY-MM-DD_*.md
```

## Key Documentation

| Document | Purpose |
|----------|---------|
| `docs/00_vision/ARCHITECTURE.md` | System architecture and future monorepo structure |
| `docs/01_research/RESEARCH_SUMMARY.md` | Market research informing product decisions |
| `docs/03_decisions/ADR_*.md` | Architecture Decision Records |
