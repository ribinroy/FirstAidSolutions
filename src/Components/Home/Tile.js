import React, { Component } from 'react'

export class Tile extends Component {
    render() {
        return (
            <div className="Tile">
                <div className="title">{ this.props.tile.title }</div>
                <div className="image">{ this.props.tile.image }</div>
                <div className="description">{ this.props.tile.description }</div>
            </div>
        )
    }
}

export default Tile
