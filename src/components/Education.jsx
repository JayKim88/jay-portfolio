import React from "react";

export const Education = () => {
  return (
    <div className="flex flex-col mx-4 mb-12">
      <div className="text-lg font-semibold mb-8">Education</div>
      <div className="flex flex-col mt-4">
        <div className="flex mb-4">
          <div className="text-sm pt-1">2020.10 - 2020.03</div>
          <div className="mb-4 ml-4">
            <div className="text-xl leading-8 mb-4">
              코드스테이츠(Code States)
              <br />
              SW Engineer BootCamp Immersive 25th
              <br />
              [커리큘럼] Javascript 기반 웹개발 풀스택 과정
            </div>
            <div>
              <div className="flex mb-2">
                <div className="w-32">
                  <span className="text-lg font-medium">프론트엔드</span>
                </div>
                <div className="text-base flex items-center">
                  HTML/CSS/JS 기초 학습 후 React와 Redux를 활용하여 SPA 구현
                </div>
              </div>
              <div className="flex mb-2">
                <div className="w-32">
                  <span className="text-lg font-medium">백엔드</span>
                </div>
                <div className="text-base flex items-center">
                  Node.js, Express 를 이용한 RESTful API 설계, SQL, ORM, 인증
                  구현
                </div>
              </div>
              <div className="flex mb-2">
                <div className="w-32">
                  <span className="text-lg font-medium">배포</span>
                </div>
                <div className="text-base flex items-center">
                  AWS (EC2, S3, RDS, Route53 등)를 사용하여 프론트엔드/백엔드
                  배포
                </div>
              </div>
              <div className="flex mb-2">
                <div className="w-32">
                  <span className="text-lg font-medium">협업</span>
                </div>
                <div className="text-base flex items-center">
                  페어프로그래밍과 프로젝트를 통해 Github 협업 개발 방식 경험
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mb-4">
          <div className="text-sm pt-1">2020.03 - 2018.02</div>
          <div className="mb-4 ml-4">
            <div className="text-xl leading-8 mb-4">
              숭실대학교
              <br />
              경제학 전공(3.8/4.5)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
