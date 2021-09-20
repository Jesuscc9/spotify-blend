import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SpotifyApiContext } from "react-spotify-api";
import { store } from "./redux/store";
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
              {token ? (
                <SpotifyApiContext.Provider value={token}>
                  <AppPage />
                </SpotifyApiContext.Provider>
              ) : (
                <Home />
              )}
            </Route>
            <Route exact path="/blend/:room">
              {token ? (
                <SpotifyApiContext.Provider value={token}>
                  <Blend />
                </SpotifyApiContext.Provider>
              ) : (
                <Home />
              )}
            </Route>
            <Route path="">
              <h1>404 Not Found :(</h1>
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
