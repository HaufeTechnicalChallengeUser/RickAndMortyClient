import { memo } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AllRoutes from "./routes/AllRoutes";
import { BrowserRouter } from "react-router-dom";
import Body from "./components/common/Body/Body";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Body>
          <AllRoutes />
        </Body>
      </BrowserRouter>
    </Provider>
  );
};
export default memo(App);
