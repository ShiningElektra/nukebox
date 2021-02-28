import Head from "next/head";
import Link from "next/link";
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

  const trackItems = tracks.map((track) => (
    <Link href={`/tracks/${track.id}`} key={track.id}>
      <a>
        <TrackItem
          image={track.image}
          title={track.title}
          artist={track.artist}
        />
      </a>
    </Link>
  ));

  return (
    <div className={styles.container}>
      <Head>
        <title>Nukebox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Greeting name="Elektra" />
      <ul className={styles.list}>{trackItems}</ul>
      <Link href={`/new/`}>
        <button>
          <img src="/AddButton.svg" />
        </button>
      </Link>
    </div>
  );
}
