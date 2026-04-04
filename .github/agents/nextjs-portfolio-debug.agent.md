---
name: nextjs-portfolio-debug
description: "Debug and fix Next.js portfolio launcher issues, including 'localhost refused to connect'. Use for commands involving npm/yarn dev, build, or runtime inspection."
applyTo: "**/*"
---

## What this agent does

- Checks Next.js dev server status and start commands.
- Diagnoses common network and port issues on localhost:3000.
- Guides on dependencies, `npm install`, `npm run dev`, and `npm run build`.
- Fixes config issues in `next.config.ts`, `package.json`, and basic React component errors.

## Usage

1. Open a new terminal in `c:\Users\ASUS\website portfolio`.
2. Run `npm install` (if not already installed).
3. Run `npm run dev`.
4. If `localhost:3000` is refused, inspect terminal errors and `lsof`/`netstat` for port conflicts.

## Preferred tools

- `run_in_terminal` for commands.
- `read_file`/`grep_search` for source inspection.
- Avoid external network fetch unless explicitly needed.
