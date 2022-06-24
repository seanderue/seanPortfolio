import React from 'react'
import styles from '../styles/Project.module.css'

export default function TechStack({techStack}) {

    //Class that handles conditional animated state alongside Cards CSS Module
    const CardTechStack_Icon_Class = styles.TechStack_Icon
    const CardTechStack_Container_Class = styles.TechStack_container

    const techStackElements = techStack.map((item)=> {
        return (<img className={CardTechStack_Icon_Class} src={item.imgSrc} key={item.name}/>)}
    )

    return (
        <div className ={CardTechStack_Container_Class}>
            {techStackElements}
        </div>
    )
}
