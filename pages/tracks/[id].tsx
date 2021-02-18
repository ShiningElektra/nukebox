import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { APITrack, getTrack } from "../../utils/api";
import styles from "../../styles/player.module.css";

export default function Track() {
  const router = useRouter();
  const { id } = router.query;

  const [track, setTrack] = useState<APITrack>(null);
  useEffect(() => {
    console.log("Mounted");
    getTrack(id).then((newTrack) => {
      setTrack(newTrack);
    });
  }, [id]);

  if (!track) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.trackitem}>
      {track.id}
      <p className={styles.title}>{track.title}</p>
      <p className={styles.artist}>{track.artist}</p>
      <img className={styles.trackimage} src={track.image} alt="" />
    </div>
  );
}
