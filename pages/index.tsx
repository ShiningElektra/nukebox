import Head from "next/head";
import Greeting from "../Components/Greeting";
import TrackItem from "../Components/Trackitem";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nukebox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Greeting name="Elektra" />
      <TrackItem
        image="/trackimage.jpg"
        title="Get it done"
        artist="The Destructures"
      />
      <TrackItem
        image="/trackimage.jpg"
        title="Lonley"
        artist="The Destructures"
      />
    </div>
  );
}
