import Link from "next/link";
import styles from "../styles/Cards.module.css";
import CardTechStack from "../components/CardTechStack";

import { useGesture } from "react-use-gesture";
import { useSpring, animated } from "react-spring";
import { useEffect, useState } from "react";

export default function Card({
  title,
  description,
  setGoneArray,
  goneArray,
  index,
  needsReset,
  setNeedsReset,
  checkForReset,
  background,
  techStack,
  link,
  textColor,
}) {
  const START_MS_DELAY = 300;
  const INTERMEDIATE_MS_DELAY = 200;
  const CARD_WIDTH = 300;

  const TOTAL_DELAY = () => {
    let factorial = 1;
    for (i = 0; i <= goneArray.length; i++) {
      factorial *= i;
    }
    return factorial * INTERMEDIATE_MS_DELAY;
  };

  const [animatedClass, setAnimatedClass] = useState(false);

  // Logic that decides where to place the card
  const handleXDrag = (swipe, mx, down) => {
    if (swipe === -1) return -(window.innerWidth / 2 + CARD_WIDTH);
    if (swipe === 1) return window.innerWidth / 2 + CARD_WIDTH;
    return down ? mx : 0;
  };

  const updateGoneArray = (swipe) => {
    if (swipe !== 0) {
      const newArray = goneArray;
      newArray[index] = !newArray[index];
      setGoneArray(newArray);
      console.log(goneArray);
    }
  };

  //This likely will not work & will need to be put into separate functions (resetting and testing T/F)
  //Returns true if all cards are gone & resets value

  const resetGoneArray = () => {
    setGoneArray((prevState) => prevState.fill(false));
    setNeedsReset(false);
  };

  const handleSwipeX = () => {
    if (areAllGone()) {
      setTimeout(() => {
        return 0;
      }, index * INTERMEDIATE_MS_DELAY);
    }
  };

  const handleSwipeEnd = (swipe) => {
    if (swipe[0] !== 0) {
      return spring.start({
        opacity: 0,
      });
    }
  };

  const [{ x, scale, rotate, opacity }, spring] = useSpring(() => ({
    from: {
      x: 0,
      scale: 1,
      rotate: -10 + Math.random() * 20,
      opacity: 1,
    },
  }));

  const techSpring = useSpring(() => ({
    from: {
      y: 0,
      scale: 1,
    },
    to: {
      y: 15,
      scale: 1.5,
    },
  }));

  const bind = useGesture(
    {
      //Gesture interactions callbacks
      onDrag: ({ swipe, down, movement: [mx] }) => {
        spring.start({
          x: handleXDrag(swipe[0], mx, down),
          scale: down ? 1.1 : 1,
          rotate: mx / 100,
        });
        updateGoneArray(swipe[0]);
        setAnimatedClass(true);
      },
      onDragEnd: ({ swipe, down, movement: [mx] }) => {
        handleSwipeEnd(swipe, down, mx);
        checkForReset();
        setAnimatedClass(false);
      },
    },
    {
      //Gesture configuration object
      drag: {
        delay: 200,
        swipeDuration: 400,
      },
      dragEnd: {
        delay: 200,
        swipeDuration: 400,
      },
    }
  );

  //May need to eventually change the config on the opacity and make it only affect X
  useEffect(() => {
    if (needsReset) {
      console.log("triggered because all are gone");
      setTimeout(() => {
        return spring.start({
          config: {
            mass: 1,
            tension: 150,
            friction: 16,
          },
          x: 0,
          opacity: 1,
        });
      }, INTERMEDIATE_MS_DELAY * index + START_MS_DELAY);
      if (index === goneArray.length - 1) resetGoneArray();
      console.log(goneArray);
      console.log(index);
    }
  }, [needsReset]);

  return (
    <animated.div
      className={styles.Card_wrapper}
      {...bind()}
      style={{ x, scale, rotate, opacity }}
    >
      <CardTechStack techStack={techStack} animated={animatedClass} />
      <div
        className={styles.Card_container}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className={styles.Card_body} style={{ color: textColor }}>
          <h2>{title}</h2>
          <p>{description}</p>
          <Link
            href={{
              pathname: `/project/${link}`,
            }}
          >
            <a className={styles.Card_link}>
              <h3
                className={styles.Card_link_text}
                style={{ color: textColor }}
              >
                {" "}
                {`Explore`}
              </h3>
            </a>
          </Link>
        </div>
      </div>
    </animated.div>
  );
}
