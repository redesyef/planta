import React, { Suspense } from "react";
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";

import Fases from "../../clients/VivaBarranquilla/Fases";
import Aire from "../../clients/planta/Sensores/Aire";
import Lluvia from "../../clients/planta/Sensores/Lluvia";
import profile from "../Layout/profile";
import Bussines from "../../clients/VivaBarranquilla/Bussines";
import Temp from "../../clients/planta/Sensores/Temp";
import Temperaturas from "../../clients/planta/Temperaturas";
import Mov from "../../clients/planta/Sensores/Mov.jsx";
import Luz from "../../clients/planta/Sensores/Luz";

const TheContent = () => {
  return (
    <main className="c-main">
      <BrowserRouter>
        <Switch>
          <Route exact path="/planta" component={Bussines} />
          <Route exact path="/planta/perfil" component={profile} />

          <Route exact path="/planta/temperatura" component={Temperaturas} />
          <Route exact path="/planta/aire" component={Aire} />
          <Route exact path="/planta/iluminacion" component={Luz} />
          <Route exact path="/planta/lluvia" component={Lluvia} />
          <Route exact path="/planta/movimiento" component={Mov} />
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default TheContent;
