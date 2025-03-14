import React from "react";
import Github from "../assets/images/sns/github.svg?react";
import LinkedIn from "../assets/images/sns/linkedIn.svg?react";
import Instagram from "../assets/images/sns/instagram.svg?react";
import Tistory from "../assets/images/sns/tistory.svg?react";

const moveToTargetSection = (e) => {
  const title = e.target.innerText.toLowerCase();
  const targetSection = document.getElementsByClassName(title)[0];

  if (targetSection) {
    const top = targetSection.offsetTop - 70;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

export const Header = () => {
  return (
    <header className="sticky top-0 left-0 w-1/2 max-w-[600px] h-screen max-h-screen bg-[#175754] flex flex-col justify-between box-border py-24 px-0">
      <section className="flex flex-col gap-16">
        <section>
          <h1
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-4xl font-medium cursor-pointer"
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
          <NavItem title="Skills" />
          <NavItem title="Experiences" />
          <NavItem title="Projects" />
          <NavItem title="Educations" />
          <NavItem title="Studies" />
        </ul>
      </section>
      <section>
        <a
          href="https://github.com/JayKim88"
          target="_blank"
          className="inline-block"
        >
          <Github className="w-12 h-12 fill-white" />
        </a>
        <a
          href="https://www.instagram.com/jay_kim_diary/"
          target="_blank"
          className="inline-block"
        >
          <Instagram className="w-12 h-12 fill-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/yongjae-jay-kim/"
          target="_blank"
          className="inline-block"
        >
          <LinkedIn className="w-12 h-12 fill-white rounded-xl" />
        </a>
        <a
          href="https://nomadkim880901.tistory.com/"
          target="_blank"
          className="inline-block"
        >
          <Tistory className="w-12 h-12 fill-white" />
        </a>
      </section>
    </header>
  );
};

const NavItem = ({ title }) => (
  <li className="cursor-pointer text-xl flex justify-start items-start">
    <div
      onClick={moveToTargetSection}
      className="text-base font-medium cursor-pointer"
    >
      {title}
    </div>
  </li>
);
