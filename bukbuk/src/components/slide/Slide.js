import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Slide(){
    const settings ={
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow:1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
    };
    return(
        <div id="slides">
            <Slider {...settings}>
                <div className="photos"><img src="" alt="silde-photo" /></div>
                <div className="photos"><img src="" alt="silde-photo" /></div>
                <div className="photos"><img src="" alt="silde-photo" /></div>
                <div className="photos"><img src="" alt="silde-photo" /></div>
                <div className="photos"><img src="" alt="silde-photo" /></div>
                <div className="photos"><img src="" alt="silde-photo" /></div>    
            </Slider>   
        </div>
    );
};



export default Slide;

