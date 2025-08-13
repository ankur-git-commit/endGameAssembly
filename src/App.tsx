import { useState, useEffect } from "react";
import Title from "./components/Title";
import Eliminations from "./components/Eliminations";
import Keyboard from "./components/Keyboard";
import GuessWord from "./components/GuessWord";
import NewGameButton from "./components/inputs/NewGameButton";
import { randomWordGenerator } from "./utils/randomWordGenerator";
import { PROGRAMMING_LANGUAGES } from "./utils/languages";

import type { GuessItem, Game } from "./types/game";

function App() {
    const [keyPressed, setKeyPressed] = useState<string[]>([]);
    const [wordToGuess, setWordToGuess] = useState<GuessItem[]>();
    const [incorrectGuesses, setIncorrectGuesses] = useState<number>(0);
    const [pogLang, setPogLang] = useState("");
    const [gameState, setGameState] = useState<Game>({
        gameWon: false,
        gameLost: false,
    });
    // console.log(incorrectGuesses);

    useEffect(() => {
        resetGame();
    }, []);

    const handleIncorrectGuess = () => {
        const newIncorrectGuesses = incorrectGuesses + 1;
        setIncorrectGuesses(newIncorrectGuesses);

        if (newIncorrectGuesses <= PROGRAMMING_LANGUAGES.length) {
            const elimLanguage =
                PROGRAMMING_LANGUAGES[newIncorrectGuesses - 1].title;
            setPogLang(elimLanguage);
        }

        return newIncorrectGuesses;
    };

    const resetGame = () => {
        setGameState({ gameWon: false, gameLost: false });
        setKeyPressed([]);
        setIncorrectGuesses(0);
        setPogLang("");
        setWordToGuess(randomWordGenerator());
        return;
    };

    const keyLogger = (key: string): void => {
        if (gameState.gameLost || gameState.gameWon) {
            return;
        }
        if (wordToGuess) {
            setKeyPressed([...keyPressed, key]);

            const isKeyInWord = wordToGuess.some((item) => {
                return item.letter === key;
            });

            if (!isKeyInWord) {
                const newCount = handleIncorrectGuess();

                if (newCount >= PROGRAMMING_LANGUAGES.length) {
                    setGameState({ ...gameState, gameLost: true });
                    const updateWordVisibility = wordToGuess.map((item) => {
                        if (item.isVisible === false) {
                            return {
                                ...item,
                                isVisible: true,
                                textColor: "#EC5D49",
                            };
                        }
                        return item;
                    });

                    setWordToGuess(updateWordVisibility);
                }
                return;
            }

            const updatedWord = wordToGuess.map((item) => {
                return item.letter === key
                    ? { ...item, isVisible: true }
                    : item;
            });

            if (updatedWord) {
                setWordToGuess(updatedWord);

                const checkIfWon = updatedWord.every((item) => item.isVisible);
                if (checkIfWon) {
                    setGameState({ gameWon: true, gameLost: false });
                    return;
                }
            }
        } else {
            window.alert("Something went wrong! Starting a new game...");
            resetGame();
        }
    };

    // console.log(incorrectGuesses);

    return (
        <div className="flex min-h-screen min-w-min flex-col items-center gap-10 bg-[#282726] py-30">
            <Title
                gameState={gameState}
                incorrectGuesses={incorrectGuesses}
                pogLang={pogLang}
            />
            <Eliminations incorrectGuesses={incorrectGuesses} />
            {wordToGuess && (
                <>
                    <GuessWord wordToGuess={wordToGuess} />

                    <Keyboard
                        wordToGuess={wordToGuess}
                        keyLogger={keyLogger}
                        keyPressed={keyPressed}
                    />
                </>
            )}
            {(gameState.gameWon || gameState.gameLost) && (
                <NewGameButton resetGame={resetGame} />
            )}
        </div>
    );
}

export default App;
