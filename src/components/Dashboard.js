import React, { Component } from 'react'
import maca1 from "../images/maca1.png"
import maca2 from "../images/maca2.png"
import maca3 from "../images/maca3.png"
import maca4 from "../images/maca4.png"
import maca5 from "../images/maca5.png"
import maca6 from "../images/maca6.png"
import CardList from './CardList'

import '../App.css';

const imageArray = [{
    id:1,
    image:maca1,
    faceUp:false
},
{
    id:2,
    image:maca2,
    faceUp:false
},
{
    id:3,
    image:maca3,
    faceUp:false
},
{
    id:4,
    image:maca4,
    faceUp:false
},
{
    id:5,
    image:maca5,
    faceUp:false
},
{
    id:6,
    image:maca6,
    faceUp:false
}]

const copyImages = [...imageArray, ...imageArray]




export default class Dashboard extends Component {
    state={
        images:copyImages,
        firstCard:null,
        secondCard:null,
        matchedCards:[],
        score:0
    }

     handler = (e) => {
        e.stopPropagation();
        e.preventDefault();
    }


    compareCards = () => {
        // if(!(this.state.firstCard===null) && !(this.state.secondCard===null)){
        //     document.addEventListener("click",this.handler,true);
        //     //define a settimeout and after 3 seconds, remove click disabled
        //     //you stuck here
        // }
        if(this.state.firstCard.id===this.state.secondCard.id){

            this.setState({
                matchedCards:[...this.state.matchedCards, this.state.firstCard.id],
                score:this.state.score+1
            })
            setTimeout(()=>{
                this.setState({
                    firstCard:null,
                    secondCard:null,
                })
            },1000)
            
        }else{
            setTimeout(()=>{
                this.setState({
                    firstCard:null,
                    secondCard:null
                })
            },1000)
                
            
        }
    }

    cardClick = (img) => {
       
        if(this.state.firstCard===null){
            this.setState({
                firstCard:img
            })
        }else if(this.state.firstCard){
            this.setState({
                secondCard:img
            },()=>{this.compareCards()})
        }
        
    }
    


    render() {
        return (
            <div className="dashboard">
                <h2>Score: {this.state.score}</h2>
                <CardList images={this.state.images} cardClick={this.cardClick} firstCard={this.state.firstCard} secondCard={this.state.secondCard} matchedCards={this.state.matchedCards}/>
            </div>
        )
    }
}
