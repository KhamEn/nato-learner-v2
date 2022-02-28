import styles from "./Style.module.css";

function Scoreboard({ score }) {
  if (score !== null) {
    const results = score.map((result, index) => (
      <div key={index}>{result}</div>
    ));
    return <section className={styles.Scoreboard}>{results}</section>;
  }

  return <></>;
}

export default Scoreboard;
