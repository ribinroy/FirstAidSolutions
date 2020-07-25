import React, { useEffect, useState } from 'react'
import './Header.scss'


export default function Header(props) {
    function positionHeader(){
        setbgPosY((window.pageYOffset/window.outerHeight)*100);
    }

    useEffect(() => {
        positionHeader();
        window.addEventListener('scroll', positionHeader);
    })
    const [bgPosY, setbgPosY] = useState((window.pageYOffset/window.outerHeight)*100);

    return (
        <div className="Header" style={{"backgroundPositionY": bgPosY+"%"}}>  
            <div className="logo bottomToTopAnimation"></div>
            <h3 className="tagline bottomToTopAnimation">{ props.tagline }</h3>
        </div>
    )
}
