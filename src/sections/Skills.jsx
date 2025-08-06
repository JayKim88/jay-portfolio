import React from "react";

import { Stacks } from "../components/Stacks";
import { Title } from "../components/Title";
import { AnimatedSection } from "../components/AnimatedSection";

export const Skills = () => {
  return (
    <AnimatedSection className="skills" title="Skills" titleComponent={Title}>
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <Stacks />
        </div>
      </div>
    </AnimatedSection>
  );
};
