import React, { useState, useEffect } from "react";
import { throttle } from "lodash";

import Github from "../assets/images/sns/github.svg?react";
import LinkedIn from "../assets/images/sns/linkedIn.svg?react";
import Instagram from "../assets/images/sns/instagram.svg?react";
import Tistory from "../assets/images/sns/tistory.svg?react";

const moveToTargetSection = (e) => {
  const title = e.target.innerText.toLowerCase();
  const targetSection = document.getElementsByClassName(title)[0];

  if (targetSection) {
    const top = targetSection.offsetTop - 120;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

const useScrollY = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollY(window.scrollY + window.innerHeight / 2);
    }, 1000);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
};

export const Header = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const scrollY = useScrollY();

  const positions = {
    skills: document.getElementsByClassName("skills")[0]?.offsetTop ?? 0,
    experiences:
      document.getElementsByClassName("experiences")[0]?.offsetTop ?? 0,
    projects: document.getElementsByClassName("projects")[0]?.offsetTop ?? 0,
    educations:
      document.getElementsByClassName("educations")[0]?.offsetTop ?? 0,
    studies: document.getElementsByClassName("studies")[0]?.offsetTop ?? 0,
  };

  useEffect(() => {
    const getSectionNow = () => {
      if (scrollY < positions.skills) return "home";
      if (scrollY < positions.experiences) return "skills";
      if (scrollY < positions.projects) return "experiences";
      if (scrollY < positions.educations) return "projects";
      if (scrollY < positions.studies) return "educations";
      return "studies";
    };

    setCurrentSection(getSectionNow());
  }, [scrollY, positions]);

  return (
    <header
      className="sticky top-0 left-0 w-1/2 max-w-[500px] h-screen 
    max-h-screen flex flex-col justify-between box-border py-24 px-0"
    >
      <section className="flex flex-col gap-16">
        <section>
          <h1
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[60px] font-medium cursor-pointer"
          >
            Yongjae Kim
          </h1>
          <h2 className="text-lg mt-3 mb-0">Frontend Software Engineer</h2>
          <div className="w-[320px] mt-4">
            Experienced software engineer dedicated to crafting user-centric
            services, prioritising seamless UX and intuitive interactions
          </div>
        </section>
        <ul className="relative flex flex-col items-start justify-start list-none p-0 w-fit">
          <NavItem title="Skills" isShowing={currentSection === "skills"} />
          <NavItem
            title="Experiences"
            isShowing={currentSection === "experiences"}
          />
          <NavItem title="Projects" isShowing={currentSection === "projects"} />
          <NavItem
            title="Educations"
            isShowing={currentSection === "educations"}
          />
          <NavItem title="Studies" isShowing={currentSection === "studies"} />
        </ul>
      </section>
      <section className="flex gap-2">
        {references.map((ref) => (
          <a href={ref.url} target="_blank" className="inline-block">
            {ref.icon}
          </a>
        ))}
      </section>
    </header>
  );
};

const NavItem = ({ title, isShowing }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(isShowing);
  }, [isShowing]);

  return (
    <li className="cursor-pointer text-xl flex justify-start items-start">
      <div
        onClick={moveToTargetSection}
        className={`text-base cursor-pointer transition-all duration-200 translate-x-0 ${
          show && "text-yellow-300 translate-x-2 font-extrabold"
        }`}
      >
        {title}
      </div>
    </li>
  );
};

const iconStyle = "w-12 h-12 fill-white";

const references = [
  {
    icon: <Github className={iconStyle} />,
    url: "https://github.com/JayKim88",
  },
  {
    icon: <Instagram className={iconStyle} />,
    url: "https://www.instagram.com/jay_kim_diary/",
  },
  {
    icon: <LinkedIn className={`${iconStyle} rounded-xl`} />,
    url: "https://www.linkedin.com/in/yongjae-jay-kim/",
  },
  {
    icon: <Tistory className={iconStyle} />,
    url: "https://nomadkim880901.tistory.com/",
  },
];
