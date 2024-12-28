import { Outlet } from "react-router";
import useAuth from "../hooks/useAuth";
import useRefresh from "../hooks/useRefresh";
import { useEffect, useState } from "react";

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
    !auth?.name ? refreshToken() : setLoading(false);
  }, []);

  useEffect(() => {
    console.log(`loading ${loading}`);
    console.log(`aT: ${JSON.stringify(auth?.tk)}`);
  }, [loading]);

  return <>{loading ? <p>Load...</p> : <Outlet />}</>;
};

export default PersistAuth;
