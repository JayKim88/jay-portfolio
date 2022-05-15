import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";
import Carousel from "../components/Carousel";

function PairReview() {
  return (
    <MainItem>
      <ItemTitle>Pair Review</ItemTitle>
      <IntroContents>
        <ContentsBody>
          코드스테이츠 페어분들께 받은 리뷰입니다.
          <br />
          <b>원활한 커뮤니케이션</b>,<b>주도적으로 해결하려는 자세</b>, 그리고{" "}
          <b>문제 해결 능력</b>
          <br />을 긍정적으로 평가해주셨습니다.
        </ContentsBody>
        <Carousel />
      </IntroContents>
    </MainItem>
  );
}
const MainItem = styled.div`
  display: flex;
  /* width: 80%; */
  margin-bottom: 3rem;
`;
const ItemTitle = styled.div`
  ${theme("fontStyle.itemTitle")}
`;
const IntroContents = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  width: 72%;
  flex-wrap: wrap;
`;
const ContentsBody = styled.div`
  ${theme("fontStyle.contentsBody")}
`;

export default PairReview;
