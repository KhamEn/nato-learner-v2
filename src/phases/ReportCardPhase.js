import Scoreboard from "./Scoreboard";
import { getAlphabetSize } from "../utils/NatoAlphabet";
import styles from "./Style.module.css";

function ReportCardPhase({ score, wrongAnswers, userPoints, onClick }) {
  const MAX_POINTS = getAlphabetSize();
  wrongAnswers.sort();

  return (
    <div className={`${styles.formContainer} ${styles.elevated}`}>
      <Scoreboard score={score} />
      <p className={styles.heroText}>
        {Math.round((userPoints / MAX_POINTS) * 100)}%
      </p>
      <div className={styles.UserSectionContainer}>
        <p className={styles.utilsUnderline}>
          {wrongAnswers.length} wrong answers
        </p>
        <p>{wrongAnswers}</p>
        <button onClick={onClick}>New Quiz</button>
      </div>
    </div>
  );
}

export default ReportCardPhase;
