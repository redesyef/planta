import React from "react";
import "@coreui/coreui/scss/coreui.scss";
import TheContent from "./TheContent";
import TheSidebar from "./TheSidebar";
import TheHeader from "./TheHeader";
import TheFooter from "./TheFooter";

//import { TheContent, TheSidebar, TheFooter, TheHeader } from "../Dashboard";

const TheLayout = () => {
  return (
    <div className="c-app c-default-layout">
      <TheSidebar />
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <TheContent />
        </div>
        <TheFooter />
      </div>
    </div>
  );
};

export default TheLayout;
