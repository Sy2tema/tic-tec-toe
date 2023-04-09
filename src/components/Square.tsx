import React from 'react';
import SquareProps from '../types/SquareProps';
import SquareState from '../types/SquareState';

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