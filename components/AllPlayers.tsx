import PlayerCard from "./PlayerCard";
import usePlayers from "../hooks/use-players";
import useTeams from "../hooks/use-teams";
import { useMemo } from "react";
interface IAllPlayers {
  numLoadingCards?: number;
}

export default function AllPlayers({
  numLoadingCards = 30,
}: IAllPlayers): JSX.Element {
  const playerData = usePlayers();
  const teamData = useTeams();
  const isLoading = playerData?.isLoading && teamData?.isLoading;

  const loadingCards = useMemo(() => {
    const lcards: JSX.Element[] = [];
    lcards.length = numLoadingCards;
    lcards.fill(<LoadingCard />);
    return lcards;
  }, [numLoadingCards]);

  return (
    <ul className="flex flex-wrap">
      {isLoading
        ? loadingCards.map((loadingCard, i) => (
            <li
              key={i}
              className="sm:w-full md:w-1/2 lg:w-1/3 p-4 sm:px-0 md:px-4"
            >
              {loadingCard}
            </li>
          ))
        : playerData?.data?.map((player) => {
            const team = teamData?.data?.[player.ta];
            return (
              team && (
                <li
                  className="sm:w-full md:w-1/2 lg:w-1/3 p-4 sm:px-0 md:px-4"
                  key={player.pid}
                >
                  <PlayerCard player={player} team={team} />
                </li>
              )
            );
          })}
    </ul>
  );
}

function LoadingCard(): JSX.Element {
  return (
    <article
      data-testid="loading-card"
      className="h-60 bg-gray-100 animate-pulse rounded-md"
    />
  );
}
