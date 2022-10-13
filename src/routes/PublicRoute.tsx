import { memo } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useTypedSelector } from "../redux/store";

const PublicRoute = () => {
  const {
    auth: { authenticated, loading },
  } = useTypedSelector((state) => state);

  return authenticated && !loading ? <Navigate to="/characters" /> : <Outlet />;
};

export default memo(PublicRoute);
