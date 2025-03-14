import React from "react";

import { Title } from "../components/Title";

const data = [
  {
    period: "2022.03 - 2024.08",
    title: "Korea National Open University, South Korea",
    contents: "Computer Science(3.7/4.5)",
  },
  {
    period: "2020.10 - 2021.03",
    title: "Codestates(Boot camp), South Korea",
    contents: "Advanced software engineering, Immersive program(25th)",
    details: [
      "Full-stack course based on Javascript",
      "Learned React for frontend and learned NodeJS for backend",
      "Solved algorithm problems every day",
      "Performed assignments every day and experienced pair programming and code review",
      "Conducted 2 collaborative projects (Homemade and Royal Diary)",
    ],
  },
  {
    period: "2010.03 - 2018.02",
    title: "Soongsil University, South Korea",
    contents: "Economics(3.8/4.5)",
  },
];

export const Educations = ({ handleItem }) => {
  return (
    <main className="educations h-fit w-full flex flex-col items-center gap-14">
      <Title value="Educations" />
      <section
        style={{
          display: "flex",
          rowGap: 48,
          flexDirection: "column",
        }}
      >
        {data?.map((v) => (
          <Education data={v} />
        ))}
      </section>
    </main>
  );
};

const Education = ({ data: { period, title, contents, details } }) => {
  return (
    <section
      style={{
        display: "flex",
        columnGap: 24,
      }}
    >
      <section
        style={{
          display: "flex",
          alignItems: "flex-start",
          width: 160,
        }}
      >
        <span>{period}</span>
      </section>
      <section
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          rowGap: 16,
        }}
      >
        <strong
          style={{
            fontSize: 18,
            fontWeight: 500,
          }}
        >
          {title}
        </strong>
        <div>{contents}</div>
        <ul>
          {details?.map((v) => (
            <li>{v}</li>
          ))}
        </ul>
      </section>
    </section>
  );
};
