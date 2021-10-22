import React from 'react';
import Plot from 'react-plotly.js';
//import graphData from '../../public/resources/3d-graph.json';

class Graphs extends React.Component {
    render(){
      return(
        <Plot
            data={[
            {
                type: 'surface',
                mode: "lines+mmarkersarkers",
               
                x : [3, 4, 6, 5, 5, 4, 6, 5, 1, 3, 2, 0, 1, 0, 2, 4, 5, 0, 2, 3, 5, 5, 0, 1, 4, 0, 2, 3, 4, 6, 4, 0, 4, 5, 6, 6, 4, 4, 3, 4, 6, 2, 1, 1, 5, 2, 6, 0, 2, 2],
                y : [3, 1, 6, 2, 5, 2, 2, 4, 6, 3, 1, 4, 3, 0, 1, 2, 4, 3, 2, 5, 0, 1, 0, 4, 1, 1, 4, 3, 2, 1, 0, 3, 6, 5, 1, 5, 4, 4, 0, 6, 3, 6, 6, 3, 2, 3, 2, 5, 0, 1],
                z : [5, 1, 4, 5, 3, 1, 5, 6, 0, 1, 1, 3, 3, 2, 4, 3, 5, 2, 0, 1, 6, 0, 2, 6, 0, 1, 6, 2, 2, 0, 6, 5, 2, 2, 0, 5, 6, 6, 5, 4, 6, 1, 2, 2, 4, 3, 3, 0, 0, 0 ]
            }
            
            ]}
            layout={
                {
                    width: 800,
                    height: 600,
                    margin: {
                        l: 50,
                        r: 50,
                        b: 80,
                        t: 90,
                        pad: 4
                    },
                    grid: {
                      rows: 1,
                      columns: 2,
                      pattern: 'independent',  
                    },
                    
  	scene:{
      aspectmode:'cube',
      domain:{row:0, column:0}
    },
    scene2:{
      aspectmode:'cube',
      domain:{row:0, column:1}
    },
                    title: "graphData.masterGraph.title",
                    annotations: [{
                        text: "graphData.masterGraph.model",
                          font: {
                          size: 14,
                          color: '#444444',
                        },
                        showarrow: false,
                        align: 'center',
                        x: 0.5,
                        y: 1.1,
                        xref: 'paper',
                        yref: 'paper',
                    }],
                    scene: {
                        xaxis: {
                            title: "graphData.masterGraph.xAxis",
                            titlefont: {
                              family: 'Courier New, monospace',
                              size: 12,
                              color: '#444444'
                            }
                        },
                        yaxis: {
                            title: "graphData.masterGraph.yAxis",
                            titlefont: {
                              family: 'Courier New, monospace',
                              size: 12,
                              color: '#444444'
                            }
                        },
                        zaxis: {
                            title: "graphData.masterGraph.zAxis",
                            titlefont: {
                              family: 'Courier New, monospace',
                              size: 12,
                              color: '#444444'
                            }
                        }
                    }
                }
            }
        />
      )
    }
  }

export default Graphs