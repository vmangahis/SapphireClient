import { axiosIntercept } from "../api/sapphireapi";
import useAuth from "./useAuth";

const useRefresh = () => {
  const { setAuth } = useAuth();
  const refreshTk = async () => {
    const resp = await axiosIntercept.post("token/refresh");
    setAuth((prev) => {
      return {
        ...prev,
        tk: resp.data.accessToken,
        name: resp.data.user,
        user_avatar: resp.data.user_avatar
          ? resp.data.user_avatar
          : "https://i.pravatar.cc/300",
      };
    });
    return resp.data.accessToken;
  };
  return refreshTk;
};
export default useRefresh;
