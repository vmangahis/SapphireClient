import { Outlet, Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const AuthorizedView = () => {
  const { auth } = useAuth();
  const loc = useLocation();
  return auth?.tk ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: loc }} replace />
  );
};

export default AuthorizedView;
