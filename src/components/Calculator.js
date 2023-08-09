import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const { total, operation, next } = state;
  const handleEvent = (e) => {
    const value = e.target.textContent;
    const calculat = calculate(state, value);
    setState(calculat);
  };
  return (
    <div className="calculator">
      <div className="display">

        {total}
        {operation}
        {next}
      </div>
      <div className="parent">
        <button type="button" className="button" onClick={handleEvent}>
          AC
        </button>
        <button type="button" className="button" onClick={handleEvent}>
          +/-
        </button>
        <button type="button" className="button" onClick={handleEvent}>
          %
        </button>
        <button type="button" className="button-color" onClick={handleEvent}>
          /
        </button>
        <button type="button" className="button" onClick={handleEvent}>
          7
        </button>
        <button type="button" className="button" onClick={handleEvent}>
          8
        </button>
        <button type="button" className="button" onClick={handleEvent}>
          9
        </button>
        <button type="button" className="button-color" onClick={handleEvent}>
          *
        </button>
        <button type="button" className="button" onClick={handleEvent}>
          4
        </button>
        <button type="button" className="button" onClick={handleEvent}>
          5
        </button>
        <button type="button" className="button" onClick={handleEvent}>
          6
        </button>
        <button type="button" className="button-color" onClick={handleEvent}>
          -
        </button>
        <button type="button" className="button" onClick={handleEvent}>
          1
        </button>
        <button type="button" className="button" onClick={handleEvent}>
          2
        </button>
        <button type="button" className="button" onClick={handleEvent}>
          3
        </button>
        <button type="button" className="button-color" onClick={handleEvent}>
          +
        </button>
        <button type="button" className="button-zero" onClick={handleEvent}>
          0
        </button>
        <button type="button" className="button" onClick={handleEvent}>
          .
        </button>
        <button type="button" className="button-color" onClick={handleEvent}>
          =
        </button>
      </div>
    </div>
  );
}
export default Calculator;
