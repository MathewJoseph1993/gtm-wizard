# Use Cases

> **Status:** Template - Pending User Research
> **Last Updated:** December 25, 2024

## Use Case Template

```markdown
### UC-[X]: [Name]

**Actor:** [Who performs this]
**Goal:** [What they want to achieve]
**Trigger:** [What starts this]

**Preconditions:**
- [Condition 1]
- [Condition 2]

**Main Flow:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Postconditions:**
- [Outcome 1]
- [Outcome 2]

**Frequency:** [Daily/Weekly/Monthly]
**Value:** [Why this matters]
```

---

## Hypothesized Use Cases

### UC-1: Score Incoming Lead

**Actor:** GTM Engineer or SDR
**Goal:** Quickly determine if a lead is worth pursuing
**Trigger:** New lead enters CRM

**Main Flow:**
1. Lead data is available (name, title, company, etc.)
2. User invokes GTM Wizard scoring
3. System returns score with breakdown
4. User sees transparent reasoning
5. User decides on next action

**Value:** Saves time, consistent qualification, transparent reasoning

---

### UC-2: Classify Lead for Routing

**Actor:** RevOps Manager
**Goal:** Automatically route leads to right team
**Trigger:** Lead is scored

**Main Flow:**
1. Lead has been scored
2. User invokes routing determination
3. System returns routing track (high/medium/low-touch)
4. User or automation assigns lead
5. Lead enters appropriate workflow

**Value:** Consistent routing, capacity-matched, faster response

---

### UC-3: Build ICP Definition

**Actor:** GTM Engineer or Founder
**Goal:** Codify ideal customer profile
**Trigger:** Starting GTM motion or refining targeting

**Main Flow:**
1. User has ideas about target customer
2. User invokes ICP definition prompt
3. System guides through structured questions
4. System outputs structured ICP configuration
5. User uses config for scoring/routing

**Value:** Structured thinking, reusable config, consistency

---

### UC-4: Calibrate Scoring Model

**Actor:** GTM Engineer or RevOps
**Goal:** Improve scoring accuracy based on results
**Trigger:** Conversion data available

**Main Flow:**
1. User has conversion outcome data
2. User invokes calibration workflow
3. System analyzes patterns
4. System recommends weight adjustments
5. User updates scoring config

**Value:** Data-driven improvement, better predictions

---

### UC-5: Troubleshoot Rate Limiting

**Actor:** GTM Engineer
**Goal:** Fix API errors in GTM stack
**Trigger:** 429 errors or slow responses

**Main Flow:**
1. User encounters rate limit issues
2. User invokes diagnosis tool
3. System provides API-specific guidance
4. User implements fixes
5. Errors resolve

**Value:** Faster debugging, GTM-specific expertise

---

## Use Cases to Validate

_These need user research validation:_

- [ ] Is scoring the primary use case?
- [ ] How often do users score leads?
- [ ] Is routing automated or manual?
- [ ] How is calibration done today?
- [ ] What triggers troubleshooting needs?

## Next Steps
- Validate use cases through user research
- Prioritize based on frequency and value
- Map use cases to features
