# GTM Wizard

> **Go-To-Market Engineering expertise for AI agents** (Not Google Tag Manager)

An MCP (Model Context Protocol) server that gives AI agents the knowledge of a senior GTM Engineer. Built from real production systems handling high-velocity lead pipelines.

## What is GTM Engineering?

GTM (Go-To-Market) Engineering is a hybrid discipline combining:
- **Sales automation** - Lead qualification, scoring, routing
- **Infrastructure** - Queue-based processing, API integrations
- **Data orchestration** - Multi-source signal aggregation, enrichment pipelines

This MCP packages that expertise so any AI agent can help you build and operate GTM systems.

## Installation

```bash
pip install gtm-wizard
```

## Quick Start

### With Claude Desktop

Add to your Claude Desktop config (`~/Library/Application Support/Claude/claude_desktop_config.json`):

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

Restart Claude Desktop, then ask:
> "Help me diagnose rate limiting issues with the HubSpot API"

## Features

### Available Tools

| Tool | Description |
|------|-------------|
| `diagnose_rate_limiting` | Debug API rate limit issues with actionable recommendations |

### Coming Soon

- **Infrastructure Architecture** - Queue-based processing patterns, scaling strategies
- **Integration Blueprints** - Clay to CRM flows, multi-channel orchestration
- **Lead Processing** - Qualification logic, scoring frameworks
- **Operational Runbooks** - Debugging, monitoring, recovery procedures

## Why GTM Wizard?

| Problem | Solution |
|---------|----------|
| GTM infrastructure is complex | Pre-built patterns from production systems |
| Knowledge is scattered | Centralized expertise in one MCP |
| New GTM engineers need ramp time | Instant access to senior-level knowledge |
| AI agents lack GTM context | Purpose-built for GTM workflows |

## Roadmap

- [ ] Core infrastructure prompts and tools
- [ ] Integration pattern library
- [ ] Lead processing logic
- [ ] Email operations knowledge base
- [ ] Open source model support (Ollama)

## Contributing

Contributions welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

MIT License - see [LICENSE](LICENSE) for details.

---

*Built by [Mathew Joseph](https://github.com/MathewJoseph1993) - GTM Engineer*
