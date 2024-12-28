import { useEffect, useState } from "react";
import sapphireuserApi from "../api/sapphireapi";

interface Monsters {
  monsterName: string;
}

const Home = () => {
  let [monsters, setMonsters] = useState<Monsters[]>([]);
  useEffect(() => {
    const getMonsters = async () => {
      sapphireuserApi
        .get("monster")
        .then((resp) => {
          console.log(resp.data);
          setMonsters(resp.data);
        })
        .catch((err) => console.log(err));
    };
    getMonsters();
  }, []);

  return (
    <div>
      {monsters.map((el) => {
        return el.monsterName;
      })}
    </div>
  );
};

export default Home;
