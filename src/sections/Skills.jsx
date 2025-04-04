import React from "react";

import { Stacks } from "../components/Stacks";
import { Title } from "../components/Title";

export const Skills = () => {
  return (
    <main className="skills">
      <Title value="Skills" />
      <section className="flex justify-center">
        <div className="w-full max-w-4xl">
          <Stacks />
        </div>
      </section>
    </main>
  );
};
