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
    const isHome = title === "home";
    const top = targetSection.offsetTop - 120;

    window.scrollTo({ top: isHome ? 0 : top, behavior: "smooth" });
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

export const Navigation = ({ customStyle, style }) => {
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
    <ul className={`flex-col list-none p-0 ${customStyle} `} style={style}>
      <NavItem
        title="Home"
        isShowing={currentSection === "home"}
        customStyle="min-w-[44px] lg:hidden"
      />
      <NavItem
        title="Skills"
        isShowing={currentSection === "skills"}
        customStyle="min-w-[44px]"
      />
      <NavItem
        title="Experiences"
        isShowing={currentSection === "experiences"}
        customStyle="min-w-[100px]"
      />
      <NavItem
        title="Projects"
        isShowing={currentSection === "projects"}
        customStyle="min-w-[70px]"
      />
      <NavItem
        title="Educations"
        isShowing={currentSection === "educations"}
        customStyle="min-w-[90px]"
      />
      <NavItem
        title="Studies"
        isShowing={currentSection === "studies"}
        customStyle="min-w-[62px]"
      />
    </ul>
  );
};

export const Header = () => {
  const showNavigaion = window.innerWidth >= 1024;

  return (
    <header
      className="relative lg:sticky top-0 left-0 w-full lg:max-w-[500px] h-[500px] lg:h-screen 
    lg:max-h-screen flex flex-col justify-between box-border pt-24 lg:py-24 px-0"
    >
      <section className="flex flex-col gap-16">
        <section>
          <h1
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[60px] font-medium cursor-pointer leading-[60px]"
          >
            Yongjae Kim
          </h1>
          <h2 className="text-lg mt-8 mb-0 font-bold">Frontend Engineer</h2>
          <div className="w-[320px] mt-4 text-opacity1">
            Experienced software engineer dedicated to crafting user-centric
            services, prioritising seamless UX and intuitive interactions
          </div>
        </section>
        {showNavigaion && (
          <Navigation customStyle="lg:flex text-opacity1 items-start justify-start w-fit" />
        )}
      </section>
      <section className="flex gap-3">
        {references.map(({ url, icon, title }) => (
          <a href={url} target="_blank" className="inline-block relative">
            {icon}
            <span
              className={`absolute bottom-0 opacity-0 translate-y-0 
        font-bold text-xs transition-all duration-500 ease-in-out 
        pointer-events-none peer-hover:opacity-100 peer-hover:-translate-y-9 ${
          title === "Blog" && "left-1"
        }`}
            >
              {title}
            </span>
          </a>
        ))}
      </section>
    </header>
  );
};

const NavItem = ({ title, isShowing, customStyle }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(isShowing);
  }, [isShowing]);

  return (
    <li
      className={`relative cursor-pointer flex justify-start items-center ${customStyle}`}
    >
      <div
        className={`scale-x-[-0.9] scale-y-[0.9] transition-all duration-1000 opacity-0 w-0 
          -translate-x-8 -translate-y-8 ease-in-out animate-buzz
          ${
            show && "opacity-100 translate-x-0 -translate-y-[4px] animate-buzz"
          }`}
      >
        🐝
      </div>
      <div
        onClick={moveToTargetSection}
        className={`text-sm cursor-pointer transition-all duration-200 translate-x-0           
          before:mr-1 before:duration-200 hover:text-yellow-300
          ${show && "text-yellow-300 font-extrabold"}
        `}
      >
        {title}
      </div>
    </li>
  );
};

const iconStyle = "w-7 h-7 lg:w-8 lg:h-8 fill-white peer";

const references = [
  {
    icon: <Github className={iconStyle} />,
    url: "https://github.com/JayKim88",
    title: "Github",
  },
  {
    icon: <Instagram className={iconStyle} />,
    url: "https://www.instagram.com/jay_kim_diary/",
    title: "Instagram",
  },
  {
    icon: <LinkedIn className={`${iconStyle} rounded-xl`} />,
    url: "https://www.linkedin.com/in/yongjae-jay-kim/",
    title: "LinkedIn",
  },
  {
    icon: <Tistory className={iconStyle} />,
    url: "https://nomadkim880901.tistory.com/",
    title: "Blog",
  },
];
