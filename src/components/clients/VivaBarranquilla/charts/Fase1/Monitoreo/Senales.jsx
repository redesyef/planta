import React, { useState, useEffect } from "react";
import { render } from "react-dom";
// Import Highcharts
import Highcharts from "highcharts/highstock";
//import HighchartsReact from "./HighchartsReact.js";
import HighchartsReact from "highcharts-react-official";
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/export-data')(Highcharts);
require('highcharts/modules/stock')(Highcharts);

const Senales = () => {
  const [options, setOptions] = useState({
    chart: {
        zoomType: 'x',
        type: 'spline',
    },
    title: {
      text: "Fase 1 (Conductor que generó la emergencia) - Plazoleta de comidas"
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
        //valueSuffix: ' V',
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
        selected: 2
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
        color: '#ff671b', 
        
    }, {
     
    }, {}]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://muons.com.co/soft/demo1/senales/articulos.php")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const series = [
            {
              name: "Voltaje",
              data: []
            },
            {
              name: "Corriente",
              data: []
            }
            
          ];
          let date;

          data.forEach(function (el) {
            //date = data.push([el.sensor]);
            date = new Date(el.fecha).getTime();

            series[0].data.push([date, el.voltaje]);
            series[1].data.push([date, el.corriente]);
            
          });
          setOptions({ series: series });
        });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return <HighchartsReact 
  constructorType={"stockChart"}
  highcharts={Highcharts} options={options} />;
};

export default React.memo(Senales)