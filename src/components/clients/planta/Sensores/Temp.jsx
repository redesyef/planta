import React, { useState, useEffect } from "react";
import axios from "axios";

// Import Highcharts
import Highcharts from "highcharts/highstock";
//import HighchartsReact from "./HighchartsReact.js";
import HighchartsReact from "highcharts-react-official";
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/export-data')(Highcharts);
require('highcharts/modules/stock')(Highcharts);
let url = 'https://muons.com.co//soft/demo1/datos1/articulos.php';

const Temp = () => {
  const [options, setOptions] = useState({
    chart: {
        zoomType: 'x',
        type: 'spline',
    },
    title: {
      text: "Temperaturas"
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
    yAxis: [{
        offset: 20,

       
      },
        
      ],

    tooltip: {
        //valueSuffix: ' V',
        //crosshairs: true,
        //shared: true,
        split: true,
        valueDecimals: 2,
      },
      plotOptions: {
        spline: {
          lineWidth: 2,
          halo: 0.25,
          states: {
           
          },
          marker: {
            enabled: false
          },
          series: {
            animation: false,
           //showInNavigator: true,
           showInLegend: true
  
          },
         // pointInterval: 3600000,
           
          
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
            type: 'day',
            text: '1D'
        }, {
            count: 2,
            type: 'week',
            text: '1S'
        },  {
          type: 'all',
          text: 'All'
      }],
        inputEnabled: true,
        selected: 1
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
      axios({
        method:'get',
        url: url + '?nocache=' + new Date().getTime(), // Safari fix 
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        mode: 'no-cors',
        withCredentials:false

      })
        
       
        .then(res => {
          
          const series = [
            {
              name: "Sensor 1",
              data: []
            },
            {
              name: "Sensor 2",
              data: []
            }
            
            
          ];
          let date;

          res.data.forEach(function (el) {
            //date = data.push([el.sensor]);
            //date = new Date(el.fecha).getTime();
            date=  new Date(el.fecha.replace(/\s+/g, 'T')).getTime();


            series[0].data.push([date, el.temp2]);
            series[1].data.push([date, el.temp3]);
            
          });
          setOptions({ series: series });
        });
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);


  return <HighchartsReact 
  constructorType={"stockChart"}
  highcharts={Highcharts} options={options} />;
};

export default Temp
