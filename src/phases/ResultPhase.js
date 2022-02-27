import Scoreboard from "./Scoreboard";
import Question from "./Question";
import { getTelephony } from "../utils/NatoAlphabet";
import styles from "./Phases.module.css";

function ResultPhase({ score, letter, userAnswer, onClick }) {
  return (
    <form className={`${styles.formContainer} ${styles.elevated}`}>
      <Scoreboard score={score} />
      <Question letter={letter} />
      <section className={styles.UserSectionContainer}>
        <p>Telephony: {getTelephony(letter)}</p>
        <p>
          "{userAnswer}" is{" "}
          {userAnswer === getTelephony(letter) ? "Correct." : "Incorrect."}
        </p>
        <button onClick={onClick}>Next Question</button>
      </section>
    </form>
  );
}

export default ResultPhase;
