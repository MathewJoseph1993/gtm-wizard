"""Tests for GTM Wizard MCP tools."""

import pytest
from mcp.types import TextContent


class TestListTools:
    """Tests for tool listing functionality."""

    @pytest.mark.asyncio
    async def test_list_tools_returns_expected_tools(self, list_tools_handler):
        """Test that list_tools returns all expected tools."""
        tools = await list_tools_handler()

        tool_names = [t.name for t in tools]
        assert "diagnose_rate_limiting" in tool_names

    @pytest.mark.asyncio
    async def test_diagnose_rate_limiting_has_correct_schema(self, list_tools_handler):
        """Test that diagnose_rate_limiting tool has correct input schema."""
        tools = await list_tools_handler()
        tool = next(t for t in tools if t.name == "diagnose_rate_limiting")

        schema = tool.inputSchema
        assert schema["type"] == "object"
        assert "required" in schema
        assert "api_name" in schema["required"]
        assert "symptoms" in schema["required"]
        assert "api_name" in schema["properties"]
        assert "symptoms" in schema["properties"]


class TestDiagnoseRateLimiting:
    """Tests for diagnose_rate_limiting tool."""

    @pytest.mark.asyncio
    async def test_returns_valid_response(self, call_tool_handler, rate_limiting_input):
        """Test tool execution returns valid TextContent."""
        result = await call_tool_handler(
            "diagnose_rate_limiting",
            rate_limiting_input,
        )

        assert len(result) > 0
        assert isinstance(result[0], TextContent)
        assert result[0].type == "text"

    @pytest.mark.asyncio
    async def test_includes_api_name_in_response(self, call_tool_handler, rate_limiting_input):
        """Test that response includes the API name."""
        result = await call_tool_handler(
            "diagnose_rate_limiting",
            rate_limiting_input,
        )

        assert "HubSpot" in result[0].text

    @pytest.mark.asyncio
    async def test_includes_symptoms_in_response(self, call_tool_handler, rate_limiting_input):
        """Test that response includes the symptoms."""
        result = await call_tool_handler(
            "diagnose_rate_limiting",
            rate_limiting_input,
        )

        assert "429 errors" in result[0].text

    @pytest.mark.asyncio
    async def test_includes_actionable_recommendations(
        self, call_tool_handler, rate_limiting_input
    ):
        """Test that response includes actionable recommendations."""
        result = await call_tool_handler(
            "diagnose_rate_limiting",
            rate_limiting_input,
        )

        response_text = result[0].text
        assert "Recommended Actions" in response_text
        assert "exponential backoff" in response_text.lower()

    @pytest.mark.asyncio
    async def test_handles_various_api_names(self, call_tool_handler):
        """Test tool with various API names."""
        test_cases = [
            {"api_name": "Clay", "symptoms": "slow responses"},
            {"api_name": "Instantly", "symptoms": "rate limited"},
            {"api_name": "Custom API", "symptoms": "connection timeouts"},
        ]

        for inputs in test_cases:
            result = await call_tool_handler("diagnose_rate_limiting", inputs)
            assert result is not None
            assert len(result) > 0
            assert inputs["api_name"] in result[0].text

    @pytest.mark.asyncio
    async def test_handles_missing_params_gracefully(self, call_tool_handler):
        """Test tool handles missing parameters with defaults."""
        result = await call_tool_handler(
            "diagnose_rate_limiting",
            {},  # Missing required params
        )

        # Should still return a response (with default values)
        assert len(result) > 0
        assert result[0].type == "text"


class TestUnknownTool:
    """Tests for unknown tool handling."""

    @pytest.mark.asyncio
    async def test_unknown_tool_returns_error(self, call_tool_handler):
        """Test that calling unknown tool returns appropriate message."""
        result = await call_tool_handler(
            "nonexistent_tool",
            {"param": "value"},
        )

        assert len(result) > 0
        assert "Unknown tool" in result[0].text
