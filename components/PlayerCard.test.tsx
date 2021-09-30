import { render, screen } from "../test-utils";
import players from "../data/players.json";
import teams from "../data/teams.json";
import PlayerCard from "./PlayerCard";

import type { Player } from "../types/player";
import type { Team } from "../types/team";

describe("PlayerCard", () => {
  it("should render the player information", () => {
    render(
      <PlayerCard
        player={players[0] as Player}
        team={teams.find((t) => t.ta === "MIA") as Team}
      />
    );
    expect(
      screen.getByAltText("Precious Achiuwa headshot")
    ).toBeInTheDocument();
    expect(screen.getByAltText("Miami Heat logo")).toBeInTheDocument();
    expect(screen.getByText("#5 | F")).toBeInTheDocument();
    expect(screen.getByText("Precious")).toBeInTheDocument();
    expect(screen.getByText("Achiuwa")).toBeInTheDocument();
    expect(screen.getByText("ppg")).toBeInTheDocument();
    expect(screen.getByText("6.6")).toBeInTheDocument();
    expect(screen.getByText("rpg")).toBeInTheDocument();
    expect(screen.getByText("4.3")).toBeInTheDocument();
    expect(screen.getByText("apg")).toBeInTheDocument();
    expect(screen.getByText("0.7")).toBeInTheDocument();
  });
});
