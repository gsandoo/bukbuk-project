import React from "react";
import Menu from "./navibar/Menu";
import Nav from "./navibar/Nav";
import Itembox from "./search-item/Itembox";
import Slide from "./slide/Slide";

function Home(){
    return(
        <>
        <Nav/>
        <Menu/>
        <Slide/>
        <Itembox/>
        </>
    );
};

export default Home;

