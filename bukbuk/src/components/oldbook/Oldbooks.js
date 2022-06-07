import React,{useEffect} from "react";
import Menu from "../navibar/Menu";
import Nav from "../navibar/Nav";
import '../../css files/map.css';




function Oldbooks(){
    const {kakao} = window;
    useEffect(() => {
        const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};
        const map = new kakao.maps.Map(container, options);
    }, []);
   return(
        <div>
            <Nav/>
            <Menu/>
            <div id="map">
                
                
            </div>
        </div>
    );
};

export default Oldbooks;




