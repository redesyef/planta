import React from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'

import Kva from '../VivaBarranquilla/charts/Fase1/Monitoreo/Kva'
import KVar from '../VivaBarranquilla/charts/Fase1/Monitoreo/Kvar'
import Kw from '../VivaBarranquilla/charts/Fase1/Monitoreo/Kw'
import Angulo from '../VivaBarranquilla/charts/Fase1/Monitoreo/Angulo'
import Fp from '../VivaBarranquilla/charts/Fase1/Monitoreo/Fp'
import Vrms from '../VivaBarranquilla/charts/Fase1/Monitoreo/Vrms'
import Irms from '../VivaBarranquilla/charts/Fase1/Monitoreo/Irms'
import Consumo from '../VivaBarranquilla/charts/Fase1/Monitoreo/Consumo'


const Monitoreo = () => {
  // render
  return (
   
    <CRow>
     

      <CCol sm="9" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          header="V"
          text="Vrms"
          footerSlot={
            <Vrms
              pointed
              className="c-chart-wrapper mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[65, 59, 84, 84, 51, 55, 40]}
              pointHoverBackgroundColor="primary"
              label=""
              labels=""
            />
          }
        >
         
        </CWidgetDropdown>
      </CCol>

      <CCol sm="9" lg="3">
        <CWidgetDropdown
          color="gradient-info"
          header="A"
          text="IRMS"
          footerSlot={
            <Irms
              //pointed
              className="mt-3 mx-3"
              style={{height: '70px'}}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[1, 18, 9, 17, 34, 22, 11]}
              pointHoverBackgroundColor="info"
              options={{ elements: { line: { borderWidth: 2.5 }}}}
              label=""
              labels=""
            />
          }
        >
          
        </CWidgetDropdown>
      </CCol>
      <CCol sm="9" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header="Ángulo"
          text="-"
          footerSlot={
            <Angulo
              
            />
          }
        >         
        </CWidgetDropdown>
      </CCol>

      <CCol sm="9" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header="FP"
          text="Factor de potencia"
          footerSlot={
            <Fp/>
          }
        >
         
        </CWidgetDropdown>
      </CCol>

      <CCol sm="9" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          header="Kwh"
          text="Consumo"
          footerSlot={
            <Consumo
              pointed
              className="c-chart-wrapper mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[65, 59, 84, 84, 51, 55, 40]}
              pointHoverBackgroundColor="primary"
              label=""
              labels=""
            />
          }
        >
         
        </CWidgetDropdown>
      </CCol>

      <CCol sm="9" lg="3">
        <CWidgetDropdown
          color="gradient-info"
          header="kVA"
          text="Potencia Aparente"
          footerSlot={
            <Kva
              //pointed
              className="mt-3 mx-3"
              style={{height: '70px'}}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[1, 18, 9, 17, 34, 22, 11]}
              pointHoverBackgroundColor="info"
              options={{ elements: { line: { borderWidth: 2.5 }}}}
              label=""
              labels=""
            />
          }
        >
          
        </CWidgetDropdown>
      </CCol>
      <CCol sm="9" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header="kW"
          text="Potencia Activa"
          footerSlot={
            <Kw
              
            />
          }
        >         
        </CWidgetDropdown>
      </CCol>

      <CCol sm="9" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header="kVAR"
          text="Potencia Reactiva"
          footerSlot={
            <KVar/>
          }
        >
         
        </CWidgetDropdown>
      </CCol>
     
      
    </CRow>
  )
}

export default Monitoreo
