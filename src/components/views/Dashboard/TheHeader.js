import React from "react";
import {
  CBreadcrumbRouter,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CLink,
  CSubheader,
  CToggler,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import TheHeaderDropdown from "./TheHeaderDropdown";
import TheHeaderDropdownNotif from "./TheHeaderDropdownNotif";
import TheHeaderDropdownTasks from "./TheHeaderDropdownTasks";
import TheHeaderDropdownMssg from "./TheHeaderDropdownMssg";
import AuthNav from "../Login/auth-nav";
import { useSelector, useDispatch } from "react-redux";

import { Link, BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

const logos = "https://www.muons.com.co/soft/logos/logoms_y.svg";

const TheHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  const toggleSidebar = () => {
    const val = [true, "responsive"].includes(sidebarShow)
      ? false
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  const toggleSidebarMobile = () => {
    const val = [false, "responsive"].includes(sidebarShow)
      ? true
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="40" alt="Logo" src={logos} />
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/viva_barranquilla">Inicio</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/viva_barranquilla/perfil">Perfil</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <AuthNav />
      </CHeaderNav>

      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes=""
        />
      </CSubheader>
    </CHeader>
  );
};

export default TheHeader;
