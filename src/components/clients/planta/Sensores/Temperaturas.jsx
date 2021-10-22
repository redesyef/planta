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
  CWidgetDropdown
} from "@coreui/react";

import Temp from "./Temp";
import Graphs from "./Graphs"

const Temperaturas = () => {
  
  return (
    <>
    <CCol sm="9" lg="3">
      </CCol>
     <CCard>
       <CCardBody>
         <Temp style={{ height: "300px", marginTop: "40px" }} />
       </CCardBody> 
     </CCard> 
     <CCard>
      </CCard>   
      <Graphs />
      
    </>
  );
};

export default Temperaturas

