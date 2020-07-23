import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './Footer.scss'

export default function Footer() {
    return (            
        <div className="Footer">
            <Row>
                <Col className="logo" lg={5} xs={12}></Col>
                <Col className="contact" lg={7} xs={12}>
                    <div className="contactUs">
                        <h1>Contact Us</h1>
                        <p>FIRST AID SOLUTIONS First Aid Training, Bangkok, Thailand</p>
                        <p>Delivering quality first aid training in Bangkok and nearby regions of Thailand.</p>
                        <p>Courses delivered in English and Thai.</p>
                        <p>Mobile: 0802415724</p>
                    </div>
                    <div className="socialLinks">
                        <a href="https://www.facebook.com/firstaidsolutionsbkk" rel="noopener noreferrer" target="_blank" title="Facebook">Facebook</a>
                        <a href="mailTo:debricky@hotmail.com" title="Email">Email</a>
                    </div>
                </Col>            
            </Row>
        </div>
    )
}