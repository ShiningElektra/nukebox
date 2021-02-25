// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { readDb, writeDb } from "../../../server/db";
import db from "../../../server/db.json";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  if (req.method === "GET") {
    const track = db.tracks.find((track) => track.id === id);
    if (!track) {
      return res.status(404).json({
        status: 404,
        error: "Track not found",
      });
    }
    res.status(200).json(track);
  }
  if (req.method === "DELETE") {
    const db = await readDb();
    db.tracks = db.tracks.filter((track) => track.id !== id);

    await writeDb(db);

    console.log("DELETE NOW!");
    return res.status(200).json({
      status: 200,
      message: "DELETED",
    });
  }
  return res.status(405).end();
};
