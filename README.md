# Inkling

A daily literary guessing game where players identify books from Markov chain-generated text snippets.

Can be played at [daily-inkling.netlify.app](https://daily-inkling.netlify.app/) (thanks Netlify!)

## Features

- Daily literary challenges with sequential 4-question quiz (era, genre, author, work)
- Progressive hint system - browse through multiple text snippets with arrow navigation
- Smart scoring system with contextual feedback messages
- Date selection to browse previous puzzles (past dates only)
- Built-in tutorial explaining game rules and Markov chains
- Clean NYT games-inspired interface with Material-UI components

## How to Play

1. Read the scrambled text generated from a classic literary work
2. Answer 4 questions in sequence: Era → Genre → Author → Work
3. Use the arrow buttons to browse through different text snippets for clues
4. Try to get all 4 questions right for a perfect score!

## What's a Markov Chain?

A Markov chain is a mathematical model that generates new text by analyzing patterns in existing text. It looks at which words commonly follow other words and uses this to create new, often nonsensical sentences. I've fed classic literature into Markov chains to create scrambled versions that maintain the author's style and vocabulary while being completely new (and usually amusing) text.


## Why do this?

It started out with me being curious about Markov chains in respect to procedural generation-- another interest of mine-- and grew into a "What if..." of making a clean NYT-style game out of Markov chains.

I've got another fun procedural development project over on Itch.io-- a fictitious nautical archive. Check out the [Victorial Nautical Archive](https://haldron.itch.io/victorian-nautical-archive)


## Development Stuff

### Getting Started

```bash
npm install
npm run dev
```

## Tech Stack

- React 18 + TypeScript
- Material-UI (MUI) components
- Vite for build tooling

## Development

```bash
npm run build       # Production build
npm run build:force # Build ignoring TypeScript errors
npm run lint        # Code linting
npm run preview     # Preview production build
```