import React from "react";
import { TransDescription } from "../components/TransDescription";

export const education = [
  {
    period: "Mar 2022 - Aug 2024",
    title: "Bachelor of Computer Science",
    contents: (
      <TransDescription>
        {(isKo) => (
          <button
            className="hover:text-yellow-300 text-start cursor-pointer"
            onClick={() =>
              window.open(
                isKo
                  ? "https://www.knou.ac.kr/knou/191/subview.do?epTicket=LOG"
                  : "https://engknou.knou.ac.kr/engknou/5774/subview.do?epTicket=LOG",
                "_blank"
              )
            }
          >
            {isKo
              ? "한국방송통신대학교, 대한민국"
              : "Korea National Open University, South Korea"}
          </button>
        )}
      </TransDescription>
    ),
  },
  {
    period: "Oct 2020 - Mar 2021",
    title: "Full-stack course based on JavaScript",
    contents: (
      <TransDescription>
        {(isKo) => (
          <div className="flex flex-col gap-y-2">
            <div>
              {isKo
                ? "코드스테이츠(부트캠프), 대한민국"
                : "Codestates(Boot camp), South Korea"}
            </div>
            <ul className="[&>li]:list-disc pl-6 gap-y-0.5 flex flex-col">
              <li>
                {isKo
                  ? "프론트엔드는 React, 백엔드는 Node.js를 학습했습니다."
                  : "Learned React for the frontend and Node.js for the backend"}
              </li>
              <li>
                {isKo
                  ? "매일 알고리즘 문제 풀이를 진행했습니다."
                  : "Solved algorithm problems on daily basis"}
              </li>
              <li>
                {isKo
                  ? "지속적으로 과제를 진행했습니다."
                  : "Worked on assignments consistently"}
              </li>
              <li>
                {isKo
                  ? "페어 프로그래밍과 코드 리뷰에 참여했습니다."
                  : "Participated in pair programming and code reviews"}
              </li>
              <li>
                {isKo
                  ? "2개의 협업 프로젝트(Homemade, Royal Diary)를 진행했습니다."
                  : "Contributed to 2 collaborative projects: Homemade and Royal Diary"}
              </li>
            </ul>
          </div>
        )}
      </TransDescription>
    ),
  },
  {
    period: "Mar 2010 - Feb 2018",
    title: "Bachelor of Economics",
    contents: "Soongsil University, South Korea",
  },
];