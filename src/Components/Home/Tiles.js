import React from 'react'
import { Row, Col } from 'react-bootstrap'
import "./Home.scss"

export default function Tiles() {
        return (
            <div className="Tiles">
                <Row>
                    <Col className="Tile bottomToTopAnimation animationFlow" md={12} lg={4} xs={12}>
                        <h1 className="title">WHO ARE WE?</h1>
                        <Row className="noPadding">
                            <Col xs={12} lg={12} md={5} className="noPadding">
                                <div className="image"></div>
                            </Col>
                            <Col xs={12} lg={12} md={7} className="">
                                <div className="description">
                                    <p>We provide practical and theoretical training courses in First Aid, Cardio Pulmonary Resuscitation (CPR) and the use of Automated External Defibrillators for Adults, Children and Infants.</p>
                                    <p>Our courses are suitable for companies, schools, groups, families and individuals in Bangkok and Thailand.</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="Tile bottomToTopAnimation animationFlow" md={12} lg={4} xs={12}>
                        <h1 className="title">WHY US?</h1>
                        <Row className="noPadding">
                            <Col xs={12} lg={12} md={5} className="noPadding">
                                <div className="image"></div>
                            </Col>
                            <Col xs={12} lg={12} md={7} className="">
                                <div className="description">
                                    <p>Our training packages range from Basic First Aid to Internationally Accredited Courses.</p>
                                    <p>With our experienced and friendly staff we are able to deliver training in both the Thai and English languages.</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="Tile bottomToTopAnimation animationFlow" md={12} lg={4} xs={12}>
                        <h1 className="title">OUR COMMITMENT</h1>
                        <Row className="noPadding">
                            <Col xs={12} lg={12} md={5} className="noPadding">
                                <div className="image"></div>
                            </Col>
                            <Col xs={12} lg={12} md={7} className="">
                                <div className="description">
                                    <p>A personal service from first contact, ensuring quality throughout.</p>
                                    <p>A flexible service to meet your needs. We are happy to devise bespoke courses.</p>
                                    <p>Times and locations that suit you.</p>
                                    <p>A fun, relaxed learning environment.</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
}
