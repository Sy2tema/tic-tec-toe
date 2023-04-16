import React, { useState } from 'react';
import SquareProps from '../types/SquareProps';

// Square 컴포넌트를 정의, prop과 state의 타입을 설정
function Square(props: SquareProps) {
  const borderStyle = props.isClicked ? '2px solid #999' : '1px solid #999';
  return (
    <button 
      className="square" 
      onClick = { props.onClick }
      style={{ border: borderStyle }}
    >
      { props.value }
    </button>
  );
}

export default Square;