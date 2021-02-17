import styles from "../styles/TrackItem.module.css";

type Props = {
  image: string;
  title: string;
  artist: string;
};

export default function TrackItem(props: Props) {
  return (
    <article className={styles.trackitem}>
      <img src={props.image} alt="Live at Berlin" />;
      <p className={styles.title}>{props.title}</p>
      <p className={styles.artist}>{props.artist}</p>
    </article>
  );
}
