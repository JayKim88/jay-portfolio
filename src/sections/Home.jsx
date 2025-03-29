import React from "react";

import Profile from "../assets/images/profile.png";
import { BoldBtn } from "../components/BoldBtn";

export const Home = () => {
  return (
    <main className="home flex flex-col gap-y-12 justify-start py-24 [&>p]:leading-7 text-opacity1 pr-4">
      <p>
        I'm a <ImportantContent content="user-centric software engineer" />{" "}
        passionate about crafting intuitive and seamless user experiences. I
        prioritize clean and efficient UI/UX, minimizing unnecessary complexity
        while incorporating interactive elements to enhance engagement. At the
        code level, I ensure reliability through unit, integration, and snapshot
        UI testing, building robust and scalable applications.
      </p>
      <p>
        Currently, I’m a Frontend Engineer at
        <BoldBtn
          link="https://www.bold-9.com/"
          title="Bold9"
          customStyle="ml-1"
        />
        , developing user-friendly interfaces to optimize e-commerce fulfillment
        operations. My contribution includes enhancing UI performance,
        visualizing data-driven dashboard, and implementing intuitive and
        easy-to-use features to streamline logistics workflows.
      </p>
      <p>
        I began my career in overseas sales, where I developed strong
        communication and global collaboration skills. Driven by a growing
        passion for technology, I transitioned into software
        engineering—completing a full-stack JavaScript bootcamp at Code States
        and landing my first developer role. While working full-time as a
        software engineer, I earned a Bachelor’s degree in Computer Science from
        <BoldBtn
          title="Korea National Open University (KNOU)"
          link="https://engknou.knou.ac.kr/engknou/5774/subview.do?epTicket=LOG"
          customStyle="ml-1"
        />
        .
      </p>
      <p>
        In my free time, I enjoy picking up new skills, like mobile app
        development, which I’ve recently started diving into. I’m also a big fan
        of sports, especially MMA and football, with a particular interest in
        the Premier League and Bundesliga. Additionally, I’m always eager to
        learn new languages, such as German and Mandarin, and I’m fascinated by
        the idea of building and growing{" "}
        <ImportantContent content="bootstrapped businesses" /> .
      </p>
    </main>
  );
};

const ImportantContent = ({ content }) => (
  <span className="text-main font-medium">{content}</span>
);
