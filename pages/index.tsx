import type { NextPage } from "next";

import AllPlayers from "../components/AllPlayers";
import TopNav from "../components/design-system/TopNav";
import Container from "../components/design-system/Container";

const Home: NextPage = () => {
  return (
    <>
      <TopNav />
      <div className="bg-white sm:pl-0 md:pl-4 border-b-2 sticky top-0 z-10">
        <Container>
          <h1 className="text-3xl font-light text-gray-600  py-2">
            All Players
          </h1>
        </Container>
      </div>
      <Container>
        <AllPlayers />
      </Container>
    </>
  );
};

export default Home;
