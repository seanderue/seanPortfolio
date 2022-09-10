import React, { useState, useEffect } from 'react'
import styles from '../styles/Cards.module.css'

import Card from './Card.jsx'
import CardSwipe from './Card'
import CardTechStack from './CardTechStack'
import { useSpring, animated } from "react-spring"
import { useDrag, useGesture } from 'react-use-gesture'

export default function Deck() {
    
    const INTERMEDIATE_MS_DELAY = 300

    const [needsReset, setNeedsReset] = useState(false)
    
    const cards = 
    [        
        // {
        // title: 'My Story',
        // description: 'More details about my self-taught journey and other miscellaneous projects',
        // background: '/images/cardBG-misc.svg',
        // textColor: '#FFF',
        // link: 'aboutMe',
        // techStack: [{
        //     name: 'React',
        //     imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        // },
        // {
        //     name: 'Three.js',
        //     imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg'
        // },
        // {
        //     name: 'Firebase',
        //     imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg'
        // }    
        // ]
        // },
        {
            title: 'Budgeting App',
            description: '[WIP] A percent-based budgeting app designed to build a system around your financial goals in minutes',
            background: '/images/cardBG-budget.jpg',
            textColor: '#FFF',
            link: '/budget',
            techStack: [{
                name: 'React Native',
                imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
            },
            {
                name: 'Typescipt',
                imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
            },
            {
                name: 'AWS',
                imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg'
            }      
            ]
        },        {
            title: 'Slipchenko Lab',
            description: 'Undergraduate research assistant helping to build a GUI for a chemistry visualizing tool',
            background: '/images/cardBG-purdue.jpg',
            textColor: '#ae9b79',
            link: '/iSpiEFP',
            techStack: [{
                name: 'Java',
                imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
            },
            {
                name: 'CSS',
                imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
            },
            {
                name: 'GitHub',
                imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
            }    
            ]
        },
        {
            title: 'Multiplayer Dice Game',
            description: 'A WebSocket-based multiplayer dice racing game',
            background: '/images/cardBG-dice.jpg',
            textColor: '#FFF',
            link: 'tenzies',
            techStack: [{
                name: 'React',
                imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
            },
            {
                name: 'Socket.io',
                imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg'
            },
            {
                name: 'Node js',
                imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg'
            }    
            ]
        },
        {
            title: 'Bakery Order Form',
            description: 'A cute order form & auto-emailer for a local baker',
            background: '/images/cardBG-bakery.jpg',
            textColor: '#2a363b',
            link: 'katie-order-form',
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
                textColor={card.textColor}
                link = {card.link}
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
            <div  className={styles.Cardstack_card_container}>
                {/* <CardTechStack techStack={cards[0].techStack}/> */}
                {cardElements}
            </div>
        </div>
  )
}
