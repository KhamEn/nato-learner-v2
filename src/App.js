function ReportCard() {
  return (
    <div>
      <p>Report of everything</p>
      <button type="submit">Finish</button>
    </div>
  );
}

function Result() {
  return (
    <div>
      <p>user input === answer</p>
      <button type="submit">Next</button>
    </div>
  );
}

function Answer() {
  return (
    <div>
      <input type="text" placeholder="User is typing..." />
      <button type="submit">Submit</button>
    </div>
  );
}

function Question({ letter }) {
  return <p>What is the telephony of {letter}</p>;
}

const mockLetter = "j";

function Quizzer() {
  return (
    <section>
      <Question letter={mockLetter} />
      <Answer />
      {/*<Result />*/}
    </section>
  );
}

function Scoreboard({ score }) {
  return <section>The score is: {score}</section>;
}

const mockScore = "3 out 26";

function NatoGame() {
  return (
    <form>
      <Scoreboard score={mockScore} />
      {/*<Quizzer />*/}
      <ReportCard />
    </form>
  );
}

function App() {
  return <NatoGame />;
}

export default App;
