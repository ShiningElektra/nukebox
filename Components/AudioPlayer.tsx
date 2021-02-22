import { useEffect, useRef, useState } from "react";
import { APITrack } from "../utils/api";
import styles from "../styles/Player.module.css";

type Props = {
  track: APITrack;
};

export default function AudioPlayer({ track }: Props) {
  const audioRef = useRef(new Audio(track.audio));
  const [isPlaying, setIsPlaying] = useState(false);

  const audioElement = audioRef.current;

  useEffect(() => {
    if (isPlaying) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }, [isPlaying]);

  return (
    <div>
      <input type="range" min="0" max={audioElement.duration} />
      <button
        className={styles.controlpanel}
        onClick={() => setIsPlaying(!isPlaying)}
      >
        <img src={isPlaying ? "/Pause.svg" : "/Play.svg"} />
      </button>
    </div>
  );
}

{
  /* Buttons von:
 <a href='https://de.freepik.com/vektoren/menue'>Menü Vektor erstellt von macrovector - de.freepik.com</a> */
}
