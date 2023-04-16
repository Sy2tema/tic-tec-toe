interface BoardProps {
    squares: Array<string | number | null>;
    onClick: (index: number) => void;
    isClicked: number;
}

export default BoardProps;