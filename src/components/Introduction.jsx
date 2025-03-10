import React from "react";

export const Introduction = () => {
  return (
    <div className="flex mb-12">
      <div className="text-2xl font-bold">Introduction</div>
      <div className="flex flex-col">
        <div className="text-xl font-bold mt-2 mb-8">
          협업이 즐거운 프론트엔드 개발자
        </div>
        <div className="text-lg leading-relaxed">
          저는 React / Typescript 로 웹 개발이 가능한 프론트엔드 개발자 김용재
          입니다. <br /> 팀프로젝트 경험으로 기획, 의견조율, 문서작성, 협업에
          자신있습니다. <br /> Node.js 와 mySQL 로 서버와 데이터베이스를
          구현했던 경험이 있습니다. <br />
          인터랙티브한 웹 디자인을 통한 유저 경험 개선에 기여하고 싶습니다.
        </div>
      </div>
    </div>
  );
};
