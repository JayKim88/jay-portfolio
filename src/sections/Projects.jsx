import React, { useState } from "react";

import { useFiretore } from "../firebase/useFirestore";
import { Title } from "../components/Title";
import { Tags } from "../components/Tags";
import { projects } from "../constants/data";
import { Description } from "../components/Description";
import { AnimatedSection, AnimatedList } from "../components/AnimatedSection";
import ArrowUp from "../assets/images/arrow-big-up.svg?react";
import ArrowDown from "../assets/images/arrow-big-down.svg?react";

export const Projects = ({ onClick, onHover, hoveredItem, onDetailClick }) => {
  // const projectsData = useFiretore("works");
  const [showAll, setShowAll] = useState(false);

  return (
    <AnimatedSection
      className="projects"
      title="Projects"
      titleComponent={Title}
      className="relative"
    >
      <h2 className="ml-4 mb-6 text-[20px] font-bold text-gray-800 dark:text-gray-100">
        Featured.
      </h2>
      <AnimatedList className="gap-y-18 flex flex-col">
        {projects.slice(0, 2).map((item) => (
          <Description
            key={item.title}
            {...item}
            onHover={onHover}
            hoveredItem={hoveredItem}
            onDetailClick={onDetailClick}
          />
        ))}
      </AnimatedList>
      <div className="mt-5 flex justify-center items-center">
        <button
          onClick={() => {
            setShowAll((prev) => !prev);
          }}
          className="pl-2 pr-3 py-1 rounded-2xl font-medium
          text-black cursor-pointer flex text-[14px]
          bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500
                bg-[length:200%_200%] animate-gradientX                  
          transition-all duration-300 transform"
        >
          {showAll ? (
            <ArrowUp className="w-5 h-5 fill-black" />
          ) : (
            <ArrowDown className="w-5 h-5 fill-black" />
          )}
          {showAll ? "Show Less" : "Show Other"}
        </button>
      </div>
      <h2
        className={`text-2xl font-bold text-gray-800 dark:text-gray-100 
          transition-all duration-500 ${
            showAll ? "opacity-100 mt-10 mb-6" : "opacity-0 h-0 my-0"
          }`}
      >
        Other.
      </h2>
      {showAll && (
        <AnimatedList className="gap-y-18 flex flex-col">
          {projects.slice(2).map((item) => (
            <Description
              key={item.title}
              {...item}
              onHover={onHover}
              hoveredItem={hoveredItem}
              onDetailClick={onDetailClick}
            />
          ))}
        </AnimatedList>
      )}
    </AnimatedSection>
  );
};

const Project = ({
  data: {
    id,
    position,
    stacks,
    summary,
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
      <section className="flex items-start w-40">
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
