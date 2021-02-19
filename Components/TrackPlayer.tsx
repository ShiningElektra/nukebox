import styles from "../styles/TrackPlayer.module.css";

type Props = {
  image: string;
  title: string;
  artist: string;
  audio: string;
};

export default function TrackPlayer(props: Props) {
  return (
    <div className={styles.track}>
      <img className={styles.trackimage} src={props.image} alt="" />
      <p className={styles.title}>{props.title}</p>
      <p className={styles.artist}>{props.artist}</p>
    </div>
  );
}
