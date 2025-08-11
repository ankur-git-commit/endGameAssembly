import { PROGRAMMING_LANGUAGES } from "../utils/languages";

function Eliminations() {
    return (
        <div className="flex w-1/2 flex-wrap items-center justify-center gap-1">
            {PROGRAMMING_LANGUAGES.map((item) => (
                <div
                    key={item.title}
                    className="rounded border-none p-2"
                    style={{ backgroundColor: item.color }}
                >
                    <span
                        className="font-Han text-xl font-bold"
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
