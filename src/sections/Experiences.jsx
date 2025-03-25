import React, { useState } from "react";

import { Title } from "../components/Title";
import { experiences } from "../constants/data";
import { Description } from "../components/Description";

export const Experiences = ({ handleItem, onHover, hoveredItem }) => {
  return (
    <div className="h-fit w-full flex flex-col items-start gap-14">
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
    </div>
  );
};
