import React from "react";
import { Carousel } from "./Carousel";

export const PairReview = () => {
  return (
    <div className="flex mb-12">
      <div className="text-2xl font-bold">Pair Review</div>
      <div className="flex flex-col flex-wrap">
        <div className="text-lg leading-relaxed">
          코드스테이츠 페어분들께 받은 리뷰입니다.
          <br />
          <b>원활한 커뮤니케이션</b>, <b>주도적으로 해결하려는 자세</b>, 그리고{" "}
          <b>문제 해결 능력</b>
          <br />을 긍정적으로 평가해주셨습니다.
        </div>
        <Carousel />
      </div>
    </div>
  );
};
