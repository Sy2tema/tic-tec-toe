// 인터페이스를 통해 value prop의 타입을 선언
interface SquareProps {
    value: string | number | null;
    onClick: () => void;
}

export default SquareProps;