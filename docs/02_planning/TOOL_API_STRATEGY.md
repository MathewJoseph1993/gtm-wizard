# Tool API Integration Strategy

**Date:** December 29, 2025
**Status:** Future feature (post-MVP)
**Origin:** User insight during planning session

---

## The Problem

GTM Wizard integrates with external tools (Instantly, Apollo, HubSpot, etc.). These tools:
- Update their APIs frequently
- May deprecate endpoints without warning
- Have different versioning strategies
- Could break our integration at any time

**Risk:** A breaking API change could render GTM Wizard unusable until we adapt.

---

## Proposed Solution: Dynamic API Monitoring System

### Core Concept

Build an internal system that:
1. **Tracks** changelog/documentation for all integrated tools
2. **Monitors** for breaking changes proactively
3. **Adapts** dynamically when changes are detected
4. **Alerts** maintainers before users experience issues

---

## Architecture

### Component: API Monitor Service

```
packages/api-monitor/
├── src/
│   ├── monitors/
│   │   ├── instantly_monitor.py
│   │   ├── apollo_monitor.py
│   │   └── base_monitor.py
│   ├── changelog_parser.py
│   ├── version_tracker.py
│   └── alert_service.py
├── config/
│   └── tools.yaml          # Tool configurations
├── cache/
│   └── api_docs/           # Cached documentation
└── tests/
```

### Workflow

```
┌─────────────────────────────────────────────────────────────┐
│  API MONITORING WORKFLOW                                    │
│                                                             │
│  1. SCHEDULED CHECK (weekly or daily)                       │
│     └─ Fetch latest changelog/docs from each tool          │
│                                                             │
│  2. COMPARE                                                 │
│     └─ Diff against cached version                         │
│     └─ Detect: new endpoints, deprecated endpoints,        │
│        changed parameters, version bumps                   │
│                                                             │
│  3. CLASSIFY CHANGE                                         │
│     ├─ BREAKING: Endpoint removed, required param added    │
│     ├─ WARNING: Deprecation notice, behavior change        │
│     └─ INFO: New feature, optional param added             │
│                                                             │
│  4. ALERT                                                   │
│     ├─ BREAKING → Create GitHub issue + Slack alert        │
│     ├─ WARNING → Create GitHub issue                       │
│     └─ INFO → Log for reference                            │
│                                                             │
│  5. AUTO-ADAPT (future)                                     │
│     └─ For minor changes, auto-update integration code     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Tools to Monitor (Initial Set)

### Priority 1: Core Integrations

| Tool | API Docs URL | Changelog Location | Update Frequency |
|------|--------------|-------------------|------------------|
| **Instantly** | developer.instantly.ai | API v2 docs | Weekly |
| **Apollo** | developers.apollo.io | API changelog | Monthly |

### Priority 2: AI Providers

| Provider | Docs URL | Key Concerns |
|----------|----------|--------------|
| **OpenAI** | platform.openai.com | Model deprecations, rate limits |
| **Anthropic** | docs.anthropic.com | API versioning, model updates |
| **Ollama** | ollama.ai/docs | Local model compatibility |

### Priority 3: Future Integrations

| Tool | Category | Notes |
|------|----------|-------|
| HubSpot | CRM | Complex API, frequent updates |
| Calendly | Scheduling | Webhook changes |
| Lemlist | Email | Alternative to Instantly |
| Clay | Enrichment | API still evolving |

---

## Implementation Phases

### Phase 1: Manual Tracking (MVP)

- Document API versions we depend on
- Set calendar reminders to check changelogs monthly
- Maintain local copies of critical API docs

### Phase 2: Automated Monitoring (v0.4)

- Build changelog parser for each tool
- Set up GitHub Actions for weekly checks
- Create issue templates for breaking changes

### Phase 3: Smart Adaptation (v0.5+)

- Auto-generate adapter code for minor changes
- A/B test new API versions before switching
- Community-contributed monitors for new tools

---

## Configuration Example

```yaml
# config/tools.yaml

tools:
  instantly:
    name: "Instantly"
    api_version: "v2"
    docs_url: "https://developer.instantly.ai/api/v2"
    changelog_url: "https://developer.instantly.ai/changelog"
    check_frequency: "weekly"
    critical_endpoints:
      - "/campaigns/analytics/overview"
      - "/campaigns/analytics/daily"
      - "/webhooks"
    alert_channels:
      - github_issue
      - slack

  apollo:
    name: "Apollo.io"
    api_version: "v1"
    docs_url: "https://developers.apollo.io"
    check_frequency: "monthly"
    critical_endpoints:
      - "/people/match"
      - "/organizations/enrich"
```

---

## API Documentation Cache

For each integrated tool, we should maintain:

1. **Endpoint inventory** - All endpoints we use
2. **Request/response schemas** - Expected data formats
3. **Rate limits** - Current limits and how to handle
4. **Authentication flow** - How to obtain/refresh tokens
5. **Error codes** - Known errors and handling

### Storage

```
cache/api_docs/
├── instantly/
│   ├── v2_spec.json          # OpenAPI spec if available
│   ├── endpoints.md          # Our used endpoints
│   └── last_checked.json     # Metadata
├── apollo/
│   └── ...
└── openai/
    └── ...
```

---

## Graceful Degradation Strategy

When an API breaks, the system should:

1. **Detect** - Integration tests fail or API returns errors
2. **Fallback** - Switch to manual CSV upload mode
3. **Notify** - Show user-friendly message: "Instantly sync temporarily unavailable. Please upload CSV."
4. **Log** - Capture error details for debugging
5. **Alert** - Notify maintainers immediately

### Fallback Matrix

| Integration | Primary Method | Fallback Method |
|-------------|----------------|-----------------|
| Instantly | API sync | CSV upload |
| Apollo | API enrichment | Manual entry |
| AI Providers | LiteLLM | Direct provider SDK |

---

## Benefits

1. **Proactive** - Know about changes before users complain
2. **Resilient** - Graceful degradation keeps app working
3. **Documented** - Always know which API versions we support
4. **Scalable** - Easy to add monitoring for new tools
5. **Community** - Others can contribute monitors

---

## Open Questions

1. How often should we check each tool? (Daily vs weekly vs monthly)
2. Should we use a third-party service for monitoring, or build our own?
3. How do we handle tools without public changelogs?
4. Should this be a separate microservice or part of the main app?

---

## Related Documents

- [OSS_STACK_RESEARCH.md](./OSS_STACK_RESEARCH.md) - Technology choices
- [MVP_SCOPE.md](./MVP_SCOPE.md) - Initial integration scope
- [ARCHITECTURE.md](../00_vision/ARCHITECTURE.md) - System design

---

*Documented: December 29, 2025*
*Priority: Post-MVP (v0.4+)*
*Origin: User insight about dynamic tool adaptation*
