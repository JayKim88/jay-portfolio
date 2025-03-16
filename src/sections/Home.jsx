import React from "react";

import Profile from "../assets/images/profile.png";

export const Home = () => {
  return (
    <main className="home flex h-[1000px]">
      <div className="w-1/3 flex justify-center items-center pl-20">
        <img src={Profile} alt="Profile" className="w-72 h-72" />
      </div>
      <div className="w-2/3 flex flex-col justify-evenly">
        <div className="text-2xl font-semibold">
          안녕하세요,
          <br /> 저는 디자인을 사랑하는 개발자
          <br /> 김용재 입니다. 여기는 내용을 좀 더 생각해보자.
        </div>
        <div className="text-lg text-gray-500">
          인터랙티브하고 직관적인 웹 디자인을 통해
          <br /> 사용자의 웹 경험에 기여하고 싶습니다.
        </div>
      </div>
    </main>
  );
};
