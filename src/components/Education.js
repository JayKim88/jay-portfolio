import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";

function Education() {
  return (
    <MainItem>
      <ItemTitle>Education</ItemTitle>
      <EduContents>
        <ContentsBox>
          <Period>2020.10 - 2020.03</Period>
          <Contents>
            <ContentsHeader>
              코드스테이츠(Code States)
              <br />
              SW Engineer BootCamp Immersive 25th
              <br />
              [커리큘럼] Javascript 기반 웹개발 풀스택 과정
            </ContentsHeader>
            <ContentsBody>
              <EduItem>
                <ItemName>
                  <span>프론트엔드</span>
                </ItemName>
                <ItemBody>
                  HTML/CSS/JS 기초 학습 후 React와 Redux를 활용하여 SPA 구현
                </ItemBody>
              </EduItem>
              <EduItem>
                <ItemName>
                  <span>백엔드</span>
                </ItemName>
                <ItemBody>
                  Node.js, Express 를 이용한 RESTful API 설계, SQL, ORM, 인증
                  구현
                </ItemBody>
              </EduItem>
              <EduItem>
                <ItemName>
                  <span>배포</span>
                </ItemName>
                <ItemBody>
                  AWS (EC2, S3, RDS, Route53 등)를 사용하여 프론트엔드/백엔드
                  배포
                </ItemBody>
              </EduItem>
              <EduItem>
                <ItemName>
                  <span>협업</span>
                </ItemName>
                <ItemBody>
                  페어프로그래밍과 프로젝트를 통해 Github 협업 개발 방식 경험
                </ItemBody>
              </EduItem>
            </ContentsBody>
          </Contents>
        </ContentsBox>
        <ContentsBox>
          <Period>2020.03 - 2018.02</Period>
          <Contents>
            <ContentsHeader>
              숭실대학교
              <br />
              경제학 전공(3.8/4.5)
            </ContentsHeader>
          </Contents>
        </ContentsBox>
      </EduContents>
    </MainItem>
  );
}

const MainItem = styled.div`
  /* border: 3px solid red; */
  display: flex;
  flex-direction: column;
  margin: 0 1rem 0rem 1rem;
`;

const ItemTitle = styled.div`
  /* border: 3px solid lightgreen; */
  ${theme("fontStyle.itemTitle")}
  width: 95%;
  padding-left: 0;
  margin-bottom: 1rem;
`;

const EduContents = styled.div`
  /* border: 3px solid lightgreen; */
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const ContentsBox = styled.div`
  /* border: 3px solid yellow; */
  display: flex;
  margin-bottom: 1rem;
`;

const Period = styled.div`
  /* border: 3px solid green; */
  ${theme("fontStyle.periodStyle")}
  padding-top: 0.4rem;
`;

const Contents = styled.div`
  /* border: 3px solid green; */
  width: 100%;
`;

const ContentsHeader = styled.div`
  /* border: 3px solid red; */
  line-height: 3rem;
  font-size: 1.5rem;
`;

const ContentsBody = styled.div`
  /* border: 3px solid red; */
  width: 100%;
  /* margin-top: 1rem; */
`;

const EduItem = styled.div`
  /* border: 3px solid orange; */
  display: flex;
`;

const ItemName = styled.div`
  /* border: 3px solid black; */
  width: 8rem;
  span {
    ${theme("fontStyle.stackStyle")}
    width: fit-content;
    /* height: 2rem; */
    font-size: 1.2rem;
    margin-left: 0;
  }
`;

const ItemBody = styled.div`
  /* border: 3px solid black; */
  ${theme("fontStyle.contentsBody")}
  display: flex;
  align-items: center;
`;

export default Education;
