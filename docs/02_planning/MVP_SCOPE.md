# GTM Wizard MVP Scope (v0.3)

**Date:** December 29, 2025
**Target:** Solo Technical Founders, $1-5K MRR
**Core Value:** "Stop guessing if it's working. Know you're on track."
**Status:** Draft for review

---

## Executive Summary

Version 0.3 is the **Minimum Viable Product** - the first version that delivers end-to-end value to a founder. It transforms GTM Wizard from an MCP server (v0.2.x) into a complete, self-hosted GTM operating system.

### MVP Success Criteria

| Metric | Target | Measurement |
|--------|--------|-------------|
| Self-hosted in < 5 minutes | 95%+ success rate | Docker up time |
| First insight in < 10 minutes | < 10 min from install | User testing |
| Weekly retention (week 4) | > 70% | Analytics |
| "This is useful" NPS | > 8/10 | Survey |

---

## Core Value Proposition

### The "Confidence + Clarity" Engine

From 450+ sources of research, we identified that founders need:

| Need | Problem | MVP Solution |
|------|---------|--------------|
| **Confidence** | "Am I failing or is this normal?" | Traffic Light Signals (RED/YELLOW/GREEN) |
| **Clarity** | "What should I do next?" | Contextual AI coaching |
| **Persistence** | "70% quit at Day 21" | Streak visualization + Day 21 education |

### The Core Loop

```
┌─────────────────────────────────────────────────────────────┐
│  THE GTM WIZARD CORE LOOP                                   │
│                                                             │
│  1. CONNECT                                                 │
│     └─ Founder connects their Instantly account            │
│                                                             │
│  2. INGEST                                                  │
│     └─ Dashboard pulls campaign analytics                  │
│                                                             │
│  3. ANALYZE                                                 │
│     └─ MCP expertise compares vs benchmarks                │
│                                                             │
│  4. SIGNAL                                                  │
│     └─ Traffic Light shows GREEN/YELLOW/RED                │
│                                                             │
│  5. COACH                                                   │
│     └─ AI provides contextual advice                       │
│                                                             │
│  6. ACT                                                     │
│     └─ Founder takes specific next action                  │
│                                                             │
│  (repeat daily)                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Feature Specifications

### Priority 1: CRITICAL (Must have for MVP)

#### 1.1 Traffic Light Dashboard

**What:** Visual RED/YELLOW/GREEN signals showing if founder is on track.

**Implementation:**

| Signal | Condition | Message |
|--------|-----------|---------|
| **GREEN** | Reply rate > 6% | "Top 10% performance. You're on track. Consider scaling." |
| **YELLOW** | Open rate > 40% AND reply rate < 2% | "Good attention, weak offer. Refine your CTA." |
| **RED** | Open rate < 25% | "Deliverability risk. Stop sending. Check SPF/DKIM." |

**UI Components:**
- Large traffic light indicator (hero element)
- Current metrics with benchmark comparison
- "% of benchmark" progress bars
- Timestamp of last data sync

**Technical:**
- Pulls from Instantly API (or manual CSV upload as fallback)
- Compares against hard-coded 2025 benchmarks (from research)
- Updates daily or on-demand

---

#### 1.2 Streak Visualizer

**What:** GitHub-style activity graph showing daily outreach consistency.

**Implementation:**
- Shows last 90 days of activity
- Color intensity = volume (emails sent)
- Highlights current streak length
- Celebrates milestones (7-day, 21-day, 30-day)

**Why:** Research shows "70% of founders never send a second email." Gamification of consistency prevents the Persistence Gap.

**Technical:**
- Stores daily send counts in PocketBase
- Simple calendar heat map component

---

#### 1.3 Day 21 Breakthrough Module

**What:** Educational content + visualization showing that Day 21 is the breakthrough point.

**Implementation:**
- **Content:** "The Valley of Silence" explainer (why weeks 2-3 feel like failure)
- **Graph:** Anonymized trajectory showing "Successful Founders" had same pattern
- **Unlock:** At Day 21, unlock a "high-value asset" (e.g., script library)

**Why:** Research shows "Day 15-21 is when 70% quit, but Day 22-30 is when breakthrough happens."

---

#### 1.4 Basic AI Coaching

**What:** BYOK chat interface that provides contextual GTM coaching.

**Implementation:**
- User provides their OpenAI/Anthropic/Ollama key (BYOK)
- Chat interface on dashboard
- AI has access to:
  - User's current metrics (from connected tools)
  - GTM expertise (from MCP server)
  - 2025 benchmarks (from research)

**Example interaction:**
```
User: "My reply rate is 2.3%. Is that good?"

AI: "Your reply rate is 42% of the industry benchmark (5.5%).
    This is YELLOW - not crisis, but room to improve.

    Given your open rate is 45% (strong), the issue is likely
    your offer, not your targeting.

    Try: Shorten your ask. Instead of 'Can we schedule a call?'
    try 'Worth a quick chat?'

    You're in week 2 - this is normal. Keep going."
```

**Technical:**
- LiteLLM for multi-provider support
- MCP client calls expertise tools
- Context injection from PocketBase (user metrics, history)

---

#### 1.5 Instantly Integration

**What:** Connect Instantly account to automatically pull campaign data.

**Why Instantly first:**
- Most popular tool among solo founders
- Clean API with webhooks
- Includes warmup (critical for deliverability)

**Implementation:**
- API key input on settings page
- OAuth flow if available (or API key for MVP)
- Pull: sent_count, open_count, reply_count, campaign_list
- Frequency: Daily sync + on-demand refresh

**Fallback:** CSV upload for founders without Instantly.

---

#### 1.6 Self-Hosted Docker Deployment

**What:** One-command self-hosting via Docker Compose.

**Implementation:**
```bash
git clone https://github.com/MathewJoseph1993/gtm-wizard
cd gtm-wizard
docker-compose up -d
# Visit http://localhost:3000
```

**Components:**
- PocketBase container (database + auth + API)
- Next.js container (dashboard)
- Python container (AI agent + MCP server)

**Why:** Self-hosted = FREE tier, which drives adoption and community growth.

---

### Priority 2: HIGH (Important for MVP quality)

#### 2.1 User Onboarding Flow

**What:** Guided setup experience for new users.

**Steps:**
1. Create account (email/password or OAuth)
2. Connect AI provider (enter API key)
3. Connect Instantly (or upload CSV)
4. See first Traffic Light signal
5. Get first AI coaching message

**Target:** Complete onboarding in < 10 minutes.

---

#### 2.2 Settings Page

**What:** Manage connections and preferences.

**Sections:**
- Profile (name, email)
- AI Provider (API key, model selection)
- Tool Connections (Instantly status)
- Data (export, delete)

---

#### 2.3 Benchmark Context Cards

**What:** Contextual explanations next to each metric.

**Implementation:**
- "What's normal?" hover cards
- 2025 industry data with source
- Personalized comparison ("You vs benchmark")

---

### Priority 3: MEDIUM (Nice to have for MVP)

#### 3.1 Mobile Responsive Design

**What:** Dashboard works on mobile devices.

**Scope:** Basic responsive layout, not a native app.

---

#### 3.2 Dark Mode

**What:** Dark theme option.

**Why:** Founders often work late. Reduces eye strain.

---

#### 3.3 Export Data

**What:** Export metrics as CSV or JSON.

**Why:** Users own their data. Important for trust.

---

### Priority 4: DEFERRED (Post-MVP)

| Feature | Why Deferred |
|---------|--------------|
| Apollo integration | Focus on Instantly first |
| CRM integration | Complex, low priority for MVP |
| Team features | Solo founders = single user |
| Cohort community | Requires user base first |
| Weekly email reports | Nice-to-have, not core value |
| Mobile app | Responsive web is sufficient |

---

## Technical Architecture (MVP)

### Component Diagram

```
┌─────────────────────────────────────────────────────────────┐
│  GTM WIZARD v0.3 MVP ARCHITECTURE                           │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  packages/dashboard/           (Next.js 15)         │   │
│  │  ├── app/                      App Router           │   │
│  │  ├── components/               shadcn/ui            │   │
│  │  └── lib/                      PocketBase SDK       │   │
│  └─────────────────────────────────────────────────────┘   │
│                          │                                  │
│                          ▼                                  │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  PocketBase                    (Single Binary)      │   │
│  │  ├── SQLite DB                 Users, Metrics       │   │
│  │  ├── Auth                      Email + OAuth        │   │
│  │  └── REST API                  Auto-generated       │   │
│  └─────────────────────────────────────────────────────┘   │
│                          │                                  │
│                          ▼                                  │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  packages/ai-agent/            (Python)             │   │
│  │  ├── LiteLLM                   BYOK multi-provider  │   │
│  │  ├── MCP Client                Expertise tools      │   │
│  │  └── Memory                    Context retrieval    │   │
│  └─────────────────────────────────────────────────────┘   │
│                          │                                  │
│                          ▼                                  │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  packages/mcp-server/          (Python - existing)  │   │
│  │  ├── GTM expertise tools       score_lead, etc.     │   │
│  │  ├── Benchmark data            2025 industry stats  │   │
│  │  └── Coaching templates        Response frameworks  │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Database Schema (PocketBase)

```
users
├── id (auto)
├── email (unique)
├── name
├── created_at
└── onboarding_completed

api_keys (encrypted)
├── id (auto)
├── user_id (FK)
├── provider (openai, anthropic, ollama)
├── key_encrypted
└── created_at

tool_connections
├── id (auto)
├── user_id (FK)
├── tool (instantly, apollo, csv)
├── credentials_encrypted
├── last_synced_at
└── status (active, error, disconnected)

daily_metrics
├── id (auto)
├── user_id (FK)
├── date (unique per user)
├── emails_sent
├── opens
├── replies
├── meetings_booked
└── source (instantly, csv)

chat_history
├── id (auto)
├── user_id (FK)
├── role (user, assistant)
├── content
└── created_at
```

---

## Implementation Roadmap

### Phase 1: Foundation (Week 1)

| Day | Task |
|-----|------|
| 1-2 | Set up monorepo structure (packages/) |
| 3-4 | Configure PocketBase with schema |
| 5 | Set up Next.js dashboard shell with shadcn |
| 6-7 | Implement PocketBase auth (login, signup) |

**Deliverable:** Users can create accounts and log in.

---

### Phase 2: Core Dashboard (Week 2)

| Day | Task |
|-----|------|
| 1-2 | Build Traffic Light component |
| 3 | Build Streak Visualizer component |
| 4-5 | Create settings page with API key input |
| 6-7 | Implement manual CSV upload for metrics |

**Deliverable:** Dashboard shows traffic lights from manual data.

---

### Phase 3: AI Integration (Week 3)

| Day | Task |
|-----|------|
| 1-2 | Set up ai-agent package with LiteLLM |
| 3-4 | Connect MCP server as expertise source |
| 5-6 | Build chat interface in dashboard |
| 7 | Test BYOK with OpenAI, Anthropic, Ollama |

**Deliverable:** AI coaching chat works with user's API key.

---

### Phase 4: Tool Integration (Week 4)

| Day | Task |
|-----|------|
| 1-3 | Implement Instantly API integration |
| 4-5 | Build Day 21 Breakthrough module |
| 6-7 | Onboarding flow polish |

**Deliverable:** Full loop: Connect Instantly → See signals → Get coaching.

---

### Phase 5: Polish & Deploy (Week 5)

| Day | Task |
|-----|------|
| 1-2 | Docker Compose setup |
| 3-4 | Testing and bug fixes |
| 5 | Documentation (README, getting started) |
| 6-7 | Soft launch to 5-10 beta users |

**Deliverable:** Working MVP that can be self-hosted.

---

## Benchmarks for Traffic Light Algorithm

From 2025 research (450+ sources):

| Metric | GREEN (Top 10%) | YELLOW (Average) | RED (Critical) |
|--------|-----------------|------------------|----------------|
| **Open Rate** | > 40% | 28-40% | < 28% |
| **Reply Rate** | > 6% | 2-6% | < 2% |
| **Bounce Rate** | < 3% | 3-8% | > 8% |
| **Unsubscribe** | < 0.5% | 0.5-2% | > 2% |

### Traffic Light Logic

```python
def get_signal(open_rate, reply_rate, bounce_rate):
    # RED conditions (critical issues)
    if open_rate < 0.25:
        return "RED", "Deliverability risk. Stop sending. Check SPF/DKIM."
    if bounce_rate > 0.08:
        return "RED", "High bounces. Clean your list before continuing."

    # YELLOW conditions (needs attention)
    if open_rate > 0.40 and reply_rate < 0.02:
        return "YELLOW", "Good opens, low replies. Your offer needs work."
    if reply_rate < 0.02:
        return "YELLOW", "Below benchmark. Review your messaging."

    # GREEN conditions (on track)
    if reply_rate > 0.06:
        return "GREEN", "Top 10% performance. You're on track. Scale volume."
    if reply_rate >= 0.02:
        return "GREEN", "Hitting benchmarks. Keep the momentum."

    return "YELLOW", "Data insufficient. Keep sending to build sample."
```

---

## Success Metrics

### Week 1 (Alpha)

- [ ] PocketBase running with auth
- [ ] Dashboard renders with placeholder data
- [ ] At least 1 user can log in

### Week 4 (Beta)

- [ ] 5-10 beta users testing
- [ ] Traffic lights showing real data
- [ ] AI chat providing useful responses
- [ ] Self-hosted deployment works

### Week 8 (v0.3 Release)

- [ ] 50+ GitHub stars
- [ ] 10+ active users
- [ ] 3+ positive testimonials
- [ ] Zero critical bugs

---

## Out of Scope for MVP

To keep focus, these are explicitly **not** in v0.3:

1. **Payments/billing** - FREE tier only for MVP
2. **Team/multi-user** - Solo founders only
3. **Multiple tool integrations** - Instantly only (others in v0.4)
4. **Native mobile app** - Responsive web only
5. **Community features** - No cohorts, forums, etc.
6. **Advanced analytics** - Basic metrics only
7. **White-labeling** - Not applicable for OSS
8. **Enterprise features** - SSO, audit logs, etc.

---

## Risks and Mitigations

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Instantly API limits | Medium | High | Fallback to CSV upload |
| PocketBase + Next.js SSR complexity | Medium | Medium | Use client-side auth patterns |
| AI hallucinations in coaching | Medium | Medium | Ground with MCP expertise + benchmarks |
| Self-hosting too complex | Low | High | Excellent docs + Docker Compose |
| No users adopt | Medium | High | Launch in founder communities |

---

## Open Questions for User Review

1. **Instantly-first or CSV-first?** Should we require Instantly, or make CSV the default?
2. **Day 21 content:** What specific educational content for the breakthrough module?
3. **Onboarding length:** 5-step vs 3-step onboarding?
4. **Dark mode priority:** Should this be in MVP or v0.4?

---

*MVP Scope defined: December 29, 2025*
*Next step: Begin Phase 1 implementation (monorepo restructuring)*
