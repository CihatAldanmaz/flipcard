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
    clicked:false
},
{
    id:2,
    image:maca2,
    clicked:false
},
{
    id:3,
    image:maca3,
    clicked:false
},
{
    id:4,
    image:maca4,
    clicked:false
},
{
    id:5,
    image:maca5,
    clicked:false
},
{
    id:6,
    image:maca6,
    clicked:false
}]


export default class Dashboard extends Component {

    state={
        images:[...imageArray, ...imageArray],
        clickedImageID:null
    }

    getClickedImageID = (id) => {
        console.log(id)
    }
    


    render() {
        return (
            <div className="dashboard">
                <CardList images={this.state.images} getClickedImageID={this.getClickedImageID} />
            </div>
        )
    }
}
