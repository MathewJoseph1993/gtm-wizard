# Next Session Prompt for GTM Wizard

**Copy and paste this entire prompt to start your next session:**

---

```
I'm continuing GTM Wizard development from a major milestone session on December 29, 2025.

## CRITICAL CONTEXT

### What GTM Wizard Is
GTM Wizard is an **open-source AI-powered GTM operating system** for solo founders.
- Vision: "Stop guessing if it's working. Know you're on track."
- Pricing: Self-hosted FREE, Cloud $5-10/month
- Target: Solo Technical Founders at $1-5K MRR
- Architecture: MCP Server (expertise) + Dashboard + AI Layer (BYOK) + Memory

### What Was Accomplished Last Session
1. ✅ Reviewed 450+ source clean-slate research from /Users/gtm-workstation/GTM_Wizard_Research/
2. ✅ Resolved tension between research (commercial SaaS) and visa (open source)
3. ✅ Defined combined vision: MCP + Dashboard + AI + Memory
4. ✅ Approved monorepo structure: evolve existing gtm-wizard folder
5. ✅ Created comprehensive documentation (11 files)
6. ✅ Audited all docs for consistency and fixed gaps

### Key Decisions Made
- **Folder Structure:** Evolve /Users/gtm-workstation/gtm-wizard/ into monorepo with packages/
- **Pricing:** Self-hosted FREE, Cloud $5-10/mo (BYOK for AI)
- **Target:** Solo Technical Founders, $1-5K MRR (not pre-revenue)
- **Form Factor:** Hybrid (Tool + Course + Community + Coaching) via AI coaching layer

## FILES TO READ FIRST

1. **Session Handoff (comprehensive):**
   /Users/gtm-workstation/gtm-wizard/docs/session_handoffs/SESSION_2025-12-29_Vision_Defined.md

2. **Vision Statement:**
   /Users/gtm-workstation/gtm-wizard/docs/00_vision/VISION_STATEMENT.md

3. **Architecture:**
   /Users/gtm-workstation/gtm-wizard/docs/00_vision/ARCHITECTURE.md

4. **Project Instructions:**
   /Users/gtm-workstation/gtm-wizard/CLAUDE.md

## WHAT NEEDS TO BE DONE THIS SESSION

### Priority 1: OSS Stack Research
Research and document which open-source projects to build on:
- **Database:** Supabase vs PocketBase vs SQLite
- **Auth:** Clerk vs NextAuth vs Lucia vs custom
- **AI Orchestration:** LangChain vs LlamaIndex vs custom
- **Frontend Framework:** Next.js + shadcn vs SvelteKit vs other

Output: /Users/gtm-workstation/gtm-wizard/docs/02_planning/OSS_STACK_RESEARCH.md

### Priority 2: MVP Scope Definition
Define what goes into v0.3:
- Core features for minimum viable product
- Which tool integration first (Instantly recommended)
- Minimum viable dashboard features
- Basic MCP knowledge base requirements

Output: /Users/gtm-workstation/gtm-wizard/docs/02_planning/MVP_SCOPE.md

### Priority 3: Monorepo Restructuring (If Time)
Begin restructuring the codebase:
- Create packages/ folder
- Move src/gtm_wizard/ to packages/mcp-server/
- Update imports and pyproject.toml
- Keep existing tests passing

## IMPORTANT CONSTRAINTS

1. **Visa Context:** This is OC2 evidence for UK Global Talent Visa - open source is priority
2. **User Profile:** Mathew is NOT a coder - uses AI for implementation
3. **Commit Rules:** NO AI attribution, NO Co-Authored-By Claude lines
4. **Terminology:** Avoid Cannonball GTM terms in public code (PVP, EDP, PQS, etc.)

## RESEARCH SOURCE REFERENCE

The clean-slate market research is at:
/Users/gtm-workstation/GTM_Wizard_Research/

Key files:
- 01_validated_insights/05_Synthesis/PHASE_2_MASTER_SYNTHESIS_2025-12-29.md
- 01_validated_insights/01_Gemini_Research/phase3a_mvp_definition_2025-12-29.md

## QUICK REFERENCE

| Item | Value |
|------|-------|
| Core Finding | "Founders need confidence + clarity, not speed" |
| Target | Solo Technical Founders, $1-5K MRR |
| Pricing | FREE self-hosted, $5-10/mo cloud |
| Form Factor | Hybrid via AI coaching layer |
| Primary Pain | Persistence Gap (70% quit before Day 21) |
| Key Metric | Traffic Light signals (RED/YELLOW/GREEN) |

Let's start with Priority 1: OSS Stack Research. Please read the session handoff file first to get full context.
```

---

## How to Use This Prompt

1. Start a new Claude Code session
2. Copy the entire prompt above (everything between the ``` marks)
3. Paste it as your first message
4. Claude will have full context to continue seamlessly

## Files Created This Session

| File | Purpose |
|------|---------|
| `docs/00_vision/VISION_STATEMENT.md` | Core vision and principles |
| `docs/00_vision/ARCHITECTURE.md` | System architecture |
| `docs/00_vision/PRICING_MODEL.md` | Pricing strategy |
| `docs/00_vision/NOVEL_CONTRIBUTION.md` | Visa evidence (OC2) |
| `docs/01_research/RESEARCH_SUMMARY.md` | 450+ source summary |
| `docs/01_research/PAIN_POINTS.md` | 5 ranked pain points |
| `docs/01_research/TARGET_SEGMENT.md` | Target user analysis |
| `docs/03_decisions/ADR_001_Combined_Vision.md` | Why combined approach |
| `docs/session_handoffs/SESSION_2025-12-29_Vision_Defined.md` | Full session context |
| `CLAUDE.md` | Project instructions |

## Session Statistics

- **Documents Created:** 11
- **Gaps Fixed:** 5 (after audit)
- **Vision Status:** Defined and documented
- **Next Milestone:** OSS Stack Research
