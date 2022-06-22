import React, { useState, useEffect } from 'react'
import styles from '../styles/Cards.module.css'

import Card from './Card.jsx'
import CardSwipe from './Card'
import { useSpring, animated } from "react-spring"
import { useDrag, useGesture } from 'react-use-gesture'

export default function Deck() {
    
    const INTERMEDIATE_MS_DELAY = 300

    const [needsReset, setNeedsReset] = useState(false)
    
    const cards = 
    [
        {
            title: 'Bakery Order Form',
            description: 'A lovely order form for a lovely lass',
            background: '/images/cake-thumbnail.jpeg',
            techStack: [{
                name: 'React',
                imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
            },
            {
                name: 'Three.js',
                imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg'
            },
            {
                name: 'Firebase',
                imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg'
            }    
        ]
        },
        {
            title: 'Multiplayer Dice Game',
            description: 'A fun game to play with your buddies',
            background: 'https://via.placeholder.com/500',
            techStack: [{
                name: 'React',
                imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
            },
            {
                name: 'Three.js',
                imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg'
            },
            {
                name: 'Firebase',
                imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg'
            }    
        ]
        },
        {
            title: 'Slippychenko',
            description: 'Did nothing. Fake Card',
            background: 'undefined',
            techStack: [{
                name: 'React',
                imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
            },
            {
                name: 'Three.js',
                imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg'
            },
            {
                name: 'Firebase',
                imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg'
            }    
        ]
        }
    ]
    
    const [goneArray, setGoneArray] = useState(Array(cards.length).fill(false))
    
    const areAllGone = () => {
        const isTrue = (value) => value === true
        if (goneArray.every(isTrue)) 
        {
            console.log('All cards gone')
            console.log(goneArray)
            return true
        }
            return false
    }

    const checkForReset = () => {
        if (areAllGone()) setNeedsReset(true)
    }

    //Test to see if gone array is being updated

    const cardElements = cards.map((card)=>{
        return(
            <Card
                key={cards.indexOf(card)}
                index={cards.indexOf(card)}
                title={card.title}
                description={card.description}
                background={card.background}
                techStack = {card.techStack}
                setGoneArray={setGoneArray}
                goneArray = {goneArray}
                setNeedsReset = {setNeedsReset}
                needsReset = {needsReset}
                checkForReset = {checkForReset}
                />
        )
    })
        
    return (
        <div className={styles.Cardstack_wrapper}>
                {goneArray}
            <div  className={styles.Cardstack_card_container}>
                {cardElements}
            </div>
        </div>
  )
}
