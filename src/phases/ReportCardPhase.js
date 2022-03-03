import Scoreboard from "./Scoreboard";
import { getAlphabetSize } from "../utils/NatoAlphabet";
import styles from "./Style.module.css";

function ReportCardPhase({ score, wrongAnswers, userPoints, onClick }) {
  const MAX_POINTS = getAlphabetSize();
  wrongAnswers.sort();

  return (
    <div className={`${styles.formContainer} ${styles.utilsElevated}`}>
      <Scoreboard score={score} />
      <p className={styles.utilsHeroText}>
        {Math.round((userPoints / MAX_POINTS) * 100)}%
      </p>
      <div>
        <p className={styles.utilsUnderline}>
          {wrongAnswers.length} wrong answers
        </p>
      </div>
      <div>
        <p>{wrongAnswers}</p>
      </div>
      <button onClick={onClick}>New Quiz</button>
    </div>
  );
}

export default ReportCardPhase;
