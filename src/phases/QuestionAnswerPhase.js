import { useState } from "react";
import Scoreboard from "./Scoreboard";
import Question from "./Question";
import styles from "./Style.module.css";

function QuestionAnswerPhase({ score, letter, submitAnswer }) {
  const [textInput, setTextInput] = useState("");

  function handleClick(event) {
    event.preventDefault();

    submitAnswer(textInput);
    setTextInput("");
  }

  return (
    <form className={`${styles.formContainer} ${styles.elevated}`}>
      <Scoreboard score={score} />
      <Question letter={letter} />
      <section className={styles.UserSectionContainer}>
        <label htmlFor="userInput" className={styles.questionText}>
          What is the telephony?
        </label>
        <input
          id="userInput"
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          autoFocus={true}
        />
        <button onClick={handleClick}>Check Answer</button>
      </section>
    </form>
  );
}

export default QuestionAnswerPhase;
