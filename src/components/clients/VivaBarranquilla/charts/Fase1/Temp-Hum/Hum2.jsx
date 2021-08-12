import React, { useState, useEffect } from "react";
import { render } from "react-dom";
// Import Highcharts
import Highcharts from "highcharts/highstock";
//import HighchartsReact from "./HighchartsReact.js";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";
let url = 'https://www.muons.com.co/soft/demo1/datos1_reducido/articulos.php';
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/export-data')(Highcharts);
require('highcharts/modules/stock')(Highcharts);
const Hum2 = () => {
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
    yAxis: [ { // Secondary yAxis
      title: false,
      max: 100,
      min: 0,
      startOnTick: false
  }],
    tooltip: {
        valueSuffix: '%',
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
        //downloadPNG: "Gráfica en PNG",
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
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1
        },stops: [
          [0, Highcharts.getOptions().colors[0]],
          [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
        ]
      },

        lineWidth: 2,
          
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
              name: "Humedad ",
              data: []
            }
            
          ];
          let date;

          res.data.forEach(function (el) {
            //date = data.push([el.sensor]);
            //date = new Date(el.fecha).getTime();
            date=  new Date(el.fecha.replace(/\s+/g, 'T')).getTime();

           
            series[0].data.push([date, el.hum2]);
            
            
                        
          });
          setOptions({ series: series });
        });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <HighchartsReact 
  
  
  highcharts={Highcharts} options={options} />;
};

export default Hum2
