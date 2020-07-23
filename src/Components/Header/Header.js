import React, { useEffect, useState } from 'react'
import './Header.scss'
import NavBar from "../Navbar/NavBar";


export default function Header(props) {
    function positionHeader(){
        var navBarWrap = document.getElementsByClassName("NavBarWrap")[0];
        if(!navBarWrap)
            return false;
            
        if(window.pageYOffset === 0){//at top
            navBarWrap.setAttribute("scrolledDown", "false");
        }
        else{
            navBarWrap.setAttribute("scrolledDown", "true");
        }

        setbgPosY((window.pageYOffset/window.outerHeight)*100);
    }

    useEffect(() => {
        positionHeader();
        window.addEventListener('scroll', positionHeader);
    })
    const [bgPosY, setbgPosY] = useState((window.pageYOffset/window.outerHeight)*100);

    return (
        <div className="Header" style={{"backgroundPositionY": bgPosY+"%"}}>                
            <NavBar />
            <div className="logo bottomToTopAnimation"></div>
            <h3 className="tagline bottomToTopAnimation">{ props.tagline }</h3>
        </div>
    )
}
