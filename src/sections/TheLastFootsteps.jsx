import React from "react";

import { BoldBtn } from "../components/BoldBtn";
import treeImg from "../assets/images/tree.webp";
import { TransDescription } from "../constants/data";

export const TheLastFootsteps = () => (
  <section className="relative mb-[160px] flex flex-col gap-y-1 text-base sm:text-lg">
    <TransDescription>
      {(isKo) => (
        <>
          <div>
            {isKo ? "" : "At the end of"}
            <BoldBtn
              title={
                isKo ? "첫 번째 포트폴리오(클릭)" : "my first portfolio (click)"
              }
              customStyle={isKo ? "mx-1" : "ml-1"}
              fontWeight="medium"
              link="https://jay-portfolio-487aa.web.app/"
              refName="Connect to deployed site"
              refNameStyle="group-hover/ref:-translate-y-7"
            />
            {isKo
              ? "의 마지막에 나무 한 그루를 보셨을 겁니다."
              : ", you may have noticed a solitary tree."}
          </div>
          <div className="mt-2">
            {isKo
              ? "처음에 저는 그와 같았습니다—혼자 서 있는 나무 🌳 처럼요."
              : "In the beginning, I was just that—one tree 🌳, standing alone."}
          </div>
          <div>
            {isKo
              ? "하지만 소프트웨어 엔지니어로서의 역량을 발전시키면서"
              : "But as I’ve cultivated my craft as a software engineer,"}
          </div>
          <div className="font-medium">
            {isKo
              ? "제 커리어와 인생을 점점 성장하는 숲으로 바라보게 되었습니다."
              : "I’ve come to see both my career and life as an ever-growing forest,"}
          </div>
          <div>
            {isKo
              ? "각 경험은 새로운 가지이고, 각 도전은 뿌리를 더 깊게 내립니다."
              : "Each experience a new branch, each challenge a deepening root."}
          </div>
          <div className="mt-6 font-bold text-lg sm:text-xl">
            {isKo
              ? "제 숲을 산책하며 즐거운 시간을 보내셨길 바랍니다 ᨒ ོ."
              : "Hope you found joy in wandering through my forest ᨒ ོ."}
          </div>
        </>
      )}
    </TransDescription>
  </section>
);
