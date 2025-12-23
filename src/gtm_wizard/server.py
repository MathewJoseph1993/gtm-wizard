"""GTM Wizard MCP Server - Go-To-Market Engineering expertise for AI agents."""

from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.types import TextContent, Tool

# Create the MCP server instance
server = Server("gtm-wizard")


@server.list_tools()
async def list_tools() -> list[Tool]:
    """List available GTM engineering tools."""
    return [
        Tool(
            name="diagnose_rate_limiting",
            description="Diagnose API rate limiting issues in your GTM infrastructure. "
            "Provide the API name and symptoms to get actionable recommendations.",
            inputSchema={
                "type": "object",
                "properties": {
                    "api_name": {
                        "type": "string",
                        "description": "Name of the API (e.g., HubSpot, Clay, Instantly)",
                    },
                    "symptoms": {
                        "type": "string",
                        "description": "Describe what's happening (e.g., '429 errors', 'slow responses')",
                    },
                },
                "required": ["api_name", "symptoms"],
            },
        ),
    ]


@server.call_tool()
async def call_tool(name: str, arguments: dict) -> list[TextContent]:
    """Handle tool calls."""
    if name == "diagnose_rate_limiting":
        api_name = arguments.get("api_name", "Unknown API")
        symptoms = arguments.get("symptoms", "No symptoms provided")

        # GTM Engineering expertise for rate limiting
        diagnosis = f"""## Rate Limiting Diagnosis: {api_name}

**Symptoms reported:** {symptoms}

### Common Causes
1. **Exceeding API limits** - Check the API's rate limit headers
2. **Burst traffic** - Too many requests in a short window
3. **Missing backoff logic** - No exponential retry strategy

### Recommended Actions
1. **Check rate limit headers** in API responses (X-RateLimit-Remaining)
2. **Implement exponential backoff** - Start with 1s delay, double on each retry
3. **Add request queuing** - Use a queue (Redis/BullMQ) to throttle requests
4. **Monitor with logging** - Track 429 responses to identify patterns

### GTM-Specific Tips for {api_name}
- Consider batch endpoints if available
- Spread requests across time windows
- Cache responses where possible to reduce API calls

*This diagnosis is powered by GTM Wizard - real-world GTM engineering expertise.*
"""
        return [TextContent(type="text", text=diagnosis)]

    return [TextContent(type="text", text=f"Unknown tool: {name}")]


async def main():
    """Run the GTM Wizard MCP server."""
    async with stdio_server() as (read_stream, write_stream):
        await server.run(
            read_stream,
            write_stream,
            server.create_initialization_options(),
        )


if __name__ == "__main__":
    import asyncio

    asyncio.run(main())
