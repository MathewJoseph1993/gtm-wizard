# Session Handoff: December 29, 2025 (Session 2)
## GTM Wizard - OSS Stack Research & Monorepo Restructure

**Session Status:** ALL PRIORITIES COMPLETED
**Duration:** Extended technical session
**Outcome:** Stack decisions made, MVP scoped, monorepo restructured

---

## QUICK START FOR NEXT SESSION

```
COPY THIS PROMPT TO START NEXT SESSION:
───────────────────────────────────────

I'm continuing GTM Wizard development from the Stack Research session.

## Context
- OSS Stack selected: PocketBase + Next.js + LiteLLM
- MVP v0.3 scope defined
- Monorepo restructure complete (packages/ folder)
- All 50 tests pass (84.45% coverage)

## Read First
1. OSS Stack Research: /Users/gtm-workstation/gtm-wizard/docs/02_planning/OSS_STACK_RESEARCH.md
2. MVP Scope: /Users/gtm-workstation/gtm-wizard/docs/02_planning/MVP_SCOPE.md
3. This handoff: /Users/gtm-workstation/gtm-wizard/docs/session_handoffs/SESSION_2025-12-29_Stack_and_Restructure.md

## Current Branch
Branch: refactor/monorepo-structure (ready to merge to main)

## What's Next
1. Merge restructure branch to main
2. Begin MVP implementation (Phase 1: Foundation)
   - Set up PocketBase locally
   - Create Next.js dashboard shell
   - Implement PocketBase auth

## Key Context
- This is for UK Global Talent Visa (OC2 evidence)
- Mathew is NOT a coder - uses AI for implementation
- Stack chosen for AI-assisted development friendliness

Let's continue!
```

---

## WHAT HAPPENED THIS SESSION

### 1. OSS Stack Research (Priority 1)

Evaluated and selected technologies for each layer:

| Layer | Selected | Alternatives Considered |
|-------|----------|------------------------|
| **Database** | PocketBase | Supabase, SQLite raw |
| **Auth** | PocketBase built-in | NextAuth, Lucia (deprecated), Clerk |
| **AI Orchestration** | LiteLLM | LangChain, LlamaIndex, custom |
| **Frontend** | Next.js + shadcn/ui | SvelteKit |

**Key insight:** PocketBase eliminates the need for separate auth, reducing complexity.

**Output:** `docs/02_planning/OSS_STACK_RESEARCH.md`

---

### 2. MVP Scope Definition (Priority 2)

Defined v0.3 features based on research:

**Critical Features:**
- Traffic Light Dashboard (RED/YELLOW/GREEN signals)
- Streak Visualizer (persistence tracking)
- Day 21 Breakthrough Module
- Basic AI Coaching (BYOK via LiteLLM)
- Instantly Integration (first tool)
- Self-Hosted Docker Deployment

**Deferred to v0.4+:**
- Apollo integration, CRM integration
- Team features, community features
- Mobile app, advanced analytics

**Output:** `docs/02_planning/MVP_SCOPE.md`

---

### 3. Tool API Strategy (User Insight)

Documented user's idea for dynamic API monitoring:

- Track changelog/updates from integrated tools
- Graceful degradation when APIs break
- Proactive alerts for breaking changes

**Output:** `docs/02_planning/TOOL_API_STRATEGY.md`

---

### 4. Monorepo Restructure (Priority 3)

Successfully restructured codebase:

**Before:**
```
gtm-wizard/
├── src/gtm_wizard/
└── tests/
```

**After:**
```
gtm-wizard/
├── packages/
│   ├── mcp-server/     ← Existing code (moved)
│   │   ├── src/gtm_wizard/
│   │   ├── tests/
│   │   └── pyproject.toml
│   ├── dashboard/      ← Placeholder (Next.js)
│   └── ai-agent/       ← Placeholder (Python + LiteLLM)
├── pyproject.toml      ← Updated for monorepo
└── Makefile            ← Updated paths
```

**Verification:**
- All 50 tests pass
- 84.45% code coverage
- Lint and type-check pass
- Git history preserved (renames tracked)

**Branch:** `refactor/monorepo-structure`

---

## RECOMMENDED STACK SUMMARY

```
┌─────────────────────────────────────────────────────────────┐
│  GTM WIZARD TECH STACK (APPROVED)                           │
│                                                             │
│  FRONTEND: Next.js 15 + shadcn/ui + Tailwind CSS            │
│  └── Why: Largest ecosystem, best AI assistance             │
│                                                             │
│  BACKEND: PocketBase (single binary)                        │
│  ├── SQLite database                                        │
│  ├── Built-in auth (email + OAuth)                          │
│  └── REST API + real-time                                   │
│  └── Why: Zero-config, truly self-hosted                    │
│                                                             │
│  AI LAYER: LiteLLM                                          │
│  ├── OpenAI, Anthropic, Ollama support                      │
│  └── Unified API (BYOK)                                     │
│  └── Why: Perfect for multi-provider BYOK                   │
│                                                             │
│  MCP SERVER: Python + FastMCP (existing)                    │
│  └── GTM expertise, benchmarks, coaching templates          │
│                                                             │
│  DEPLOYMENT: Docker Compose                                 │
│  └── One-command self-hosting                               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## FILES CREATED/MODIFIED THIS SESSION

### Created
```
docs/02_planning/
├── OSS_STACK_RESEARCH.md      ← Stack evaluation and recommendations
├── MVP_SCOPE.md               ← v0.3 feature scope
└── TOOL_API_STRATEGY.md       ← API monitoring strategy

packages/
├── mcp-server/
│   ├── src/gtm_wizard/        ← Moved from src/
│   ├── tests/                 ← Moved from tests/
│   └── pyproject.toml         ← Package-level config
├── dashboard/
│   └── README.md              ← Placeholder
└── ai-agent/
    └── README.md              ← Placeholder
```

### Modified
```
pyproject.toml                 ← Updated paths for monorepo
Makefile                       ← Updated with package path variables
```

---

## NEXT SESSION PRIORITIES

### Priority 1: Merge Restructure Branch
```bash
cd /Users/gtm-workstation/gtm-wizard
git checkout main
git merge refactor/monorepo-structure
git push origin main
```

### Priority 2: Begin MVP Implementation (Phase 1)

**Week 1 Tasks:**
1. Set up PocketBase locally with schema
2. Create Next.js dashboard shell with shadcn
3. Implement PocketBase auth (login, signup)

**Commands to start:**
```bash
# PocketBase
cd packages/dashboard
# Create Next.js app here

# Or download PocketBase
wget https://github.com/pocketbase/pocketbase/releases/...
./pocketbase serve
```

### Priority 3: Update README for New Vision
The main README.md still describes the old MCP-only vision. Should be updated to reflect the full platform.

---

## OPEN QUESTIONS FOR NEXT SESSION

1. **PocketBase vs Supabase for cloud tier?**
   - MVP uses PocketBase (local-first)
   - Cloud tier might benefit from Supabase (managed)

2. **Instantly API key security?**
   - How to encrypt API keys in PocketBase?
   - What encryption library for Python?

3. **Dashboard-first or AI-first?**
   - Start with static dashboard (mock data)?
   - Or start with AI coaching (real LiteLLM)?

---

## GIT STATUS

```
Branch: refactor/monorepo-structure
Status: Ready to merge to main
Commits ahead of main: 1

Last commit:
refactor: Restructure to monorepo with packages/ layout
```

---

## CONTEXT FOR VISA

This session produced significant technical evidence:

- **Architecture decisions documented:** Stack research with rationale
- **MVP scope defined:** Clear feature set for v0.3
- **Codebase restructured:** Monorepo ready for multi-package development
- **All tests passing:** Quality maintained during restructure

---

*Session completed: December 29, 2025*
*This session completed all three priorities: Stack Research, MVP Scope, Monorepo Restructure*
