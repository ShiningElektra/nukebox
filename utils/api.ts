export type APITrack = {
  id: string;
  image: string;
  title: string;
  artist: string;
};

export async function getTracks() {
  const response = await fetch("api/tracks");
  const tracks: APITrack[] = await response.json();
  return tracks;
}
// - Alternative Schreibweise - (hat nicht funktioniert. tracks: war unterstrichen)
// export async function getTracks(){
// return fetch("/api/tracks")
// .then((response) => response.json())
// .then((tracks: APITrack[] => tracks));
// }
