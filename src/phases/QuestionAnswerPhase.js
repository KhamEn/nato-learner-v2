import Scoreboard from "./Scoreboard";
import Question from "./Question";

function QuestionAnswerPhase({ score, letter, onClick }) {
  return (
    <>
      <Scoreboard score={score} />
      <Question letter={letter} />
      <input type="text" />
      <button onClick={onClick}>Check Answer</button>;
    </>
  );
}

export default QuestionAnswerPhase;
