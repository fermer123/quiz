import React, { useState } from 'react';
import Game from './components/Game/Game';
import Result from './components/Result/Result';
import data from './components/data/data.json';
import './index.scss';

const App: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [correct, setCorrect] = useState<number>(0);
  const question = data;
  return (
    <div className='App'>
      {step !== question.length ? (
        <Game
          question={question}
          step={step}
          setStep={setStep}
          correct={correct}
          setCorrect={setCorrect}
        />
      ) : (
        <Result
          correct={correct}
          question={question}
          setStep={setStep}
          setCorrect={setCorrect}
        />
      )}
    </div>
  );
};

export default App;
