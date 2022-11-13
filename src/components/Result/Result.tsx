import IQuestion from '../types/types';
import style from './Result.module.scss';

interface IRusult {
  correct: number;
  question: IQuestion[];
  setStep: (step: number) => void;
  setCorrect: (correct: number) => void;
}

const Result: React.FC<IRusult> = ({
  correct,
  question,
  setStep,
  setCorrect,
}) => {
  const Onclick = () => {
    setStep(0);
    setCorrect(0);
  };
  return (
    <div className={style.result}>
      <img
        alt='result'
        src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png'
      />
      <h2>
        Вы отгадали {correct} ответа из {question.length}
      </h2>
      <button onClick={Onclick}>Попробовать снова</button>
    </div>
  );
};

export default Result;
