import style from './Game.module.scss';

const Game: React.FC = () => {
  return (
    <div>
      <div className={style.progress}>
        <div style={{ width: '50%' }} className={style.inner}></div>
      </div>
      <h1 style={{ marginBottom: '25px' }}>Вопрос</h1>
      <ul>
        <li>выбор 1</li>
        <li>выбор 2</li>
        <li>выбор 3</li>
      </ul>
    </div>
  );
};

export default Game;
