import React, { Component } from 'react'

export default class FrontCard extends Component {
    render() {
        return (
            <div>
                <img src={this.props.img.image} alt="" width="200px" height="300px"/>
            </div>
        )
    }
}
