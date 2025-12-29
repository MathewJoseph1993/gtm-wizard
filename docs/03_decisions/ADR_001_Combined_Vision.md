# ADR-001: Combined Vision for GTM Wizard

**Status:** Accepted
**Date:** December 29, 2025
**Decision Makers:** Mathew Joseph, Claude (AI Assistant)

---

## Context

GTM Wizard began as an MCP (Model Context Protocol) server that packages Go-To-Market expertise for AI agents. Version 0.2.1 was shipped to PyPI.

Separately, comprehensive market research (450+ sources) was conducted to understand founder GTM pain points. This research recommended a "Hybrid" solution (Tool + Course + Community + Coaching) priced at $299/mo with no free tier.

A tension emerged:
- **Research recommends:** Commercial SaaS product
- **Visa requires:** Open-source evidence for UK Global Talent Visa (OC2)
- **Existing project:** MCP server (pure tool, 20/100 effectiveness per research)

We needed to decide how to proceed.

---

## Decision

**Combine MCP server + AI-powered dashboard + memory layer into a unified open-source platform.**

The product becomes:
> **GTM Wizard: An open-source AI-powered GTM operating system for solo founders**

With pricing:
- Self-hosted (Docker): **FREE forever**
- Web-hosted (Cloud): **$5-10/month**

---

## Options Considered

### Option A: Pivot to Hybrid, Abandon MCP
- Archive MCP server
- Build commercial SaaS per research
- **Rejected:** Loses open-source evidence, different tech stack

### Option B: MCP as Layer Inside Hybrid
- Keep MCP as intelligence engine
- Add dashboard, community, coaching
- **Partially accepted:** MCP becomes internal component

### Option C: Parallel Projects
- MCP stays separate open-source
- Build commercial product separately
- **Rejected:** Diluted focus, two projects to maintain

### Option D: Reframe MCP Purpose
- MCP serves AI agents
- Research applies to founders
- They're different layers
- **Accepted:** Informed the combined approach

### Option E: Challenge the Research
- Research was for founder-facing product
- MCP serves different user
- **Insight used:** Research answers different question, not wrong

---

## Rationale

### 1. They're Complementary, Not Competing

| Layer | Serves | Provides |
|-------|--------|----------|
| MCP Server | AI agents | GTM expertise |
| Dashboard | Founders | User interface |
| AI Layer | Both | Coaching generation |
| Memory | Both | Context awareness |

The research is valid for the founder-facing layer. The MCP is valid for the AI layer. Both can exist in one product.

### 2. Open Source + Cloud is Proven

Many successful projects use this model:
- n8n: Self-host free, cloud from $20/mo
- Cal.com: Self-host free, cloud from $15/mo
- Supabase: Self-host free, cloud with tiers

This preserves open-source evidence while enabling sustainability.

### 3. BYOK Solves Economics

Users bring their own AI API keys:
- No AI costs for us
- User controls their spend
- Supports local models (Ollama)
- No vendor lock-in

### 4. Evolution Preserves Evidence

Evolving the existing gtm-wizard repo:
- Preserves GitHub history
- Shows continuous development
- Single source of truth
- Stronger visa narrative

---

## Consequences

### Positive
- Clear product vision
- Open-source requirement met
- Commercial sustainability possible
- Research insights incorporated
- Single codebase to maintain

### Negative
- More complex than pure MCP server
- Requires frontend development
- Memory layer adds complexity
- Need to restructure existing code

### Neutral
- PyPI package continues to work (as mcp-server package)
- Research project remains as reference
- New documentation structure

---

## Implementation Plan

### Phase 1: Documentation (This Session)
- ✅ Vision statement
- ✅ Architecture documentation
- ✅ Pricing model
- ✅ Research summary

### Phase 2: Restructuring
- [ ] Create packages/ folder
- [ ] Move existing code to packages/mcp-server/
- [ ] Create packages/dashboard/ and packages/ai-agent/
- [ ] Update CLAUDE.md

### Phase 3: OSS Stack Research
- [ ] Evaluate database options
- [ ] Evaluate auth options
- [ ] Evaluate AI orchestration options
- [ ] Evaluate frontend framework

### Phase 4: MVP Build
- [ ] Define MVP scope
- [ ] Build basic dashboard
- [ ] Integrate MCP expertise
- [ ] Implement BYOK AI

---

## References

- Research Project: `/Users/gtm-workstation/GTM_Wizard_Research/`
- Plan File: `/Users/gtm-workstation/.claude/plans/jaunty-tinkering-hollerith.md`
- Vision Statement: `/Users/gtm-workstation/gtm-wizard/docs/00_vision/VISION_STATEMENT.md`

---

*This ADR documents a pivotal decision in GTM Wizard's evolution from MCP server to unified platform.*
