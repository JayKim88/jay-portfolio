import React from "react";
import { BoldBtn } from "../components/BoldBtn";
import { Important } from "../components/Important";
import { TransDescription } from "../components/TransDescription";
import MyStatsDashboard from "../assets/images/refs/my-stats-dashboard.webp";

export const projects = [
  {
    type: "Personal",
    period: "July - Aug 2025",
    title: "PolyLingo",
    position: "Full Stack",
    serviceType: "Mobile App",
    summary:
      "A real-time multi-language translation app (14 languages) with parallel translation, speech recognition, offline support, and subscription-based monetization",
    points: [
      <TransDescription>
        {(isKo) => (
          <>
            {isKo
              ? "Claude AI, Wiktionary API, MyMemory 백업 시스템을 활용한 "
              : "Built "}
            <Important
              content={
                isKo
                  ? "지능형 멀티 API 번역 파이프라인"
                  : "intelligent multi-API translation pipeline"
              }
            />
            {isKo
              ? "을 구축하여 14개 언어에서 24시간 캐싱과 함께 99% 이상의 가용성을 달성했습니다."
              : " with Claude AI, Wiktionary API, and MyMemory failover, achieving 99%+ availability with 24-hour caching across 14 languages."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "AsyncStorage와 Supabase 동기화를 결합한 " : "Designed "}
            <Important
              content={
                isKo
                  ? "하이브리드 오프라인 우선 아키텍처"
                  : "hybrid offline-first architecture"
              }
            />
            {isKo
              ? "를 설계하고, 경합 조건(race condition) 방지 및 사용자 시간대 기반의 일일 사용량 추적 기능을 구현했습니다."
              : " with AsyncStorage + Supabase sync, implementing race condition prevention and timezone-aware daily usage tracking."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo
              ? "앱 사용 중 구독 갱신을 실시간으로 감지하는 "
              : "Developed "}
            <Important
              content={
                isKo
                  ? "정교한 갱신 감지 로직"
                  : "sophisticated renewal detection"
              }
            />
            {isKo
              ? "를 구현하여 Apple IAP 자동 검증과 매끄러운 상태 전환을 지원합니다."
              : " handling expired subscriptions during active usage, with automatic Apple IAP validation and seamless state transitions."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "개별 재시도/취소 제어가 가능한 " : "Implemented "}
            <Important
              content={
                isKo ? "실시간 병렬 번역" : "real-time parallel translation"
              }
            />
            {isKo
              ? "과 순차적 결과 표시를 구현하여, 전체 완료를 기다리지 않고 완료된 번역부터 실시간으로 보여줍니다."
              : " with individual retry/cancel controls and progressive result display, showing first-arrived translations immediately without waiting for completion."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "React Native IAP와 Google Ads를 연동한 " : "Integrated "}
            <Important
              content={isKo ? "구독 기반 수익화" : "subscription monetization"}
            />
            {isKo
              ? "를 구현하여 무료 및 프리미엄 구독 서비스를 제공합니다."
              : " with React Native IAP and Google Ads, supporting Free and Premium tiers."}
          </>
        )}
      </TransDescription>,
    ],
    stacks: [
      "React Native",
      "Expo SDK",
      "TypeScript",
      "NativeWind",
      "Zustand",
      "Supabase",
      "Claude API",
      "React Native IAP",
      "Google Mobile Ads",
      "Sentry",
      "i18next",
    ],
    refs: [
      {
        type: "github",
        url: "https://github.com/JayKim88/polylingo",
      },
      {
        type: "deploy",
        url: "https://jay-global.notion.site/App-Store-Preview-273e5ccd65b180fe8a5cda70e13d8d21",
      },
    ],
  },
  {
    type: "Personal",
    period: "May - Sep 2024",
    title: "Build Your Body",
    position: "Full Stack",
    serviceType: "Web App",
    summary:
      "A personal home training service designed to help users customize and track their fitness journey",
    points: [
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "Google OAuth 인증을 위해 " : "Integrated NextAuth for "}
            <Important
              content={
                isKo ? "Google OAuth 인증" : "Google OAuth authentication"
              }
            />
            {isKo ? "을 통합하고, " : " and implemented "}
            <Important
              content={
                isKo ? "JWT 기반 세션 관리" : "JWT-based session management "
              }
            />
            {isKo
              ? "를 구현하여 안전한 로그인, 세션 지속성, 개인화 콘텐츠 접근을 보장했습니다."
              : "to ensure secure login, session persistence, and access to personalized content."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "확장 가능하고 최적화된 " : "Built scalable and optimized "}
            <BoldBtn
              title={isKo ? "MongoDB 기반 CRUD API" : "CRUD APIs using MongoDB"}
              link="https://github.com/JayKim88/build-your-body/tree/main/app/api"
              customStyle="mx-1"
              refName="Connect to Github Codes"
            />
            {isKo
              ? " 및 집계 파이프라인을 구축하여 포괄적인 피트니스 데이터를 관리하고, 시간대 인지 쿼리를 구현하며, Google Cloud Storage에 서명된 URL을 통해 안전한 이미지 업로드를 지원했습니다."
              : "and aggregation pipelines to manage comprehensive fitness data, implemented timezone-aware queries, and enabled secure image uploads via signed URLs to Google Cloud Storage."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "" : "Integrated "}
            <Important
              content={
                isKo
                  ? "Zustand를 클라이언트 사이드 상태 관리에 통합"
                  : "Zustand for client-side state management "
              }
            />
            {isKo
              ? "하여 세션 및 로컬 스토리지에 운동 장바구니와 사용자 진행 상황을 유지했으며, 프로그램 세부사항, 운동 시간, 완료 상태를 관리하는 모듈형 상태 관리 스토어를 설계했습니다."
              : "with session and local storage to persist exercise cart and user progress; designed modular stores to manage program details, workout duration, and completion status."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "" : "Designed a "}
            <BoldBtn
              title={isKo ? "프로그램 진행 페이지" : "program-process page"}
              link="https://github.com/JayKim88/build-your-body?tab=readme-ov-file#4-program-process-page"
              customStyle={isKo ? "mr-1" : "mx-1"}
              refName="Connect to Github Repo"
            />
            {isKo
              ? "를 설계하여 운동 세트 추적, 세트 수정, 다음 운동으로 자동 진행 기능을 적용했습니다."
              : "for tracking sets, modifying workouts, and auto-progressing to the next exercise."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "" : "Built an "}
            <BoldBtn
              title={isKo ? "인터랙티브 대시보드" : "interactive dashboard"}
              customStyle={isKo ? "mr-1" : "mx-1"}
              imageUrls={[MyStatsDashboard]}
            />
            {isKo
              ? "를 만들어 사용자의 주간/월간 운동 진행 상황을 실시간 차트로 확인할 수 있도록 했습니다."
              : "with real-time charts tracking user progress by week/month."}
          </>
        )}
      </TransDescription>,
    ],
    stacks: [
      "Typescript",
      "NextJS",
      "NextAuth",
      "React",
      "Zustand",
      "TailwindCSS",
      "MongoDB",
      "GCP",
      "Vercel",
    ],
    refs: [
      {
        type: "github",
        url: "https://github.com/JayKim88/build-your-body",
      },
      {
        type: "deploy",
        url: "https://build-your-body.vercel.app/",
      },
      {
        type: "note",
        title: "work history",
        url: "https://jay-global.notion.site/Build-Your-Body-84e9378c4266402b851205d44a40be79?pvs=4",
      },
      {
        type: "figma",
        url: "https://www.figma.com/design/w0724tFpVxA2GI8WTq6amB/BYB_Build-Your-Body?node-id=0-1&t=zrJF3qpKzQI8tets-1",
      },
    ],
  },
  {
    type: "Personal",
    period: "Apr 2021",
    title: "JStargram",
    position: "Full Stack",
    serviceType: "Web App",
    summary:
      "An interactive photo-sharing platform that connects users through shared images and conversations",
    points: [
      <TransDescription>
        {(isKo) => (
          <>
            {isKo
              ? "데스크탑과 모바일 모두에서 최적의 사용자 경험을 보장하기 위해 "
              : "Applied "}
            <BoldBtn
              title={isKo ? "반응형 웹 디자인" : "responsive web design"}
              customStyle={isKo ? "mr-1" : "mx-1"}
              fontWeight="medium"
              imageUrls={[
                "https://user-images.githubusercontent.com/55373668/114337773-b63b5300-9b8c-11eb-912c-afa5537b3be4.gif",
              ]}
            />
            {isKo
              ? "을 적용했습니다."
              : "to ensure optimal user experience across desktop and mobile."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo
              ? "Firestore, Cloud Storage, Authentication 등 "
              : "Developed backend logic using "}
            <Important
              content={isKo ? "Firebase 서비스" : "Firebase services"}
            />
            {isKo
              ? "를 사용하여 백엔드 로직을 구현했습니다."
              : " including Firestore, Cloud Storage, and Authentication."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo
              ? "즉각적인 메시징을 위해 "
              : "Built a real-time chat feature using "}
            <Important
              content={
                isKo
                  ? "Firestore의 스냅샷 리스너"
                  : "Firestore's snapshot listeners "
              }
            />
            {isKo
              ? "를 사용하여 실시간 채팅 기능을 구현했습니다."
              : "to enable instant messaging."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "원활하고 안전한 사용자 인증을 위해 " : "Integrated "}
            <Important
              content={isKo ? "Google 로그인/로그아웃" : "Google login/logout "}
            />
            {isKo
              ? "을 통합했습니다."
              : "for seamless and secure user authentication."}
          </>
        )}
      </TransDescription>,
      "Implemented secure image upload with progress tracking and server-side timestamping for efficient media management.",
    ],
    stacks: ["React", "Firebase", "Framer-motion"],
    refs: [
      {
        type: "github",
        url: "https://github.com/JayKim88/J-star-gram",
      },
      {
        type: "deploy",
        url: "https://j-star-gram.firebaseapp.com/",
      },
      {
        type: "note",
        title: "work history",
        url: "https://nomadkim880901.tistory.com/category/2021%7E_Projects/JStargram_2021",
      },
    ],
  },
  {
    type: "Personal",
    period: "Apr 2021",
    title: "Covid19 Tracker",
    position: "Full Stack",
    serviceType: "Web App",
    summary: "A chart and map service providing real-time global COVID-19 data",
    points: [
      "Designed and configured a user-friendly UI for a global COVID-19 data service.",
      "Integrated the disease.sh API to process and fetch COVID-19 data, including infections, recoveries, and deaths.",
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "" : "Developed an "}
            <Important
              content={
                isKo ? "인터랙티브 지도 및 차트" : "interactive map and charts "
              }
            />
            {isKo
              ? "를 Chart.js와 Leaflet.js 라이브러리를 사용해 개발하여 COVID-19 현황을 시각화했습니다."
              : "for visualizing COVID-19 insights using Chart.js and Leaflet.js libraries."}
          </>
        )}
      </TransDescription>,
    ],
    stacks: ["React", "Firebase", "Material UI"],
    refs: [
      {
        type: "github",
        url: "https://github.com/JayKim88/Covid-19-Tracker",
      },
      {
        type: "deploy",
        url: "https://covid-19-tracker-124a9.web.app/",
      },
      {
        type: "note",
        title: "work history",
        url: "https://nomadkim880901.tistory.com/category/2021%7E_Projects/Covid19%20Tracker_2021",
      },
    ],
  },
  {
    type: "Team",
    period: "Feb - Mar 2021",
    title: "Royal Diary",
    position: "Front End",
    serviceType: "Web App",
    summary:
      "A digital illustrated diary service letting users relive childhood vacation journaling with a retro-style interface. They can draw, write, edit entries, share diaries, exchange encouraging comments, and interact using stamp-like reactions, recreating the joy of childhood journaling",
    points: [
      <TransDescription>
        {(isKo) => (
          <>
            <Important
              content={
                isKo
                  ? "주요 페이지 설계 및 개발"
                  : "Designed and Developed key pages"
              }
            />
            {isKo
              ? ": 인트로, 회원가입, 매뉴얼, 일기 작성, 만든이 페이지를 개발했습니다."
              : ": intro, signup, manual, write-diary, and creator page."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            <Important
              content={
                isKo ? "그림판을 구현했습니다" : "Implemented drawing board"
              }
            />
            {isKo
              ? " (쓰기, 저장, 편집 기능이 포함되어 있습니다)."
              : " with writing, saving, and editing functions."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            <Important
              content={
                isKo ? "반응형 디자인 구현" : "Ensured responsive design"
              }
            />
            {isKo
              ? "으로 데스크탑과 모바일에 최적화했습니다."
              : " optimized for desktop and mobile."}
          </>
        )}
      </TransDescription>,
      "Integrated social logins (Google and Kakao) for seamless access.",
      "Added smooth loading effects to enhance page transition experience.",
    ],
    stacks: ["React", "Typescript", "React Canvas Draw"],
    refs: [
      {
        type: "github",
        url: "https://github.com/codestates/RoyalDiary-client/wiki",
      },
      {
        type: "note",
        title: "works",
        url: "https://docs.google.com/presentation/d/14pNjfGywP11tC0fxRAGBPPGeuv9racICSAkgAVUFJmw/edit?usp=sharing",
      },
    ],
  },
  {
    type: "Team",
    period: "Jan - Feb 2021",
    title: "Home Made",
    position: "Back End",
    serviceType: "Web App",
    summary:
      "A recipe-sharing service created in response to increased home cooking during COVID-19. Users can share family recipes, rate, and comment on others' dishes, while the platform highlights popular recipes of the week, fostering a community around discovering and enjoying delicious meals",
    points: [
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "" : "Designed the "}
            <BoldBtn
              title={isKo ? "데이터베이스 스키마" : "database schema"}
              link="https://dbdiagram.io/d/homemade-601bc54e80d742080a3925bd"
              customStyle={isKo ? "mr-1" : "mx-1"}
              refName="Connect to DBDiagram"
            />
            {isKo
              ? "를 DBDiagram을 사용하여 설계했습니다."
              : " using DBDiagram."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "사용자 인증 및 계정 관리를 위한 " : "Developed "}
            <BoldBtn
              title={isKo ? "RESTful API" : "RESTful APIs"}
              link="https://github.com/codestates/im25Homemade-server/blob/dev/routes/users.js"
              customStyle="mx-1"
              refName="Connect to Github Codes"
            />
            {isKo
              ? "(로그인, 로그아웃, 회원가입, 이메일 중복 확인, 계정 삭제, 프로필 업데이트 포함)을 개발했습니다."
              : "for user authentication and account management, including login, logout, signup, email duplication checks, account deletion, and profile updates."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo
              ? "비밀번호 유출 방지를 위해 crypto.js 를 사용하여 "
              : "Applied "}
            <Important
              content={isKo ? "단방향 암호화" : "one-way encryption"}
            />
            {isKo
              ? "를 적용했습니다."
              : " by crypto.js to prevent password leaks."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "" : "Implemented "}
            <Important
              content={isKo ? "JWT 기반 인증" : "JWT-based authentication"}
            />
            {isKo
              ? "을 구현하여 액세스 및 리프레시 토큰을 생성하고 관리했습니다."
              : " by generating and managing access and refresh tokens."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            <BoldBtn
              title={
                isKo ? "AWS 서비스 배포 방식" : "Deployed with AWS services"
              }
              link="https://nomadkim880901.tistory.com/entry/%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8-https-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0"
              customStyle="mr-1"
              refName="Connect to Blog"
            />
            {isKo
              ? "(EC2, RDS, S3, Route53, ELB, CM)를 사용해 HTTPS 호스팅을 구성했습니다."
              : "(EC2, RDS, S3, Route53, ELB, CM) for HTTPS hosting."}
          </>
        )}
      </TransDescription>,
    ],
    stacks: [
      "Node.js",
      "Express",
      "MySQL",
      "Sequelize",
      "Multer",
      "AWS",
      "PM2",
    ],
    refs: [
      {
        type: "github",
        url: "https://github.com/codestates/im25Homemade-server/wiki",
      },
      {
        type: "note",
        title: "work history",
        url: "https://nomadkim880901.tistory.com/category/2020_BootCamp_Codestates/First%20Project?page=1",
      },
    ],
  },
];
