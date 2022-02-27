import styles from "./Phases.module.css";

function Question({ letter }) {
  return <p className={styles.heroText}>{letter}</p>;
}

export default Question;
