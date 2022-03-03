import styles from "./Style.module.css";

function Question({ letter }) {
  return <p className={styles.utilsHeroText}>{letter}</p>;
}

export default Question;
