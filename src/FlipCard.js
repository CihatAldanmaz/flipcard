import React, { createContext, useContext, useEffect, useState } from "react";


import maca1 from "../images/maca1.png"
import maca2 from "../images/maca2.png"
import maca3 from "../images/maca3.png"
import maca4 from "../images/maca4.png"
import maca5 from "../images/maca5.png"
import maca6 from "../images/maca6.png"
import imageback from "../images/imgback.jpg"

const imageDataSource = [
    { id: 1, image: maca1, faceUp: false },
    { id: 2, image: maca2, faceUp: false },
    { id: 3, image: maca3, faceUp: false },
    { id: 4, image: maca4, faceUp: false },
    { id: 5, image: maca5, faceUp: false },
    { id: 6, image: maca6, faceUp: false }
];

const copyImages = [...imageDataSource, ...imageDataSource]

const CardContext = createContext();

export function Dashboard() {

    const [images] = useState(copyImages);
    const [firstCard, setFirstCard] = useState(null);
    const [secondCard, setSecondCard] = useState(null);
    const [score, setScore] = useState(0);
    const [matches, setMatches] = useState([]);



    function onClick(image) {
        console.log(image.id)
        if (firstCard === null) {
            setFirstCard(image);
        } else if (firstCard) {
            setSecondCard(image);
            if (firstCard.id === image.id) {
                setMatches([...matches, firstCard.id]);
                setScore(score + 1);
            }
            setTimeout(() => {
                setFirstCard(null);
                setSecondCard(null);
            }, 1000)
        }
    }
    return (
        <div className="dashboard">
            <h2>Score: {score}</h2>
            <CardContext.Provider value={{ firstCard: firstCard, secondCard: secondCard, matches: matches, images: images, onClick: onClick }}>
                <CardContainer />
            </CardContext.Provider>
        </div>
    );
}

export function CardContainer() {
    const context = useContext(CardContext);
    return (
        <div className="cardlist">
            {
                context.images.map((img, i) => {
                    return <Card image={img}
                        key={i}
                        i={i}
                        cardClick={context.onClick}
                        firstCard={context.firstCard}
                        secondCard={context.secondCard}
                        matchedCards={context.metchedCards}
                    />
                })
            }
        </div>
    )
}
export function Card({ image, firstCard, secondCard, matchedCards = [] }) {
    const [locked, setLocked] = useState(false);
    const [isFaceUp, setIsFaceUp] = useState(false);
    const context = useContext(CardContext);

    useEffect(() => {
        if (!(firstCard === null) && !(secondCard === null)) {
            setLocked(true);

            setTimeout(() => {
                setLocked(false);
            }, 1500)
        }

        if (firstCard === null && secondCard === null && !matchedCards.includes(image.id)) {
            setTimeout(() => {
                setIsFaceUp(false);
            }, 1000)
        } else if (firstCard === null && !matchedCards.includes(image.id))

            if (matchedCards.includes(image.id)) {
                setIsFaceUp(true);
            }
    }, [firstCard, secondCard, matchedCards, image])

    function faceUp() {
        if (locked === false) {
            setTimeout(() => {
                setIsFaceUp(true);
            }, 200)
        }
        context.onClick(image);
    }
    return (
        <div onClick={() => faceUp()}>
            <img src={isFaceUp ? image.image : imageback} alt="" width="200px" height="300px" />
        </div>
    )
}