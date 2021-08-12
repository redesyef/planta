import { useState, useEffect } from "react";
import axios from "axios";
let url = 'https://www.muons.com.co/soft/demo1/datos1_reducido/articulos.php';

const Axios2 = () => {
  const [name, setName] = useState([]);

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
        res.data.forEach(function (el) {
          
            setName(el.fp);
         
          
              
        });
        
      });
  }, 1000);
  
}, []);

  
return <div>{name}</div>;
};
export default Axios2;