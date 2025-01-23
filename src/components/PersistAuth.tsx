import { Outlet } from "react-router";
import useAuth from "../hooks/useAuth";
import useRefresh from "../hooks/useRefresh";
import { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";

const PersistAuth = () => {
  const { auth } = useAuth();
  const [loading, setLoading] = useState(true);

  const refresh = useRefresh();

  useEffect(() => {
    const refreshToken = async () => {
      let setLoadingTimeOut = () => {
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      };
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingTimeOut();
      }
    };
    !auth?.tk ? refreshToken() : setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <SplashScreen appLoad={loading} />
      ) : (
        <>
          <Outlet />
        </>
      )}
    </>
  );
};

export default PersistAuth;
