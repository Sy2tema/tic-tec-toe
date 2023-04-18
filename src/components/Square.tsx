import React, { useState } from 'react';
import SquareProps from '../types/SquareProps';

// Square 컴포넌트를 정의, prop과 state의 타입을 설정
function Square(props: SquareProps) {
  return (
    <button 
      className={`square${ props.isHighlighted ? "-highlighted" : ""}`} 
      onClick={ props.onClick }
    >
      { props.value }
    </button>
  );
}

export default Square;