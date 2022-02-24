import Scoreboard from "./Scoreboard";

function ReportCardPhase({ userPoints, maxPoints, onClick }) {
  return (
    <div>
      <Scoreboard score={userPoints} />
      <p>
        Score: {userPoints} / {maxPoints}
      </p>
      <p>All the words that you got wrong are (incorrect letters)</p>
      <button onClick={onClick}>New Quiz</button>
    </div>
  );
}

export default ReportCardPhase;
