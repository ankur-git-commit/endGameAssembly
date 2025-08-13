import WORDS from "./words";

export const randomNumberGenerator = (inputArray: string[]) => {
    const arrayLength = inputArray.length
    const randomNumber = Math.floor(Math.random() * arrayLength)
    return randomNumber
}

// export const messageGenerator = () => {
//     const indexNumber = randomNumberGenerator()
// }

export const randomWordGenerator = () => {
    const indexNumber = randomNumberGenerator(WORDS)
    const randomWord = WORDS[indexNumber];
    const wordObject = Array.from(randomWord, (element) => {
        return {
            letter: element.toUpperCase(),
            isVisible: false,
            textColor: "#F9F4DA",
        };
    });
    return wordObject;
};
