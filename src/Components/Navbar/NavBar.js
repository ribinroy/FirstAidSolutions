import React, {useState} from 'react'
import {Link} from "react-router-dom";
import './NavBar.scss'

export default function NavBar() {
    const [xsListOpen, setXSListOpen] = useState(false);

    return (
        <nav className="NavBarWrap">
            <div className={"hamburger" + (xsListOpen?" isSelected":"")} onClick={() => setXSListOpen(!xsListOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className="listItems" xsvisibile={xsListOpen?"visible":""}>
                <li><Link to={"/Home"}>Home</Link></li>
                <li>About Us</li>
                <li>Catalog</li>
                <li><Link to={"/Client"}>Client</Link></li>
                <li>News</li>
                <li>Contact</li>
            </ul>
            {/* {xsListOpen && <div className="overLayDiv"></div>} */}
        </nav>
    )
}
