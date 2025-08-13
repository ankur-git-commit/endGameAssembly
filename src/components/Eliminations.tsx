import { PROGRAMMING_LANGUAGES } from "../utils/languages";
interface EliminationsProps {
    incorrectGuesses: number;
}

function Eliminations({ incorrectGuesses }: EliminationsProps) {
    return (
        <div className="flex w-1/2 flex-wrap items-center justify-center gap-1">
            {PROGRAMMING_LANGUAGES.map((item, index) => (
                <div
                    key={item.title}
                    className="relative rounded border-none p-2"
                    style={{ backgroundColor: item.color }}
                >
                    {/* Show overlay if this language should be "eliminated" */}
                    {index < incorrectGuesses && (
                        <div className="absolute inset-0 z-10 flex items-center justify-center rounded bg-black/70">
                            <span className="text-2xl text-white">💀</span>
                        </div>
                    )}

                    <span
                        className="font-Han block text-xl font-bold"
                        style={{ color: item.textColor }}
                    >
                        {item.title === "html" || item.title === "css"
                            ? item.title.toUpperCase()
                            : item.title[0].toUpperCase() + item.title.slice(1)}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default Eliminations;
