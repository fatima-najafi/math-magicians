import React from 'react';
import './Calculator.css';
import ButtonDiv from './ButtonDiv';

function Calculator() {
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
