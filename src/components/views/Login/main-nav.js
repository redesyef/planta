import { NavLink } from "react-router-dom";
import React from "react";
import "./style.css";

const MainNav = () => (
  <div className="navbar-nav mr-auto">
    <NavLink
      to="/"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Home
    </NavLink>
    <NavLink
      to="/viva_barranquilla"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Dashboard
    </NavLink>
  </div>
);

export default MainNav;
