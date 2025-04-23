import React from "react";
import { Tags } from "../components/Tags";

import Figma from "../assets/images/figma.svg?react";
import Deploy from "../assets/images/rocket.svg?react";
import Plan from "../assets/images/pen-ruler.svg?react";
import Github from "../assets/images/sns/github.svg?react";
import { Highlight } from "./Highlight";

const iconStyle = `max-w-6 w-6 h-6 folder-open-8 fill-white`;

const icons = {
  github: <Github className={iconStyle} />,
  deploy: <Deploy className={iconStyle} />,
  note: <Plan className={iconStyle} />,
  figma: <Figma className={iconStyle} />,
};

export const Description = ({
  period,
  image,
  title,
  company,
  position,
  summary,
  points,
  stacks,
  refs,
  type,
  paragraph,
  details,
  onHover,
  hoveredItem,
}) => {
  const isNotHovered = !!hoveredItem && hoveredItem !== title;
  const isDesktop = window.innerWidth >= 1024;

  return (
    <li
      key={title}
      className={`relative flex gap-x-6 transition-all delay-50 duration-200
      ease-in-out outline-2 outline-transparent rounded-2xl hover:rounded-2xl 
       lg:hover:scale-x-108 lg:hover:scale-y-105 group transform-gpu max-w-[660px] 
       p-4 lg:hover:bg-[#273b3b] ${details && "cursor-pointer"} 
       ${isNotHovered && "lg:opacity-50"}`}
      onMouseOver={() => isDesktop && onHover?.(title)}
      onMouseOut={() => isDesktop && onHover?.("")}
    >
      <section className="hidden md:flex flex-col w-[124px] justify-between pt-1">
        {image ? (
          <img src={image} className="rounded-3xl" />
        ) : (
          <span className="text-xs text-opacity2 font-medium">{period}</span>
        )}
      </section>
      <section className="flex-1 flex flex-col gap-y-4">
        <section className="flex items-center justify-start gap-x-1">
          {type && (
            <span
              className="px-2 py-1 bg-yellow-300 rounded-full text-xs 
            font-medium text-black mr-0.5"
            >
              {type}
            </span>
          )}
          <Highlight content={title} isImportant />
          {(company || position) && (
            <span className="text-sm font-medium pt-0.5">
              · {company || position}
            </span>
          )}
        </section>
        {summary && (
          <div className={`text-[14.6px] leading-6 text-opacity1`}>
            {summary}
          </div>
        )}
        <section className={`mt-1 mb-2 text-[14.6px] text-opacity1`}>
          {paragraph ? (
            <div className="leading-6">{paragraph}</div>
          ) : (
            <ul className="pl-6 gap-y-0.5 flex flex-col">
              {points.map((p, index) => (
                <li key={index} className="list-disc leading-6">
                  {p}
                </li>
              ))}
            </ul>
          )}
        </section>
        {refs?.length && (
          <div className={`flex gap-x-3 mt-auto h-6 mb-2`}>
            {refs?.map((v, index) => {
              const refName = v.type === "note" ? v.title : v.type;

              return (
                <li
                  key={index}
                  className={`flex gap-x-1 items-center cursor-pointer relative group/ref`}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(v.url, "_blank");
                  }}
                >
                  {icons[v.type]}
                  <span
                    className={`absolute bottom-0 opacity-0 translate-y-0 font-bold whitespace-nowrap
                    text-xs transition-all duration-500 ease-in-out pointer-events-none 
                  group-hover/ref:opacity-100 group-hover/ref:-translate-y-7`}
                  >
                    {refName[0].toUpperCase() + refName.slice(1)}
                  </span>
                </li>
              );
            })}
          </div>
        )}
        {stacks?.length && <Tags data={stacks} />}
      </section>
    </li>
  );
};
