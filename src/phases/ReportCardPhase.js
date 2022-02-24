import Scoreboard from "./Scoreboard";

function ReportCardPhase({ score, onClick }) {
  return (
    <div>
      <Scoreboard score={score} />
      <p>Score percentage: {score} divided by length of the alphabet</p>
      <p>All the words that you got wrong are (incorrect letters)</p>
      <button onClick={onClick}>New Quiz</button>
    </div>
  );
}

export default ReportCardPhase;
