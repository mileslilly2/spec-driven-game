
# AGENT_GUIDE

## Using Codex (or your agent)
1. Open the agent and point it at this repo (or paste the spec + prompt).
2. Paste one ticket YAML into /specs/agent_prompt.md USER slot.
3. Require unified patch output with only the files in "components".
4. Apply patch; run: `npm run test:agent`.

## Prompts
- Keep tickets small and explicit.
- Include constants, exports, tests bullets.

## Parallelization
- Independent tickets in separate branches/sandboxes.
- Merge after green tests.
