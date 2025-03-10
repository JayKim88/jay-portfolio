import React from "react";
import { useFiretore } from "../firebase/useFirestore";

export const Studies = ({ onClick }) => {
  const studies = useFiretore("studies");

  return (
    <div className="flex flex-col mt-8 mx-4">
      <div className="text-2xl font-bold w-[95%] mb-4">Studies</div>
      <div
        className="grid grid-cols-3 gap-[100px] mx-auto mt-[50px] 
                      max-w-screen-xl 
                      md:grid-cols-2 
                      sm:grid-cols-1"
      >
        {studies.map((study) => (
          <div
            key={study.id}
            onClick={() => onClick(study)}
            className="border-2 border-black rounded-2xl w-80 h-80 flex flex-col 
                       justify-center items-center opacity-80 cursor-pointer 
                       hover:opacity-100 transition-opacity duration-200"
          >
            <div className="flex justify-center items-center pointer-events-none">
              <img
                src={study.thumbnail}
                alt="study"
                className="max-w-[90%] max-h-[90%] pointer-events-none"
              />
            </div>
            <div className="w-[80%] mt-4 pointer-events-none">
              {study.summary}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
