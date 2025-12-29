# GTM Wizard - Archive Notice

**Date:** December 29, 2025
**Status:** On Hold
**Decision:** Focus on contributing to DataGen instead

---

## Why Paused

After an architecture review, I identified several issues:

1. **Scope creep** - Started as MCP server, expanded to platform (dashboard, database, AI layer)
2. **Foundation gaps** - MCP tools provide frameworks but lack encoded expertise
3. **Over-engineering** - Multi-language stack (Python + TypeScript + Go binary) adds complexity
4. **Unclear value** - Tools say "configure yourself" rather than providing opinionated guidance

## What's Still Working

The MCP server (v0.2.1) is available on PyPI and functional:

```bash
pip install gtm-wizard
```

**Tools available:**
- `score_lead` - Lead scoring with breakdown
- `classify_role` - Job title classification
- `classify_industry` - Industry tier classification
- `determine_routing` - Lead routing recommendations
- `check_disqualification` - Disqualification flag checking

## What's Not Happening

The following planned features are not being developed:

- Dashboard (Next.js)
- PocketBase integration
- LiteLLM AI layer
- Cloud hosting at gtmwizard.io
- Docker Compose deployment

## New Focus

Contributing to [DataGen](https://github.com/datagendev), an MCP platform for building AI agent automations. DataGen solves similar problems with a more mature architecture.

## May Resume If

- DataGen contribution goals are met
- Clear differentiation from DataGen emerges
- Specific user demand arises

## What Was Learned

1. Start with working software, not architecture diagrams
2. Encode actual expertise, not generic frameworks
3. Simpler is better for solo development
4. Contributing to existing projects can be more impactful than starting from scratch

---

*This project remains MIT licensed. Feel free to fork or use the MCP server.*
