/* eslint-disable @typescript-eslint/no-explicit-any */

function Letters({ letters }: any) {
    const uppercaseLettersStyling: string =
        "font-Han h-[50px] w-[50px] text-xl rounded border-1 border-[#D7D7D7] bg-[#FCBA29] font-[600] text-[#1E1E1E]";
    const letterContainerStyling: string =
        "flex items-center justify-center gap-2";
    return (
        <div className={letterContainerStyling}>
            {letters.map((letter: string) => (
                <button
                    key={letter}
                    id={letter}
                    className={uppercaseLettersStyling}
                >
                    {letter}
                </button>
            ))}
        </div>
    );
}

export default Letters;
