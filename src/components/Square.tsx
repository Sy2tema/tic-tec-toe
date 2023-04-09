import React, { useState } from 'react';
import SquareProps from '../types/SquareProps';
import SquareState from '../types/SquareState';

// Square 컴포넌트를 정의, prop과 state의 타입을 설정
function Square(props: SquareProps) {
  const [value, setValue] = useState('');

  const handleClick = () => {
      setValue('X');
  };

  return (
    <button className="square" onClick = {handleClick}>
      {value || props.value}
    </button>
  );
}

export default Square;