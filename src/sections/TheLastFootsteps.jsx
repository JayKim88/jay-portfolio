import React from "react";

import { BoldBtn } from "../components/BoldBtn";
import treeImg from "../assets/images/tree.png";

export const TheLastFootsteps = () => (
  <section className="relative mb-[160px] flex flex-col gap-y-1 text-lg">
    <div>
      At the end of
      <BoldBtn
        title="my first portfolio (click)"
        customStyle="ml-1"
        fontWeight="medium"
        link="https://jay-portfolio-487aa.web.app/"
        refName="Connect to deployed site"
        refNameStyle="group-hover/ref:-translate-y-7"
      />
      , you may have noticed a solitary tree.
    </div>
    <div className="mt-2">
      In the beginning, I was just that—one tree 🌳, standing alone.
    </div>
    <div>But as I’ve cultivated my craft as a software engineer,</div>
    <div className="font-medium">
      I’ve come to see both my career and life as an ever-growing forest,
    </div>
    <div>Each experience a new branch, each challenge a deepening root.</div>
    <div className="mt-6 font-bold text-xl">
      Hope you found joy in wandering through my forest ᨒ ོ.
    </div>
  </section>
);
