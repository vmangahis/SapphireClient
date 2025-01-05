// import { useEffect, useState } from "react";
// import sapphireuserApi from "../api/sapphireapi";
import HeroSection from "../components/HeroSection";
import Quests from "../components/Quests";

// interface Monsters {
//   monsterName: string;
// }

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <Quests />
    </div>
  );
};

export default Home;
