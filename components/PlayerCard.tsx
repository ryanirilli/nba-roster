import Image from "next/image";
import { Player } from "../types/player";
import { Team } from "../types/team";
import FancyImage from "./FancyImage";

interface IPlayerCard {
  player: Player;
  team: Team;
}
export default function PlayerCard({ player, team }: IPlayerCard): JSX.Element {
  return (
    <article className="relative overflow-hidden bg-white shadow-lg rounded-md">
      <div className="text-zero absolute top-2 right-2">
        <Image src={team.logo} width={64} height={64} />
      </div>
      <div className="z-0 text-zero absolute w-2/3 transform scale-150 -translate-y-20 translate-x-6 filter grayscale opacity-10">
        <Image src={team.logo} width={600} height={600} />
      </div>
      <div
        className="border-b-4 relative flex"
        style={{ borderColor: team.color }}
      >
        <div className="text-zero pt-8 w-1/2">
          <FancyImage
            src={player.headshot}
            fallbackSrc="/player-fallback.png"
            width={260}
            height={190}
            objectFit="cover"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <div>
            <p className="text-gray-400">
              #{player.num} | {player.pos}
            </p>
            <p className="text-xl font-bold leading-3">{player.fn}</p>
            <p className="text-xl md:text-lg font-bold">{player.ln}</p>
          </div>
        </div>
      </div>
      <div className="flex bg-white relative text-center uppercase">
        <div className="w-1/3 border-r pt-4 pb-2">
          <div className="leading-3">ppg</div>
          <div className="font-bold text-lg">{player.pts}</div>
        </div>
        <div className="w-1/3 border-r pt-4 pb-2">
          <div className="leading-3">rpg</div>
          <div className="font-bold">{player.reb}</div>
        </div>
        <div className="w-1/3 pt-4 pb-2">
          <div className="leading-3">apg</div>
          <div className="font-bold">{player.ast}</div>
        </div>
      </div>
    </article>
  );
}
