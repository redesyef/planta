import React, { Suspense } from "react";
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";

import Fases from "../../clients/VivaBarranquilla/Fases";
import Monitoreo from "../../clients/VivaBarranquilla/Monitoreo";
import Temp_hum from "../../clients/VivaBarranquilla/Temp_hum";
import profile from "../Layout/profile";
import Bussines from "../../clients/VivaBarranquilla/Bussines";

const TheContent = () => {
  return (
    <main className="c-main">
      <BrowserRouter>
        <Switch>
          <Route exact path="/viva_barranquilla" component={Bussines} />
          <Route exact path="/viva_barranquilla/perfil" component={profile} />

          <Route exact path="/viva_barranquilla/fases" component={Fases} />
          <Route
            exact
            path="/viva_barranquilla/monitoreo"
            component={Monitoreo}
          />
          <Route
            exact
            path="/viva_barranquilla/temp_hum"
            component={Temp_hum}
          />
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default TheContent;
