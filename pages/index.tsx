import { useQuery } from "react-query";
import PlayerCard from "../components/PlayerCard";

import type { NextPage } from "next";
import type { Player } from "../types/player";
import type { Team } from "../types/team";

const Home: NextPage = () => {
  const playerData = useQuery<Player[]>("players", async () => {
    const data = await fetch("/api/players");
    return data.json();
  });

  const teamData = useQuery<Record<string, Team>>("teams", async () => {
    const data = await fetch("/api/teams");
    const teams = await data.json();
    return teams.reduce((acc: Record<string, Team>, team: Team) => {
      acc[team.ta] = team;
      return acc;
    }, {});
  });

  const isLoading = playerData.isLoading && teamData.isLoading;

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <ul className="flex flex-wrap">
      {playerData?.data?.map((player, i) => {
        const team = teamData?.data?.[player.ta];
        return (
          team && (
            <li className="sm:w-full md:w-1/2 lg:w-1/3 p-4" key={player.pid}>
              <PlayerCard player={player} team={team} />
            </li>
          )
        );
      })}
    </ul>
  );
};

export default Home;
