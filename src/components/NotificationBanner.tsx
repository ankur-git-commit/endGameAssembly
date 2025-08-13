import farewellText from "../utils/farewellText";
import { useMemo, memo } from "react";

function NotificationBanner({ gameState, incorrectGuesses, pogLang }: any) {
    const farewellMessage = useMemo(() => {
        if (incorrectGuesses > 0) {
            const message = farewellText(pogLang);
            return message;
        }
        return null;
    }, [incorrectGuesses, pogLang]);

    const textAttributes = "font-normal tracking-normal text-[#F9F4DA]";
    const textContainer =
        "w-full rounded border-1 p-6 text-center h-20 flex flex-col items-center justify-center overflow-hidden";
    return (
        <>
            {gameState.gameWon && (
                <div className={`${textContainer} bg-[#10A95B]`}>
                    <p className={`${textAttributes} text-xl`}>You win!</p>
                    <p className={`${textAttributes} text-lg`}>Well done! 🎉</p>
                </div>
            )}

            {gameState.gameLost && (
                <div className={`${textContainer} bg-[#BA2A2A]`}>
                    <p className={`${textAttributes} text-xl`}>Game Over!</p>
                    <p className={`${textAttributes} text-lg`}>
                        You lose! Better start learning Assembly 😭!
                    </p>
                </div>
            )}

            {incorrectGuesses > 0 &&
                !gameState.gameLost &&
                !gameState.gameWon && (
                    <div
                        className={`${textContainer} border-dashed bg-[#7A5EA7]`}
                    >
                        <span className={`${textAttributes} text-xl italic`}>
                            {farewellMessage}
                        </span>
                    </div>
                )}
        </>
    );
}

export default memo(NotificationBanner);
