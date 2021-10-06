import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { SpotifyApiContext } from "react-spotify-api";
import { store } from "./store/store";
import { Provider } from "react-redux";

import Cookies from "js-cookie";

import Home from "./pages/home";
import Blend from "./pages/blend";
import { default as AppPage } from "./pages/app";

const App = () => {
  const token = Cookies.get("spotifyAuthToken");

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              {token ? <AppPage /> : <Home />}
            </Route>

            <Route exact path="/blend/:room">
              {token ? <Blend /> : <Home />}
            </Route>

            <Route path="">
              <Redirect to="/" />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
