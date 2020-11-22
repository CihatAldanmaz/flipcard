import React, { Component } from 'react'
import BackCard from './BackCard'
import FrontCard from './FrontCard'

export default class Card extends Component {
    state={
        cardFaceUp:false,
        isLocked:false
    }

    faceUp = () => {
            if(this.state.isLocked==false){
                setTimeout(()=>{
                    this.setState({
                        cardFaceUp:true,
                        
                    })
                },200)
                 }
            
    }

    reverseCard = () => {
        
    }

    componentWillReceiveProps = (newProps) => {
      if(!(newProps.firstCard===null) && !(newProps.secondCard===null)){
        this.setState({
            isLocked:true
        })

        setTimeout(()=>{
            this.setState({
                isLocked:false
            })
        },1500)
      }

        if(newProps.firstCard===null && newProps.secondCard===null && !newProps.matchedCards.includes(this.props.image.id)){
            setTimeout(()=>{
                this.setState({
                    cardFaceUp:false
                    
                })
            },1000)   
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
              {this.state.cardFaceUp ? <FrontCard img={this.props.image} /> : <BackCard />}
            </div>
        )
    }
}
