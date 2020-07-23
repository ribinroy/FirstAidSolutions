import React from 'react'
import { Row, Col } from 'react-bootstrap'

import "./Home.scss"

export default function News() {
    return (
        <div className="News">
            <Col md={12}>
                <Row>
                    <Col md={5} className="noPadding">
                        <div className="image"></div>
                    </Col>
                    <Col md={7}>
                        <h1>Recent News</h1>
                        <div className="news">
                            <p>Filler text here.</p>
                        </div>                        
                    </Col>
                </Row>
            </Col>
        </div>
    )
}

