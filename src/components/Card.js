import React, { Component } from 'react'
import imageback from "../images/imgback.jpg"

export default class Card extends Component {

state={
    clicked:false
}

clickImage = () => {
    this.setState({
        clicked:true
    })
}
    render() {
        return (
            <div onClick={()=> {this.clickImage(); this.props.getClickedImageID(this.props.image.id)}}>
              {this.state.clicked ? <img src={this.props.image.image} alt="" width="200px" height="300px"/> : <img src={imageback} alt="" width="200px" height="300px"/>}
            </div>
        )
    }
}
