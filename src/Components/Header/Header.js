import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import './Header.scss'

export class Header extends Component {
    render() {
        return (
            <div className="Header">                
                <div className="nav">
                    <ul>
                        <li><a href="/Home">Home</a></li>
                        <li>About Us</li>
                        <li>Catalog</li>
                        <li><a href="/Client">Clients</a></li>
                        <li>News</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="logo"></div>
                <h3 className="tagline">{ this.props.tagline }</h3>
            </div>
        )
    }
}

export default Header
