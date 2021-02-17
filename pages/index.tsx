import Head from "next/head";
import Greeting from "../Components/Greeting";
import TrackItem from "../Components/Trackitem";
import styles from "../styles/Home.module.css";

export default function Home() {
  const tracks = [
    {
      image: "/trackimage.jpg",
      title: "Get it done",
      artist: "The Destructures",
    },
    { image: "/trackimage.jpg", title: "Lonely", artist: "The Destructures" },
    { image: "/trackimage.jpg", title: "Honey", artist: "The Destructures" },
  ];

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
      <ul className={styles.list}> {trackItems}</ul>
    </div>
  );
}
