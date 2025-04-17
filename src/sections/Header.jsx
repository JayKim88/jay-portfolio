import React, { useState, useEffect } from "react";
import { throttle } from "lodash";

import Github from "../assets/images/sns/github.svg?react";
import LinkedIn from "../assets/images/sns/linkedIn.svg?react";
import Instagram from "../assets/images/sns/instagram.svg?react";
import Tistory from "../assets/images/sns/tistory.svg?react";
import { useScrollY } from "../hooks/useScrollY";
import Copy from "../assets/images/copy.svg?react";
import Check from "../assets/images/check.svg?react";
import Pdf from "../assets/images/pdf.svg?react";

const moveToTargetSection = (e) => {
  const title = e.target.innerText.toLowerCase();
  const targetSection = document.getElementsByClassName(title)[0];

  if (targetSection) {
    const isHome = title === "home";
    const isEducation = title === "educations";

    const destination = isHome
      ? 0
      : isEducation
      ? window.scrollY +
        targetSection.getBoundingClientRect().top +
        targetSection.offsetHeight / 2 -
        window.innerHeight / 2 +
        20
      : targetSection.offsetTop - 120;

    window.scrollTo({ top: destination, behavior: "smooth" });
  }
};

export const Navigation = ({ isTop, customStyle, style }) => {
  const [currentSection, setCurrentSection] = useState("home");
  const [bright, setBright] = useState(false);
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

  useEffect(() => {
    if (!isTop) return;
    setBright(true);
    const timeoutId = setTimeout(() => {
      setBright(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [currentSection]);

  return (
    <ul
      className={`flex-col list-none p-0 ${customStyle} ${
        bright && "opacity-100"
      }`}
      style={style}
    >
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
  const [copied, setCopied] = useState(false);
  const showNavigaion = window.innerWidth >= 1024;
  const email = "yongjae.kim.dev@gmail.com";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200); // Reset copied state
  };

  return (
    <header
      className="relative lg:sticky top-0 left-0 w-full lg:max-w-[500px] h-fit lg:h-screen 
    lg:max-h-screen flex flex-col justify-between box-border pt-24 lg:py-24 px-0"
    >
      <section className="flex flex-col gap-16">
        <section>
          <h1
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[62px] font-medium cursor-pointer leading-[60px]"
          >
            Yongjae Kim
          </h1>
          <h2 className="text-lg mt-14 mb-0 font-bold pl-2 flex items-center flex-wrap gap-x-1">
            <div>Fullstack Engineer</div>
            <div className="text-base mt-1">(Frontend-Focused)</div>
          </h2>
          <section className="sm:min-w-[330px] mt-4 text-opacity1 flex flex-col gap-y-0.5 ml-2">
            <div>Dedicated to crafting intuitive & user-centric</div>
            <div>Experiences with clean & maintainable code.</div>
            <div>Passionate about building seamless UX</div>
            <div>From design to deployment.</div>
          </section>
        </section>
        {showNavigaion && (
          <Navigation customStyle="lg:flex text-opacity1 items-start justify-start w-fit" />
        )}
      </section>
      <section className="mt-10 flex flex-col gap-y-4">
        <div className="flex gap-3">
          {references.map(({ url, icon, title }) => (
            <a
              key={title}
              href={url}
              target="_blank"
              className="inline-block relative"
            >
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
        </div>
        <div className="flex flex-col gap-y-1 text-main text-sm font-semibold">
          <button
            onClick={handleCopy}
            className={`relative flex w-fit hover:cursor-pointer group ${
              copied && "pointer-events-none"
            }`}
          >
            <span className="flex justify-start gap-x-1">
              <span>Email: </span>
              <span>{email}</span>
            </span>
            {!copied && (
              <Copy className="absolute -right-[18px] w-[14px] lg:hidden group-hover:block" />
            )}
            {copied && <Check className="absolute -right-5 w-4" />}
          </button>
          <div>Timezone: Korea Standard Time — GMT+9</div>
          <a
            href="https://drive.google.com/file/d/1FLX5D-oUW_qsD3zeufUIgUYzMp-fCsC7/view?usp=sharing"
            target="_blank"
            className=" text-main font-semibold flex gap-x-1 w-fit"
          >
            Download Resume
            <Pdf className="w-4 fill-main" />
          </a>
        </div>
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
