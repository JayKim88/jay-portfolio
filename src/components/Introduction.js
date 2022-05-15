import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";

function Introduction() {
  return (
    <MainItem>
      <ItemTitle>Introduction</ItemTitle>
      <IntroContents>
        <ContentsHeader>협업이 즐거운 프론트엔드 개발자</ContentsHeader>
        <ContentsBody>
          저는 React / Typescript 로 웹 개발이 가능한 프론트엔드 개발자 김용재
          입니다. <br /> 팀프로젝트 경험으로 기획, 의견조율, 문서작성, 협업에
          자신있습니다. <br /> Node.js 와 mySQL 로 서버와 데이터베이스를
          구현했던 경험이 있습니다. <br />
          인터랙티브한 웹 디자인을 통한 유저 경험 개선에 기여하고 싶습니다.
        </ContentsBody>
      </IntroContents>
    </MainItem>
  );
}

const MainItem = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;
const ItemTitle = styled.div`
  ${theme("fontStyle.itemTitle")}
`;
const IntroContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;
const ContentsHeader = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
`;
const ContentsBody = styled.div`
  ${theme("fontStyle.contentsBody")}
`;

export default Introduction;
