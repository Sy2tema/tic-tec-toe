import React from "react";
import Square from "./Square";
import BoardProps from "../types/BoardProps";
import BoardState from "../types/BoardState";

class Board extends React.Component<BoardProps, BoardState> {
  constructor(props: BoardProps) {
    super(props);
    
    this.state = {
      squares: Array(9).fill(null),
      isNext: true,
    };
  }

  handleClick = (index: number): void => {
    const squares: (string | number | null)[] = this.state.squares.slice();

    if (this.calculateWinner(squares) || squares[index]) {
      return;
    }

    squares[index] = this.state.isNext ? 'O' : 'X';
    this.setState({
      squares: squares,
      isNext: !this.state.isNext,
    });
  };

  renderSquare(index: number) {
    return (
      <Square 
        value={this.state.squares[index]} 
        onClick={() => this.handleClick(index)} // 함수가 렌더링될때 즉시 호출되지 않도록 화살표 함수로 감싸줌
      />
    );
  }

  calculateWinner (squares: (string | number | null)[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  }

  render() {
    const winner = this.calculateWinner(this.state.squares);
    let status;

    if (winner) {
      status = `winner: ${winner}`;
    } else {
      status = `Next player: ${this.state.isNext ? 'X' : 'O'}`;
    }

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