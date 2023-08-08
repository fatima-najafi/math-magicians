/* eslint-disable react/button-has-type */
import React from 'react';
import './Calculator.css';

function Calculator() {
  function ButtonDiv() {
    return (
      <div className="parent">
        <button className="button">AC</button>
        <button className="button">+/-</button>
        <button className="button">%</button>
        <button className="button-color">/</button>
        <button className="button">7</button>
        <button className="button">8</button>
        <button className="button">9</button>
        <button className="button-color">X</button>
        <button className="button">4</button>
        <button className="button">5</button>
        <button className="button">6</button>
        <button className="button-color">-</button>
        <button className="button">1</button>
        <button className="button">2</button>
        <button className="button">3</button>
        <button className="button-color">+</button>
        <button className="button-zero">0</button>
        <button className="button">.</button>
        <button className="button-color">=</button>
      </div>
    );
  }
  return (
    <div className="calculator">
      <div>
        <input type="text" className="input" id="name" placeholder="0" />
        <ButtonDiv />
      </div>
    </div>
  );
}
export default Calculator;
