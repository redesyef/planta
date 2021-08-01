import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a
          href="https://www.muons.com.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Muons
        </a>
        <span className="ml-1">&copy;</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1"></span>
        <a
          href="https://muons.com.co/soft/viva_barranquilla"
          target="_blank"
          rel="noopener noreferrer"
        >
          Soft
        </a>
      </div>
    </CFooter>
  );
};

export default TheFooter;
