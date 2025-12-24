"""Pytest configuration for GTM Wizard MCP server testing."""

import pytest

# Import the decorated handler functions directly
from gtm_wizard.server import call_tool, list_tools


@pytest.fixture
def list_tools_handler():
    """Fixture providing the list_tools handler."""
    return list_tools


@pytest.fixture
def call_tool_handler():
    """Fixture providing the call_tool handler."""
    return call_tool


@pytest.fixture
def rate_limiting_input():
    """Fixture providing sample rate limiting diagnosis input."""
    return {
        "api_name": "HubSpot",
        "symptoms": "Getting 429 errors when syncing contacts",
    }
