import styles from "../styles/ReactionPlayer.module.css";
import React, { useState } from "react";

export default function ReactionPlayer() {
  const [like, setLike] = useState(false);

  const LikeButton = () => {
    setLike(!like);
  };
  return (
    <div className={styles.reaction}>
      <img
        className={styles.download}
        src="/Downlaod_Icon.svg"
        onClick={null}
      />
      <img
        className={styles.like}
        onClick={LikeButton}
        src={!like ? "/Like_Icon.svg" : "/Liked.svg"}
      />
      <img className={styles.volume} src="/Volume_Icon.svg" onClick={null} />
    </div>
  );
}
