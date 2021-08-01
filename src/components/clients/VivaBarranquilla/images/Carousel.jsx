import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default () => (
    <Carousel autoPlay>
        <div>
            <img alt="" src="https://muons.com.co/soft/fotos/viva_barranquilla/1.jpg" />  
        </div>
        <div>
            <img alt="" src="https://muons.com.co/soft/fotos/viva_barranquilla/2.jpg" />     
        </div>
        <div>
            <img alt="" src="https://muons.com.co/soft/fotos/viva_barranquilla/3.jpg" />     
        </div>
        <div>
            <img alt="" src="https://muons.com.co/soft/fotos/viva_barranquilla/4.jpg" />     
        </div>
        
    </Carousel>
);
