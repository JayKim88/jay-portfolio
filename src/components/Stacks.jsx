import React from "react";

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
        {data.map(({ name, img }) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center w-24 h-24 
                       border border-white rounded-sm gap-2 p-1"
          >
            <img src={img} alt={name} className="w-12 h-12" />
            <span className="text-xs">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
