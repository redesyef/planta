import React from 'react';
import Plot from "react-plotly.js"

function PlotlyComponent() {
  const linspaceFn = (startValue, stopValue, cardinality) => {
  var arr = [];
  var step = (stopValue - startValue) / (cardinality - 1);
  for (var i = 0; i < cardinality; i++) {
    arr.push(parseFloat((startValue + (step * i)).toFixed(3)));
  }
  return arr;
}
  const t = linspaceFn(0, 20, 100)
  const x = [1.2,5]
  const y = [1.2,1]
  const z = [29.8, 32]

  return (
    <div>
      <Plot
        data={[
          {
            x: x,
            y: y,
            z: z,
            mode: 'markers', 
            type:'scatter3d',
            marker: {
              size:12,
              color:z,     
              colorscale:'Viridis', 
              opacity:0.8
            }
          }
        ]}
      />
    </div>
  );
}

export default PlotlyComponent;