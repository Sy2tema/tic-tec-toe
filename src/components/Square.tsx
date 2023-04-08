import React from 'react';

// 인터페이스를 통해 value prop의 타입을 선언
interface SquareProps {
  value: number | null;
}

interface SquareState {
  value: string;
}

// Square 컴포넌트를 정의, prop과 state의 타입을 설정
class Square extends React.Component<SquareProps, SquareState> {
  // Square 컴포넌트의 생성자 메소드, props를 받아 super로 전달
  constructor(props: SquareProps) {
    super(props);

    this.state = {
      value: '',
    };
  }

  render() {
    const SquareState = () => {
      this.setState({ value: "X" });
    };

    return (
      <button className="square" onClick = {SquareState}>
        {this.state.value || this.props.value}
      </button>
    );
  }
}

export default Square;