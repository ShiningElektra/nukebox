import styles from "../styles/ReactionPlayer.module.css";

export default function ReactionPlayer() {
  return (
    <div className={styles.reaction}>
      <img
        className={styles.download}
        src="/Downlaod_Icon.svg"
        onClick={null}
      />
      <img className={styles.like} src="/Like_Icon.svg" onClick={null} />
      <img className={styles.volume} src="/Volume_Icon.svg" onClick={null} />
    </div>
  );
}
