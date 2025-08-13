export interface GuessItem {
    letter: string;
    isVisible: boolean;
    textColor: string
}

export interface Game {
    gameWon: boolean;
    gameLost: boolean;
}
