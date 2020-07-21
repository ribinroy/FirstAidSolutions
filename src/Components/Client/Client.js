import React, { Component } from 'react'
import "./Client.scss"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export class Client extends Component {
    render() {
        return (
            <div className="Client">
                <Header tagline="We are proud to have many satisfied clients. Here's what some of them have to say: "/>
                Client
                <Footer/>
            </div>
        )
    }
}

export default Client