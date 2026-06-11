import React from "react";

import GameInfo from "./GameInfo";
import Status from "./Status";
import LanguagesChips from "./LanguagesChips";
import { languages } from "./languages";

export default function GameContainer() {
  const [currentWord, SetCurrentWord] = React.useState("react");
  
  const [guessedLetters, setGuessedLetters] = React.useState([]);

    function guessed(letter , index) {
        setGuessedLetters(prevLetters => 
            prevLetters.includes(letter) ? 
                prevLetters : 
                [...prevLetters, letter]
        )

        
    }



  // The language elements
  const languageElements = languages.map((lang, index) => (
    <LanguagesChips
      key={lang.name}
      name={lang.name}
      bgColor={lang.backgroundColor}
      color={lang.color}
    />
  ));

  const characters = [...currentWord];

  const stylesForChar = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#323232",
    color: "#F9F4DA",
    width: "40px",
    height: "40px",
    borderBottom: "1px solid #F9F4DA",
    fontSize: "1.125rem",
    // paddingTop : "10px"
  };

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const lettersArray = [...letters];



  const buttonsForKeyboard = lettersArray.map((letter, index) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const className = isCorrect ? "correct" : isWrong ? "wrong" : "default";

    return (
      <button 
        className={className}
        key={index}
        onClick={() => guessed(letter, index)}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  return (
    <>
      <div className="game-container">
        <GameInfo />
        <Status />
        <section className="languages-container">{languageElements}</section>
        <section className="word-section">
          {characters.map((char, index) => (
            <span key={index} style={stylesForChar}>
              {" "}
              {char.toUpperCase()}{" "}
            </span>
          ))}
        </section>

        {/* keyboard section */}
        <section className="keyboard">
          {buttonsForKeyboard}
        </section>

        <button className="new-game">New Game</button>
      </div>
    </>
  );
}
