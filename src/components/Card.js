import React, { Component } from 'react'
import BackCard from './BackCard'
import FrontCard from './FrontCard'
import ReactCardFlip from "react-card-flip";


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
                })
                 }
            
    }

    helperFunction = () => {
        if(this.state.isLocked == false){
            this.faceUp();
            this.props.cardClick(this.props.image);
        }
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
            },1500)   
        }else if(newProps.firstCard===null && !newProps.matchedCards.includes(this.props.image.id))

        if(newProps.matchedCards.includes(this.props.image.id)){
            this.setState({
                cardFaceUp:true
            })
        }
    }

  
    

    render() {
       
        return (
            <ReactCardFlip isFlipped={this.state.cardFaceUp} flipDirection="horizontal">
            <div onClick={()=> {this.helperFunction();}}>
               <BackCard />
            </div>
               <div>
               <FrontCard img={this.props.image} /> 
               </div>
                
            </ReactCardFlip>
        )
    }
}
