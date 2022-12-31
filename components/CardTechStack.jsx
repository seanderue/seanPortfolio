import React from "react";
import styles from "../styles/Cards.module.css";
import Image from "next/image";

export default function CardTechStack({ techStack, animated }) {
  //Class that handles conditional animated state alongside Cards CSS Module
  const CardTechStack_Icon_Class = animated
    ? [[styles.CardTechStack_Icon, styles.animated].join(" ")]
    : styles.CardTechStack_Icon;
  const CardTechStack_Container_Class = animated
    ? [styles.CardTechStack_container, styles.animated].join(" ")
    : styles.CardTechStack_container;

  const techStackElements = techStack.map((item, i) => {
    return (
      <Image
        width={52}
        height={40}
        alt={`${item.name} logo`}
        className={CardTechStack_Icon_Class}
        src={item.imgSrc}
        key={item.name}
      />
    );
  });

  return (
    <div className={CardTechStack_Container_Class}>{techStackElements}</div>
  );
}
