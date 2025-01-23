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
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    !auth?.tk ? refreshToken() : setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          <Outlet />
        </>
      )}
    </>
  );
};

export default PersistAuth;
