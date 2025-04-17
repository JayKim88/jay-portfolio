import React from "react";

import Profile from "../assets/images/profile.png";
import { BoldBtn } from "../components/BoldBtn";
import { Important } from "../components/Important";

export const Home = () => {
  return (
    <main className="home flex flex-col gap-y-12 justify-start py-24 [&>p]:leading-7 text-opacity1 pr-4">
      <p>
        I’m a <Important content="user-centric software engineer" /> passionate
        about crafting intuitive and seamless user experiences. On the client
        side, I focus on building clean, efficient, and interactive UIs that
        minimize complexity and enhance engagement. On the server side, I have
        experience with building RESTful APIs and handling backend logic using
        Node.js and Next.js, supporting end-to-end functionality.
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
        easy-to-use features to streamline logistics workflows. I also ensured
        application reliability by writing unit, integration, and snapshot UI
        tests—delivering robust, scalable software from design to deployment.
      </p>
      <p>
        At Bold9, I work in an
        <Important content=" agile and bottom-up environment " />
        where developers actively choose tasks and take full ownership of it.
        This
        <Important content=" issue-based and task-driven workflow " />
        empowers me to work independently while managing my own schedule. At the
        same time, close collaboration with planners, designers, and backend
        developers through open discussions and peer code reviews has
        strengthened my ability to work cooperatively and contribute to higher
        team coding standards.
      </p>
      <p>
        I began my career in overseas sales, where I developed strong
        communication and global collaboration skills. Driven by a growing
        passion for technology, I transitioned into software
        engineering—completing a full-stack JavaScript bootcamp at Code States
        and landing my first developer role. While working full-time as a
        software engineer, I earned a Bachelor’s degree in Computer Science from
        <BoldBtn
          title="Korea National Open University"
          link="https://engknou.knou.ac.kr/engknou/5774/subview.do?epTicket=LOG"
          customStyle="ml-1"
        />
        .
      </p>
    </main>
  );
};
