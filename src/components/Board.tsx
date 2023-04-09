import React from "react";
import Square from "./Square";
import BoardProps from "../types/BoardProps";
import BoardState from "../types/BoardState";

class Board extends React.Component<BoardProps, BoardState> {
  constructor(props: BoardProps) {
    super(props);
    
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick = (index: number): void => {
    const squares: (string | number | null)[] = this.state.squares.slice();
    squares[index] = 'X';
    this.setState({squares: squares})
  };

  renderSquare(index: number) {
    return (
      <Square 
        value={this.state.squares[index]} 
        onClick={() => this.handleClick(index)} // 함수가 렌더링될때 즉시 호출되지 않도록 화살표 함수로 감싸줌
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;