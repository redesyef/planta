const navigation = [
  {
    _tag: "CSidebarNavTitle",
    _children: ["Soluciones IoT"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Electron Monitor System",
    route: "/",
    icon: "cil-speedometer",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Temperaturas",
        to: "/planta/temperatura",
        icon: "cilList",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Calidad de aire",
        to: "/planta/aire",
        icon: "cilTask",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Iluminación",
        to: "/planta/temp_hum",
        icon: "cilGraph",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Lluvia",
        to: "/planta/lluvia",
        icon: "cilGraph",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Movimiento",
        to: "/planta/movimiento",
        icon: "cilGraph",
      },
      {
        _tag: "CSidebarNavDivider",
      },
    ],
  },
];

export default navigation;
