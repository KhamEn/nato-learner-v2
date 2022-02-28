import styles from "./Style.module.css";

function Question({ letter }) {
  return <p className={styles.heroText}>{letter}</p>;
}

export default Question;
