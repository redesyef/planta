import React, { useState, useEffect } from "react";
import { render } from "react-dom";
// Import Highcharts
import Highcharts from "highcharts/highstock";
//import HighchartsReact from "./HighchartsReact.js";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/export-data')(Highcharts);
require('highcharts/modules/stock')(Highcharts);
let url = 'https://www.muons.com.co/soft/demo1/datos1_reducido/articulos.php';
const Kva = () => {
  const [options, setOptions] = useState({
    chart: {
        zoomType: 'x',
        type: 'spline',
        height: 200,
    },
    title: {
      text: ""
    },
    xAxis: {
      type: "datetime",
      labels: {
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif"
        }
      }
    },
    tooltip: {
        valueSuffix: ' kVA',
        crosshairs: true,
        shared: true,
      },
      plotOptions: {
        spline: {
          lineWidth: 4,
          states: {
            hover: {
              lineWidth: 4
            }
          },
          marker: {
            enabled: false
          },
          pointInterval: 3600000, // one hour
          
        }
      },
      credits: {
        enabled: false
    },
    lang: {           
        viewFullscreen:"Pantalla completa",
        exitFullscreen: "Salir de pantalla completa",
        printChart: "Imprimir",
        downloadPNG: "Gráfica en PNG",
        downloadJPEG: "Gráfica en JEPG",
        downloadPDF: "Gráfica en PDF",
        downloadSVG: "Gráfica en vector SVG",
        downloadCSV:"Descarga datos en CSV",
        downloadXLS:"Descarga datos en Excel",
        viewData: "Ver tabla de datos",
        hideData: "Ocultar tabla de datos",
        
      },
      time: {
        useUTC: false
    },

    rangeSelector: {
        buttons: [{
            count: 1,
            type: 'second',
            text: '1S'
        }, {
            count: 10,
            type: 'second',
            text: '10S'
        }, {
          count: 20,
          type: 'second',
          text: '20S'
      }, {
          type: 'all',
          text: 'All'
      }],
        inputEnabled: false,
        selected: 0
    },
    legend: {
        enabled: true,
        accessibility: true,
        //align: 'right',
        //verticalAlign: 'top',
        //layout: 'vertical',
        //x: 0,
        //y: 100,
        //alignColumns: true,
      },
     
    series: [{

        lineWidth: 2,
        color: "#ea4549",  
    }, {}, {}]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      axios({
        method:'get',
        url: url + '?nocache=' + new Date().getTime(), // Safari fix 
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        mode: 'no-cors',
        withCredentials:false

      })
        .then((res) => {
          const series = [
            
            {
              name: "Potencia Aparente",
              data: []
            }
            
          ];
          let date;

          res.data.forEach(function (el) {
            //date = data.push([el.sensor]);
            date = new Date(el.fecha).getTime();

           
            series[0].data.push([date, el.potenciaS]);
            
            
                        
          });
          setOptions({ series: series });
        });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <HighchartsReact 
  
  highcharts={Highcharts} options={options} />;
};

export default Kva
