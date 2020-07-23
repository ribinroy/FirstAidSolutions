import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import './Footer.scss'

export class Footer extends Component {
    render() {
        return (            
            <div className="Footer">
                <Row>
                    <div class="separator"></div>                    
                    <Col className="logo" md={5}></Col>
                    <Col className="contact" md={7}>
                        <div className="contactUs">
                            <h1>Contact Us</h1>
                            <p>FIRST AID SOLUTIONS First Aid Training, Bangkok, Thailand</p>
                            <p>Delivering quality first aid training in Bangkok and nearby regions of Thailand.</p>
                            <p>Courses delivered in English and Thai.</p>
                            <p>Mobile: 0802415724</p>
                        </div>
                        <div className="socialLinks">
                            <a href="https://www.facebook.com/firstaidsolutionsbkk" target="_blank" title="Facebook">Facebook</a>
                            <a href="mailTo:debricky@hotmail.com" title="Email">Email</a>
                        </div>
                    </Col>            
                </Row>
            </div>
        )
    }
}

export default Footer
