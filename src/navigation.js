const navigation = [
  {
    _tag: "CSidebarNavTitle",
    _children: ["SISTEMA DE MONITOREO"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Electron Monitor System",
    route: "/",
    icon: "cil-speedometer",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Fases",
        to: "/viva_barranquilla/fases",
        icon: "cilList",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Monitoreo",
        to: "/viva_barranquilla/monitoreo",
        icon: "cilTask",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Temp-hum",
        to: "/viva_barranquilla/temp_hum",
        icon: "cilGraph",
      },
      {
        _tag: "CSidebarNavDivider",
      },
    ],
  },
];

export default navigation;
