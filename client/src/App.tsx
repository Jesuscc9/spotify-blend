import { Router, Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";
import { Login } from "./pages";
import { privateRoutes } from "./routes/private";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import authActions from "./store/auth/actions";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const App = () => {
  const dispatch = useDispatch();

  const token = Cookies.get("spotifyAuthToken");

  useEffect(() => {
    dispatch(authActions.me());
  }, []);

  return (
    <Router history={history}>
      {token ? (
        <Switch>
          {privateRoutes.map((route, i) => (
            <Route
              exact
              key={i}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={Login}></Route>
        </Switch>
      )}
    </Router>
  );
};
