import { useState } from 'react';
import CalculatorButton from './CalculatorButton';
import CalculatorDisplay from './CalculatorDisplay';
import { calculateResult } from '../services/api';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [firstNumber, setFirstNumber] = useState('');
  const [operation, setOperation] = useState(null);
  const [waitingForSecondNumber, setWaitingForSecondNumber] = useState(false);

  const handleNumberClick = (number) => {
    if (waitingForSecondNumber) {
      setDisplay(number);
      setWaitingForSecondNumber(false);
    } else {
      setDisplay(display === '0' ? number : display + number);
    }
  };

  const handleOperationClick = async (op) => {
    setFirstNumber(display);
    setOperation(op);
    setWaitingForSecondNumber(true);
  };

  const handleEquals = async () => {
    try {
      const result = await calculateResult(firstNumber, display, operation);
      setDisplay(result.result.toString());
      setFirstNumber('');
      setOperation(null);
    } catch (err) {
      console.error('Calculation error:', err);
      setDisplay('Error');
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setFirstNumber('');
    setOperation(null);
    setWaitingForSecondNumber(false);
  };

  return (
   // Update the main container div className
<div className="w-full rounded-2xl">
  <CalculatorDisplay value={display} />
  <div className="grid grid-cols-4 gap-3">
        <CalculatorButton
          onClick={handleClear}
          className="bg-calculator-clear hover:bg-calculator-clearHover shadow-button"
        >
          AC
        </CalculatorButton>
        <CalculatorButton
          onClick={() => handleOperationClick('percent')}
          className="bg-calculator-operator hover:bg-calculator-operatorHover shadow-button"
        >
          %
        </CalculatorButton>
        <CalculatorButton
          onClick={() => handleOperationClick('negate')}
          className="bg-calculator-operator hover:bg-calculator-operatorHover shadow-button"
        >
          ±
        </CalculatorButton>
        <CalculatorButton
          onClick={() => handleOperationClick('divide')}
          className="bg-calculator-operator hover:bg-calculator-operatorHover shadow-button"
        >
          ÷
        </CalculatorButton>
        
        {[7, 8, 9].map((num) => (
          <CalculatorButton
            key={num}
            onClick={() => handleNumberClick(num.toString())}
            className="bg-calculator-button hover:bg-calculator-hover shadow-button"
          >
            {num}
          </CalculatorButton>
        ))}
        <CalculatorButton
          onClick={() => handleOperationClick('multiply')}
          className="bg-calculator-operator hover:bg-calculator-operatorHover shadow-button"
        >
          ×
        </CalculatorButton>
        
        {[4, 5, 6].map((num) => (
          <CalculatorButton
            key={num}
            onClick={() => handleNumberClick(num.toString())}
            className="bg-calculator-button hover:bg-calculator-hover shadow-button"
          >
            {num}
          </CalculatorButton>
        ))}
        <CalculatorButton
          onClick={() => handleOperationClick('subtract')}
          className="bg-calculator-operator hover:bg-calculator-operatorHover shadow-button"
        >
          −
        </CalculatorButton>
        
        {[1, 2, 3].map((num) => (
          <CalculatorButton
            key={num}
            onClick={() => handleNumberClick(num.toString())}
            className="bg-calculator-button hover:bg-calculator-hover shadow-button"
          >
            {num}
          </CalculatorButton>
        ))}
        <CalculatorButton
          onClick={() => handleOperationClick('add')}
          className="bg-calculator-operator hover:bg-calculator-operatorHover shadow-button"
        >
          +
        </CalculatorButton>
        
        <CalculatorButton
          onClick={() => handleNumberClick('0')}
          className="bg-calculator-button hover:bg-calculator-hover col-span-2 shadow-button"
        >
          0
        </CalculatorButton>
        <CalculatorButton
          onClick={() => handleNumberClick('.')}
          className="bg-calculator-button hover:bg-calculator-hover shadow-button"
        >
          .
        </CalculatorButton>
        <CalculatorButton
          onClick={handleEquals}
          className="bg-calculator-equals hover:bg-calculator-equalsHover shadow-button"
        >
          =
        </CalculatorButton>
      </div>
    </div>
  );
};

export default Calculator;