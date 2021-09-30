import type { NextPage } from "next";

import AllPlayers from "../components/AllPlayers";
import TopNav from "../components/TopNav";
import Container from "../components/Container";

const Home: NextPage = () => {
  return (
    <>
      <TopNav />
      <Container>
        <div className="sm:pl-0 sm:py-8 md:pl-4 md:py-16">
          <h1 className="text-5xl font-medium">All Players</h1>
        </div>
        <AllPlayers />
      </Container>
    </>
  );
};

export default Home;
