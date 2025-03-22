import React from "react";

export const Highlight = ({ isImportant, content, customStyle }) => (
  <span
    className={`text-base relative ${customStyle} ${
      isImportant ? "font-bold" : "font-normal"
    }`}
  >
    <span className={highlightStyle}></span>
    {content}
  </span>
);

const highlightStyle = `
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
