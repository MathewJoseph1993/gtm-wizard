# GTM Wizard

> **Status: On Hold (December 2025)**
>
> This project is currently paused while I focus on contributing to [DataGen](https://github.com/datagendev), an MCP platform for building AI agent automations. The MCP server (v0.2.1) remains available on PyPI and functional. See [ARCHIVE.md](ARCHIVE.md) for details.

[![CI](https://github.com/MathewJoseph1993/gtm-wizard/actions/workflows/ci.yml/badge.svg)](https://github.com/MathewJoseph1993/gtm-wizard/actions/workflows/ci.yml)
[![PyPI](https://img.shields.io/pypi/v/gtm-wizard)](https://pypi.org/project/gtm-wizard/)
[![Python](https://img.shields.io/badge/python-3.10%20|%203.11%20|%203.12-blue)](https://www.python.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **GTM expertise tools for AI agents.**

MCP server providing lead scoring, role classification, and routing tools for GTM workflows. Works with Claude Desktop, Cursor, or any MCP client.

**Note:** GTM = Go-To-Market, not Google Tag Manager.

## What is GTM Wizard?

An MCP server that provides GTM (Go-To-Market) expertise tools for AI agents. Use it to score leads, classify roles, and determine routing - all with transparent reasoning.

## What's Available

### MCP Server (v0.2.1 on PyPI)

The GTM expertise engine, usable with Claude Desktop, Cursor, or any MCP client.

| Tool | Purpose |
|------|---------|
| `score_lead` | Calculate lead scores with transparent breakdown |
| `classify_role` | Classify job titles into decision-making tiers |
| `determine_routing` | Route leads to appropriate engagement tracks |

## Installation

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

## Development

```bash
cd packages/mcp-server
uv sync --all-extras
make test
```

## License

MIT License - see [LICENSE](LICENSE).

---

*Built by [Mathew Joseph](https://github.com/MathewJoseph1993) - GTM Engineer*
