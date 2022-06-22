import styles from '../styles/Cards.module.css'
import React, {useState} from 'react'
import { useSpring, animated } from 'react-spring'

export default function SwipeTip() {

    const { rotate } = useSpring({
        to: {rotate: 15},
        from: {rotate: -15},
        reset: true,
        delay: 330,
        config: { mass: 1, tension: 200, friction: 20 },
        loop: {reverse: true}

    })

    return (
        <div className={styles.SwipeTip_container}>
            <animated.div style={{ rotate, width: 40 }} className={styles.SwipeTip_hand}>
                👆
            </animated.div>
            <p className={styles.SwipeTip_text}>
                (Swipe)
            </p>
        </div>
  )
}
