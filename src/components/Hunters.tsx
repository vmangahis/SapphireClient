import { useEffect } from "react";
import { axiosIntercept } from "../api/sapphireapi";
import { useNavigate } from "react-router";

const Hunters = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const getHunters = async () => {
      try {
        const resp = await axiosIntercept.get("/hunter");
        console.log(resp);
      } catch (err) {
        console.log(err);
        navigate("/login");
      }
    };
    getHunters();
  }, []);
  return <div>Hunters</div>;
};

export default Hunters;
