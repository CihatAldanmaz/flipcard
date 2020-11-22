import React, { Component } from 'react'
import imageback from "../images/imgback.jpg"

export default class BackCard extends Component {
    render() {
        return (
            <div>
                <img src={imageback} alt="" width="200px" height="300px"/>
            </div>
        )
    }
}
