import React, { useState } from 'react';
import styles from '../css/A.css';

function A() {
  const [previousOperand, setPreviousOperand] = useState('');
  const [currentOperand, setCurrentOperand] = useState('');

  const appendNumber = (number) => {
    setCurrentOperand((prevOperand) => prevOperand + number);
  };

  const chooseOperation = (operator) => {
    if (currentOperand === '') return;
    setPreviousOperand(currentOperand + operator);
    setCurrentOperand('');
  };

  const clear = () => {
    setPreviousOperand('');
    setCurrentOperand('');
  };

  const deleteLast = () => {
    setCurrentOperand((prevOperand) => prevOperand.slice(0, -1));
  };

  const calculate = () => {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (previousOperand.slice(-1)) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return;
    }

    setPreviousOperand('');
    setCurrentOperand(result.toString());
  };

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="button-ac span-two" onClick={clear}>
        AC
      </button>
      <button className="button-del" onClick={deleteLast}>
        DEL
      </button>
      <button className="button-operator" onClick={() => chooseOperation('/')}>
        /
      </button>
      <button className="button-number" onClick={() => appendNumber('1')}>
        1
      </button>
      <button className="button-number" onClick={() => appendNumber('2')}>
        2
      </button>
      <button className="button-number" onClick={() => appendNumber('3')}>
        3
      </button>
      <button className="button-operator" onClick={() => chooseOperation('*')}>
        *
      </button>
      <button className="button-number" onClick={() => appendNumber('4')}>
        4
      </button>
      <button className="button-number" onClick={() => appendNumber('5')}>
        5
      </button>
      <button className="button-number" onClick={() => appendNumber('6')}>
        6
      </button>
      <button className="button-operator" onClick={() => chooseOperation('+')}>
        +
      </button>
      <button className="button-number" onClick={() => appendNumber('7')}>
        7
      </button>
      <button className="button-number" onClick={() => appendNumber('8')}>
        8
      </button>
      <button className="button-number" onClick={() => appendNumber('9')}>
        9
      </button>
      <button className="button-dot">.</button>
      <button className="button-number" onClick={() => appendNumber('0')}>
        0
      </button>
      <button className="button-equal span-two" onClick={calculate}>
        =
      </button>
    </div>
  );
}

export default A;
