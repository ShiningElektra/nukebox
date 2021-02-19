import styles from "../styles/HeaderPlayer.module.css";

export default function HeaderPlayer() {
  const back = () => {
    history.back();
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src="/Arrow_back.svg" onClick={back} />
        <p>Now Playing</p>
      </div>
    </div>
  );
}
