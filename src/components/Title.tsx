import NotificationBanner from "./NotificationBanner";

function Title({ gameState, incorrectGuesses, pogLang }: any) {
    return (
        <div>
            <div className="font-Han mb-16 flex flex-col items-center px-10 justify-between">
                <h1 className="text-3xl text-[#F9F4DA]">Assembly: Endgame</h1>
                <div className="text-center text-[#8E8E8E]">
                    <p>Guess the word in under 8 attemps to keep the</p>
                    <p>programming world safe from Assembly!</p>
                </div>
            </div>
            <div className="font-Han flex w-full flex-col items-center justify-center h-24">
                <NotificationBanner
                    gameState={gameState}
                    incorrectGuesses={incorrectGuesses}
                    pogLang={pogLang}
                />
            </div>
        </div>
    );
}

export default Title;
