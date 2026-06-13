# Assembly Endgame

Assembly Endgame is a word-guessing game built with React and Vite. The player tries to reveal a hidden word before running out of guesses, while the UI reacts to each wrong guess by updating the game status, the language list, and the on-screen keyboard.

## Core Functionalities

- Randomly selects a word for each new game.
- Lets the player guess letters using an interactive keyboard.
- Tracks correct and wrong guesses with React state.
- Updates the game status message based on the current number of mistakes.
- Marks programming languages as lost as wrong guesses increase.
- Shows the full word and disables input when the game ends.
- Displays confetti when the player wins.
- Includes screen-reader friendly status text for accessibility.

## React Concepts Used

- `useState` for managing the current word and guessed letters.
- Conditional rendering for win/lose states and the New Game button.
- Rendering lists with `map` for keyboard keys, language chips, and hidden word characters.
- Event handling with click handlers for letter guesses and game reset.
- Derived state such as wrong guess count, win state, and loss state.
- Reusable components such as `GameInfo`, `Status`, and `LanguagesChips`.

## CSS Concepts Used

- Flexbox for layout and alignment.
- Modular class-based styling for game states and keyboard states.
- Pseudo-elements for the lost-language overlay effect.
- Visual state styling for correct, wrong, disabled, win, and loss feedback.
- A consistent color palette and rounded UI elements for a game-like look.
- Screen-reader-only utility styling for accessibility text.

## Project Structure

- `components/` contains the main game UI pieces.
- `src/App.jsx` mounts the game container.
- `src/index.css` contains the global and game-specific styles.
- `components/languages.js` stores the language data used in the status track.
- `components/words.js` provides the word list used for random selection.

