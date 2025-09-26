import React from "react";
import { useNavigate } from "react-router-dom";
import { Tags } from "../components/Tags";
import { useTranslation } from "react-i18next";

import Figma from "../assets/images/figma.svg?react";
import Deploy from "../assets/images/rocket.svg?react";
import Plan from "../assets/images/pen-ruler.svg?react";
import Github from "../assets/images/sns/github.svg?react";
import Eye from "../assets/images/eye.svg?react";
import PointingHand from "../assets/images/pointinghand.svg?react";
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
  achievements,
  details,
  onHover,
  hoveredItem,
  onDetailClick,
  serviceType,
}) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isNotHovered = !!hoveredItem && hoveredItem !== title;
  const isDesktop = window.innerWidth >= 1024;
  const isKo = i18n.language === "ko";

  const handleDetailClick = (title) => {
    navigate(`/detail/${encodeURIComponent(title)}`);
  };

  return (
    <div
      key={title}
      className={`relative flex gap-x-6 transition-all delay-50 duration-200
      ease-in-out outline-2 outline-transparent rounded-2xl 
     group transform-gpu max-w-[660px] 
       p-4  ${details && "cursor-pointer"} 
       ${isNotHovered && "lg:opacity-50"}`}
      onMouseOver={() => isDesktop && onHover?.(title)}
      onMouseOut={() => isDesktop && onHover?.("")}
    >
      <section className="hidden md:flex flex-col w-[124px] justify-between pt-1">
        {image ? (
          <img src={image} className="rounded-3xl" />
        ) : (
          <span className="text-xs text-opacity2 font-medium">{t(period)}</span>
        )}
      </section>
      <section className="flex-1 flex flex-col gap-y-4">
        <section className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-x-1">
            {type && (
              <span
                className="px-2 py-1 bg-yellow-300 rounded-full text-xs 
              font-medium text-black mr-0.5"
              >
                {t(type)}
              </span>
            )}
            <Highlight content={title} isImportant />
            {serviceType && (
              <span className="text-sm font-medium pt-0.5">
                · {t(serviceType)}
              </span>
            )}
            {(company || position) && (
              <span className="text-sm font-medium pt-0.5">
                · {t(company || position)}
              </span>
            )}
          </div>
          {achievements && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDetailClick(title);
              }}
              className={`group/details relative px-2 py-1 rounded-2xl font-medium flex 
                justify-center items-center gap-x-1 text-sm
                text-black cursor-pointer transition-transform duration-300
                bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500
                bg-[length:200%_200%] animate-gradientX
              `}
              title={t("View Details")}
            >
              <Eye className="w-4 h-4 fill-current" />
              <span className="hidden sm:inline">{t("Details")}</span>
              <PointingHand
                className="group-hover/details:opacity-0 absolute w-16 hover:-top-2 animate-pointer
              hover:-right-1 h-16 fill-current -top-[1px] -right-3 transition-all duration-400"
              />
            </button>
          )}
        </section>
        {summary && (
          <div className={`text-[14.6px] leading-6 text-opacity1`}>
            {t(summary)}
          </div>
        )}
        <section className={`mt-1 mb-2 text-[14.6px] text-opacity1`}>
          {paragraph ? (
            <div className="leading-6">{paragraph}</div>
          ) : (
            <ul className="pl-6 gap-y-0.5 flex flex-col">
              {points.map((p, index) => (
                <li key={index} className="list-disc leading-6">
                  {typeof p === "string" ? t(p) : p}
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
                <div
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
                    {isKo
                      ? t(refName)
                      : refName[0].toUpperCase() + refName.slice(1)}
                  </span>
                </div>
              );
            })}
          </div>
        )}
        {stacks?.length && <Tags data={stacks} />}
      </section>
    </div>
  );
};
