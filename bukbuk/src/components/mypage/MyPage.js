import React from "react";
import Nav from "../navibar/Nav";
import Menu from "../navibar/Menu";

function MyPage(){
    return(
        <>
            <Nav/>
            <Menu/>
            <div>
                <form>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                </form>
            </div>
        </>
    );
};

export default MyPage;