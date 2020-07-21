import React, { Component } from 'react'
import "../Header.scss"

export class Banner extends Component {
    render() {
        return (
            <div className="Banner">
                <div className="nav"></div>
                <div className="banner">
                    <div className="logo"></div>
                    <div className="tagline">{ this.props.tagline }</div>
                </div>
            </div>
        )
    }
}

export default Banner