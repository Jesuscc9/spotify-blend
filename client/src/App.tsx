import { Router, Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";
import { Login } from "./pages";
import { privateRoutes } from "./routes/private";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import authActions from "./store/auth/actions";
import { createBrowserHistory } from "history";
import { AnimateSharedLayout } from "framer-motion";

export const history = createBrowserHistory();

export const App = () => {
  const dispatch = useDispatch();

  const token = Cookies.get("spotifyAuthToken");

  useEffect(() => {
    dispatch(authActions.me());
  }, []);

  const props = {
    type: "switch"
  }

  return (
    <Router history={history}>
      {token ? (
        <Switch>
          <AnimateSharedLayout type="crossfade">
            {privateRoutes.map((route, i) => (
              <Route
                exact
                key={i}
                path={route.path}
                component={route.component}
              />
            ))}
          </AnimateSharedLayout>
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={Login}></Route>
        </Switch>
      )}
    </Router>
  );
};