#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

typst compile "$ROOT_DIR/resume/cv-zhanwei-en.typ" "$ROOT_DIR/public/cv-zhanwei-en.pdf"
typst compile "$ROOT_DIR/resume/cv-zhanwei-zh.typ" "$ROOT_DIR/public/cv-zhanwei-zh.pdf"
