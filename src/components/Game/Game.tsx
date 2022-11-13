import style from './Game.module.scss';
type IQuestion = {
  title: string;
  variants: Array<string>;
  correct: number;
};
interface GameProps {
  step: number;
  setStep: (step: number) => void;
  question: IQuestion;
}

const Game: React.FC<GameProps> = ({ step, setStep, question }) => {
  const onClick = (idx: number) => {
    console.log('idx:', idx, 'step:', step);
    setStep(step + 1);
  };
  // const percent = (step / question.lenght) * 100;

  return (
    <div>
      <div className={style.progress}>
        <div style={{ width: '20%' }} className={style.inner}></div>
      </div>
      <h1 style={{ marginBottom: '25px' }}>{question.title}</h1>
      <ul>
        {question.variants.map((e, idx) => (
          <li onClick={() => onClick(idx)} key={idx}>
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Game;
