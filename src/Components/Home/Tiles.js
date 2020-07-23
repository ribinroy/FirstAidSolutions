import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

import "./Home.scss"

export class Tiles extends Component {
    
    render() {
        return (
            <div className="Tiles">
                <Row>
                    <Col className="Tile" md={4}>
                        <h1 className="title">WHO ARE WE?</h1>
                        <div className="image"></div>
                        <div className="description">
                            <p>We provide practical and theoretical training courses in First Aid, Cardio Pulmonary Resuscitation (CPR) and the use of Automated External Defibrillators for Adults, Children and Infants.</p>
                            <p>Our courses are suitable for companies, schools, groups, families and individuals in Bangkok and Thailand.</p>
                        </div>
                    </Col>
                    <Col className="Tile" md={4}>
                        <h1 className="title">WHY US?</h1>
                        <div className="image"></div>
                        <div className="description">
                            <p>Our training packages range from Basic First Aid to Internationally Accredited Courses.</p>
                            <p>With our experienced and friendly staff we are able to deliver training in both the Thai and English languages.</p>
                        </div>
                    </Col>
                    <Col className="Tile" md={4}>
                        <h1 className="title">OUR COMMITMENT</h1>
                        <div className="image"></div>
                        <div className="description">
                            <p>A personal service from first contact, ensuring quality throughout.</p>
                            <p>A flexible service to meet your needs. We are happy to devise bespoke courses.</p>
                            <p>Times and locations that suit you.</p>
                            <p>A fun, relaxed learning environment.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Tiles
