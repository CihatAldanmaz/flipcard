import React, { Component } from 'react'
import imageback from "../images/imgback.jpg"

export default class Card extends Component {
    state={
        cardFaceUp:false
    }

    faceUp = () => {
       
            this.setState({
                cardFaceUp:true
            })
        
        
    }

    reverseCard = () => {
        
    }

    componentWillReceiveProps = (newProps) => {
       
        if(newProps.firstCard===null && newProps.secondCard===null && !newProps.matchedCards.includes(this.props.image.id)){
            setTimeout(()=>{
                this.setState({
                    cardFaceUp:false
                })
            },3000)   
        }else if(newProps.firstCard===null && !newProps.matchedCards.includes(this.props.image.id))

        if(newProps.matchedCards.includes(this.props.image.id)){
            this.setState({
                cardFaceUp:true
            })
        }
    }

    

    render() {
       
        return (
            <div onClick={()=> {this.faceUp(); this.props.cardClick(this.props.image)}}>
              {this.state.cardFaceUp ? <img src={this.props.image.image} alt="" width="200px" height="300px"/> : <img src={imageback} alt="" width="200px" height="300px"/>}
            </div>
        )
    }
}
