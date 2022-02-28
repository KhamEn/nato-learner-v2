import Scoreboard from "./Scoreboard";
import { getAlphabetSize } from "../utils/NatoAlphabet";
import styles from "./Style.module.css";

function ReportCardPhase({ userPoints, onClick }) {
  const MAX_POINTS = getAlphabetSize();
  return (
    <div className={`${styles.formContainer} ${styles.elevated}`}>
      <p>{`${userPoints} / ${MAX_POINTS}`}</p>
      {/*<Scoreboard score={`${userPoints} / ${MAX_POINTS}`} />*/}
      <p className={styles.heroText}>{(userPoints / MAX_POINTS) * 100}%</p>
      <div className={styles.UserSectionContainer}>
        <p>All the letters that you got wrong are (incorrect letters)</p>
        <p>All the letters that you got wrong are (incorrect letters)</p>
        <button onClick={onClick}>New Quiz</button>
      </div>
    </div>
  );
}

export default ReportCardPhase;
