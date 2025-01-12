import { useEffect } from "react";
import { axiosIntercept } from "../api/sapphireapi";
import useRefresh from "./useRefresh";
import useAuth from "./useAuth";

const useAxiosInterceptor = () => {
  const refresh = useRefresh();
  const { auth } = useAuth();
  useEffect(() => {
    const requestIntercept = axiosIntercept.interceptors.request.use(
      (conf) => {
        if (!conf.headers["Authorization"]) {
          conf.headers["Authorization"] = `Bearer ${auth?.tk}`;
        }
        return conf;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosIntercept.interceptors.response.use(
      (response) => response,
      async (err) => {
        const prev = err?.config;
        if (err?.response?.status === 401) {
          let refToken = await refresh();
          prev.headers["Authorization"] = `Bearer ${refToken}`;
          return axiosIntercept(prev);
        }
        return Promise.reject(err);
      }
    );
    return () => {
      axiosIntercept.interceptors.response.eject(responseIntercept);
      axiosIntercept.interceptors.request.eject(requestIntercept);
    };
  }, [auth]);
};

export default useAxiosInterceptor;
