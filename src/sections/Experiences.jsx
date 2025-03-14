import React from "react";

import { Title } from "../components/Title";

import { experiences } from "../constants/data";


import { Description } from "../components/Description";

export const Experiences = ({ handleItem, data }) => {
  return (
    <div className="h-fit w-full flex flex-col items-center gap-14">
      <Title value="Experiences" />
      <ul className="experiences gap-y-10 flex flex-col">
        {data.map((item) => (
          <Description {...item} />
        ))}
      </ul>
    </div>
  );
};
