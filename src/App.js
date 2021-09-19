import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SpotifyApiContext } from "react-spotify-api";
import Cookies from "js-cookie";

import Home from "./pages/home";
import { default as AppPage } from "./pages/app";

const App = () => {
  const token = Cookies.get("spotifyAuthToken");

  return (
    <div className="App">
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
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
