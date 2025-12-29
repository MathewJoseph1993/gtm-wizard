# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Next.js dashboard with shadcn/ui components
- PocketBase integration for database and auth
- Traffic Light component (RED/YELLOW/GREEN signals)
- Login and signup pages
- Auth context for PocketBase
- GTM Wizard architecture skill for Claude Code
- Monorepo structure with packages/ layout

### Changed
- Restructured codebase to monorepo (packages/mcp-server, packages/dashboard, packages/ai-agent)
- Updated CI workflow for new paths
- Updated README to reflect platform vision
- Updated ROADMAP with v0.3 Dashboard MVP phases

## [0.2.1] - 2024-12-25

### Fixed
- MCP server entry point not running async main correctly

## [0.2.0] - 2024-12-24

### Added
- Lead scoring tool (`score_lead`) with transparent breakdown
- Role classification tool (`classify_role`)
- Industry classification tool (`classify_industry`)
- Routing determination tool (`determine_routing`)
- Disqualification check tool (`check_disqualification`)
- Lead qualification workflow prompt
- ICP definition prompt
- Outbound campaign design prompt
- Lead scoring calibration prompt
- Foundation resources (GTM knowledge base)

### Changed
- Improved installation documentation
- Added cross-platform support

## [0.1.0] - 2024-12-24

### Added
- Initial release
- MCP server skeleton with stdio transport
- `diagnose_rate_limiting` tool for API troubleshooting
- Project setup with pyproject.toml
- CI/CD with GitHub Actions
- Test suite with 80%+ coverage

[Unreleased]: https://github.com/MathewJoseph1993/gtm-wizard/compare/v0.2.1...HEAD
[0.2.1]: https://github.com/MathewJoseph1993/gtm-wizard/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/MathewJoseph1993/gtm-wizard/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/MathewJoseph1993/gtm-wizard/releases/tag/v0.1.0
