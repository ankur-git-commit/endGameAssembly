function Buttons() {
  // No need for a 2D array - we'll explicitly define the layout with fixed-width rows
  const uppercaseLetters: string[] = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const uppercaseLettersStyling: string =
    "font-Han h-[50px] w-[50px] text-xl rounded border-1 border-[#D7D7D7] bg-[#FCBA29] font-[600] text-[#1E1E1E]";
  const letterContainerStyling: string =
    "flex items-center justify-center gap-2";

  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      {/* Force 3-row layout with grid */}
      <div className="grid w-full max-w-3xl grid-cols-1 gap-2">
        {/* First row - 10 letters */}
        <div className={letterContainerStyling}>
          {uppercaseLetters.slice(0, 10).map((letter) => (
            <button
              key={letter}
              id={letter}
              className={uppercaseLettersStyling}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Second row - 10 letters */}
        <div className={letterContainerStyling}>
          {uppercaseLetters.slice(10, 20).map((letter) => (
            <button
              key={letter}
              id={letter}
              className={uppercaseLettersStyling}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Third row - 6 letters */}
        <div className={letterContainerStyling}>
          {uppercaseLetters.slice(20, 26).map((letter) => (
            <button
              key={letter}
              id={letter}
              className={uppercaseLettersStyling}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Buttons;
