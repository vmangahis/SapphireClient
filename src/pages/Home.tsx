// import { useEffect, useState } from "react";
// import sapphireuserApi from "../api/sapphireapi";
import HeroSection from "../components/HeroSection";
import Locale from "../components/Locale";
import Quests from "../components/Quests";

// interface Monsters {
//   monsterName: string;
// }

const Home = () => {
  // let [monsters, setMonsters] = useState<Monsters[]>([]);
  // useEffect(() => {
  //   const getMonsters = async () => {
  //     sapphireuserApi
  //       .get("monster")
  //       .then((resp) => {
  //         console.log(resp.data);
  //         setMonsters(resp.data);
  //       })
  //       .catch((err) => console.log(err));
  //   };
  //   getMonsters();
  // }, []);

  return (
    <div className="home">
      <HeroSection />
      <Quests />
      {/* {monsters.map((el) => {
        return el.monsterName;
      })} */}
      <Locale />
    </div>
  );
};

export default Home;
