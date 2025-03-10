import React from "react";
import { useFiretore } from "../firebase/useFirestore";
import { Title } from "../components/Title";
import { Tags } from "../components/Tags";

const newData = [
  {
    hostingLink: "https://build-your-body.vercel.app/",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/jay-portfolio-487aa.appspot.com/o/build-your-body.png?alt=media&token=eadb9315-8d42-4f26-a689-cdf7935f934e",
    purpose: "Personal Home Training Service",
    period: "2024-05 - 2024-09",
    projectType: "Personal",
    reviewLink: "https://nomadkim880901.tistory.com/466",
    stacks: [
      "Typescript",
      "NextJS",
      "NextAuth",
      "React",
      "Zustand",
      "TailwindCSS",
      "MongoDB",
      "GCP",
      "Vercel",
    ],
    summary: "Personal Home Training Service",
    githubLink: "https://github.com/JayKim88/build-your-body",
    position: "Full-stack",
    role: [
      "Select exercises using detail modal and create your own program",
      "Proceed with your program by checking in set-checkboxes on every exercises",
      "Save your workout details including performance, title, satisfaction, notes, and images. You can also make it public.",
      "Monitor your workout history on a dashboard with visualized charts.",
      "View the workout performances of other users, give likes, and get inspired.",
    ],
    title: "Build Your Body",
    id: "1vWJUxn21dfmJqsi5htN",
  },
];

export const Projects = ({ onClick }) => {
  const projectsData = useFiretore("works");
  const combinedData = [...newData, ...projectsData];

  return (
    <section className="projects w-full flex flex-col items-center space-y-12">
      <Title value="Projects" />
      <section className="flex flex-col space-y-12">
        {combinedData?.map((project) => (
          <Project key={project.id} data={project} />
        ))}
      </section>
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
