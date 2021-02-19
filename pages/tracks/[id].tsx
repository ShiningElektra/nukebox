import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { APITrack, getTrack } from "../../utils/api";
import SingleTrack from "../../Components/SingleTrack";

export default function Track() {
  const router = useRouter();
  const { id } = router.query;

  const [track, setTrack] = useState<APITrack>(null);
  useEffect(() => {
    console.log("Mounted");
    getTrack(id).then((newTrack) => {
      setTrack(newTrack);
    });
  }, [id]);

  if (!track) {
    return <div>Loading...</div>;
  }
  return (
    <SingleTrack
      image={track.image}
      title={track.title}
      artist={track.artist}
      audio={track.audio}
    />
  );
}
