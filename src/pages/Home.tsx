// import { useEffect, useState } from "react";
// import sapphireuserApi from "../api/sapphireapi";
import HeroSection from "../components/HeroSection";
import QuestsHomePage from "../components/QuestsHomePage";

// interface Monsters {
//   monsterName: string;
// }

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <QuestsHomePage />
    </div>
  );
};

export default Home;
