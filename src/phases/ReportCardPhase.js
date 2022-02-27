import Scoreboard from "./Scoreboard";
import styles from "./Phases.module.css";

function ReportCardPhase({ userPoints, maxPoints, onClick }) {
  return (
    <div className={`${styles.formContainer} ${styles.elevated}`}>
      <Scoreboard score={userPoints} />
      <p className={styles.heroText}>
        {(userPoints / maxPoints) * 100}%{/*{userPoints} / {maxPoints}*/}
      </p>
      <div className={styles.UserSectionContainer}>
        <p>All the letters that you got wrong are (incorrect letters)</p>
        <p>All the letters that you got wrong are (incorrect letters)</p>
        <button onClick={onClick}>New Quiz</button>
      </div>
    </div>
  );
}

export default ReportCardPhase;
