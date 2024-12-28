import sapphireapi from "../api/sapphireapi";
import useAuth from "./useAuth";

const useRefresh = () => {
  const { setAuth } = useAuth();
  const refreshTk = async () => {
    const resp = await sapphireapi.post("token/refresh");
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(resp.data.accessToken);
      return {
        ...prev,
        tk: resp.data.accessToken,
        name: resp.data.username,
      };
    });
    return resp.data.accessToken;
  };
  return refreshTk;
};
export default useRefresh;
