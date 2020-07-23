import React from 'react'
import Header from '../Header/Header'
import Tiles from './Tiles'
import News from './News'
import Footer from '../Footer/Footer'
import "./Home.scss"

export default function Home() { 
    return (
        <div className="Home">                
            <Header tagline="Don't leave it to chance. YOU can help!"/>
            <Tiles />
            <News />
            <Footer/>
        </div>
    )
}
