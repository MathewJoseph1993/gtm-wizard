# OSS Stack Research

**Date:** December 29, 2025
**Purpose:** Evaluate open-source technologies for GTM Wizard platform
**Status:** Recommendations finalized

---

## Executive Summary

After evaluating options across four categories, here are the **recommended choices** for GTM Wizard:

| Component | Recommendation | Rationale |
|-----------|----------------|-----------|
| **Database** | PocketBase | Single binary, built-in auth, SQLite-based, truly self-hosted |
| **Auth** | PocketBase built-in | Already included, simpler architecture |
| **AI Orchestration** | LiteLLM | Unified API for 100+ providers, perfect for BYOK |
| **Frontend** | Next.js + shadcn/ui | Largest ecosystem, best for AI-assisted development |

**Key Insight:** PocketBase eliminates the need for separate auth, reducing complexity significantly.

---

## 1. Database Layer

### Options Evaluated

| Option | Type | Self-Hosted | Complexity | Auth Built-in |
|--------|------|-------------|------------|---------------|
| **PocketBase** | BaaS (Go + SQLite) | Single binary | Very low | Yes |
| **Supabase** | BaaS (PostgreSQL) | Multi-container | High | Yes |
| **SQLite (raw)** | Database only | Native file | Very low | No |
| **Turso** | Distributed SQLite | Edge-hosted | Medium | No |

### Analysis

#### PocketBase
**Pros:**
- Single executable (~25MB) - truly portable
- Built-in SQLite database, REST API, real-time, file storage
- Built-in authentication (email/password + OAuth2)
- Admin dashboard included
- Zero configuration to start
- 100% free, no vendor lock-in
- Perfect for solo developers and indie projects

**Cons:**
- Not yet v1.0 (currently v0.24) - breaking changes possible
- No built-in RBAC (but sufficient for MVP)
- Smaller ecosystem than Supabase
- Limited horizontal scaling (fine for our target of solo founders)

#### Supabase
**Pros:**
- Full PostgreSQL (complex queries, transactions)
- Row-Level Security (RLS) for fine-grained access
- Real-time subscriptions
- Large ecosystem and community
- Can self-host on $5 VPS

**Cons:**
- Multi-container deployment (PostgreSQL, PostgREST, GoTrue, Kong)
- More complex to self-host and maintain
- Overkill for MVP
- Adds operational overhead for solo founders

#### SQLite (raw)
**Pros:**
- Simplest possible - just a file
- No server process needed
- Widely understood

**Cons:**
- No admin UI (must build)
- No auth (must add separately)
- No real-time subscriptions
- No file storage

### Recommendation: **PocketBase**

PocketBase aligns perfectly with GTM Wizard's requirements:
- **Self-hosted priority:** Single binary, runs anywhere
- **Solo founder target:** Zero-config, admin UI included
- **Visa evidence:** Truly open source (MIT license)
- **BYOK compatible:** Local data stays local

**Migration path:** If we outgrow PocketBase, we can migrate to Supabase later. The data model would remain similar.

---

## 2. Authentication Layer

### Options Evaluated

| Option | Open Source | Self-Hosted | Status 2025 |
|--------|-------------|-------------|-------------|
| **PocketBase Auth** | Yes | Yes (included) | Active |
| **NextAuth.js (Auth.js)** | Yes | Yes | Active |
| **Better Auth** | Yes | Yes | Emerging |
| **Lucia** | Yes | Yes | **Deprecated March 2025** |
| **Clerk** | No | No | Active (commercial) |
| **SuperTokens** | Yes | Yes | Active |

### Analysis

#### Eliminated Options
- **Lucia:** Deprecated as of March 2025 - not production-ready
- **Clerk:** Not self-hostable, commercial only - violates OSS priority

#### PocketBase Built-in Auth
**Pros:**
- Already included - no additional setup
- Email/password + OAuth2 providers (Google, GitHub, etc.)
- Session management handled automatically
- Admin UI for user management
- Zero extra dependencies

**Cons:**
- Tied to PocketBase (if we switch DB, we switch auth)
- Limited customization compared to dedicated auth solutions
- No advanced features like passkeys (yet)

#### NextAuth.js (Auth.js)
**Pros:**
- Production-tested, widely used
- Database adapters for any backend
- Full control over authentication flow
- Active development

**Cons:**
- Adds complexity when using with PocketBase
- Requires separate setup and maintenance
- Cookie handling in SSR needs careful implementation

#### Better Auth
**Pros:**
- Modern TypeScript-first design
- Framework agnostic (React, Vue, Svelte, Next.js)
- Plugin ecosystem for extensibility
- Built-in MFA support

**Cons:**
- Newer project, smaller community
- Less battle-tested than NextAuth

### Recommendation: **PocketBase Built-in Auth** (for MVP)

**Rationale:** Using PocketBase's built-in auth eliminates an entire layer of complexity. For MVP targeting solo founders who just want things to work, this is the pragmatic choice.

**Future option:** If we need advanced features (passkeys, enterprise SSO), we can layer Better Auth or NextAuth on top later.

---

## 3. AI Orchestration Layer

### Options Evaluated

| Option | Focus | Multi-Provider | Complexity |
|--------|-------|----------------|------------|
| **LiteLLM** | Unified LLM API | 100+ providers | Low |
| **LangChain** | Workflows/Agents | Many providers | High |
| **LlamaIndex** | RAG/Data indexing | Many providers | Medium |
| **Custom adapters** | Direct API calls | Manual per provider | Low (initially) |

### Analysis

#### LiteLLM
**Pros:**
- Unified OpenAI-compatible API for 100+ providers
- Supports OpenAI, Anthropic, Google, Cohere, Ollama, and more
- BYOK native - users provide their own API keys
- Cost tracking and load balancing built-in
- 8ms P95 latency at 1k RPS
- Open source (MIT license)
- Can run as SDK or proxy server
- Exception handling maps to OpenAI format

**Cons:**
- Another dependency to manage
- May be overkill if only supporting 2-3 providers

#### LangChain
**Pros:**
- Comprehensive agent and workflow framework
- Large ecosystem and community
- Many integrations

**Cons:**
- Over-engineered for our needs
- Steep learning curve
- Heavy abstraction layer
- Rapidly changing API
- Overkill when we already have MCP for expertise

#### LlamaIndex
**Pros:**
- Excellent for RAG and data retrieval
- Faster query performance than LangChain for RAG tasks
- Good data connectors

**Cons:**
- RAG-focused - not our primary need
- Less useful for coaching/chat use case
- Would add complexity for limited benefit

#### Custom Adapters
**Pros:**
- Full control
- No external dependencies
- Exactly what we need, nothing more

**Cons:**
- Must maintain adapters for each provider
- Duplicate effort for common patterns
- Error handling must be implemented per provider

### Recommendation: **LiteLLM**

**Rationale:** LiteLLM is purpose-built for exactly what GTM Wizard needs:
- **BYOK architecture:** Users provide their API keys
- **Multi-provider:** OpenAI, Anthropic, Ollama all work the same way
- **Simple integration:** Just swap `openai.ChatCompletion` calls to `litellm.completion`
- **Open source:** MIT license aligns with visa requirements

**Example usage:**
```python
import litellm

# User's API key from their settings
response = litellm.completion(
    model="gpt-4",  # or "claude-3-opus", "ollama/llama2"
    messages=[{"role": "user", "content": "Analyze my campaign..."}],
    api_key=user_api_key
)
```

---

## 4. Frontend Framework

### Options Evaluated

| Option | UI Library | Ecosystem | DX | Bundle Size |
|--------|------------|-----------|-----|-------------|
| **Next.js + shadcn/ui** | RadixUI-based | Massive | Good | Medium |
| **SvelteKit + shadcn-svelte** | BitsUI-based | Growing | Excellent | Small |
| **Remix** | React-based | Medium | Good | Medium |
| **Nuxt.js** | Vue-based | Large | Good | Medium |

### Analysis

#### Next.js + shadcn/ui
**Pros:**
- Largest React ecosystem
- shadcn/ui is extremely popular (copy-paste components)
- Extensive documentation and tutorials
- Best AI training data (more examples for Claude to learn from)
- Vercel backing ensures longevity
- Used by Netflix, TikTok, Notion

**Cons:**
- React virtual DOM adds overhead
- More boilerplate than Svelte
- App Router complexity in some cases

#### SvelteKit + shadcn-svelte
**Pros:**
- Best developer experience (less boilerplate)
- Smallest bundle sizes (compile-time optimization)
- No virtual DOM - direct DOM manipulation
- Svelte 5 Runes are cutting-edge
- Faster perceived performance

**Cons:**
- Smaller ecosystem
- Fewer tutorials and examples
- shadcn-svelte is community-maintained (not official)
- Less AI training data = less reliable AI assistance
- Hiring would be harder (if project grows)

### Key Consideration: AI-Assisted Development

Since Mathew relies on AI (Claude) for implementation, the framework choice matters for AI assistance quality:

| Factor | Next.js | SvelteKit |
|--------|---------|-----------|
| Training data available | Very high | Medium |
| Tutorial availability | Very high | Medium |
| Stack Overflow answers | Very high | Medium |
| AI can debug issues | Very reliable | Less reliable |

### Recommendation: **Next.js + shadcn/ui**

**Rationale:** For a solo non-coder founder using AI for development:
- More training data = better AI assistance
- Larger ecosystem = more solutions to common problems
- shadcn/ui = beautiful, accessible components out of the box
- App Router with server components = modern patterns

**Future consideration:** SvelteKit could be evaluated later if bundle size becomes critical or if Mathew becomes more comfortable with development.

---

## 5. Complete Stack Summary

### Recommended Stack

```
┌─────────────────────────────────────────────────────────────┐
│  GTM WIZARD - RECOMMENDED TECH STACK                        │
│                                                             │
│  FRONTEND                                                   │
│  └── Next.js 15 + shadcn/ui + Tailwind CSS                  │
│      └── Why: Largest ecosystem, best AI assistance         │
│                                                             │
│  BACKEND/DATABASE                                           │
│  └── PocketBase (single binary)                             │
│      ├── SQLite database                                    │
│      ├── REST API                                           │
│      ├── Built-in auth (email + OAuth)                      │
│      ├── Real-time subscriptions                            │
│      └── File storage                                       │
│      └── Why: Zero-config, truly self-hosted                │
│                                                             │
│  AI LAYER                                                   │
│  └── LiteLLM                                                │
│      ├── OpenAI, Anthropic, Google, Ollama                  │
│      ├── Unified API (OpenAI-compatible)                    │
│      └── User provides own API keys (BYOK)                  │
│      └── Why: Perfect for multi-provider BYOK               │
│                                                             │
│  MCP SERVER (existing)                                      │
│  └── Python + FastMCP                                       │
│      └── GTM expertise, benchmarks, coaching templates      │
│      └── Why: Already built, working                        │
│                                                             │
│  DEPLOYMENT                                                 │
│  └── Docker Compose (self-hosted)                           │
│      └── Why: One-command deployment                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Package Dependencies

```
# Python (MCP Server + AI Layer)
packages/mcp-server/
  - mcp, pydantic, httpx

packages/ai-agent/
  - litellm
  - pocketbase (Python SDK)

# JavaScript (Dashboard)
packages/dashboard/
  - next, react, react-dom
  - tailwindcss
  - @radix-ui/* (via shadcn)
  - pocketbase (JS SDK)
```

---

## 6. Architecture Integration

### How Components Connect

```
┌──────────────────────────────────────────────────────────────┐
│  USER BROWSER                                                │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Next.js Dashboard (packages/dashboard/)             │   │
│  │  ├── Auth: PocketBase JS SDK                         │   │
│  │  ├── Data: PocketBase REST API                       │   │
│  │  └── AI Chat: API route → Python AI Agent            │   │
│  └──────────────────────────────────────────────────────┘   │
│                          │                                   │
│                          ▼                                   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  PocketBase (single container)                       │   │
│  │  ├── SQLite database                                 │   │
│  │  ├── User auth & sessions                            │   │
│  │  └── API key storage (encrypted)                     │   │
│  └──────────────────────────────────────────────────────┘   │
│                          │                                   │
│                          ▼                                   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Python AI Agent (packages/ai-agent/)                │   │
│  │  ├── LiteLLM for BYOK AI calls                       │   │
│  │  ├── MCP client → calls GTM expertise tools          │   │
│  │  └── Memory/context retrieval                        │   │
│  └──────────────────────────────────────────────────────┘   │
│                          │                                   │
│                          ▼                                   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  MCP Server (packages/mcp-server/) - existing        │   │
│  │  ├── GTM expertise tools                             │   │
│  │  ├── Benchmark data                                  │   │
│  │  └── Coaching templates                              │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Docker Compose Structure

```yaml
# docker-compose.yml (simplified)
version: '3.8'

services:
  pocketbase:
    image: ghcr.io/muchobien/pocketbase:latest
    volumes:
      - ./pb_data:/pb_data
    ports:
      - "8090:8090"

  ai-agent:
    build: ./packages/ai-agent
    environment:
      - POCKETBASE_URL=http://pocketbase:8090
    depends_on:
      - pocketbase

  mcp-server:
    build: ./packages/mcp-server
    # Internal only, called by ai-agent

  dashboard:
    build: ./packages/dashboard
    environment:
      - NEXT_PUBLIC_POCKETBASE_URL=http://localhost:8090
    ports:
      - "3000:3000"
    depends_on:
      - pocketbase
      - ai-agent
```

---

## 7. Alternatives Considered But Rejected

| Component | Alternative | Why Rejected |
|-----------|-------------|--------------|
| Database | Supabase | Too complex for self-hosted MVP |
| Database | Firebase | Not open source |
| Auth | Clerk | Not self-hostable |
| Auth | Lucia | Deprecated March 2025 |
| Auth | Keycloak | Enterprise overkill |
| AI | LangChain | Over-engineered, heavy abstractions |
| AI | LlamaIndex | RAG-focused, not our primary use case |
| Frontend | SvelteKit | Smaller ecosystem, less AI training data |
| Frontend | Remix | Less momentum than Next.js |

---

## 8. Risk Assessment

### Technical Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| PocketBase breaking changes (pre-v1) | Medium | Medium | Pin versions, test upgrades |
| LiteLLM API changes | Low | Low | Pin versions |
| Next.js App Router complexity | Medium | Low | Use established patterns |
| PocketBase + Next.js SSR auth | Medium | Medium | Follow documented patterns |

### Strategic Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| PocketBase project abandonment | Low | High | Active community, can fork |
| LiteLLM acquisition/pivot | Low | Medium | Open source, can fork |
| Provider API changes (OpenAI, etc.) | Medium | Low | LiteLLM abstracts this |

---

## 9. Implementation Sequence

For MVP (v0.3):

1. **Set up PocketBase locally** - database, auth, admin
2. **Create Next.js dashboard shell** - basic routing, shadcn setup
3. **Integrate PocketBase auth** - login, signup, sessions
4. **Add LiteLLM to ai-agent package** - basic BYOK setup
5. **Connect MCP server** - existing expertise tools
6. **Build first AI chat flow** - simple coaching interaction
7. **Dockerize everything** - one-command self-hosting

---

## 10. Sources & References

### Database Research
- [Supabase vs PocketBase Comparison](https://www.leanware.co/insights/supabase-vs-pocketbase)
- [Supabase Alternatives 2025](https://openalternative.co/alternatives/supabase)
- [PocketBase Official Docs](https://pocketbase.io/docs/)

### Auth Research
- [NextAuth vs Lucia Comparison](https://blog.ronanru.com/lucia-auth-vs-next-auth/)
- [Next.js Auth Libraries 2025](https://www.wisp.blog/blog/nextjs-auth-libraries-to-consider-in-2025)
- [Lucia Auth Deprecation](https://www.wisp.blog/blog/lucia-auth-is-dead-whats-next-for-auth)
- [Better Auth Official](https://www.better-auth.com/)
- [Open Source Auth Providers 2025](https://tesseral.com/guides/open-source-auth-providers-in-2025-best-solutions-for-open-source-auth)

### AI Orchestration Research
- [LiteLLM GitHub](https://github.com/BerriAI/litellm)
- [LiteLLM Docs](https://docs.litellm.ai/docs/)
- [LangChain vs LlamaIndex 2025](https://xenoss.io/blog/langchain-langgraph-llamaindex-llm-frameworks)
- [LLM Gateways Comparison](https://agenta.ai/blog/top-llm-gateways)

### Frontend Research
- [SvelteKit vs Next.js 2025](https://prismic.io/blog/sveltekit-vs-nextjs)
- [Frontend Framework Showdown 2025](https://leapcell.io/blog/the-2025-frontend-framework-showdown-next-js-nuxt-js-sveltekit-and-astro)
- [Next.js vs Remix vs SvelteKit](https://www.nxcode.io/resources/news/nextjs-vs-remix-vs-sveltekit-2025-comparison)

---

*Research completed: December 29, 2025*
*Next step: MVP Scope Definition (docs/02_planning/MVP_SCOPE.md)*
