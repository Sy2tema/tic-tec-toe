interface GameState {
    // 제네릭 타입으로 선언
    history: Array<{
        squares: (string | null)[];
        lastClickedIndex: number;
        winIndex: (number | null)[];
    }>; // 배열 타입인 {}[]으로도 선언 가능
    stepNumber: number;
    isNext: boolean;
    lastClickedIndex: number;
    winIndex: (number | null)[];
    descOrder: boolean;
}

export default GameState;