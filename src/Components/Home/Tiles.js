import React, { Component } from 'react'
import Tile from './Tile'

export class Tiles extends Component {
    
    render() {
        return this.props.tiles.map((tile) => (
            <Tile key={ tile.id } tile={ tile }/>
        ));
    }
}

export default Tiles
