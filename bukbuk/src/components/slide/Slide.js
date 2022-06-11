import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../css files/slide.css';


function Slide(){
    const settings ={
        dots: true,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow:1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px', 
    };
    return(
        <div id="slides">
            <Slider {...settings}>
                <div className="photos"><img src="https://bimage.interpark.com/milti/renewPark/main/116337_20220519142456401.png" alt="silde-photo" /></div>
                <div className="photos"><img src="https://bimage.interpark.com/milti/renewPark/main/116337_202205201906411711.png" alt="silde-photo" /></div>
                <div className="photos"><img src="https://bimage.interpark.com/milti/renewPark/main/116337_202202221331522700.png" alt="silde-photo" /></div>
                <div className="photos"><img src="https://bimage.interpark.com/milti/renewPark/main/116342_20220527201950671.png" alt="silde-photo" /></div>
                <div className="photos"><img src="https://bimage.interpark.com/milti/renewPark/main/116337_202205301310093221.png" alt="silde-photo" /></div>
                <div className="photos"><img src="https://bimage.interpark.com/milti/renewPark/main/116337_202205181834279041.png" alt="silde-photo" /></div>    
            </Slider>   
        </div>
    );
};



export default Slide;

