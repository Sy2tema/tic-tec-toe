interface GameState {
    // 제네릭 타입으로 선언
    history: Array<{
        squares: (string | null)[]
    }>; // 배열 타입인 {}[]으로도 선언 가능
    isNext: boolean;
}

export default GameState;