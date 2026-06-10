import GameInfo from "./GameInfo"
import Status from "./Status"
import LanguagesChips from "./LanguagesChips"
import { languages } from "./languages"

export default function GameContainer(){
    return (
        <>
            <div className="game-container">
                <GameInfo/>
                <Status />
                <div className="languages-container">
                    {
                        languages.map((lang, index) => 
                            <LanguagesChips key={index} name={lang.name} bgColor={lang.backgroundColor} color={lang.color} />
                        )
                    }
                </div>
            </div>
        </>
    ) 
}