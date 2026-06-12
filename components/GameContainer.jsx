import React from "react";

import GameInfo from "./GameInfo";
import Status from "./Status";
import LanguagesChips from "./LanguagesChips";
import { languages } from "./languages";

export default function GameContainer() {
  const [currentWord, SetCurrentWord] = React.useState("react");
  const characters = [...currentWord];

  const [guessedLetters, setGuessedLetters] = React.useState([]);
  
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const lettersArray = [...letters];

  const wrongGuessesCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter),
  ).length;

  
  
  
  const isGameWon = currentWord.split("").
    every(letter => guessedLetters.includes(letter))
  const isGameLost = (wrongGuessesCount >= languages.length - 1)
  const isGameOver = isGameWon || isGameLost
  

  function guessed(letter, index) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter],
    );
  }

  


  //------ language chips --------------------//
  const languageElements = languages.map((lang, index) => {
    const isLanguageLost = index < wrongGuessesCount
    
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
      {guessedLetters.includes(char) && characters.includes(char)
        ? char.toLocaleUpperCase()
        : ""}
    </span>
  ));
//-------missing word finish -----------------------------------------------------//

let classForStatus = "default";
let statusHeading = "Welcome!";
let statusPara = "Hope you're smart enough"

if(wrongGuessesCount === 1){
  classForStatus = "one-wrong"
  statusHeading = "First Strike"
  statusPara = "You can do without HTML can't you"
}

if(wrongGuessesCount === 2){
  classForStatus = "two-wrong"
  statusHeading = "Heyy! Think"
  statusPara = "Farewell CSS and HTML🫡"
}

if(wrongGuessesCount === 3){
  classForStatus = "three-wrong"
  statusHeading = "Ouch!!"
  statusPara = "There go the basics of web dev"
}

if(wrongGuessesCount === 4){
  classForStatus = "four-wrong"
  statusHeading = "Getting dangerous"
  statusPara = "You're halfway, if you even realise that."
}

if(wrongGuessesCount === 5){
  classForStatus = "five-wrong"
  statusHeading = "You should quit"
  statusPara = "Your language pool is shrinking fast."
}

if(wrongGuessesCount === 6){
  classForStatus = "six-wrong"
  statusHeading = "Close call"
  statusPara = "Almost out of luck!"
}

if(wrongGuessesCount === 7){
  classForStatus = "seven-wrong"
  statusHeading = "Should've quit when I told you"
  statusPara = "One more wrong guess and it's over."
}




if(isGameWon){
  classForStatus = "game-won"
  statusHeading = "Congratulations!"
  statusPara = "You're not as dumb as I thought"
}

if(isGameLost){
  classForStatus = "game-lost"
  statusHeading = "I told you!!"
  statusPara = "You better start learning Assembly"
}

//-----game container return--

  return (
    <>
      <div className="game-container">
        <GameInfo />

{//-------- Status ------------//        
}        <section>
            <div className= {classForStatus}>
                <h2>{statusHeading}</h2>
                <p>{statusPara}</p>
            </div>
        </section>
{//-------- Status ------------//        
}        <section className="languages-container">{languageElements}</section>
        <section className="word-section">{wordDisplay}</section>

        {/* keyboard section */}
        <section className="keyboard">{buttonsForKeyboard}</section>

       { isGameOver && <button className="new-game">New Game</button>}
      </div>
    </>
  );
}
