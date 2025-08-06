import React, { useState } from "react";

import { Title } from "../components/Title";
import { experiences } from "../constants/data";
import { Description } from "../components/Description";
import { AnimatedSection, AnimatedList } from "../components/AnimatedSection";

export const Experiences = ({ handleItem, onHover, hoveredItem }) => {
  return (
    <AnimatedSection
      className="experiences flex flex-col gap-y-6"
      title="Experiences"
      titleComponent={Title}
    >
      <AnimatedList className="experiences gap-y-22 flex flex-col">
        {experiences.map((item) => (
          <Description
            key={item.title}
            {...item}
            onHover={onHover}
            hoveredItem={hoveredItem}
          />
        ))}
      </AnimatedList>
    </AnimatedSection>
  );
};
