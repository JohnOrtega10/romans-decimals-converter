import React, { useEffect, useState } from 'react';
import romanToDecimal from '../utils/romanToDecimal';
import decimalToRoman from '../utils/decimalToRoman';
import './Form.styles.css';

const Form = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const error = 'Error leyendo el número';

  useEffect(() => {
    if (Number(input)) {
      const roman = decimalToRoman(input);
      setResult(roman);
    } else {
      const decimal = romanToDecimal(input);
      setResult(decimal === '0' ? null : decimal);
    }
  }, [input]);

  const changeStyleInput = {
    color: result === error ? '#B22727' : null
  };

  return (
    <div className="form">
      <div className="head">
        <i className="fas fa-calculator">
          <h4>CONVERTIDOR DE NÚMEROS</h4>
        </i>
      </div>
      <div className="input-container">
        <p>Introduzca cualquier número romano o decimal.</p>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder={'p. ej. 19 o XIX'}
          style={changeStyleInput}
        />
        {result && (
          <div className="result" style={changeStyleInput}>
            {result === error && (
              <i class="fas fa-exclamation-circle fa-2x"></i>
            )}
            <h1>{result}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
