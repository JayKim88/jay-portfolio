import React from "react";

import { Title } from "../components/Title";
import { Tags } from "../components/Tags";

const data = [
  "Developed pages having search filters and paginated table considering performance optimisation using react-table and various reusable common components having versatility.",
  "Implemented dashboard with customised visualisation charts for better UX using recharts",
  "Dealt with validation in forms on client side using Formik, React forms library",
  "Applied unit, integration and E2E test by React testing library, Vitest, msw and playwright and set up automatic UI test by storybook and chromatic, visual testing tool",
  "Implemented fulfilment Center 3d visualisation for UX using ThreeJS",
];

const stacks = [
  "Javascript",
  "Typescript",
  "HTML5 & CSS3",
  "React",
  "Next JS",
  "GraphQL",
  "Docker",
  "Vite",
  "Vitest",
  "GCP",
  "Firebase",
];

export const Experiences = ({ handleItem }) => {
  return (
    <main className="experiences h-fit w-full flex flex-col items-center gap-14">
      <Title value="Experiences" />
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
            width: 140,
          }}
        >
          <span>2021.06 - present</span>
        </section>
        <section
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            rowGap: 16,
          }}
        >
          <section
            style={{
              display: "flex",
              columnGap: 4,
              alignItems: "center",
            }}
          >
            <strong
              style={{
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              Frontend Engineer
            </strong>
            <span
              style={{
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              - Bold9, Seoul
            </span>
          </section>
          <div>
            E-Commerce Fulfilment Service company specialises in fulfilment
            services, supporting sellers from order to delivery with features
            including inventory management, custom packaging, multi-temperature
            storage, and international shipping.
          </div>
          <section>
            <div>Achivements</div>
            <ul>
              {data.map((v) => (
                <li>{v}</li>
              ))}
            </ul>
          </section>
          <Tags data={stacks} />
        </section>
      </section>
    </main>
  );
};
