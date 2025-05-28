import React from "react";
import { Trans, useTranslation } from "react-i18next";

import Profile from "../assets/images/profile.png";
import { BoldBtn } from "../components/BoldBtn";
import { Important } from "../components/Important";
import { TransDescription } from "../constants/data";

export const Home = () => {
  const { i18n } = useTranslation();
  const isKo = i18n.language === "ko";

  return (
    <main className="home flex flex-col gap-y-12 justify-start py-24 [&>p]:leading-7 text-opacity1 pr-4">
      <TransDescription>
        {(isKo) => (
          <>
            <p>
              {isKo ? (
                <>
                  저는 <Important content="사용자 중심 소프트웨어 엔지니어" />
                  로서 직관적이고 원활한 사용자 경험을 만드는 데 열정을 가지고
                  있습니다. 클라이언트 개발에서는 복잡성을 최소화하고 참여도를
                  높이는 깨끗하고 효율적이며 상호작용적인 UI를 구축하는 데
                  주력하고 있습니다. 서버 개발에서는 Node.js 와 Next.js 를
                  활용해 RESTful API를 구축하고 백엔드 로직을 처리하며,
                  클라이언트부터 서버까지 연결되는 엔드 투 엔드 기능을 지원한
                  경험이 있습니다.
                </>
              ) : (
                <>
                  I’m an <Important content="user-centric software engineer" />{" "}
                  passionate about crafting intuitive and seamless user
                  experiences. On the client side, I focus on building clean,
                  efficient, and interactive UIs that minimize complexity and
                  enhance engagement. On the server side, I have experience with
                  building RESTful APIs and handling backend logic using Node.js
                  and Next.js, enabling full end-to-end functionality that
                  connects the client and server seamlessly.
                </>
              )}
            </p>
            <p>
              {isKo ? (
                <>
                  현재 저는
                  <BoldBtn
                    link="https://www.bold-9.com/"
                    title="Bold9"
                    customStyle={isKo ? "mx-1" : "ml-1"}
                  />
                  에서 프론트엔드 엔지니어로 일하고 있습니다. 사용자 친화적인
                  인터페이스를 개발하여 이커머스 풀필먼트 운영을 최적화하는
                  업무를 담당하고 있으며, UI 성능 향상, 데이터 기반 대시보드
                  시각화, 물류 워크플로우를 간소화하기 위한 직관적이고 사용하기
                  쉬운 기능 구현에 기여하고 있습니다. 또한, 단위 테스트, 통합
                  테스트, 스냅샷 UI 테스트를 작성하여 애플리케이션의 안정성을
                  확보하고, 견고하고 확장 가능한 소프트웨어를 제공합니다.
                </>
              ) : (
                <>
                  Currently, I’m a Frontend Engineer at
                  <BoldBtn
                    link="https://www.bold-9.com/"
                    title="Bold9"
                    customStyle="ml-1"
                  />
                  , developing user-friendly interfaces to optimize e-commerce
                  fulfillment operations. My contribution includes enhancing UI
                  performance, visualizing data-driven dashboard, and
                  implementing intuitive and easy-to-use features to streamline
                  logistics workflows. I also ensured application reliability by
                  writing unit, integration, and snapshot UI tests—delivering
                  robust and scalable software.
                </>
              )}
            </p>
            <p>
              {isKo ? (
                <>
                  Bold9에서 저는{" "}
                  <Important content="애자일한 상향식 업무환경" />
                  에서 일하고 있습니다. 개발자가 직접 태스크를 선택하고 시작부터
                  끝까지 주도적으로 이끌며,{" "}
                  <Important content="이슈 기반, 태스크 중심의 워크플로우" />를
                  통해 독립적으로 일하고 자신의 일정을 관리하며 업무를
                  진행합니다. 동시에 기획자, 디자이너, 백엔드 개발자들과의
                  자유로운 논의와 동료들의 코드 리뷰를 통해 협업 능력을
                  향상시키고, 팀의 코드 품질을 높이는데 기여하고 있습니다.
                </>
              ) : (
                <>
                  At Bold9, I work in an{" "}
                  <Important content="agile and bottom-up environment" /> where
                  developers actively choose tasks and take full ownership from
                  start to finish. This{" "}
                  <Important content="issue-based and task-driven workflow" />{" "}
                  empowers me to work independently while managing my own
                  schedule. At the same time, close collaboration with planners,
                  designers, and backend developers through open discussions and
                  peer code reviews has strengthened my ability to work
                  cooperatively and contribute to higher team coding standards.
                </>
              )}
            </p>
            <p>
              {isKo ? (
                <>
                  저는 해외영업 분야에서 커리어를 시작하여, 커뮤니케이션 능력과
                  글로벌 협업 역량을 쌓았습니다. 기술적 역량에 대한 관심과
                  열정이 점점 커짐에 따라 소프트웨어 엔지니어링 분야로 전향하여
                  Code States에서 풀스택 JavaScript 부트캠프를 수료하고 첫
                  개발자 커리어를 시작했습니다. 소프트웨어 엔지니어로 풀타임
                  근무를 하면서{" "}
                  <BoldBtn
                    title="한국방송통신대학교"
                    link="https://www.knou.ac.kr/knou/191/subview.do?epTicket=LOG"
                    customStyle={isKo ? "mx-1" : "ml-1"}
                  />
                  에서 컴퓨터공학 학사 학위를 취득했습니다.
                </>
              ) : (
                <>
                  I began my career in overseas sales, where I developed strong
                  communication and global collaboration skills. Driven by a
                  growing passion for technology, I transitioned into software
                  engineering—completing a full-stack JavaScript bootcamp at
                  Code States and landing my first developer role. While working
                  full-time as a software engineer, I earned a Bachelor’s degree
                  in Computer Science from{" "}
                  <BoldBtn
                    title="Korea National Open University"
                    link="https://engknou.knou.ac.kr/engknou/5774/subview.do?epTicket=LOG"
                    customStyle="ml-1"
                  />
                  .
                </>
              )}
            </p>
          </>
        )}
      </TransDescription>
    </main>
  );
};
