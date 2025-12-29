# Session Handoff: December 29, 2025
## GTM Wizard - Combined Vision Defined

**Session Status:** MAJOR MILESTONE - Vision crystallized
**Duration:** Extended strategic session
**Outcome:** Unified platform vision approved and documented

---

## QUICK START FOR NEXT SESSION

```
COPY THIS PROMPT TO START NEXT SESSION:
───────────────────────────────────────

I'm continuing GTM Wizard development from the last session.

## Context
- MAJOR MILESTONE: Combined vision defined and approved (Dec 29, 2025)
- GTM Wizard is now: Open-source AI-powered GTM operating system
- Combines: MCP Server + Dashboard + AI Layer + Memory
- Pricing: Self-hosted FREE, Cloud $5-10/mo

## Read First
1. Session handoff: /Users/gtm-workstation/gtm-wizard/docs/session_handoffs/SESSION_2025-12-29_Vision_Defined.md
2. Vision statement: /Users/gtm-workstation/gtm-wizard/docs/00_vision/VISION_STATEMENT.md
3. Architecture: /Users/gtm-workstation/gtm-wizard/docs/00_vision/ARCHITECTURE.md

## What's Next
1. OSS Stack Research - evaluate database, auth, AI orchestration options
2. MVP Scope Definition - define v0.3 features
3. Monorepo restructuring - move existing code to packages/mcp-server/

## Key Context
- This is for UK Global Talent Visa (OC2 evidence)
- Open source is priority
- Mathew is NOT a coder - uses AI for implementation

Let's continue from where we left off!
```

---

## WHAT HAPPENED THIS SESSION

### 1. Reviewed Clean-Slate Research

- Explored `/Users/gtm-workstation/GTM_Wizard_Research/` (450+ sources)
- Core finding validated: "Founders need CONFIDENCE + CLARITY, not speed"
- Target segment confirmed: Solo Technical Founders, $1-5K MRR
- Form factor: Hybrid model (95/100 effectiveness)

### 2. Identified Tension

Research recommends commercial SaaS ($299/mo, no free tier) but visa requires open-source evidence.

### 3. Explored Options

| Option | Description | Verdict |
|--------|-------------|---------|
| A | Pivot to Hybrid, abandon MCP | ❌ Loses OSS evidence |
| B | MCP as layer inside Hybrid | ⚠️ Complex |
| C | Parallel projects | ❌ Diluted focus |
| D | Reframe MCP purpose | ✅ Partial |
| E | Challenge research | ⚠️ Different question |

### 4. Combined Vision Emerged

**Key insight:** MCP serves AI agents, research serves founders. They're different layers!

**The solution:** Combine them into unified platform:
- MCP = Internal expertise engine
- AI = Coaching layer (BYOK)
- Dashboard = Founder interface
- Memory = Context awareness

### 5. Pricing Model Defined

| Tier | Hosting | Price |
|------|---------|-------|
| Community | Self-hosted | FREE |
| Cloud | Web-hosted | $5-10/mo |

### 6. Folder Structure Approved

**Decision:** Evolve existing gtm-wizard into monorepo (Option A)

```
/gtm-wizard/
├── packages/
│   ├── mcp-server/     ← Existing code
│   ├── dashboard/      ← NEW
│   └── ai-agent/       ← NEW
├── docs/
│   ├── 00_vision/
│   ├── 01_research/
│   ├── 02_planning/
│   └── 03_decisions/
└── docker-compose.yml
```

### 7. Documentation Created

| Document | Location |
|----------|----------|
| Vision Statement | `docs/00_vision/VISION_STATEMENT.md` |
| Architecture | `docs/00_vision/ARCHITECTURE.md` |
| Pricing Model | `docs/00_vision/PRICING_MODEL.md` |
| Novel Contribution | `docs/00_vision/NOVEL_CONTRIBUTION.md` |
| Research Summary | `docs/01_research/RESEARCH_SUMMARY.md` |
| Pain Points | `docs/01_research/PAIN_POINTS.md` |
| Target Segment | `docs/01_research/TARGET_SEGMENT.md` |

---

## KEY STRATEGIC DECISIONS

### 1. Product Vision
> **GTM Wizard: The open-source AI-powered GTM operating system for solo founders**

### 2. Core Value Proposition
> "Stop guessing if it's working. Know you're on track."

### 3. Target Segment
- **Primary:** Solo Technical Founders, $1-5K MRR
- **Why:** 5x higher WTP, 3x faster CAC payback

### 4. Form Factor
- Open-source web app (self-hostable)
- MCP server as internal expertise engine
- BYOK (Bring Your Own Key) for AI
- Memory/context layer for personalization

### 5. Pricing
- Self-hosted: FREE forever
- Cloud-hosted: $5-10/month

### 6. Technology Direction
- Monorepo structure
- Docker for self-hosting
- BYOK architecture (OpenAI, Anthropic, Ollama)
- Memory layer in database

---

## WHAT'S NOVEL

1. **First open-source AI GTM system**
2. **BYOK architecture** - no vendor lock-in on AI
3. **Research-backed** - 450+ sources inform expertise
4. **Tool-agnostic** - connect any GTM tool
5. **Memory/Context aware** - AI remembers your journey

---

## NEXT SESSION PRIORITIES

### Priority 1: OSS Stack Research
Research which open-source projects to build on:
- Database: Supabase vs PocketBase vs SQLite
- Auth: Clerk vs NextAuth vs Lucia
- AI Orchestration: LangChain vs LlamaIndex vs custom
- Frontend: Next.js vs SvelteKit

### Priority 2: MVP Scope Definition
Define what goes into v0.3:
- Core features
- Which tool integration first (Instantly?)
- Minimum viable dashboard

### Priority 3: Monorepo Restructuring
Move existing code to new structure:
- Create packages/ folder
- Move src/gtm_wizard/ to packages/mcp-server/
- Update imports and pyproject.toml

---

## CONTEXT FOR NEXT SESSION

### What Works
- Research foundation is solid (450+ sources)
- Vision is clear and documented
- Folder structure is approved
- Pricing model makes sense

### Open Questions
1. Which OSS stack to use? (needs research)
2. Exact MVP feature set?
3. How to implement memory layer?
4. Timeline for v0.3?

### External References
- Research project: `/Users/gtm-workstation/GTM_Wizard_Research/`
- Old archived docs: `/Users/gtm-workstation/Overseas/_ARCHIVED_V1_DEC2025/`
- Plan file: `/Users/gtm-workstation/.claude/plans/jaunty-tinkering-hollerith.md`

---

## FILES MODIFIED THIS SESSION

### Created
```
/Users/gtm-workstation/gtm-wizard/docs/
├── 00_vision/
│   ├── VISION_STATEMENT.md
│   ├── ARCHITECTURE.md
│   ├── PRICING_MODEL.md
│   └── NOVEL_CONTRIBUTION.md
├── 01_research/
│   ├── RESEARCH_SUMMARY.md
│   ├── PAIN_POINTS.md
│   └── TARGET_SEGMENT.md
└── session_handoffs/
    └── SESSION_2025-12-29_Vision_Defined.md (this file)
```

### Completed After Initial Draft
- ✅ `docs/03_decisions/ADR_001_Combined_Vision.md` - Created
- ✅ `/Users/gtm-workstation/gtm-wizard/CLAUDE.md` - Updated
- ⏳ Update README.md for new vision - Deferred to next session

---

## KEY INSIGHTS FROM THIS SESSION

1. **MCP and Hybrid are complementary, not competing**
   - MCP serves AI agents (the brain)
   - Dashboard serves founders (the interface)

2. **BYOK solves the cost problem**
   - Users pay for their own AI
   - No API costs for us
   - Supports local models too

3. **Open source + Cloud is sustainable**
   - Self-hosted attracts developers
   - Cloud revenue funds development
   - Same codebase = true open source

4. **Research applies to founder layer, not MCP layer**
   - Research is about what founders need
   - MCP is infrastructure for AI
   - Both valid, different purposes

5. **Evolving existing repo preserves evidence**
   - Git history shows growth
   - Single source of truth
   - Stronger visa narrative

---

## VISA RELEVANCE

This session produced significant OC2 evidence:

- **Novel contribution defined:** First open-source AI GTM system
- **Technical depth documented:** Architecture, MCP integration
- **Research foundation:** 450+ sources summarized
- **Clear differentiation:** From existing market solutions

Next steps will further strengthen evidence through:
- Active GitHub development
- Community building
- Potential sponsorships

---

*Session completed: December 29, 2025*
*This was a pivotal session that crystallized the product vision.*
