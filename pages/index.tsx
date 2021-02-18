import Head from "next/head";
import { useEffect, useState } from "react";
import Greeting from "../Components/Greeting";
import TrackItem from "../Components/Trackitem";
import styles from "../styles/Home.module.css";
import { getTracks, APITrack } from "../utils/api";

export default function Home() {
  const [tracks, setTracks] = useState<APITrack[]>([]);
  useEffect(() => {
    console.log("Mounted");
    getTracks().then((newTracks) => {
      setTracks(newTracks);
    });
  }, []);

  const trackItems = tracks.map((track) => {
    const key = `${track.artist}-${track.title}`;
    return (
      <TrackItem
        key={key}
        image={track.image}
        title={track.title}
        artist={track.artist}
      />
    );
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Nukebox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Greeting name="Elektra" />
      <ul className={styles.list}>{trackItems}</ul>
    </div>
  );
}
