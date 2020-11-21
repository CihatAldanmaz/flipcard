import React, { Component } from 'react'
import Card from './Card'

export default class CardList extends Component {

  imagesMapping = () => {
    return this.props.images.map((img,i)=>{
        return <Card image={img} i={i} cardClick={this.props.cardClick} firstCard={this.props.firstCard} secondCard={this.props.secondCard} matchedCards={this.props.matchedCards}/>
    })
 }
render() {
    return (
        <div className="cardlist">
            {this.imagesMapping()}
        </div>
    )
}
}
