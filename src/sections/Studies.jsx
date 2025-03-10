import React from "react";
import { Title } from "../components/Title";
import { Tags } from "../components/Tags";

const newData = [
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/jay-portfolio-487aa.appspot.com/o/uber%20demo.png?alt=media&token=6ed96a6a-1e27-4e00-a42c-6487de0dc3a0",
    purpose:
      "Ride-hailing app that connects passengers with drivers for convenient, on-demand transportation and delivery services.",
    period: "2025.03",
    projectType: "Clone",
    stacks: [
      "React Native",
      "Redux",
      "GCP APIs",
      "React Navigation",
      "Tailwind RN Classnames Library",
    ],
    summary:
      "Ride-hailing app that connects passengers with drivers for convenient, on-demand transportation and delivery services.",
    githubLink: "https://github.com/JayKim88/uber-clone",
    position: "Frontend",
    role: [
      "Learn react native with React Navigation using dynamic routing",
      "Learn how to use GCP APIs to make a map based app",
    ],
    title: "Uber Mobile app",
    id: "1vW2J3Ux321df2323msi5htN",
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/jay-portfolio-487aa.appspot.com/o/deliveroo.png?alt=media&token=e71638fb-a133-4186-97df-995aa731bd2d",
    purpose: "Food delivery and shopping app",
    period: "2025.02",
    projectType: "Clone",
    stacks: [
      "React Native",
      "Redux",
      "NativeWind",
      "SanityCMS",
      "React Navigation",
    ],
    summary: "Food delivery and shopping app",
    githubLink: "https://github.com/JayKim88/deliveroo-clone",
    position: "Full-stack",
    role: [
      "Learn react native with React Navigation using dynamic routing",
      "Get used to styling with Mobile tailwindCss",
      "Experience using Content Management System by SanityCMS",
    ],
    title: "Deliveroo Mobile app",
    id: "1vWJUx321dfd23mJqsi5htN",
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/jay-portfolio-487aa.appspot.com/o/aora.png?alt=media&token=06950e82-7833-4eaf-a1a0-a1b1f2a7bc64",
    purpose: "AI Generated video sharing app",
    period: "2025.02",
    projectType: "Clone",
    stacks: ["React Native", "NativeWind", "Appwrite", "Expo router"],
    summary: "AI Generated video sharing app",
    githubLink: "https://github.com/JayKim88/aora",
    position: "Full-stack",
    role: [
      "Learn react native with Expo router using file-based routing",
      "Learn to deal with video type data",
      "Get used to styling with Mobile tailwindCss",
      "Experience implementing backend server with Appwrite",
    ],
    title: "Aora Mobile app",
    id: "1vWJUx321dfdmJqsi5htN",
  },
];

export const Studies = () => {
  return (
    <section className="studies w-full flex flex-col items-center space-y-1">
      <Title value="Studies" />
      <section className="flex flex-col space-y-12">
        {newData?.map((study) => (
          <Study key={study.id} data={study} />
        ))}
      </section>
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
      {/* Thumbnail Section */}
      <section className="w-40 flex items-start">
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
