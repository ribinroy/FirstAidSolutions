import React, {useState, useEffect} from 'react'
import {Link, NavLink} from "react-router-dom";
import './NavBar.scss'

export default function NavBar(props) {
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
    }

    useEffect(() => {
        positionHeader();
        window.addEventListener('scroll', positionHeader);
    })

    const [xsListOpen, setXSListOpen] = useState(false);
    function hamburgerCLickHandler(){
        props.showOverlay(!xsListOpen);
        setXSListOpen(!xsListOpen);
    }

    return (
        <nav className="NavBarWrap">
            <div className={"hamburger" + (xsListOpen?" isSelected":"")} onClick={() => hamburgerCLickHandler()}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className="listItems" xsvisible={xsListOpen?"visible":""}>
                <li className="slideFromLeftToRight animationFlow"><NavLink exact={true} className="navLink" activeClassName='isActive' to={"/"}>Home</NavLink></li>
                <li className="slideFromLeftToRight animationFlow">About Us</li>
                <li className="slideFromLeftToRight animationFlow">Catalog</li>
                <li className="slideFromLeftToRight animationFlow"><NavLink className="navLink" activeClassName='isActive' to={"/Client"}>Clients</NavLink></li>
                <li className="slideFromLeftToRight animationFlow">News</li>
                <li className="slideFromLeftToRight animationFlow">Contact</li>
            </ul>
            {/* {xsListOpen && <div className="overLayDiv"></div>} */}
        </nav>
    )
}
