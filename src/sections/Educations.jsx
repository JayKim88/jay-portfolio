import React from "react";

import { Title } from "../components/Title";
import { education } from "../constants/data";

export const Educations = ({ handleItem }) => {
  return (
    <main className="educations">
      <Title value="Educations" />
      <section className="flex gap-y-18 flex-col">
        {education?.map((v) => (
          <Education key={v.title} data={v} />
        ))}
      </section>
    </main>
  );
};

const Education = ({ data: { period, title, contents, details } }) => {
  return (
    <section className="flex gap-x-6">
      <section className="item-start w-[124px] pt-1 hidden md:flex">
        <span className="text-xs text-opacity2 font-medium">{period}</span>
      </section>
      <section className="flex-1 flex flex-col gap-y-4">
        <strong className="text-base font-medium">{title}</strong>
        <div className="text-[14.8px] leading-6 text-opacity1">{contents}</div>
        {details && (
          <ul>
            {details?.map((v) => (
              <li>{v}</li>
            ))}
          </ul>
        )}
      </section>
    </section>
  );
};
