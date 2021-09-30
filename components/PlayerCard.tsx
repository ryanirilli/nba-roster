import Image from "next/image";
import { Player } from "../types/player";
import { Team } from "../types/team";

interface IPlayerCard {
  player: Player;
  team: Team;
}
export default function PlayerCard({ player, team }: IPlayerCard): JSX.Element {
  return (
    <div className="relative overflow-hidden  shadow-lg rounded-md">
      <div className="z-0 text-zero absolute w-2/3 transform scale-150 -translate-y-20 translate-x-6 filter grayscale opacity-10">
        <Image src={team.logo} width={600} height={600} />
      </div>
      <div
        className="border-b-4 relative flex"
        style={{ borderColor: team.color }}
      >
        <div className="text-zero pt-8 w-1/2">
          <Image
            src={player.headshot}
            width={260}
            height={190}
            objectFit="cover"
            onError={() => {
              console.log("ERRORRRRR");
            }}
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <div>
            <p className="text-gray-400">
              #{player.num} | {player.pos}
            </p>
            <p className="text-xl font-bold leading-3">{player.fn}</p>
            <p className="text-xl font-bold">{player.ln}</p>
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
    </div>
  );
}
