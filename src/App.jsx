import { useState } from "react";
import clsx from "clsx";
import "./App.css";
import { languages } from "./languages";
import { getFarewellText } from "./utils";
import { getRandomWord } from "./utils";

function App() {
  const [currentWord, setCurrentWord] = useState(() =>
    getRandomWord().toUpperCase()
  );
  const [guessedWord, setGuessedWord] = useState([]);

  const wrongGuessCount = guessedWord.filter(
    (char) => !currentWord.includes(char)
  ).length;
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedWord.includes(letter));

  const isGameOver = isGameWon || isGameLost;
  const isLastGuessIncorrect =
    guessedWord[guessedWord.length - 1] &&
    !currentWord.includes(guessedWord[guessedWord.length - 1]);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  function addGuessedLetter(letter) {
    setGuessedWord((prev) =>
      prev.includes(letter) ? prev : [...prev, letter]
    );
  }

  const languageELements = languages.map((language, index) => {
    const styles = {
      backgroundColor: language.backgroundColor,
      color: language.color,
    };

    return (
      <p
        key={language.name}
        style={styles}
        className={index < wrongGuessCount ? "lost" : undefined}
      >
        {language.name}
      </p>
    );
  });

  const wordElements = currentWord.split("").map((letter, index) => {
    const isRevealed = guessedWord.includes(letter) || isGameOver;
    const letterClass = clsx({
      "missed-letter": isGameLost && !guessedWord.includes(letter),
    });

    return (
      <span key={index} className={letterClass}>
        {isRevealed ? letter.toUpperCase() : ""}
      </span>
    );
  });

  const keyboardElements = alphabet.map((letter) => {
    const isGuessed = guessedWord.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);

    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button
        key={letter}
        className={className}
        disabled={isGameOver}
        aria-disabled={guessedWord.includes(letter)}
        aria-label={`letter ${letter}`}
        onClick={() => addGuessedLetter(letter)}
      >
        {letter}
      </button>
    );
  });

  const gameStatusClass = clsx("game-status", {
    won: isGameWon,
    lost: isGameLost,
    farewellSection: !isGameOver && isLastGuessIncorrect,
  });

  function renderGameStatus() {
    if (!isGameOver && isLastGuessIncorrect) {
      return (
        <p className="farewell">
          {getFarewellText(languages[wrongGuessCount - 1].name)}
        </p>
      );
    }

    if (isGameLost) {
      return (
        <>
          <h2>Game Over!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      );
    }
    if (isGameWon) {
      return (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </>
      );
    }

    return null;
  }

  function startNewGame() {
    setCurrentWord(getRandomWord().toUpperCase());
    setGuessedWord([]);
  }

  return (
    <main>
      <header>
        <h1>Assembly Endgame</h1>
        <p>
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section role="status" aria-live="polite" className={gameStatusClass}>
        {renderGameStatus()}
      </section>
      <section className="languages">{languageELements}</section>
      <section className="word">{wordElements}</section>
      <section className="keyboard">{keyboardElements}</section>
      {isGameOver && (
        <button onClick={startNewGame} className="new-game">
          New Game
        </button>
      )}
    </main>
  );
}

export default App;
