import { lazy, memo, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Spinner from "../components/common/Spinner/Spinner";
import { auth } from "../redux/actions/auth";
import { useTypedDispatch } from "../redux/store";

const Alerts = lazy(() => import("../components/common/Alerts/Alerts"));
const PublicRoute = lazy(() => import("./PublicRoute"));
const PrivateRoute = lazy(() => import("./PrivateRoute"));
const Home = lazy(() => import("../components/pages/Home/Home"));
const Signin = lazy(() => import("../components/pages/Signin/Signin"));
const Signup = lazy(() => import("../components/pages/Signup/Signup"));
const AllCharacters = lazy(
  () => import("../components/pages/AllCharacters/AllCharacters")
);
const Favorites = lazy(() => import("../components/pages/Favorites/Favorites"));
const SingleCharacter = lazy(
  () => import("../components/pages/SingleCharacter/SingleCharacter")
);
const NotFound = lazy(() => import("../components/pages/NotFound/NotFound"));

const AllRoutes = () => {
  const dispatch = useTypedDispatch();
  const location = useLocation();

  const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  useEffect(() => {
    dispatch(auth());
  }, [dispatch]);

  useEffect(() => {
    const path = location.pathname.split("/").filter((item: string) => item)[0];
    document.title = capitalizeFirstLetter(
      path ? `${path} - Rick and Morty` : "Rick and Morty"
    );
  }, [location]);

  return (
    <Suspense fallback={<Spinner />}>
      <Alerts />
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/characters" element={<AllCharacters />} />
          <Route path="/characters/:id" element={<SingleCharacter />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default memo(AllRoutes);
