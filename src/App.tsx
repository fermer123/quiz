import React from 'react';
import Game from './components/Game/Game';
import Result from './components/Result/Result';
import './index.scss';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Game />
      {/* <Result /> */}
    </div>
  );
};

export default App;
