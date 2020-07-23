import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

import "./Home.scss"

export class News extends Component {
    render() {
        return (
            <div className="News">
                <Row>
                    <Col md={5}>
                        <div className="image"></div>
                    </Col>
                    <Col md={7}>
                        <h1>Recent News</h1>
                        <div className="news">
                            <p>Filler text here.</p>
                        </div>                        
                    </Col>
                </Row>
            </div>
        )
    }
}

export default News
