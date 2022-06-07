import React,{useRef, useEffect} from "react";
import Menu from "../navibar/Menu";
import Nav from "../navibar/Nav";
import '../../css files/map.css';
import Map from "./Map";



function Oldbooks(){
   return(
        <div>
            <Nav/>
            <Menu/>
            <div id="map">
                <div className="map-container">
                <Map/>
                </div>
            </div>
        </div>
    );
};

export default Oldbooks;




