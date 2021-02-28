import { useEffect, useState } from "react";
import { postTrack } from "../utils/api";

function AddTrack() {
  const [id, setId] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [audio, setAudio] = useState("");

  useEffect(() => {
    setId(
      `${artist.replaceAll(" ", "-").toLowerCase()}_${title
        .replaceAll(" ", "-")
        .toLowerCase()}`
    );
  }, [artist, title]);

  function handleSubmit(event) {
    event.preventDefault();
    const NewTrack = { id, image, title, artist, audio };
    postTrack(NewTrack);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID
        <input
          value={id}
          onChange={(event) => setId(event.target.value)}
          readOnly
        />
      </label>
      <label>
        Image
        <input
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
      </label>
      <label>
        Title
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label>
        Artist
        <input
          value={artist}
          onChange={(event) => setArtist(event.target.value)}
        />
      </label>
      <label>
        Audio
        <input
          value={audio}
          onChange={(event) => setAudio(event.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

export default AddTrack;
