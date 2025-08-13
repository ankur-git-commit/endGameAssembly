import NotificationBanner from "./NotificationBanner";

function Title({ gameState, incorrectGuesses, pogLang }: any) {
    return (
        <div>
            <div className="font-Han mb-16 flex flex-col items-center justify-between px-10">
                <h1 className="text-center text-3xl text-[#F9F4DA]">
                    Assembly: Endgame
                </h1>
                <div className="text-center text-[#8E8E8E]">
                    <p>Guess the word in under 9 attemps to keep the</p>
                    <p>programming world safe from Assembly!</p>
                </div>
            </div>
            <div className="font-Han flex h-24 w-full flex-col items-center justify-center">
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
