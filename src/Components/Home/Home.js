import React, { Component } from 'react'

import Header from '../Header/Header'
import Tiles from './Tiles'
import News from './News'
import Footer from '../Footer/Footer'
import { Container } from 'react-bootstrap'

import "./Home.scss"

export class Home extends Component { 
    render() {
        return (
            <div className="Home">                
                <Header tagline="Don't leave it to chance. YOU can help!"/>
                <Tiles />
                <News />
                <Footer/>
            </div>
        )
    }
}

export default Home