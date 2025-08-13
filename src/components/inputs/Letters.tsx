function Letters({
    letters,
    wordToGuess,
    keyLogger,
    keyPressed,
}: any) {
    const letterContainerStyling: string =
        "flex items-center justify-center gap-2";
    const uppercaseLettersStyling: string =
        "font-Han h-14 w-14 text-xl rounded border-1 border-[#D7D7D7]  font-[600] text-[#1E1E1E]";
    return (
        <div className={letterContainerStyling}>
            {letters.map((letter: string) => {
                const isLetterPressed = keyPressed.includes(letter);
                const isLetterinWord = wordToGuess.some(
                    (item: any) => item.letter === letter,
                );

                return (
                    <button
                        key={letter}
                        value={letter}
                        className={`${uppercaseLettersStyling} ${
                            isLetterPressed
                                ? isLetterinWord
                                    ? "bg-[#10A95B]"
                                    : "bg-[#EC5D49]"
                                : "bg-[#FCBA29]"
                        }`}
                        onClick={(event) =>
                            keyLogger((event.target as HTMLButtonElement).value)
                        }
                        disabled={isLetterPressed}
                    >
                        {letter}
                    </button>
                );
            })}
        </div>
    );
}

export default Letters;
