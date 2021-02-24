import styles from "../styles/ReactionPlayer.module.css";
import React, { useEffect, useState } from "react";

type Props = { id: string };

export default function ReactionPlayer({ id }: Props) {
  const [like, setLike] = useState(null);
  // const [favorite, setFavorite] = useState(false);

  // const LikeButton = () => {
  //   setLike(!like);
  // };

  useEffect(() => {
    if (like === null) {
      return;
    }
    if (like && id) {
      localStorage.setItem("favoriteSong", id);
    }
    if (!like && id) {
      localStorage.removeItem("favoriteSong");
    }
  }, [like]);

  useEffect(() => {
    setLike(id === localStorage.getItem("favoriteSong"));
  }, [id]);

  return (
    <div className={styles.reaction}>
      <img
        className={styles.download}
        src="/Downlaod_Icon.svg"
        onClick={null}
      />
      <img
        className={styles.like}
        onClick={() => setLike(!like)}
        src={!like ? "/Like_Icon.svg" : "/Liked.svg"}
      />
      <img className={styles.volume} src="/Volume_Icon.svg" onClick={null} />
    </div>
  );
}
