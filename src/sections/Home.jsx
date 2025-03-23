import React from "react";

import Profile from "../assets/images/profile.png";
import { BoldBtn } from "../components/BoldBtn";

export const Home = () => {
  return (
    <main className="home flex flex-col gap-y-12 justify-start py-24 [&>p]:leading-7 text-opacity1 pr-4">
      <p>
        I'm a user-centric software engineer passionate about crafting intuitive
        and seamless user experiences. I prioritize clean and efficient UI/UX,
        minimizing unnecessary complexity while incorporating interactive
        elements to enhance engagement.
        <div>
          At the code level, I ensure reliability through unit, integration, and
          end-to-end testing, building robust and scalable applications.
        </div>
      </p>
      <p>
        Currently, I’m a Frontend Engineer at
        <BoldBtn
          link="https://www.bold-9.com/"
          title="Bold9"
          customStyle="ml-1"
        />
        , developing user-friendly interfaces to optimize e-commerce fulfillment
        operations.
        <BoldBtn
          title="My contribution"
          onClick={() => {
            console.log("show detail contribution");
          }}
          customStyle="ml-1"
        />{" "}
        includes enhancing UI performance, visualizing data-driven insights, and
        implementing immersive experiences to streamline logistics workflows.
      </p>
      <p>
        Previously, I worked in overseas sales, honing communication and global
        collaboration skills before transitioning into software engineering. To
        make this shift, I completed a JavaScript-based full-stack development
        bootcamp at Code States and later earned a Computer Science degree from
        <BoldBtn
          title="Korea National Open University (KNOU)"
          link="https://engknou.knou.ac.kr/engknou/5774/subview.do?epTicket=LOG"
          customStyle="ml-1"
        />
        .
      </p>
      <p>
        While working as a developer, I am continuously refining my frontend
        expertise while expanding my knowledge in system design, backend
        technologies, and cloud infrastructure to grow into a well-rounded
        engineer.
      </p>
    </main>
  );
};
