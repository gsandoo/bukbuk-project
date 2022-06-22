import React from "react";
import Menu from "../navibar/Menu";
import Nav from "../navibar/Nav";
import Slide from "../slide/Slide";

function Home(authenticated){
    
    return(
        <>
        <Nav authenticated={authenticated} />
        <Menu/>
        <Slide/>
        </>
    );
};

export default Home;

