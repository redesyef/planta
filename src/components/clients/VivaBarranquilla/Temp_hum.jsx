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

import Temp1 from "./charts/Fase1/Temp-Hum/Temp3";
import Hum2 from "./charts/Fase1/Temp-Hum/Hum2";
import Temp2 from "./charts/Fase1/Temp-Hum/Temp2";
import Temp3 from "./charts/Fase1/Temp-Hum/Temp1";


class Temp_hum extends React.Component {

    render(){
 
  return (
    
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header="°C"
          text="Temperatura 1"
          footerSlot={<Temp1 />}
        ></CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="facebook"
          header="°C"
          text="Temperatura 2"
          footerSlot={<Temp2 />}
        ></CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header="°C"
          text="Temperatura 3"
          footerSlot={
            <Temp3
              className="mt-3 mx-6"
              style={{ height: "70px" }}
              backgroundColor="rgba(175,97,112,.2)"
              dataPoints={[78, 81, 80, 45, 34, 12, 40]}
              options={{ elements: { line: { borderWidth: 2.5 } } }}
              backgroundColor="rgb(250, 152, 152)"
              label="Members"
              labels=""
            />
          }
        ></CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="linkedin"
          header="%"
          text="Humedad "
          footerSlot={<Hum2 />}
        ></CWidgetDropdown>
      </CCol>
    </CRow>
  );
  
};

}
export default React.memo(Temp_hum)

