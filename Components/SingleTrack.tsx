import styles from "../styles/SingleTrack.module.css";

type Props = {
  image: string;
  title: string;
  artist: string;
  audio: string;
};

export default function SingleTrack(props: Props) {
  return (
    <div className={styles.track}>
      <img className={styles.trackimage} src={props.image} alt="" />
      <p className={styles.title}>{props.title}</p>
      <p className={styles.artist}>{props.artist}</p>
    </div>
  );
}
