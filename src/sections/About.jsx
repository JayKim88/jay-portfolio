import React from "react";

import { Introduction } from "../components/Introduction";
import { PairReview } from "../components/PairReview";
import { Title } from "../components/Title";

export const About = ({ onClick }) => {
  return (
    <section className="main about">
      <Title value="About" />
      <div className="section">
        <div className="section-main">
          <Introduction />
          <PairReview />
        </div>
      </div>
    </section>
  );
};
