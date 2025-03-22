import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { both, client, server } from "../constants/stacks";

export const Stacks = () => {
  return (
    <div className="flex flex-wrap max-w-[600px] gap-y-8">
      <StacksElements title="Client" data={client} />
      <StacksElements title="Server" data={server} />
      <StacksElements title="Both" data={both} />
    </div>
  );
};

const StacksElements = ({ title, data }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-start text-2xl">{title}</div>
      <div className="flex flex-wrap gap-4">
        {data.map(({ name, img, usage }) => (
          <div className="w-24 h-24 group">
            <div
              className="relative w-full h-full transition-transform transform-gpu
            duration-500 transform-3d group-hover:rotate-y-180"
            >
              <div
                key={name}
                className={`flex flex-col items-center justify-center gap-2 p-1 ${commonStackStyle}`}
              >
                <img src={img} alt={name} className="w-12 h-12" />
                <span className="text-xs">{name}</span>
              </div>
              <div
                className={`rotate-y-180 flex items-center justify-center flex-col ${commonStackStyle}`}
              >
                <div className="absolute top-1 text-xs font-bold tracking-tighter">
                  Usage
                </div>
                <div className="w-14 h-14 flex items-center justify-center mt-4">
                  <CircularProgressbar
                    value={usage}
                    text={`${usage}%`}
                    styles={buildStyles({
                      outerWidth: 20,
                      textSize: "20px",
                      pathColor: "#fff",
                      textColor: "#fff",
                      trailColor: "#090000",
                    })}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const commonStackStyle = `absolute w-full h-full border border-white rounded-sm backface-hidden`;
