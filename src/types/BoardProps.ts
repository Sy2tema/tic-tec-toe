interface BoardProps {
    squares: Array<string  | null>;
    onClick: (index: number) => void;
    lastClickedIndex: number;
    winIndex: (number | null)[];
}

export default BoardProps;