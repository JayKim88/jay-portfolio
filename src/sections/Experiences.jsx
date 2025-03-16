import React from "react";

import { Title } from "../components/Title";
import { experiences } from "../constants/data";
import { Description } from "../components/Description";

export const Experiences = ({ handleItem }) => {
  return (
    <div className="h-fit w-full flex flex-col items-center gap-14">
      <ul className="experiences gap-y-12 flex flex-col">
        {experiences.map((item) => (
          <Description key={item.title} {...item} />
        ))}
      </ul>
    </div>
  );
};
