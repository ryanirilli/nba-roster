import { useQuery } from "react-query";
import { Player } from "../types/player";

export default function usePlayers() {
  const playerData = useQuery<Player[]>("players", async () => {
    const data = await fetch("/api/players");
    return data.json();
  });
  return playerData;
}
