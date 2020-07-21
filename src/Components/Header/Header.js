import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Banner from './Banner/Banner'
import Navbar from './Navbar/Navbar'
import './Header.scss'

export class Header extends Component {
    render() {
        return (
            <Row>
                <Col>
                    <Navbar></Navbar>
                    <Banner tagline={ this.props.tagline }></Banner>
                </Col>                        
            </Row>
        )
    }
}

export default Header
