# Product Requirements

> **Status:** Template - Pending Use Case Validation
> **Last Updated:** December 25, 2024

## Requirements Framework

### Priority Levels
- **P0 (Must Have):** Required for MVP
- **P1 (Should Have):** Important for adoption
- **P2 (Nice to Have):** Differentiation
- **P3 (Future):** Post-launch roadmap

### Requirement Types
- **Functional:** What the system does
- **Non-Functional:** How the system performs
- **Constraint:** Limitations and boundaries

---

## Functional Requirements

### Core Scoring (P0)

| ID | Requirement | Status |
|----|-------------|--------|
| FR-1 | Score leads based on role, industry, size, intent | Implemented |
| FR-2 | Provide transparent score breakdown | Implemented |
| FR-3 | Return actionable tier assignment (A/B/C/D) | Implemented |
| FR-4 | Support custom industry tier definitions | Implemented |

### Role Classification (P0)

| ID | Requirement | Status |
|----|-------------|--------|
| FR-5 | Classify job titles into decision-making tiers | Implemented |
| FR-6 | Provide confidence level | Implemented |
| FR-7 | Handle common title variations | Partial |

### Routing (P1)

| ID | Requirement | Status |
|----|-------------|--------|
| FR-8 | Determine routing track based on score + context | Implemented |
| FR-9 | Provide suggested actions per track | Implemented |
| FR-10 | Support custom routing thresholds | Not Started |

### Disqualification (P1)

| ID | Requirement | Status |
|----|-------------|--------|
| FR-11 | Check for disqualifying factors | Implemented |
| FR-12 | Support competitor list | Implemented |
| FR-13 | Built-in personal email detection | Not Started |

### Configuration (P1)

| ID | Requirement | Status |
|----|-------------|--------|
| FR-14 | Persistent configuration file | Not Started |
| FR-15 | Load config on startup | Not Started |
| FR-16 | Config validation | Not Started |

### Batch Processing (P2)

| ID | Requirement | Status |
|----|-------------|--------|
| FR-17 | Accept JSON array input | Not Started |
| FR-18 | Return JSON array output | Not Started |
| FR-19 | Progress indication for batch | Not Started |

---

## Non-Functional Requirements

### Performance (P1)

| ID | Requirement | Target |
|----|-------------|--------|
| NFR-1 | Single lead scoring | < 100ms |
| NFR-2 | Batch scoring (100 leads) | < 5s |
| NFR-3 | Server startup time | < 2s |

### Usability (P1)

| ID | Requirement | Target |
|----|-------------|--------|
| NFR-4 | Zero-config installation | Works with uvx |
| NFR-5 | Clear error messages | All errors actionable |
| NFR-6 | Documentation | Complete for all features |

### Reliability (P2)

| ID | Requirement | Target |
|----|-------------|--------|
| NFR-7 | Test coverage | > 80% |
| NFR-8 | Type safety | Full mypy strict |
| NFR-9 | Graceful degradation | Never crash on bad input |

---

## Constraints

| ID | Constraint | Rationale |
|----|------------|-----------|
| C-1 | Python 3.10+ | Modern async features |
| C-2 | MCP 1.x compatible | Protocol stability |
| C-3 | No external API dependencies | Works offline |
| C-4 | STDIO transport initially | Standard MCP pattern |

---

## Requirements Gaps (From Review)

_Identified in the product review:_

| Gap | Priority | Effort |
|-----|----------|--------|
| Persistent configuration | P1 | Low |
| Batch processing | P1 | Medium |
| Personal email detection | P1 | Low |
| REST API mode | P2 | Medium |
| CRM integrations | P2 | High |
| Fuzzy industry matching | P2 | Medium |
| Conversion feedback loop | P3 | High |

---

## Next Steps
- Validate requirements with user research
- Prioritize based on target user needs
- Create technical specifications for P0/P1 items
