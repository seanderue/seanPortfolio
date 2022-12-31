import React, { useState } from "react";
import styles from "../styles/Cards.module.css";

import Card from "./Card.jsx";

export default function Deck({ data }) {
  const INTERMEDIATE_MS_DELAY = 300;

  const [needsReset, setNeedsReset] = useState(false);

  //Sort deck data based on cardOrderNumber (thanks, chatGPT)
  const deckData = data.allProjects.sort(
    (a: { cardOrderNumber: number }, b: { cardOrderNumber: number }) => {
      if (a.cardOrderNumber > b.cardOrderNumber) {
        return -1;
      }
      if (a.cardOrderNumber < b.cardOrderNumber) {
        return 1;
      }
      return 0;
    }
  );

  console.log(deckData);
  const deckElements = [];
  deckData.map((project, i) => {
    deckElements.push({
      key: i,
      title: project.title,
      description: project.cardDescription,
      background: project.cardBg.responsiveImage.src,
      textColor: project.cardTextColor.hex,
      link: project.slug,
      techStack: [
        {
          name: project.techStack[0].name,
          imgSrc: project.techStack[0].iconSrc.url,
        },
        {
          name: project.techStack[1].name,
          imgSrc: project.techStack[1].iconSrc.url,
        },
        {
          name: project.techStack[2].name,
          imgSrc: project.techStack[2].iconSrc.url,
        },
      ],
    });
  });

  const [goneArray, setGoneArray] = useState(
    Array(deckElements.length).fill(false)
  );

  const areAllGone = () => {
    const isTrue = (value: boolean) => value === true;
    if (goneArray.every(isTrue)) {
      console.log("All cards gone");
      console.log(goneArray);
      return true;
    }
    return false;
  };

  const checkForReset = () => {
    if (areAllGone()) setNeedsReset(true);
  };

  //Test to see if gone array is being updated

  const cardElements = deckElements.map((card) => {
    return (
      <Card
        key={deckElements.indexOf(card)}
        index={deckElements.indexOf(card)}
        title={card.title}
        description={card.description}
        background={card.background}
        textColor={card.textColor}
        link={card.link}
        techStack={card.techStack}
        setGoneArray={setGoneArray}
        goneArray={goneArray}
        setNeedsReset={setNeedsReset}
        needsReset={needsReset}
        checkForReset={checkForReset}
      />
    );
  });

  //   const cardElements = cards.map((card) => {
  //     return (
  //       <Card
  //         key={cards.indexOf(card)}
  //         index={cards.indexOf(card)}
  //         title={card.title}
  //         description={card.description}
  //         background={card.background}
  //         textColor={card.textColor}
  //         link={card.link}
  //         techStack={card.techStack}
  //         setGoneArray={setGoneArray}
  //         goneArray={goneArray}
  //         setNeedsReset={setNeedsReset}
  //         needsReset={needsReset}
  //         checkForReset={checkForReset}
  //       />
  //     );
  //   });

  return (
    <div className={styles.Cardstack_wrapper}>
      <div className={styles.Cardstack_card_container}>
        {/* <CardTechStack techStack={cards[0].techStack}/> */}
        {cardElements}
      </div>
    </div>
  );
}
