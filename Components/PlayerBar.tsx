import { APITrack } from "../utils/api";

type Props = {
  track: APITrack;
};

export default function PlayerBar({ track }: Props) {
  return <audio controls src={track.audio} />;
}
