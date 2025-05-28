import React from "react";
import { useTranslation } from "react-i18next";

export const Highlight = ({ isImportant, content, customStyle }) => {
  const { t } = useTranslation();
  const isMobileOrTablet = window.innerWidth < 1024;
  const isDeliveroo = content === "Deliveroo Mobile app";

  return (
    <span
      className={`text-base relative ${customStyle} ${
        isMobileOrTablet && isDeliveroo && "text-[15px]"
      } ${isImportant ? "font-bold" : "font-normal"}`}
    >
      <span
        className={`${
          isMobileOrTablet ? fixedHighlightStyle : dynamicHighlightStyle
        }`}
      ></span>
      {t(content)}
    </span>
  );
};

const fixedHighlightStyle = `
  absolute bottom-[0.3px] left-0 w-full
  h-[15%]
  bg-gradient-to-r 
  from-[rgba(255, 255, 0, 0.341)] 
  via-[rgba(255,255,0,0.7)] 
  to-yellow-300 
  blur-[0.2px]
  bg-[length:0%_100%] bg-left-bottom bg-no-repeat 
  bg-[length:100%_100%]
`;

const dynamicHighlightStyle = `
  absolute bottom-[0.3px] left-0 w-full
  h-[15%]
  transition-all duration-1000
  group-hover:bg-gradient-to-r 
  group-hover:from-[rgba(255, 255, 0, 0.341)] 
  group-hover:via-[rgba(255,255,0,0.7)] 
  group-hover:to-yellow-300 
  group-hover:blur-[0.2px]
  bg-[length:0%_100%] bg-left-bottom bg-no-repeat 
  group-hover:bg-[length:100%_100%]
   `;
