import React from "react";

import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import Senales from "../VivaBarranquilla/charts/Fase1/Monitoreo/Senales";
import Carousel from "./images/Carousel";

const Fases = () => {
  
  return (
    <>
      <CCard>
        <CCardBody>
          <Senales style={{ height: "300px", marginTop: "40px" }} />
        </CCardBody>
      </CCard>
      <Carousel />
    </>
  );
};

export default Fases

