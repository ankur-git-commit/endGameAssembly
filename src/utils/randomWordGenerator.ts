import WORDS from "./words";

export const randomNumberGenerator = (inputString: number) => {
    const randomNumber = Math.floor(Math.random() * inputString)
    return randomNumber
}

// export const messageGenerator = () => {
//     const indexNumber = randomNumberGenerator()
// }

export const randomWordGenerator = () => {
    const indexNumber = randomNumberGenerator(WORDS.length)
    const randomWord = WORDS[indexNumber];
    const wordObject = Array.from(randomWord, (element) => {
        return {
            letter: element.toUpperCase(),
            isVisible: false,
            textColor: "#F9F4DA",
        };
    });
    console.log(randomWord);
    return wordObject;
};
