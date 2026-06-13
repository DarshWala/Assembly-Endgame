import React from "react";

import GameInfo from "./GameInfo";
import Status from "./Status";
import LanguagesChips from "./LanguagesChips";
import { languages } from "./languages";
import { words } from "./words";

export default function GameContainer() {
  const [currentWord, SetCurrentWord] = React.useState("react");
  const characters = [...currentWord];

  const [guessedLetters, setGuessedLetters] = React.useState([]);

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const lettersArray = [...letters];

  const wrongGuessesCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter),
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameLost = wrongGuessesCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;

  function guessed(letter, index) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter],
    );
  }

  //------ language chips --------------------//
  const languageElements = languages.map((lang, index) => {
    const isLanguageLost = index < wrongGuessesCount;

    return (
      <LanguagesChips
        key={lang.name}
        class={`chip ${isLanguageLost ? "lost" : ""}`}
        name={lang.name}
        bgColor={lang.backgroundColor}
        color={lang.color}
      />
    );
  });

  //------ language chips finish --------------------//

  // ------- keyboard -------------------------------------------------//
  const buttonsForKeyboard = lettersArray.map((letter, index) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const className = isCorrect ? "correct" : isWrong ? "wrong" : "default";

    return (
      <button
        
        disabled={isGameOver}
        aria-disabled={guessedLetters.includes(letter)}
        aria-label={`Letter ${letter}`}
        className={className}
        key={index}
        onClick={() => guessed(letter, index)}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  //-------keyboard finish --------------------------------------------------//

  //-------missing word -----------------------------------------------------//
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
  };
  const wordDisplay = characters.map((char, index) => (
    <span key={index} style={stylesForChar}>
      {((guessedLetters.includes(char) && characters.includes(char)) || isGameOver)
        ? char.toLocaleUpperCase()
        : ""}

        
    </span>
  ));
  //-------missing word finish -----------------------------------------------------//


//- Game Status function ---------------------------------------
function getGameStatus() {
  if (isGameWon) {
      return {
        classForStatus: "game-won",
        statusHeading: "Congratulations!",
        statusPara: "You're not as dumb as I thought",
      };
    }
    if (isGameLost) {
      return {
        classForStatus: "game-lost",
        statusHeading: "I told you!!",
        statusPara: "You better start learning Assembly",
      };
    }
    
    const statuses = [
      {
        classForStatus: "default",
        statusHeading: "Welcome!",
        statusPara: "Hope you're smart enough",
      },
      {
        classForStatus: "one-wrong",
        statusHeading: "First Strike",
        statusPara: "You can do without HTML can't you",
      },
      {
        classForStatus: "two-wrong",
        statusHeading: "Heyy! Think",
        statusPara: "Farewell CSS and HTML🫡",
      },
      {
        classForStatus: "three-wrong",
        statusHeading: "Ouch!!",
        statusPara: "There go the basics of web dev",
      },
      {
        classForStatus: "four-wrong",
        statusHeading: "Getting dangerous",
        statusPara: "You're halfway, if you even realise that.",
      },
      {
        classForStatus: "five-wrong",
        statusHeading: "You should quit",
        statusPara: "Your language pool is shrinking fast.",
      },
      {
        classForStatus: "six-wrong",
        statusHeading: "Close call",
        statusPara: "Almost out of luck!",
      },
      {
        classForStatus: "seven-wrong",
        statusHeading: "Should've quit when I told you",
        statusPara: "One more wrong guess and it's over.",
      },
    ];
    
    return statuses[wrongGuessesCount] || statuses[0];
  }


  
  const { classForStatus, statusHeading, statusPara } = getGameStatus();
  //- Game Status function end ---------------------------------------



  function newGame(){
    SetCurrentWord(word => {
      const random = Math.ceil(Math.random() * 480)
        if(word === words[random]){
          return words[random + 1];
        }else{
          return words[random]
        }
    }      
    )

    setGuessedLetters([]) 


  }
  
  //! -----game container return--
  return (
    <>
      <div className="game-container">
        <GameInfo />
        {
          //-------- Status ------------//
        }{" "}
        <section>
          <div className={classForStatus}>
            <h2>{statusHeading}</h2>
            <p>{statusPara}</p>
          </div>
        </section>
        {
          //-------- Status ------------//'
        }{" "}
        <section className="languages-container">{languageElements}</section>
        <section className="word-section">{wordDisplay}</section>
        {
          //! Screen Reader only section ----------//
        }
        <section className="sr-only" aria-live="polite" role="status">
          <p>
            Current word:{" "}
            {currentWord
              .split("")
              .map((letter) =>
                guessedLetters.includes(letter) ? letter + "." : "blank.",
              )
              .join(" ")}
          </p>
        </section>
        {
          //! Screen Reader only section end ----------//
        }

        {
          //- Keyboard section -----------------------
        }
        <section aria-live="polite" role="status" className="keyboard">
          {buttonsForKeyboard}
        </section>

        {
          //- GAME OVER BUTTON
        }
        {isGameOver && <button onClick={newGame} className="new-game">New Game</button>}
      </div>
    </>
  );
}
