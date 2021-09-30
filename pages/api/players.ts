import { NextApiRequest, NextApiResponse } from "next";
import players from "../../data/players.json";

export default function PlayersEndpointHandler(
  _: NextApiRequest,
  res: NextApiResponse
) {
  return res.json(players);
}
