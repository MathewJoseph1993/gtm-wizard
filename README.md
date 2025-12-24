# GTM Wizard

[![CI](https://github.com/MathewJoseph1993/gtm-wizard/actions/workflows/ci.yml/badge.svg)](https://github.com/MathewJoseph1993/gtm-wizard/actions/workflows/ci.yml)
[![Python](https://img.shields.io/badge/python-3.10%20|%203.11%20|%203.12-blue)](https://www.python.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Code style: ruff](https://img.shields.io/badge/code%20style-ruff-000000.svg)](https://github.com/astral-sh/ruff)

> **The Senior GTM Engineer in Your Pocket** - Go-To-Market Engineering expertise for AI agents via MCP.

An MCP (Model Context Protocol) server that gives AI agents the knowledge of a senior GTM Engineer. Built from real production systems handling high-velocity lead pipelines.

**Note:** GTM = Go-To-Market, not Google Tag Manager.

## Features

- **Rate Limiting Diagnosis** - Debug API rate limit issues with actionable recommendations
- **Production-Tested** - Patterns from systems processing thousands of leads daily
- **AI-Native** - Designed for Claude, Cursor, and other MCP-compatible clients

### Coming Soon

- Infrastructure architecture patterns
- Integration blueprints (CRM, enrichment, outreach)
- Lead qualification frameworks
- Email deliverability runbooks

## Installation

### Using pip

```bash
pip install gtm-wizard
```

### From source

```bash
git clone https://github.com/MathewJoseph1993/gtm-wizard.git
cd gtm-wizard
pip install -e .
```

## Quick Start

### Claude Desktop

Add to your config (`~/Library/Application Support/Claude/claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "gtm-wizard": {
      "command": "python",
      "args": ["-m", "gtm_wizard.server"]
    }
  }
}
```

### Cursor

Add to Cursor MCP settings:

```json
{
  "mcpServers": {
    "gtm-wizard": {
      "command": "python",
      "args": ["-m", "gtm_wizard.server"]
    }
  }
}
```

### Claude Code CLI

```bash
claude mcp add gtm-wizard -- python -m gtm_wizard.server
```

Restart your client, then ask:
> "Help me diagnose rate limiting issues with the HubSpot API"

## Available Tools

### `diagnose_rate_limiting`

Debug API rate limit issues with GTM-specific recommendations.

**Parameters:**
- `api_name` (string, required): Name of the API (e.g., HubSpot, Clay, Instantly)
- `symptoms` (string, required): What's happening (e.g., "429 errors", "slow responses")

**Example prompt:**
```
I'm getting 429 errors from HubSpot when syncing contacts. Can you help diagnose?
```

**Returns:**
- Common causes analysis
- Actionable recommendations
- GTM-specific tips for the API

## Why GTM Wizard?

| Problem | Solution |
|---------|----------|
| GTM infrastructure is complex | Pre-built patterns from production systems |
| Knowledge is scattered | Centralized expertise in one MCP |
| New GTM engineers need ramp time | Instant access to senior-level knowledge |
| AI agents lack GTM context | Purpose-built for GTM workflows |

## Development

```bash
# Install dev dependencies
pip install -e ".[dev]"

# Run all checks
make all

# Individual commands
make test        # Run tests
make lint        # Lint code
make format      # Format code
make type-check  # Type checking
```

### Testing with MCP Inspector

```bash
npx @modelcontextprotocol/inspector python -m gtm_wizard.server
```

## Roadmap

- [ ] Infrastructure architecture prompts
- [ ] Integration pattern library (Clay, Apollo, Instantly)
- [ ] Lead scoring frameworks
- [ ] Email operations knowledge base
- [ ] Multi-channel orchestration patterns

## Contributing

Contributions welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

We're especially looking for:
- Real-world GTM patterns and use cases
- Integration blueprints
- Documentation improvements

## License

MIT License - see [LICENSE](LICENSE) for details.

---

*Built by [Mathew Joseph](https://github.com/MathewJoseph1993) - GTM Engineer at Rwazi*
