# GTM Wizard Architecture

**Version:** 1.0
**Date:** December 29, 2025
**Status:** Approved

---

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│  GTM WIZARD - OPEN SOURCE AI GTM PLATFORM                       │
│                                                                 │
│  USER CONNECTS:                                                 │
│  ├── Their GTM Tools (Instantly, Apollo, CRM) via API keys      │
│  └── Their AI Model (OpenAI/Anthropic/Ollama) via BYOK          │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  MEMORY/CONTEXT LAYER                                     │ │
│  │  - User profile, stage, goals                             │ │
│  │  - Conversation history                                   │ │
│  │  - Analysis history, personal benchmarks                  │ │
│  └───────────────────────────────────────────────────────────┘ │
│                           │                                     │
│                           ▼                                     │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  GTM EXPERTISE ENGINE (MCP - Internal)                    │ │
│  │  - Tool taxonomy (what each tool does)                    │ │
│  │  - Benchmark data (what's "good" at each stage)           │ │
│  │  - Analysis frameworks (RED/YELLOW/GREEN logic)           │ │
│  │  - Coaching templates                                     │ │
│  └───────────────────────────────────────────────────────────┘ │
│                           │                                     │
│                           ▼                                     │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  USER'S AI MODEL (BYOK - Bring Your Own Key)              │ │
│  │  - OpenAI / Anthropic / Local Ollama / Open Source LLMs   │ │
│  │  - Uses MCP expertise + context + memory                  │ │
│  │  - Generates personalized coaching                        │ │
│  └───────────────────────────────────────────────────────────┘ │
│                           │                                     │
│                           ▼                                     │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  DASHBOARD (Web App)                                      │ │
│  │  - Traffic lights (RED/YELLOW/GREEN)                      │ │
│  │  - "You're on track" signals                              │ │
│  │  - AI coaching chat                                       │ │
│  │  - Progress over time                                     │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
│  DEPLOYMENT OPTIONS:                                            │
│  ├── Self-hosted (Docker) - FREE                                │
│  └── Web-hosted (gtmwizard.io) - $5-10/month                    │
│                                                                 │
│  LICENSE: MIT (100% open source)                                │
└─────────────────────────────────────────────────────────────────┘
```

---

## Monorepo Structure

```
/gtm-wizard/
│
├── packages/
│   ├── mcp-server/              # GTM Expertise Engine (Python)
│   │   ├── src/gtm_wizard/
│   │   │   ├── server.py        # MCP server entry point
│   │   │   ├── tools/           # Analysis tools
│   │   │   └── resources/       # Knowledge base, benchmarks
│   │   ├── tests/
│   │   └── pyproject.toml       # Publishable to PyPI
│   │
│   ├── dashboard/               # Web Frontend (TBD: Next.js/SvelteKit)
│   │   ├── src/
│   │   │   ├── components/      # UI components
│   │   │   ├── pages/           # Routes
│   │   │   └── lib/             # Utilities
│   │   └── package.json
│   │
│   └── ai-agent/                # AI Orchestration Layer (Python)
│       ├── src/
│       │   ├── orchestrator.py  # Manages AI calls
│       │   ├── memory.py        # Context management
│       │   └── providers/       # OpenAI, Anthropic, Ollama adapters
│       └── pyproject.toml
│
├── docs/                        # Documentation
│   ├── 00_vision/
│   ├── 01_research/
│   ├── 02_planning/
│   ├── 03_decisions/
│   └── session_handoffs/
│
├── docker-compose.yml           # One-command self-hosting
├── Dockerfile
├── README.md
├── CLAUDE.md
├── LICENSE                      # MIT
├── CONTRIBUTING.md
└── CHANGELOG.md
```

---

## Component Details

### 1. GTM Expertise Engine (MCP Server)

**Purpose:** The "brain" of GTM Wizard - packages GTM expertise for AI consumption.

**Capabilities:**
- Tool taxonomy (knows what Instantly vs Apollo vs CRM does)
- Benchmark data (what's "good" at each stage)
- Analysis frameworks (when to show RED/YELLOW/GREEN)
- Coaching templates (how to phrase advice)

**Interface:** MCP (Model Context Protocol) - can be used standalone or as internal component.

**Location:** `packages/mcp-server/`

---

### 2. Memory/Context Layer

**Purpose:** Gives AI context awareness - remembers who the user is and what's happened.

**Stores:**
- User profile (stage, goals, tools used)
- Conversation history (past coaching chats)
- Analysis history (past campaign analyses)
- Personal benchmarks (their metrics over time)

**Implementation:** Database (Supabase/SQLite) + context retrieval for AI prompts.

**Location:** Integrated into `packages/ai-agent/`

---

### 3. AI Agent Layer

**Purpose:** Orchestrates AI calls using MCP expertise + user context.

**Responsibilities:**
- Manages BYOK connections (OpenAI, Anthropic, Ollama)
- Retrieves relevant context from memory
- Calls MCP tools for expertise
- Generates personalized coaching responses

**Key Pattern:** AI receives: User context + MCP expertise + Current data → Generates: Personalized coaching

**Location:** `packages/ai-agent/`

---

### 4. Dashboard (Web App)

**Purpose:** User-facing interface for GTM Wizard.

**Features:**
- Connect tools (API key management)
- Connect AI (BYOK configuration)
- Traffic lights (RED/YELLOW/GREEN status)
- AI coaching chat
- Progress visualization

**Tech Stack:** TBD (Next.js + shadcn/ui or SvelteKit recommended)

**Location:** `packages/dashboard/`

---

## Data Flow

### Flow 1: Tool Connection

```
User → Dashboard → API Key Validation → Tool Taxonomy Check → Database
                                              ↓
                                   Categorize tool type
                                   (email, enrichment, CRM, etc.)
```

### Flow 2: Campaign Analysis

```
User clicks "Analyze" → Dashboard → Backend API
                                        ↓
                           Fetch data from connected tools
                                        ↓
                           AI Agent calls MCP tools
                           (with user context from memory)
                                        ↓
                           Generate analysis + coaching
                                        ↓
                           Display traffic lights + advice
```

### Flow 3: AI Coaching Chat

```
User asks question → Dashboard → AI Agent
                                     ↓
                      Retrieve user context from memory
                                     ↓
                      Call MCP for relevant expertise
                                     ↓
                      Generate response via user's AI
                                     ↓
                      Store in conversation history
                                     ↓
                      Display response
```

---

## Tool Taxonomy

The system categorizes connected tools to understand their role:

| Category | Purpose | Example Tools | Data Available |
|----------|---------|---------------|----------------|
| **Email Outreach** | Send cold emails | Instantly, Smartlead, Lemlist | Opens, replies, bounces |
| **Data Enrichment** | Find/verify leads | Apollo, Clay, ZoomInfo | Lead scores, validity |
| **CRM** | Track deals | HubSpot, Folk, Pipedrive | Stages, activities |
| **Scheduling** | Book meetings | Calendly, Cal.com | Meetings booked |
| **LinkedIn** | Social outreach | Dripify, Expandi | Connection rates |

---

## Traffic Light Algorithm

The core "you're on track" signal:

```
RED Signal:
  Condition: Open Rate < 25%
  Message: "Deliverability risk. Stop sending. Check SPF/DKIM."

YELLOW Signal:
  Condition: Open Rate > 40% AND Reply Rate < 2%
  Message: "Good attention, but weak offer. Refine your CTA."

GREEN Signal:
  Condition: Reply Rate > 6%
  Message: "Top 10% performance. You're on track. Scale volume."
```

---

## Deployment Options

### Option 1: Self-Hosted (Docker)

```bash
# One-command deployment
docker-compose up -d
```

- **Cost:** FREE
- **API Keys:** Stored locally
- **Data:** User controls
- **Updates:** Manual

### Option 2: Web-Hosted (Cloud)

- **Cost:** $5-10/month
- **API Keys:** Encrypted in our database
- **Data:** We manage backups
- **Updates:** Automatic

---

## Security Considerations

1. **API Key Storage:**
   - Self-hosted: Local environment variables
   - Cloud: Encrypted at rest, accessed only for API calls

2. **Data Privacy:**
   - Self-hosted with SQLite: All data stays 100% local
   - Self-hosted with Supabase: Data in Supabase cloud (user's own account)
   - Cloud (hosted by us): Data isolated per user, not used for training

3. **AI Provider:**
   - BYOK means we never see AI conversations
   - User responsible for their AI provider's policies

4. **Database Options (Self-Hosted):**
   - **SQLite (default):** True local-only, no external dependencies
   - **Supabase (optional):** Cloud database, user manages their own instance

---

## Scalability Path

```
Phase 1 (MVP):
- SQLite for self-hosted
- Single container
- 1 AI provider (OpenAI)

Phase 2:
- Supabase option
- Multiple AI providers
- Background job processing

Phase 3:
- Kubernetes support
- Multi-tenant cloud
- Custom AI fine-tuning
```

---

## Integration Points

### Inbound (Data Sources)

| Tool | Integration Method | Data Pulled |
|------|-------------------|-------------|
| Instantly | REST API + Webhooks | Campaign analytics, replies |
| Apollo | REST API | Lead data, enrichment |
| HubSpot | REST API | Deals, contacts, activities |
| Generic | CSV import | Any tabular data |

### Outbound (AI Providers)

| Provider | Integration Method | Notes |
|----------|-------------------|-------|
| OpenAI | REST API | GPT-4, GPT-3.5 |
| Anthropic | REST API | Claude models |
| Ollama | Local HTTP | Self-hosted LLMs |
| OpenRouter | REST API | Multiple providers |

---

## Future Architecture Considerations

1. **Plugin System:** Allow community to add tool integrations
2. **Webhook Receivers:** Real-time data from tools
3. **Analytics Dashboard:** Aggregate insights across campaigns
4. **Team Features:** Multiple users, shared context
5. **Mobile App:** Notifications, quick checks

---

*Architecture designed for simplicity first, scalability later. Open source means the community can extend in directions we haven't imagined.*
