import { useEffect, useState } from "react";
import { postTrack } from "../utils/api";
import styles from "../styles/New.module.css";

function AddTrack() {
  const [id, setId] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [audio, setAudio] = useState("");

  // automatisches Erstellen der Id
  useEffect(() => {
    const getId = `${artist}_${title}`.replaceAll(" ", "-").toLowerCase();
    setId(getId);
  }, [artist, title]);

  function handleSubmit(event) {
    event.preventDefault();
    const NewTrack = { id, image, title, artist, audio };
    postTrack(NewTrack);
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.name}>Add a new Track</p>
      <label>
        <input
          value={title}
          placeholder="Title"
          required
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label>
        <input
          value={artist}
          placeholder="Artist"
          required
          onChange={(event) => setArtist(event.target.value)}
        />
      </label>
      <label>
        <input
          value={audio}
          placeholder="Audio Url"
          required
          onChange={(event) => setAudio(event.target.value)}
        />
      </label>
      <label>
        <input
          value={image}
          placeholder="Image Url"
          onChange={(event) => setImage(event.target.value)}
        />
      </label>
      <label>
        <input
          value={id}
          placeholder="ID"
          onChange={(event) => setId(event.target.value)}
          readOnly
        />
      </label>
      <button className={styles.submitButton} onClick={handleSubmit}>
        Add it!
      </button>
    </form>
  );
}

export default AddTrack;
