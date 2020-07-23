import React from 'react'
import "./Client.scss"
import Header from '../Header/Header'
import ClientInfo from './ClientInfo'
import Footer from '../Footer/Footer'

export default function Client() {
    return (
        <div className="Client">
            <Header tagline="We are proud to have many satisfied clients. Here's what some of them have to say: "/>
            <ClientInfo />
            <Footer/>
        </div>
    )
}