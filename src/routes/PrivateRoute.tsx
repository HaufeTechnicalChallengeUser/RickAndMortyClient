import { memo, lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useTypedSelector } from "../redux/store";
const Navbar = lazy(() => import("../components/common/Nabvbar/Navbar"));

const PrivateRoute = () => {
  const {
    auth: { authenticated, loading },
  } = useTypedSelector((state) => state);

  return !authenticated && !loading ? (
    <Navigate to="/signin" />
  ) : (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default memo(PrivateRoute);
