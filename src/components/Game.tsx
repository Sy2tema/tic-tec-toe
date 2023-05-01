import React from "react";
import Board from "./Board";
import GameProps from "../types/GameProps";
import GameState from "../types/GameState";

class Game extends React.Component<GameProps, GameState> {
  constructor(props: GameProps) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        lastClickedIndex: -1,
        winIndex: [null, null, null],
      }],
      stepNumber: 0,
      isNext: true,
      lastClickedIndex: -1,
      winIndex: [null, null, null],
    };
  }

  calculateWinner (squares: (string  | number | null)[]) {
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

      // squares배열의 a, b, c인덱스에 있는 문자가 다 같으면 승리 조건을 충족했다는 것을 의미한다
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        if (!this.state.winIndex ||
            !this.state.winIndex.every((value, index) => value === [a, b, c][index])
        ) {
          this.setState({
            winIndex: [a, b, c],
          });
        }
        
        return squares[a];
      }
    }

    return null;
  }
  
  handleClick = (index: number): void => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1]; 
    const squares: (string | null)[] = current.squares.slice();
    
    if (this.calculateWinner(squares) || squares[index]) {
      return;
    }
    
    squares[index] = this.state.isNext ? 'O' : 'X';
    this.setState({
      history: history.concat([{
        squares: squares,
        lastClickedIndex: index,
        winIndex: [null, null, null],
      }]),
      stepNumber: history.length,
      isNext: !this.state.isNext,
      lastClickedIndex: index,
    });
  };

  jumpTo = (step: number) => {
    const history = this.state.history.slice(0, step + 1);
    const current = history[step];

    this.setState({
      stepNumber: step,
      isNext: (step % 2) === 0,
      lastClickedIndex: current.lastClickedIndex,
      winIndex: current.winIndex,
    });
  };
  
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        `Go to move #${ move }` :
        'Go to game start';

      return (
        <li key={ move }>
          <button onClick={ () => this.jumpTo(move) }>{ desc }</button>
        </li>
      )
    });

    let status;
    
    if (winner) {
      status = `승자는 '${ winner }'입니다.`;
    } else {
      status = `${ (this.state.isNext ? 'O' : 'X') }의 차례입니다.`;
    }
    
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={ current.squares }
            onClick={ (index) => this.handleClick(index) }
            lastClickedIndex={ this.state.lastClickedIndex }
            winIndex={ this.state.winIndex }
          />
        </div>
        <div className="game-info">
          <div>{ status }</div>
          <ol>{ moves }</ol>
        </div>
      </div>
    );
  }
}

export default Game;