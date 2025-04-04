import React, { useState } from "react";

import { Title } from "../components/Title";
import { experiences } from "../constants/data";
import { Description } from "../components/Description";

export const Experiences = ({ handleItem, onHover, hoveredItem }) => {
  return (
    <main className="experiences flex flex-col gap-y-6">
      <Title value="Experiences" />
      <ul className="experiences gap-y-22 flex flex-col">
        {experiences.map((item) => (
          <Description
            key={item.title}
            {...item}
            onHover={onHover}
            hoveredItem={hoveredItem}
          />
        ))}
      </ul>
    </main>
  );
};
