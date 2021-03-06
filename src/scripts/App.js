import React from "react";
import history from "./history";
import { HashRouter, Switch, Route } from "react-router-dom";

// Importing styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/spacing.css";
import "../styles/fonts.css";
import "../styles/main.scss";
import "../styles/text.scss";
import "../styles/responsive.css";

// Importing essential scripts
import { AuthProvider } from "./auth";
import PrivateRoute from "./private-route";

// Importing views
import LoginApp from "../views/login-page";
import HomeApp from "../views/home-page";
import RoomApp from "../views/room-page";

function App() {
  return (
    <AuthProvider>
      <HashRouter basename="/ChatRoom/">
        <Switch>
          <Route
            path={["/", "sign-in", "signin", "login"]}
            exact
            component={LoginApp}
          />
          <PrivateRoute path={["/home", "/index"]} exact component={HomeApp} />
          <PrivateRoute path="/room/:roomID" exact component={RoomApp} />
        </Switch>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;
