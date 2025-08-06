import React from "react";
import { useTranslation } from "react-i18next";

import { Title } from "../components/Title";
import { education } from "../constants/data";
import { AnimatedSection, AnimatedItem } from "../components/AnimatedSection";

export const Educations = ({ handleItem }) => {
  return (
    <AnimatedSection
      className="educations"
      title="Educations"
      titleComponent={Title}
    >
      <div className="flex gap-y-18 flex-col">
        {education?.map((v, index) => (
          <AnimatedItem key={v.title} index={index}>
            <Education data={v} />
          </AnimatedItem>
        ))}
      </div>
    </AnimatedSection>
  );
};

const Education = ({ data: { period, title, contents, details } }) => {
  const { t } = useTranslation();
  return (
    <section className="flex gap-x-6">
      <section className="item-start w-[124px] pt-1 hidden md:flex">
        <span className="text-xs text-opacity2 font-medium">{t(period)}</span>
      </section>
      <section className="flex-1 flex flex-col gap-y-4">
        <strong className="text-base font-medium">{t(title)}</strong>
        <div className="text-[14.8px] leading-6 text-opacity1">
          {typeof contents === "string" ? t(contents) : contents}
        </div>
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
