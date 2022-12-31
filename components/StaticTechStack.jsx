import React from "react";
import styles from "../styles/Project.module.css";
import Image from "next/image";

export default function TechStack({ techStack }) {
  //Class that handles conditional animated state alongside Cards CSS Module
  const CardTechStack_Icon_Class = styles.TechStack_Icon;
  const CardTechStack_Container_Class = styles.TechStack_container;

  if (techStack !== undefined) {
    const techStackElements = techStack.map((item, i) => {
      return (
        <div key={i} className={styles.TechStack_icon_label_container}>
          <Image
            width={52}
            height={40}
            alt={`${item.name} logo`}
            className={CardTechStack_Icon_Class}
            src={item.iconSrc.url}
          />
          <p className={styles.TechStack_label}>{item.name}</p>
        </div>
      );
    });
    return (
      <div className={CardTechStack_Container_Class}>{techStackElements}</div>
    );
  } else {
    return <></>;
  }
}
