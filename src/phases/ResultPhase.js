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
    <form className={`${styles.formContainer} ${styles.utilsElevated}`}>
      <Scoreboard score={score} />
      <Question letter={letter} />
      <div>
        {" "}
        <p className={styles.utilsUnderline}>{getTelephony(letter)}</p>
      </div>
      <div>
        <p>
          {userAnswer.toLowerCase() === getTelephony(letter).toLowerCase()
            ? ResultIcons.CORRECT
            : ResultIcons.INCORRECT}
          {userAnswer}
        </p>
      </div>
      <button
        onClick={onClick}
        onKeyDown={(e) => handleKeyDown(e)}
        autoFocus={true}
      >
        Next Question
      </button>
    </form>
  );
}

export default ResultPhase;
