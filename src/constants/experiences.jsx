import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { achievements } from "./achievements";
import { Important } from "../components/Important";
import { TransDescription } from "../components/TransDescription";
import Eye from "../assets/images/eye.svg?react";
import EyeSlash from "../assets/images/eye-slash.svg?react";

const viewBtnStyle = "fill-black w-6 h-6";

const Bold9Contribution = () => {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const ulRefs = useRef([]);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  const isKo = i18n.language === "ko";

  const handleOpen = () => {
    const experiencePosition =
      document.getElementsByClassName("experiences")[0]?.offsetTop ?? 0;

    setOpen((prev) => !prev);

    open &&
      requestAnimationFrame(() => {
        const timeoutId = setTimeout(() => {
          window.scrollTo({
            top: experiencePosition - 100,
            behavior: "smooth",
          });
        }, 1000);

        return () => clearTimeout(timeoutId);
      });
  };

  const getUlHeight = (index) => {
    if (!ulRefs.current[index]) return "0px";
    return open ? `${ulRefs.current[index].scrollHeight}px` : "0px";
  };

  useEffect(() => {
    setOpen(false);
  }, [isKo, isMobileOrTablet]);

  useEffect(() => {
    const updateSizes = () => {
      const isMobileOrTablet = window.innerWidth < 1024;
      setIsMobileOrTablet(isMobileOrTablet);
    };

    window.addEventListener("resize", updateSizes);
    updateSizes();

    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  return (
    <div className="mx-auto mt-2 mb-4 rounded-xl relative">
      <h2 className="text-[16px] font-bold mb-6 mt-8 text-main">
        {t("Key Achievements & Contributions")}
      </h2>
      <ul className={`flex flex-col ${open ? "gap-y-10" : ""}`}>
        {achievements.map((achievement, index) => (
          <li key={index}>
            <h3 className="text-main text-[14.6px] font-semibold flex items-center mb-2">
              {`${index + 1}. ${t(achievement.title)}`}
            </h3>
            <ul
              ref={(el) => (ulRefs.current[index] = el)}
              className={`pl-6 gap-y-0.5 flex flex-col transition-all duration-700 
                ease-in-out overflow-hidden ${
                  open ? "opacity-100" : "opacity-0"
                }`}
              style={{ height: getUlHeight(index) }}
            >
              {achievement.points.map((point, i) => (
                <li key={i} className="marker:mr-1 list-disc">
                  {typeof point === "string" ? t(point) : point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <button
        className={`absolute px-2 py-1 rounded-2xl font-medium flex 
          justify-center items-center gap-x-1 min-w-[124px]
          ${open ? "-bottom-8" : "-bottom-6"} 
          text-black cursor-pointer transition-transform duration-300
          bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500
          bg-[length:200%_200%] animate-gradientX
        `}
        style={{
          right: "50%",
          transform: "translateX(50%)",
        }}
        onClick={handleOpen}
      >
        {open ? (
          <>
            <EyeSlash className={viewBtnStyle} />
            <span>{t("Hide Details")}</span>
          </>
        ) : (
          <>
            <Eye className={viewBtnStyle} />
            <span>{t("View Details")}</span>
          </>
        )}
      </button>
    </div>
  );
};

export const experiences = [
  {
    type: null,
    period: "Jun 2021 - Jun 2025",
    title: "Frontend Engineer",
    company: "Bold9, Seoul",
    summary:
      "Bold9 is e-commerce fulfilment company specialising in end-to-end logistics, including inventory management, multi-temperature storage, and international shipping",
    paragraph: <Bold9Contribution />,
    stacks: [
      "Javascript",
      "Typescript",
      "HTML5 & CSS3",
      "React",
      "Next JS",
      "GraphQL",
      "Docker",
      "Vite",
      "Vitest",
      "GCP",
      "Firebase",
      "MUI",
    ],
  },
  {
    type: null,
    period: "Jan 2018 - Feb 2020",
    title: "Overseas Sales",
    company: "DRGEM, Gyeonggi-do",
    summary:
      "DRGEM is manufacturer of advanced digital X-ray systems for global medical imaging solutions",
    points: [
      <TransDescription>
        {(isKo) => (
          <>
            {isKo
              ? "아시아, 중동, 아프리카 지역의 후지필름 지사들과 긴밀한 관계를 구축하고 "
              : "Built strong relationships with FujiFilm branches across Asia, the Middle East, and Africa, offering "}
            <Important content={isKo ? "기술 지원" : "technical support"} />
            {isKo ? "을 제공하며 " : " and fostering "}
            <Important
              content={isKo ? "효과적인 협업" : "effective collaboration"}
            />
            {isKo
              ? "을 통해 주요 파트너로서 협력했습니다."
              : " as key partners."}
          </>
        )}
      </TransDescription>,
      "Collaborated with R&D, quality management, and legal teams to resolve technical issues, revise OEM contracts, and support product development.",
      "Gathered market insights and drove product sales strategies by attending global medical exhibitions (RSNA, ECR, ARAB HEALTH).",
      <TransDescription>
        {(isKo) => (
          <>
            {isKo
              ? "현재의 사용자 중심 소프트웨어 솔루션 구축에 도움이 되는 "
              : "Developed "}
            <Important
              content={
                isKo
                  ? "문제 해결 및 기술 커뮤니케이션 역량"
                  : "problem-solving and technical communication skills"
              }
            />
            {isKo
              ? "을 발전시켰습니다."
              : ", now applied to building user-centric software solutions."}
          </>
        )}
      </TransDescription>,
    ],
  },
];