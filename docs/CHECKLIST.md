
# Spec-Driven Agent (Codex) Setup — Checklist

## 0) Prereqs
- Node 18+, Next.js app dir, clean git, fast tests.

## 1) Repo scaffolding
- /specs/global/game_master.yaml
- /specs/tickets/*.yaml
- /specs/agent_prompt.md
- /agent/guardrails.json
- /docs/AGENT_GUIDE.md

## 2) Ticket schema (required keys)
- ticket_id, game, title, type, description
- components[], exports/api, constants?, dependencies?, tests[]

## 3) Tests
- Put tests in src/games/<game>/__tests__/<ticket_id>.test.ts
- Scripts: npm run test:agent

## 4) Prompt
- Use /specs/agent_prompt.md. Keep it stable.

## 5) Loop
- New branch → run agent → apply patch → npm run test:agent → iterate → PR

## 6) Guardrails
- Scope writes to "components"; deny package/env edits.

## 7) CI
- yaml-lint, typecheck, test:agent on PR.
