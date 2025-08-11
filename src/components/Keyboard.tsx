import Letters from "./inputs/Letters";
import ALPHABETS from "../utils/alphabets";

function Keyboard() {
    return (
        <div className="flex w-full flex-col items-center justify-center gap-2">
            {/* Force 3-row layout with grid */}
            <div className="grid w-full max-w-3xl grid-cols-1 gap-2">
                {/* First row - 10 letters */}
                <Letters letters={ALPHABETS.slice(0, 10)} />
                {/* Second row - 10 letters */}
                <Letters letters={ALPHABETS.slice(10, 20)} />
                {/* Third row - 6 letters */}
                <Letters letters={ALPHABETS.slice(20, 26)} />
            </div>
        </div>
    );
}

export default Keyboard;
