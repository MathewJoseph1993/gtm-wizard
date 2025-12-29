---
name: gtm-wizard-architecture
description: GTM Wizard project architecture, tech stack, and development patterns. Use when working on GTM Wizard features, understanding the codebase, or making architectural decisions. Includes monorepo structure, PocketBase schema, and checklist for code changes.
---

# GTM Wizard Architecture Guide

## Project Overview

**GTM Wizard** is an open-source AI-powered GTM operating system for solo founders.

- **Vision:** "Stop guessing if it's working. Know you're on track."
- **Target:** Solo Technical Founders, $1-5K MRR
- **Pricing:** Self-hosted FREE, Cloud $5-10/mo

## Tech Stack (Approved December 2025)

| Layer | Technology | Why |
|-------|------------|-----|
| **Frontend** | Next.js 16 + shadcn/ui + Tailwind | Largest ecosystem, best AI assistance |
| **Backend/DB** | PocketBase (single binary) | Zero-config, truly self-hosted |
| **AI Layer** | LiteLLM | BYOK, 100+ providers |
| **MCP Server** | Python + FastMCP | GTM expertise tools |
| **Deployment** | Docker Compose | One-command self-hosting |

## Monorepo Structure

```
gtm-wizard/
├── packages/
│   ├── mcp-server/           # Python MCP server (existing)
│   │   ├── src/gtm_wizard/
│   │   └── tests/
│   ├── dashboard/            # Next.js frontend
│   │   └── src/
│   └── ai-agent/             # Python AI layer (placeholder)
├── pocketbase/               # PocketBase binary + data
│   ├── pb_schema.json
│   └── pb_data/ (gitignored)
├── docs/
│   ├── 00_vision/
│   ├── 01_research/
│   ├── 02_planning/
│   └── session_handoffs/
├── .github/workflows/        # CI/CD
└── pyproject.toml            # Root config
```

## PocketBase Collections

| Collection | Purpose | Key Fields |
|------------|---------|------------|
| `users` | Auth (built-in) | email, password, name |
| `api_keys` | AI provider keys | user, provider, key_encrypted |
| `tool_connections` | Instantly/Apollo | user, tool, credentials_encrypted, status |
| `daily_metrics` | Campaign data | user, date, emails_sent, opens, replies, source |
| `chat_history` | AI conversations | user, session_id, role, content |
| `user_settings` | Preferences | user, onboarding_completed, timezone, streak_start_date |

## Core MVP Features (v0.3)

1. **Traffic Light Dashboard** - RED/YELLOW/GREEN signals
2. **Streak Visualizer** - GitHub-style activity graph
3. **Day 21 Breakthrough** - Educational module
4. **Basic AI Coaching** - BYOK chat interface
5. **Instantly Integration** - First tool connection
6. **Self-Hosted Docker** - One-command deployment

## Traffic Light Logic

```
RED (Critical):
- Open rate < 25% → "Deliverability risk"
- Bounce rate > 8% → "Clean your list"

YELLOW (Needs attention):
- Open rate > 40% AND reply rate < 2% → "Good opens, weak offer"
- Reply rate < 2% → "Below benchmark"

GREEN (On track):
- Reply rate > 6% → "Top 10% performance"
- Reply rate >= 2% → "Hitting benchmarks"
```

## Development Checklist

### Before Any Code Change:
- [ ] Understand the affected package (mcp-server, dashboard, ai-agent)
- [ ] Check if change affects multiple packages
- [ ] Review existing patterns in that package

### After Restructuring/Moving Files:
- [ ] Update `.github/workflows/ci.yml` paths
- [ ] Update `pyproject.toml` if Python paths changed
- [ ] Update `Makefile` if command paths changed
- [ ] Run `make test` locally before pushing
- [ ] Update `CLAUDE.md` if structure changed

### After Adding New Features:
- [ ] Add tests for new functionality
- [ ] Update relevant documentation
- [ ] Create session handoff if significant work

### Before Pushing:
- [ ] Run linter: `ruff check packages/mcp-server/src packages/mcp-server/tests`
- [ ] Run type check: `mypy packages/mcp-server/src`
- [ ] Run tests: `pytest packages/mcp-server/tests`
- [ ] Dashboard builds: `cd packages/dashboard && npm run build`

## Key File Locations

| What | Where |
|------|-------|
| MCP Server entry | `packages/mcp-server/src/gtm_wizard/server.py` |
| Dashboard pages | `packages/dashboard/src/app/` |
| Traffic Light | `packages/dashboard/src/components/TrafficLight.tsx` |
| Auth Context | `packages/dashboard/src/contexts/AuthContext.tsx` |
| PocketBase client | `packages/dashboard/src/lib/pocketbase.ts` |
| CI workflow | `.github/workflows/ci.yml` |
| Session handoffs | `docs/session_handoffs/` |

## Environment Variables

### Dashboard (.env.local)
```
NEXT_PUBLIC_POCKETBASE_URL=http://127.0.0.1:8090
```

### PocketBase Admin
```
URL: http://127.0.0.1:8090/_/
Email: admin@gtmwizard.local
Password: admin123456
```

## Starting Development

```bash
# Terminal 1: PocketBase
cd pocketbase && ./pocketbase serve

# Terminal 2: Dashboard
cd packages/dashboard && npm run dev

# Terminal 3: MCP Server (if needed)
cd packages/mcp-server && uv run gtm-wizard
```

## Commit Guidelines

- **NO** AI attribution in commits
- **NO** Co-Authored-By lines
- Use conventional commits: `feat:`, `fix:`, `docs:`, `refactor:`

## Public Code Terminology

Avoid Cannonball GTM terms:
- Use "Insight-Led Outreach" (not PVP)
- Use "Decision Trigger" (not EDP)
- Use "High-Intent Segment" (not PQS)
