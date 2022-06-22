import React from 'react'
import styles from '../styles/Cards.module.css'

export default function CardTechStack({techStack}) {

    const techStackElements = techStack.map((item)=> {
        return (<img className={styles.CardTechStack_Icon} src={item.imgSrc}/>)}
    )

    return (
        <div className ={styles.CardTechStack_container}>
            {techStackElements}
        </div>
    )
}
