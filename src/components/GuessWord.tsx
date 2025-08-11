import WORDS from "../utils/words";

function GuessWord() {
    const randomWord = () => {
        const randomItemNumber = Math.floor(Math.random() * WORDS.length);
        const word = WORDS[randomItemNumber].toUpperCase().split("");
        return word;
    };

    const itemToGuess = randomWord();
    console.log(itemToGuess);

    return (
        <div className="flex flex-row gap-0.5">
            {itemToGuess.map((item) => (
                <div
                    key={crypto.randomUUID()}
                    className="flex h-16 w-16 items-center justify-center border-b-2 border-[#F9F4DA] bg-[#323232]"
                >
                    <div className="font-Han text-2xl font-extrabold text-[#F9F4DA]">
                        {item}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GuessWord;
