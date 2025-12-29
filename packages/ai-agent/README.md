# GTM Wizard AI Agent

Python AI orchestration layer using LiteLLM for BYOK multi-provider support.

**Status:** Placeholder - implementation in v0.3

## Planned Stack

- Python 3.10+
- LiteLLM (unified AI provider API)
- MCP client (connects to mcp-server)
- PocketBase SDK (user context)

## Features (MVP)

- BYOK (Bring Your Own Key) for OpenAI, Anthropic, Ollama
- Context retrieval from PocketBase
- MCP integration for GTM expertise
- Coaching response generation

## Development

```bash
# Coming soon
cd packages/ai-agent
uv sync
uv run python -m ai_agent
```
