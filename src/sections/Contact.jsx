import React from "react";

import treeImg from "../assets/images/tree.png";

export const Contact = () => {
  return (
    <div className="relative h-[70em]">
      <div className="absolute top-[28rem] left-[48%] w-[40rem] flex flex-col z-10">
        <div className="text-3xl font-medium leading-[5rem] mb-12">
          Would you work with me? <br />
          Feel free to contact me : )
        </div>
        <div className="text-2xl mb-6">Mobile: +82 10 8636 0076</div>
        <div className="text-2xl">
          Email: &nbsp;
          <a
            href="mailto:mearak43@gmail.com?subject=Contact from"
            className="text-green-600 no-underline"
          >
            mearak43@gmail.com
          </a>
        </div>
      </div>
      <img
        src={treeImg}
        alt="Background Tree"
        className="absolute bottom-0 left-[15%] w-[32rem]"
      />
    </div>
  );
};
