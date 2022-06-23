import React from 'react'
import styles from '../styles/Cards.module.css'

export default function CardTechStack({techStack, animated}) {

    //Class that handles conditional animated state alongside Cards CSS Module
    const CardTechStack_Icon_Class = animated ? [[styles.CardTechStack_Icon, styles.animated].join(' ')] : styles.CardTechStack_Icon
    const CardTechStack_Container_Class = animated ? [styles.CardTechStack_container, styles.animated].join(' ') : styles.CardTechStack_container

    const techStackElements = techStack.map((item)=> {
        return (<img className={CardTechStack_Icon_Class} src={item.imgSrc} key={item.name}/>)}
    )

    return (
        <div className ={CardTechStack_Container_Class}>
            {techStackElements}
        </div>
    )
}
