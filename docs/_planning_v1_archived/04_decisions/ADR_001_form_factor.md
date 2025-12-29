# ADR-001: Form Factor Decision

> **Status:** Pending Research
> **Decision Date:** TBD
> **Last Updated:** December 25, 2024

## Context

GTM Wizard needs to decide on its form factor: how users will interact with it and how it will be distributed.

## Options Considered

### Option A: MCP-Only
- Stay as pure MCP server (current state)
- STDIO transport, works with Claude Desktop, Cursor, etc.
- No web interface

### Option B: SaaS-Only
- Pivot to traditional web app
- REST API + web dashboard
- Abandon MCP approach

### Option C: MCP-First, SaaS Later
- Keep MCP as primary interface
- Add web dashboard in future
- Expand audience over time

### Option D: Hybrid from Start
- Build both MCP and SaaS simultaneously
- Maximum flexibility
- Maximum complexity

## Decision Criteria

| Criterion | Weight | Notes |
|-----------|--------|-------|
| Speed to market | 20% | How fast can we ship? |
| Development cost | 15% | Resource constraints |
| Target user fit | 25% | Does target user adopt this form? |
| Revenue potential | 20% | Can we monetize? |
| Differentiation | 10% | Does this stand out? |
| Visa evidence | 10% | Open source contribution value |

## Research Inputs Needed

Before deciding:
- [ ] Target user technical comfort (from Prompt #2 Persona)
- [ ] MCP adoption in GTM space (from Prompt #3 Market Context)
- [ ] Competitor form factors (from Prompt #8 Competitors)
- [ ] Monetization patterns (from business research)

## Decision

_[To be completed after research]_

**Chosen Option:** _[TBD]_

**Rationale:** _[TBD]_

## Consequences

### Positive
- _[TBD]_

### Negative
- _[TBD]_

### Risks
- _[TBD]_

## Related Decisions
- ADR-002: Target User
- ADR-003: Business Model
