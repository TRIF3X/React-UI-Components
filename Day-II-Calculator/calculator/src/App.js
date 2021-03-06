import React from 'react';
import './App.css';
import Button from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton';
import Display from './components/DisplayComponents/CalculatorDisplay';

const buttons = [
  {
  one: '1',
  two: '2', 
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
  divide: '/',
  multiply: 'x',
  subtract: '-',
  add: '+',
  equal: '='
  }
]

const App = () => {
  return (
    <div className = 'calculator'>
    <ActionButton />
    <Display />
      {buttons.map(button => {
        return (
          <Button button={button}/>
        )
      })}
    </div>
  );
};

export default App;
