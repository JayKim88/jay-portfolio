import React from "react";

import { Title } from "../components/Title";
import { Tags } from "../components/Tags";
import { Description } from "../components/Description";
import { studies } from "../constants/data";

export const Studies = () => {
  return (
    <section className="studies w-full flex flex-col items-center space-y-1">
      <ul className="gap-y-12 flex flex-col">
        {studies.map((item) => (
          <Description key={item.title} {...item} />
        ))}
      </ul>
    </section>
  );
};

const Study = ({
  data: {
    id,
    position,
    stacks,
    thumbnail,
    title,
    purpose,
    projectType,
    period,
    role,
  },
}) => {
  return (
    <div className="flex gap-6">
      <section className="w-40 flex items-start">
        <img alt={title} src={thumbnail} className="w-40 rounded-lg" />
      </section>
      <section className="flex flex-col flex-1 space-y-4">
        <section className="flex justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-yellow-300 rounded-full text-sm font-medium">
              {projectType}
            </span>
            <strong className="text-lg font-medium">{title}</strong>
            <span className="text-base font-medium">- {position}</span>
          </div>
          <span className="flex items-center">{period}</span>
        </section>
        <div>{purpose}</div>
        <section>
          <div className="font-semibold">Achievements</div>
          <ul className="list-disc list-inside">
            {role?.map((v, index) => (
              <li key={index}>{v}</li>
            ))}
          </ul>
        </section>
        <Tags data={stacks} />
      </section>
    </div>
  );
};
