import React from "react";

import { Stacks } from "../components/Stacks";
import { Title } from "../components/Title";

export const Skills = () => {
  return (
    <main className="skills bg-white p-8">
      <section className="flex justify-center">
        <div className="w-full max-w-4xl">
          <Stacks />
        </div>
      </section>
    </main>
  );
};
