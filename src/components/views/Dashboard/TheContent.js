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
import Temp from "../../clients/planta/Sensores/Temp";
import Temperaturas from "../../clients/planta/Sensores/Temperaturas";

const TheContent = () => {
  return (
    <main className="c-main">
      <BrowserRouter>
        <Switch>
          <Route exact path="/planta" component={Bussines} />
          <Route exact path="/planta/perfil" component={profile} />

          <Route exact path="/planta/temperatura" component={Temperaturas} />
          <Route exact path="/planta/monitoreo" component={Monitoreo} />
          <Route exact path="/planta/temp_hum" component={Temp_hum} />
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default TheContent;
