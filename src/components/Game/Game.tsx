import style from './Game.module.scss';
type IQuestion = {
  title: string;
  variants: Array<string>;
  correct: number;
};
interface GameProps {
  step: number;
  setStep: (step: number) => void;
  question: IQuestion[];
}

const Game: React.FC<GameProps> = ({ step, setStep, question }) => {
  const quest = question[step];
  const onClick = (idx: number) => {
    console.log('idx:', idx, 'step:', step);
    setStep(step + 1);
  };
  const percent = Math.round((step / question.length) * 100);

  return (
    <div>
      <div className={style.progress}>
        <div style={{ width: `${percent}%` }} className={style.inner}></div>
      </div>
      <h1 style={{ marginBottom: '25px' }}>{quest.title}</h1>
      <ul>
        {quest.variants.map((e, idx) => (
          <li onClick={() => onClick(idx)} key={idx}>
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Game;
