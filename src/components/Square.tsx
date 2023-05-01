import React, { useState } from 'react';
import SquareProps from '../types/SquareProps';

// Square 컴포넌트를 정의, prop과 state의 타입을 설정
function Square(props: SquareProps) {
  const className = props.isWinningSquare ? "square-win" : (props.isHighlighted ? "square-highlighted" : "square");
  
  return (
    <button 
      className={ className } 
      onClick={ props.onClick }
    >
      { props.value }
    </button>
  );
}

export default Square;