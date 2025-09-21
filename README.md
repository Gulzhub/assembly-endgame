# Assembly Endgame

![Assembly Endgame Screenshot](<img width="668" height="812" alt="image" src="https://github.com/user-attachments/assets/00e077a1-6926-434d-9be9-bb0e91de83bc" />
) <!-- Replace with actual screenshot URL -->

A programming-themed word guessing game inspired by Wordle. Save your favorite languages from the clutches of Assembly by guessing the secret word before it's too late!

## Demo

Play the game here: [https://assembly-endgame-demo.vercel.app/](https://assembly-endgame-demo.vercel.app/)  
*(This is a dummy link; replace with your actual deployment URL once hosted.)*

## Description

In **Assembly Endgame**, you have up to 8 wrong guesses to figure out the hidden programming-related word (3-6 letters). Each incorrect guess "eliminates" a programming language from the ecosystem, overlaying it with a skull emoji and a dark fade effect. If you run out of guesses, Assembly takes over the world! Win by revealing the full word, or lose and face the low-level reality.

The game features dynamic visual feedback, farewell messages for fallen languages, and a mix of humor and tension for developers.

## How to Play

1. **Guess Letters**: Click keyboard buttons to guess letters in the hidden word.
2. **Feedback**:
   - Correct guesses reveal letters in the word.
   - Wrong guesses eliminate a language (with a skull overlay) and show a farewell message.
3. **Win Condition**: Reveal the entire word before 8 wrong guesses.
4. **Lose Condition**: 8 wrong guesses, and Assembly wins – revealing missed letters in red.
5. **New Game**: Reset with a random word after winning or losing.

## Tech Stack

- **Frontend Framework**: React (with hooks like `useState` for managing game state).
- **Styling**: Pure CSS with a modern reset (box-sizing, font-smoothing, etc.), Flexbox for layout, transitions for animations, and pseudo-elements for overlays (e.g., skull on lost languages).
- **Utilities**:
  - `clsx`: For conditional class names (e.g., correct/wrong/disabled buttons).
  - Custom utils: `getFarewellText` for dynamic messages, `getRandomWords` for word selection.
- **Data**: `languages` array with color-coded styles for each language.
- **Build/Deployment**: Assumes Vite or Create React App; deployable to Vercel/Netlify.

No backend required – fully client-side!

## Installation

1. Clone the repo:
   ```
   git clone https://your-repo-url/assembly-endgame.git
   ```
2. Install dependencies:
   ```
   cd assembly-endgame
   npm install
   ```
3. Run locally:
   ```
   npm run dev
   ```
4. Build for production:
   ```
   npm run build
   ```

## Contributing

Feel free to fork and submit PRs! Ideas: Add more words/languages, improve animations, or integrate sharing features.

## License

MIT License – free to use and modify.

---

Built with ❤️ for the dev community. If Assembly wins, at least we'll have efficient code! 😄
