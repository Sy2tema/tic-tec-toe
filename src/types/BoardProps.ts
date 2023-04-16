interface BoardProps {
    squares: Array<string |number | null>;
    onClick: (index: number) => void;
}

export default BoardProps;