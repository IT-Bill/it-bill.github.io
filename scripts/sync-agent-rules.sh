#!/usr/bin/env bash
#
# sync-agent-rules.sh — Validate AGENTS.md as the project instruction source
#
# AGENTS.md is the single source of truth for agent instructions.
# The repository intentionally keeps only Codex and Claude skill files.
#
# Usage:
#   bash scripts/sync-agent-rules.sh
#
# Codex reads AGENTS.md natively.
# Claude uses CLAUDE.md as a thin @AGENTS.md pointer.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SOURCE="$REPO_ROOT/AGENTS.md"

if [[ ! -f "$SOURCE" ]]; then
  echo "Error: AGENTS.md not found at $SOURCE" >&2
  exit 1
fi

echo "AGENTS.md found at $SOURCE."
echo "No platform-specific agent rule copies are generated; keep .codex and .claude only."
