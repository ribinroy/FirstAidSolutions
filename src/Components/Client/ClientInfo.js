import React from 'react'
import { Row, Col } from 'react-bootstrap'

export default function ClientInfo() {
    return (
        <div className="ClientInfo">
            <div className="clientWrap">
                <Row>
                    <Col lg={12}>
                        <h2 className="slideFromRightToLeft">Human Development Forum Foundation</h2>
                    </Col>                        
                </Row>
                <div className="clientDetails">
                    <Row>                    
                        <Col className="Tile" lg={3} xs={12}>
                            <div className="image slideFromRightToLeft"></div>
                        </Col>
                        <Col lg={9} xs={12}>
                            <div className="description slideFromRightToLeft">
                                <p>Debbie Thompson a senior nurse of many years, has worked in the UK, Middle East and Australia. With a background in Surgery, Burns, Ophthalmology and School Nursing, she has been delivering First Aid Courses here in Thailand for the past 8 years.</p>
                                <p>First Aid & CPR Training gives you skills not only to deal with Sudden Cardiac Arrest but also enables you to make a difference if someone is injured or sick. You might not always be able to save a life, but being able and prepared to help someone in need is a asset not only to yourself but also friends, family, collegues and anyone you may meet.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="clientWrap">
                <Row>
                    <Col lg={12}>
                        <h2 className="slideFromRightToLeft">Shrewsbury International School, Bangkok</h2>
                    </Col>                        
                </Row>
                <div className="clientDetails">
                    <Row>                    
                        <Col className="Tile" lg={3} xs={12}>
                            <div className="image slideFromRightToLeft"></div>
                        </Col>
                        <Col lg={9} xs={12}>
                            <div className="description slideFromRightToLeft">
                                <p>We have chosen Debbie for our First Aid training for the last three years running now, and have been extremely pleased with how thorough and well thought out each one day training course has been. Debbie has a natural rapport with the Year 10 students taking the courses, and the training has been competent and well geared to the age group. Debbie makes it fun but also very educational. I would not hesitate to recommend her.</p>
                                <p>Gillian Storey, Teacher of Chemistry and EcoTeam Coordinator</p>
                                <p>Shrewsbury International School Bangkok</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="clientWrap">
                <Row>
                    <Col lg={12}>
                        <h2 className="slideFromRightToLeft">St. Andrews International School, Bangkok</h2>
                    </Col>                        
                </Row>
                <div className="clientDetails">
                    <Row>                    
                        <Col className="Tile" lg={3} xs={12}>
                            <div className="image slideFromRightToLeft"></div>
                        </Col>
                        <Col lg={9} xs={12}>
                            <div className="description slideFromRightToLeft">
                                <p>Debbie Thompson has been working with St Andrews since 2013 when we first approached her to provide some Whole School Staff Training on First Aid.</p>
                                <p>The response from the staff was so positive that we organised more in depth training for selected staff and a rolling programme of this training has been in place since.</p>
                                <p>Now a growing number of our staff have internationally recognised First Aid qualifications and we are keen to work with Debbie again during the next school year.</p>
                                <p>Debbie has also run a variety of courses for our students - both Primary and Secondary, giving students the basic skills and confidence to deal with a variety of situations.  She develops a great rapport with students of any age and we would wholeheartedly recommend the progrmmes she provides.</p>
                                <p>Diane Field | Head of Foundation Stage and KS1</p>
                                <p>St. Andrews International School Bangkok</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>                
        </div>
    )
}

