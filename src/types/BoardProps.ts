interface BoardProps {
    squares: Array<string  | null>;
    onClick: (index: number) => void;
    lastClickedIndex: number;
}

export default BoardProps;