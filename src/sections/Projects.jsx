import React from "react";
import { useFiretore } from "../firebase/useFirestore";
import { Title } from "../components/Title";
import { Tags } from "../components/Tags";
import { projects } from "../constants/data";
import { Description } from "../components/Description";

export const Projects = ({ onClick }) => {
  // const projectsData = useFiretore("works");

  return (
    <section className="projects w-full flex flex-col items-center space-y-12">
      <Title value="Projects" />
      <ul className="experiences gap-y-10 flex flex-col">
        {projects.map((item) => (
          <Description {...item} />
        ))}
      </ul>
    </section>
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
      {/* Thumbnail Section */}
      <section className="flex items-start w-40">
        <img alt={title} src={thumbnail} className="w-40 rounded-lg" />
      </section>

      {/* Content Section */}
      <section className="flex flex-col flex-1 space-y-4">
        {/* Title and Meta Information */}
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

        {/* Purpose */}
        <div>{purpose}</div>

        {/* Achievements */}
        <section>
          <div className="font-semibold">Achievements</div>
          <ul className="list-disc list-inside">
            {role?.map((v, index) => (
              <li key={index}>{v}</li>
            ))}
          </ul>
        </section>

        {/* Tech Stack Tags */}
        <Tags data={stacks} />
      </section>
    </div>
  );
};
