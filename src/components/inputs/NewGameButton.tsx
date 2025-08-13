function NewGameButton({ resetGame }: any) {
    return (
        <div>
            <button
                onClick={() => resetGame()}
                className="font-Han w-[300px] rounded border-1 border-[#D7D7D7] bg-[#11B5E5] py-3 text-lg font-semibold"
            >
                New Game
            </button>
        </div>
    );
}

export default NewGameButton;
