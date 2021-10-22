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


import Senales from "../VivaBarranquilla/charts/Fase1/Monitoreo/Senales";
import Total from "./charts/Fase1/Monitoreo/Total";
import Carousel from "./images/Carousel";
import Temphome from "./charts/Fase1/Temp-Hum/Temphome";
import Grafica from "./Graphs";
import PlotlyComponent from "./PlotlyComponent"




const Fases = () => {
  
  return (
    <>
    <CCol sm="9" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header="32°C"
          text="Alerta"
          
          footerSlot={
            <div
              className={'text-center'}
              style={{ height: '25px' }}
            >
              
            </div>
          }
          
        >
         
        </CWidgetDropdown>
      </CCol>
     <CCard>
       
       <CCardBody>
         
         <Temphome style={{ height: "300px", marginTop: "40px" }} />
       </CCardBody> 
     </CCard> 
     
     <CCard>
       
        <CCardBody>
          
          <Senales style={{ height: "300px", marginTop: "40px" }} />
        </CCardBody> 
      </CCard>   
      
      <Grafica />
      <PlotlyComponent />
      
    </>
  );
};

export default Fases

