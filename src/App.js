import React from "react";
import { HashRouter, Switch, Route, BrowserRouter } from "react-router-dom";

//import "@coreui/coreui/scss/coreui.scss";

//import TheSidebar from "./components/views/Dashboard/TheSidebar";
//import TheHeader from "./components/views/Dashboard/TheHeader";
//import TheContent from "./components/views/Dashboard/TheContent";
//import TheFooter from "./components/views/Dashboard/TheFooter";

import icons from "./icons";
import "./App.css";

import { useAuth0 } from "@auth0/auth0-react";
import { NavBar, Footer, Loading } from "./components/views/Login";
import { Home, Profile, ExternalApi } from "./components/views/Layout";
import ProtectedRoute from "./auth/protected-route";
import TheLayout from "./components/views/Dashboard/TheLayout";
import Monitoreo from "./components/clients/VivaBarranquilla/Monitoreo.jsx";

React.icons = icons;

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/planta" component={TheLayout} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
