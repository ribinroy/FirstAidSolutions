import React, { Component } from 'react'
import "./Home.scss"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Tiles from './Tiles'
import { Container } from 'react-bootstrap'

export class Home extends Component {
    state = {
        tilesData: [
            {
                id: 1,
                title: "WHO ARE WE?",
                image: "",
                description: "We provide practical and theoretical training courses in First Aid, Cardio Pulmonary Resuscitation (CPR) and the use of Automated External Defibrillators for Adults, Children and Infants."
            },
            {
                id: 2,
                title: "WHY US?",
                image: "",
                description: "Our training packages range from Basic First Aid to Internationally Accredited Courses."
            },
            {
                id: 3,
                title: "OUR COMMITMENT",
                image: "",
                description: "A personal service from first contact, ensuring quality throughout."
            }
        ]
    };
    
    render() {
        return (
            <div className="Home">                
                <Container fluid>
                    <Header tagline="Don't leave it to chance. YOU can help!"/>
                    <Tiles tiles={this.state.tilesData}/>
                    <Footer/>
                </Container>
            </div>
        )
    }
}

export default Home