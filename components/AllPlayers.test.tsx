import { render, screen, waitFor } from "../test-utils";
import fetchMock from "jest-fetch-mock";
import AllPlayers from "./AllPlayers";
import players from "../data/players.json";
import teams from "../data/teams.json";

describe("AllPlayers", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    fetchMock.mockResponse((req) => {
      if (req.url.includes("players")) {
        return Promise.resolve(JSON.stringify([players[0]]));
      }
      return Promise.resolve(
        JSON.stringify([teams.find((t) => t.ta === "MIA")])
      );
    });
  });

  it("renders a loading state", () => {
    render(<AllPlayers numLoadingCards={1} />);
    expect(screen.getByTestId("loading-card")).toBeInTheDocument();
  });

  it("renders player cards once the data is loaded", async () => {
    render(<AllPlayers />);
    await waitFor(() =>
      expect(screen.getByText("Precious")).toBeInTheDocument()
    );
    expect(fetchMock.mock.calls.length).toEqual(2);
  });
});
