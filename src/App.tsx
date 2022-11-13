import React, { useState } from 'react';
import Game from './components/Game/Game';
import Result from './components/Result/Result';
import data from './components/data/data.json';
import './index.scss';

const App: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const question = data[step];
  return (
    <div className='App'>
      <Game question={question} step={step} setStep={setStep} />
      {/* <Result /> */}
    </div>
  );
};

export default App;
