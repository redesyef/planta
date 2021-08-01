import React from "react";

//Viva-Barranquilla
const Fases = React.lazy(() =>
  import("./components/clients/VivaBarranquilla/Fases")
);
const Monitoreo = React.lazy(() =>
  import("./components/clients/VivaBarranquilla/Monitoreo")
);
const Temp_hum = React.lazy(() =>
  import("./components/clients/VivaBarranquilla/Temp_hum")
);
const Profile = React.lazy(() =>
  import("./components/views/Layout/profile.js")
);

const routes = [
  { path: "/", exact: true, name: "Viva Barranquilla" },

  {
    path: "/viva_barranquilla/fases",
    name: "fases",
    component: Fases,
  },
  {
    path: "/viva_barranquilla/monitoreo",
    name: "Monitoreo",
    component: Monitoreo,
  },
  {
    path: "/viva_barranquilla/Temp_hum",
    name: "Temp_hum",
    component: Temp_hum,
  },
  {
    path: "/viva_barranquilla/perfil",
    name: "Temp_hum",
    component: Profile,
  },
];

export default routes;
