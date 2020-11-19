import React, { Component } from 'react'
import Card from './Card'

export default class CardList extends Component {

  imagesMapping = () => {
    return this.props.images.map((img,i)=>{
        return <Card image={img} i={i} getClickedImageID={this.props.getClickedImageID} />
    })
 }
render() {
    console.log(this.props)
    return (
        <div className="cardlist">
            {this.imagesMapping()}
        </div>
    )
}
}
