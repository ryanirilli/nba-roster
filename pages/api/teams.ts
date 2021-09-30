import { NextApiRequest, NextApiResponse } from "next";
import teams from "../../data/teams.json";

export default function (_: NextApiRequest, res: NextApiResponse) {
  return res.json(teams);
}
