# GTM Wizard Roadmap

> **Stop guessing if it's working. Know you're on track.**

This roadmap outlines the development of GTM Wizard - an open-source AI-powered GTM operating system for solo founders.

## Vision

GTM Wizard helps solo founders running outbound campaigns:
- **Know if they're on track** with Traffic Light signals (RED/YELLOW/GREEN)
- **Stay consistent** with streak tracking and Day 21 Breakthrough education
- **Get contextual coaching** from AI with GTM expertise
- **Own their data** with 100% self-hosted, BYOK architecture

## Current Status (December 2025)

| Component | Status | Notes |
|-----------|--------|-------|
| MCP Server | Complete | v0.2.1 on PyPI |
| Dashboard Shell | Complete | Next.js + shadcn/ui |
| PocketBase Schema | Complete | 5 collections |
| Traffic Light Component | Complete | RED/YELLOW/GREEN logic |
| Auth (Login/Signup) | Complete | PocketBase built-in |
| Monorepo Structure | Complete | packages/ layout |

---

## Milestones

### v0.1 - MCP Foundation (Complete)

- [x] MCP server with stdio transport
- [x] Foundation resources (GTM knowledge base)
- [x] Rate limiting diagnosis tool
- [x] CI/CD with GitHub Actions
- [x] 80%+ test coverage

### v0.2 - Lead Intelligence (Complete)

- [x] Lead scoring tool with breakdown
- [x] Role classification tool
- [x] Industry classification tool
- [x] Routing determination tool
- [x] Disqualification check tool
- [x] 4 GTM prompts (ICP, Campaign, Calibration)

### v0.3 - Dashboard MVP (In Progress)

**Phase 1: Foundation** (Complete)
- [x] Monorepo restructure (packages/)
- [x] PocketBase setup with schema
- [x] Next.js dashboard shell
- [x] shadcn/ui components
- [x] PocketBase auth integration
- [x] Traffic Light component

**Phase 2: Core Dashboard** (Next)
- [ ] Settings page with API key input
- [ ] Manual CSV upload for metrics
- [ ] Connect Traffic Light to real data
- [ ] Streak Visualizer component

**Phase 3: AI Integration**
- [ ] LiteLLM setup in ai-agent package
- [ ] Connect MCP server as expertise source
- [ ] Chat interface in dashboard
- [ ] BYOK with OpenAI/Anthropic/Ollama

**Phase 4: Tool Integration**
- [ ] Instantly API integration
- [ ] Day 21 Breakthrough module
- [ ] Onboarding flow

**Phase 5: Docker Deployment**
- [ ] Docker Compose setup
- [ ] One-command self-hosting
- [ ] Documentation

### v0.4 - Polish & Launch (Planned)

- [ ] Mobile responsive design
- [ ] Dark mode
- [ ] Export data (CSV/JSON)
- [ ] Beta testing with 5-10 users
- [ ] GitHub stars campaign

### v0.5+ - Future

- [ ] Apollo integration
- [ ] CRM integrations
- [ ] Team features
- [ ] Cloud-hosted option ($5-10/mo)

---

## Tech Stack

| Layer | Technology | Status |
|-------|------------|--------|
| Frontend | Next.js 16 + shadcn/ui | Implemented |
| Backend | PocketBase | Implemented |
| AI Layer | LiteLLM | Planned |
| MCP Server | Python + FastMCP | Complete |
| Deployment | Docker Compose | Planned |

---

## Success Metrics (v0.3)

| Metric | Target |
|--------|--------|
| Self-hosted in < 5 min | 95%+ success |
| First insight in < 10 min | After install |
| Week 4 retention | > 70% |
| NPS | > 8/10 |

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

**Priority areas:**
- Dashboard components (React/Next.js)
- PocketBase integrations
- AI coaching prompts
- Documentation

---

## Links

- **Repository**: https://github.com/MathewJoseph1993/gtm-wizard
- **PyPI**: https://pypi.org/project/gtm-wizard/
- **MCP Protocol**: https://modelcontextprotocol.io
