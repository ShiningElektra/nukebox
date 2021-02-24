import styles from "../styles/ReactionPlayer.module.css";
import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type Props = { id: string };

export default function ReactionPlayer({ id }: Props) {
  // const [like, setLike] = useState(null);

  // const [favorite, setFavorite] = useState(false);

  // const LikeButton = () => {
  //   setLike(!like);
  // };

  const [likes, setLikes] = useLocalStorage<string[]>("likes", []);

  const like = likes.includes(id);

  const handleFavoriteClick = () => {
    if (like) {
      const newLikes = likes.filter((like) => like !== id);
      setLikes(newLikes);
    } else {
      setLikes([...likes, id]);
    }
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
        onClick={handleFavoriteClick}
        src={!like ? "/Like_Icon.svg" : "/Liked.svg"}
      />
      <img className={styles.volume} src="/Volume_Icon.svg" onClick={null} />
    </div>
  );
}
