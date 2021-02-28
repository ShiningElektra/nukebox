export type APITrack = {
  id: string;
  image: string;
  title: string;
  artist: string;
  audio: string;
};

async function fetchURL<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

export async function getTracks(): Promise<APITrack[]> {
  return await fetchURL<APITrack[]>("/api/tracks");
}

export async function getTrack(id: string): Promise<APITrack> {
  return await fetchURL<APITrack>(`/api/tracks/${id}`);
}
// export async function deleteTrack(id: string): Promise<APITrack> {

// }
export async function deleteTrack(id: string) {
  await fetch(`/api/tracks/${id}`, {
    method: "DELETE",
  });
  return;
}

export async function postTrack(NewTrack: APITrack) {
  return await fetch("/api/tracks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(NewTrack),
  });
}
