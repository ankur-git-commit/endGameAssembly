import type { GuessItem } from "../types/game";

interface GuessWordProps {
    wordToGuess: GuessItem[];
}

function GuessWord({ wordToGuess }: GuessWordProps) {
    return (
        <div className="flex flex-row gap-0.5">
            {wordToGuess.map((entry: any, index: number) => {
                return (
                    <div
                        key={index}
                        className="flex h-16 w-16 items-center justify-center border-b-2 border-[#F9F4DA] bg-[#323232]"
                    >
                        <div
                            className="font-Han text-2xl font-extrabold"
                            style={{ color: entry.textColor }}
                        >
                            {entry.isVisible && entry.letter}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default GuessWord;
