# Daily Markov

A simple viewer for Markov chains in a daily NYT-game style format.

## Features

- Seeded random generation for consistent daily results
- Interactive web interface built with React + TypeScript
- Deterministic output based on input seed

## Getting Started

```bash
npm install
npm run dev
```

## Usage

1. Enter a seed value (defaults to "Aberdeen")
2. Click "generate" to create Markov chain output
3. Same seed always produces the same result

## Tech Stack

- React 18 + TypeScript
- Vite for build tooling
- Seeded random generation with `rand-seed`

## Development

```bash
npm run build    # Production build
npm run lint     # Code linting
npm run preview  # Preview production build
```