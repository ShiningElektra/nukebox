import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { APITrack, getTrack } from "../../utils/api";
import TrackPlayer from "../../Components/TrackPlayer";
import HeaderPlayer from "../../Components/HeaderPlayer";
import styles from "../../styles/Player.module.css";
import ReactionPlayer from "../../Components/ReactionPlayer";
import AudioPlayer from "../../Components/AudioPlayer";

export default function Track() {
  const router = useRouter();
  const { id: queryId } = router.query;
  const id = typeof queryId === "string" ? queryId : queryId[0];

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
    <div className={styles.container}>
      <HeaderPlayer />
      <main>
        <TrackPlayer
          image={track.image}
          title={track.title}
          artist={track.artist}
          audio={track.audio}
        />
      </main>
      <footer>
        <>
          <ReactionPlayer id={id} />
          <AudioPlayer track={track} />
        </>
      </footer>
    </div>
  );
}
