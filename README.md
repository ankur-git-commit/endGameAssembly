# Assembly: Endgame

A React-based word guessing game with a programming language theme. Players must guess the hidden word before all programming languages are eliminated.

## Game Overview

Assembly: Endgame is a Hangman-style word guessing game. Instead of drawing a hangman, each incorrect guess eliminates a programming language. Players must guess the word in under 8 attempts to win the game.

## Screenshots

### Main Game Interface
<img src="main.PNG" alt="Main game interface" width="600">

### Victory Screen
<img src="mainwon.PNG" alt="Game won screen" width="600">

### Game Over Screen
<img src="mainlost.PNG" alt="Game lost screen" width="600">

## Features

- Interactive word guessing with clickable letters
- Programming language elimination theme
- Visual feedback for correct and incorrect guesses
- Dynamic notifications for game state changes
- Responsive design built with Tailwind CSS
- Full TypeScript support

## Tech Stack

- React 19.1.0 - Frontend framework
- TypeScript - Type safety and development experience
- Vite - Build tool and development server
- Tailwind CSS 4.1.7 - Utility-first CSS framework
- Google Fonts - Custom font integration

## Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd assembly-endgame
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start development server
   ```bash
   npm run dev
   ```

4. Build for production
   ```bash
   npm run build
   ```

5. Preview production build
   ```bash
   npm run preview
   ```

## How to Play

1. A random word is selected and displayed as blank spaces
2. Click on alphabet letters to make guesses
3. Letter colors indicate the result:
   - Green letters are correct and in the word
   - Red letters are incorrect
   - Yellow letters have not been guessed yet
4. Each wrong guess eliminates a programming language
5. Win by revealing all letters before making 8 incorrect guesses
6. Lose by making 8 incorrect guesses

## Project Structure

```
src/
├── components/
│   ├── inputs/
│   │   ├── Letters.tsx          # Individual letter buttons
│   │   └── NewGameButton.tsx    # Reset game functionality
│   ├── Eliminations.tsx         # Programming languages display
│   ├── GuessWord.tsx           # Word display with blanks
│   ├── Keyboard.tsx            # Virtual keyboard layout
│   ├── NotificationBanner.tsx  # Game state messages
│   └── Title.tsx               # Game header and title
├── types/
│   ├── farewellText.ts         # Farewell message types
│   ├── game.ts                 # Game state interfaces
│   └── languages.ts            # Programming language types
├── utils/
│   ├── alphabets.ts            # A-Z letter array
│   ├── farewellText.ts         # Random farewell messages
│   ├── languages.ts            # Programming languages data
│   ├── randomWordGenerator.ts  # Word selection logic
│   └── words.ts                # Word database
├── App.tsx                     # Main application component
├── main.tsx                    # Application entry point
└── index.css                   # Global styles and fonts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Game Logic

### Word Selection
- Random word chosen from a curated list of 400+ English words
- Words are converted to uppercase for display
- Each letter tracks visibility and color state

### Game State Management
- **keyPressed**: Array of guessed letters
- **incorrectGuesses**: Counter for wrong attempts
- **gameState**: Tracks win/loss status
- **pogLang**: Currently eliminated programming language

### Win/Loss Conditions
- **Win**: All letters in the word are revealed
- **Loss**: 8 incorrect guesses made (all languages eliminated)


## License

This project is open source and available under the [MIT License](LICENSE).
