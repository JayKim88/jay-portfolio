import React from "react";
import { Important } from "../components/Important";
import { TransDescription } from "../components/TransDescription";

export const studies = [
  {
    type: "Clone",
    period: "Mar 2025",
    image:
      "https://firebasestorage.googleapis.com/v0/b/jay-portfolio-487aa.appspot.com/o/uber.png?alt=media&token=284fb2c9-8dd7-4071-845c-45b700d14f31",
    title: "Uber Mobile app",
    position: "Front End",
    paragraph: (
      <TransDescription>
        {(isKo) => (
          <>
            {isKo
              ? "승객과 기사를 연결하는 온디맨드 교통 및 배송 서비스를 제공하는 라이드헤일링 앱을 구축했습니다. "
              : "Built a ride-hailing app that connects passengers with drivers for on-demand transportation and delivery services."}
            <Important
              content={isKo ? "React Native 와" : " Learned React Native"}
            />
            {isKo ? " " : " with "}
            <Important content={isKo ? "동적 라우팅" : "dynamic routing"} />
            {isKo
              ? "을 학습하기 위해 React Navigation을 사용했고, GCP API를 활용하여 지도 기반 애플리케이션을 구축, 실시간 위치 추적 및 내비게이션 기능으로 사용자 경험을 향상시키는 방법을 배웠습니다."
              : " and used GCP APIs to build a map-based application, enhancing the user experience with real-time location tracking and navigation features."}
          </>
        )}
      </TransDescription>
    ),
    stacks: [
      "React Native",
      "Redux",
      "GCP APIs",
      "React Navigation",
      "Tailwind RN Classnames Library",
    ],
    refs: [
      {
        type: "github",
        url: "https://github.com/JayKim88/uber-clone",
      },
    ],
  },
  {
    type: "Clone",
    period: "Feb 2025",
    image:
      "https://firebasestorage.googleapis.com/v0/b/jay-portfolio-487aa.appspot.com/o/deliveroo.png?alt=media&token=752e4e9d-1571-4a4b-9b3b-377019b4b589",
    title: "Deliveroo Mobile app",
    position: "Full Stack",
    paragraph: (
      <TransDescription>
        {(isKo) => (
          <>
            {isKo
              ? "React Native와 React Navigation을 사용한 동적 라우팅 학습을 위해 음식 배달 및 쇼핑 앱을 구축했습니다."
              : "Built a food delivery and shopping app to learn React Native and React Navigation for dynamic routing."}
            {isKo ? " " : " Gained experience with "}
            <Important
              content={
                isKo
                  ? "TailwindCSS를 활용한 모바일 스타일링"
                  : "mobile styling using TailwindCSS"
              }
            />
            {isKo
              ? "을 경험하고, SanityCMS를 활용해 콘텐츠 관리 및 앱 내 동적 콘텐츠 업데이트하는 방법 등의 기술을 학습했습니다."
              : " and explored content management with SanityCMS, integrating it into the app for dynamic content updates."}
          </>
        )}
      </TransDescription>
    ),
    stacks: [
      "React Native",
      "Redux",
      "NativeWind",
      "SanityCMS",
      "React Navigation",
    ],
    refs: [
      {
        type: "github",
        url: "https://github.com/JayKim88/deliveroo-clone",
      },
    ],
  },
  {
    type: "Clone",
    period: "Feb 2025",
    image:
      "https://firebasestorage.googleapis.com/v0/b/jay-portfolio-487aa.appspot.com/o/aora.png?alt=media&token=41edff34-ded0-4928-9bcb-579c5fdac39a",
    title: "Aora Mobile app",
    position: "Full Stack",
    paragraph: (
      <TransDescription>
        {(isKo) => (
          <>
            {isKo
              ? "React Native를 사용해 "
              : "Built a video-sharing app using React Native with "}
            <Important
              content={
                isKo
                  ? "Expo Router 및 파일 기반 라우팅"
                  : "Expo Router and file-based routing"
              }
            />
            {isKo
              ? "을 적용하여 동영상 데이터를 처리하고, "
              : ". Learned to handle video data, styled the app with "}
            <Important
              content={isKo ? "모바일 TailwindCSS" : "Mobile TailwindCSS"}
            />
            {isKo
              ? " 로 앱을 스타일링했으며, Appwrite 를 이용해 백엔드 서버를 구현하여 사용자 및 데이터를 관리하는 방법을 경험했습니다."
              : ", and gained experience implementing a backend server with Appwrite for user and data management."}
          </>
        )}
      </TransDescription>
    ),
    stacks: ["React Native", "NativeWind", "Appwrite", "Expo router"],
    refs: [
      {
        type: "github",
        url: "https://github.com/JayKim88/aora",
      },
    ],
  },
];