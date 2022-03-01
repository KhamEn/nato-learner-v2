import Scoreboard from "./Scoreboard";
import Question from "./Question";
import { getTelephony } from "../utils/NatoAlphabet";
import ResultIcons from "../utils/ResultIcons";
import styles from "./Style.module.css";

function ResultPhase({ score, letter, userAnswer, onClick }) {
  function handleKeyDown(event) {
    event.preventDefault();
    if (event.key === "Enter") {
      onClick();
    }
  }

  return (
    <form className={`${styles.formContainer} ${styles.elevated}`}>
      <Scoreboard score={score} />
      <Question letter={letter} />
      <section className={styles.UserSectionContainer}>
        <p className={styles.utilsUnderline}>{getTelephony(letter)}</p>
        <p>
          {userAnswer.toLowerCase() === getTelephony(letter).toLowerCase()
            ? ResultIcons.CORRECT
            : ResultIcons.INCORRECT}
          {userAnswer}
        </p>
        <button
          onClick={onClick}
          // tabIndex="0"
          onKeyDown={(e) => handleKeyDown(e)}
          autoFocus={true}
        >
          Next Question
        </button>
      </section>
    </form>
  );
}

export default ResultPhase;
