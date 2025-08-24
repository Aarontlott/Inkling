# Inkling

A daily literary guessing game where players identify books from Markov chain-generated text snippets.

## Features

- Daily book challenges with sequential 4-question quiz (era, genre, author, work)
- Progressive hint system - unlock additional text lines for help
- Wordle-style scoring with immediate feedback
- Date selection to browse previous puzzles
- Clean NYT games-inspired interface

## Getting Started

```bash
npm install
npm run dev
```


## How to Play

1. Read the Markov chain-generated text from a classic work
2. Answer 4 questions in sequence: Era → Genre → Author → Work
3. Wrong answers end the game immediately
4. Use "Show Hint" to reveal additional text lines
5. Share your results with the score grid

## Tech Stack

- React 18 + TypeScript
- Material-UI (MUI) components
- Vite for build tooling

## Development

```bash
npm run build    # Production build
npm run lint     # Code linting
npm run preview  # Preview production build
```