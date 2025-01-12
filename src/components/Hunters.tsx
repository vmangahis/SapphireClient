import { useEffect } from "react";
import { axiosIntercept } from "../api/sapphireapi";

const Hunters = () => {
  useEffect(() => {
    const getHunters = async () => {
      try {
        const resp = await axiosIntercept.get("/hunter");
        console.log(resp);
      } catch (err) {
        console.log(err);
      }
    };
    getHunters();
  }, []);
  return <div>Hunters</div>;
};

export default Hunters;
