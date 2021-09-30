import { useQuery } from "react-query";
import { Team } from "../types/team";

type Teams = Record<string, Team>;

export default function useTeams() {
  const teamData = useQuery<Teams>("teams", async () => {
    const data = await fetch("/api/teams");
    const teams = await data.json();
    return teams.reduce((acc: Teams, team: Team) => {
      acc[team.ta] = team;
      return acc;
    }, {});
  });
  return teamData;
}
