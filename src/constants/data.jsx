import React, { useState, useRef, useEffect } from "react";
import { throttle } from "lodash";
import { useTranslation } from "react-i18next";

import { BoldBtn } from "../components/BoldBtn";
import { Highlight } from "../components/Highlight";
import Eye from "../assets/images/eye.svg?react";
import EyeSlash from "../assets/images/eye-slash.svg?react";

import Widgets from "../assets/images/refs/widgets.png";
import ImageUpload1 from "../assets/images/refs/image-upload_1.png";
import ImageUpload2 from "../assets/images/refs/image-upload_2.png";
import ImageUpload3 from "../assets/images/refs/image-upload_3.png";
import CorePage1 from "../assets/images/refs/core-page_1.png";
import CorePage2 from "../assets/images/refs/core-page_2.png";
import CorePage3 from "../assets/images/refs/core-page_3.png";
import Center3d from "../assets/video/3d-center.mp4";
import BarcodePrint1 from "../assets/images/refs/barcode-print_1.png";
import BarcodePrint2 from "../assets/images/refs/barcode-print_2.png";
import Mobile from "../assets/images/refs/mobile.png";
import NotificationModal from "../assets/images/refs/notification-modal.png";
import NotificationIosForeback from "../assets/images/refs/notification-ios-foreback.png";
import NotificationAndroidDesktop from "../assets/images/refs/notification-android-desktop.png";
import MyStatsDashboard from "../assets/images/refs/my-stats-dashboard.png";
import { Important } from "../components/Important";

const testCodeExample = `// example.test.tsx
import React from 'react';

import { server } from 'test-utils/mocks/server';
import { handlers } from './mockHandlers';
import {
  configure,
  render,
  screen,
  userEvent,
  waitFor,
  within,
} from 'test-utils/renderWithProviders';
import { ExampleOrders } from 'pages/ExampleOrders/ExampleOrders';
import { exampleList } from './mock';
import {
  mockLogisticId,
  mockLogisticTeamId,
  mockSellerId,
} from 'test-utils/mocks/props';

configure({ testIdAttribute: 'id' });

describe('example list page test', () => {
  let totalCheckBox: Element | null;

  beforeEach(async () => {
    server.use(...handlers);
    render(
      <ExampleOrders
        logisticId={mockLogisticId}
        logisticTeamId={mockLogisticTeamId}
        sellerId={mockSellerId}
      />
    );

    const submitButton = screen.getAllByRole('button', {
      name: 'Search',
    })[0];

    await userEvent.click(submitButton);

    totalCheckBox = screen.getAllByTestId('selection')[0];
  });

  it('example list renders properly.', async () => {
    const table = screen.getAllByLabelText('example table')[0];
    const rowsCount = within(table).getByRole('rowgroup').childElementCount;

    await waitFor(() => {
      expect(rowsCount).toBe(exampleList.totalCount);
    });
  });

  ...

  it('example actions operates properly.', async () => {
    totalCheckBox && (await userEvent.click(totalCheckBox));

    const orderDoneBtn = (await screen.findAllByLabelText('Order Done'))[0]
      .firstElementChild;

    orderDoneBtn && (await userEvent.click(orderDoneBtn));

    const snackbarMsg =
      document.getElementById('snackbar message')?.firstChild?.nodeValue;

    expect(snackbarMsg).toBe('order completed successfully.');
  });

  
 ...
});

// mockHandlers.ts
import { GraphQLHandler, graphql, HttpResponse } from 'msw';
import { MOCKING_API_LINK } from 'test-utils/renderWithProviders';
import { exampleList } from './mock';
import {  
  ExampleListQuery,
  ExampleListQueryVariables,
  namedOperations as exampleListNamedOperations,
} from '../../example/OrderList.query.generated';

const linkedGrahpql = graphql.link(MOCKING_API_LINK);

export const handlers: GraphQLHandler[] = [
  linkedGrahpql.query<
    ExampleListQuery,
    ExampleListQueryVariables
  >(exampleListNamedOperations.Query.OrderManagementList, () =>
    HttpResponse.json({
      data: {
        exampleList,
      },
    })
  ),
];
`;

const versionDetectorCodeExample = `// checkVersionAndReload.ts
const { VITE_GH_TOKEN: gh_token, VITE_DEPLOY_ENV: deploy_env } =
  import.meta.env ?? {};

const checkVersionAndReload = () => {
  const targetDeployEnvs = ['production', 'staging', 'beta'];
  const isProperDeployEnv = targetDeployEnvs.includes(deploy_env);

  if (!!gh_token && isProperDeployEnv) {
    import('https://cdn.skypack.dev/octokit@2.0.14')
      .then(async (res) => {
      const octokit = new res.Octokit({
        auth: gh_token,
      });

      const reloadTarget =
        deploy_env === targetDeployEnvs[0]
          ? {
              workflowId: '{PRODUCTION_WORKFLOW_ID}',
              keyName: 'productionExampleRunNumber',
            }
          : deploy_env === targetDeployEnvs[1]
          ? {
              workflowId: '{STAGING_WORKFLOW_ID}',
              keyName: 'stagingExampleRunNumber',
            }
          : {
              workflowId: '{BETA_WORKFLOW_ID}',
              keyName: 'betaExampleRunNumber',
            };

      const gitActionData = await octokit.request(
        'GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs',
        {
          owner: '{PROJECT_OWNER_NAME}',
          repo: '{REPO_NAME}',
          workflow_id: reloadTarget.workflowId,
          per_page: 1,
          page: 1,
          status: 'completed',
        }
      );
      const recentActionRunNumber = 
        await gitActionData.data.workflow_runs[0].run_number;
      const lastActionRunNumber = 
      JSON.parse(localStorage.getItem(reloadTarget.keyName) || 'null');

      if (
        !lastActionRunNumber ||
        recentActionRunNumber !== lastActionRunNumber
      ) {
        localStorage.setItem(
          reloadTarget.keyName,
          JSON.stringify(recentActionRunNumber)
        );
        location.reload();
      }
    });
  }
};

export { checkVersionAndReload };
`;

export const TransDescription = ({ children }) => {
  const { i18n } = useTranslation();
  const isKo = i18n.language === "ko";

  return children(isKo);
};

const achievements = [
  {
    title: "Dashboard Development",
    points: [
      "Customized dashboard with real-time visualized analytics using Recharts library.",
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? " " : "Created "}
            <BoldBtn
              title={isKo ? "데이터 시각화 위젯" : "data visualization widgets"}
              customStyle={isKo ? "mr-1" : "mx-1"}
              fontWeight="medium"
              imageUrls={[Widgets]}
            />
            {isKo ? (
              <>
                (예: 최근 송장, 마켓 주문 상태, 택배 대역대 정보) 을
                구현했습니다. 이는 풀필먼트 작업을 한눈에 모니터링할 수 있도록
                지원합니다.
              </>
            ) : (
              <>
                (e.g., Recent Invoice, Market Order Status, Courier Bands Info),
                enabling users to monitor fulfillment operations at a glance.
              </>
            )}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo
              ? "최근 2주간의 데이터를 요구하는 송장 위젯의 렌더링 시간을 "
              : "Optimized recent invoice widget which requires 2 weeks data by reducing rendering time "}
            <Important
              content={
                isKo
                  ? "13초에서 1초(92% 개선)"
                  : "from 13s to 1s (92% improvement) "
              }
            />
            {isKo
              ? "로 단축했으며, Promise.all 을 사용하여 모든 API 요청을 최적화했습니다."
              : "using Promise.all on all API requests."}
          </>
        )}
      </TransDescription>,
    ],
  },
  {
    title: "Cross-Platform Notification System",
    points: [
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "자가 인증서와 Nginx 를 사용하여" : "Built a "}
            <BoldBtn
              title={isKo ? "로컬 HTTPS 를 설정" : "Local HTTPS setup"}
              customStyle="mx-1"
              fontWeight="medium"
              refName="Connect to Notion"
              link="https://jay-global.notion.site/https-17de5ccd65b180e59226cba874ddb95c?pvs=4"
            />
            {isKo
              ? "하는 가이드를 작성하여 Service Workers 및 PWA 개발에 이를 활용할 수 있도록 했습니다."
              : "using self-signed certificates and Nginx to support Service Workers and PWA development."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "FCM을 사용하여 " : ""}
            <BoldBtn
              title={isKo ? "푸시 알림" : "Push notifications"}
              customStyle="mr-1"
              fontWeight="medium"
              imageUrls={[NotificationIosForeback, NotificationAndroidDesktop]}
            />
            {isKo
              ? "을 구현했고, 데스크탑, 모바일 웹(PWA), 모바일 앱(Flutter InAppWebView)에서 이를 지원하도록 했습니다."
              : "using FCM for desktop, mobile web (PWA), and mobile apps (Flutter InAppWebView for ios and android)."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo
              ? "사용자에 따라 설정 가능한 알림 설정 페이지 및 "
              : "Developed a settings page for customizable notifications and "}
            <BoldBtn
              title={isKo ? "실시간 알림 모달" : "real-time notification modal"}
              customStyle="mx-1"
              fontWeight="medium"
              imageUrls={[NotificationModal]}
            />
            {isKo
              ? "을 구현했고, 알림 모달에 무한 스크롤과 클릭 시 알림에 해당하는 업무 페이지로 이동하는 기능을 적용했습니다."
              : "supporting infinite scroll with clickable notifications linking to task-specific pages."}
          </>
        )}
      </TransDescription>,
      ,
      "Added a 'Do Not Disturb' mode for scheduled quiet hours on mobile apps.",
    ],
  },
  {
    title: "Testing & Code Reliability",
    points: [
      <TransDescription>
        {(isKo) => (
          <>
            <Important
              content={
                isKo
                  ? "테스트 커버리지를 10%에서 70%까지 상승시켰습니다. "
                  : "Increased test coverage from 10% to 70% "
              }
            />
            {isKo
              ? "Vitest 와 MSW 를 사용하여 코어 컴포넌트를 위한 33개의 유닛 테스트와 전체 애플리케이션에 페이지 단위의 54개의 통합 테스트를 작성하여 안정성을 개선했습니다."
              : "with 33 unit tests for core components and 54 integration tests across the entire application by Vitest and MSW, improving app stability."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            <Important
              content={
                isKo ? "스냅샷 테스트 " : "Implemented snapshot testing "
              }
            />
            {isKo ? "및 " : "and "}
            <Important
              content={isKo ? "자동화된 UI 테스트" : " automated UI testing "}
            />
            {isKo
              ? "를 Storybook 및 Chromatic 으로 구현하여 의도치 않은 UI 회귀를 방지했습니다."
              : "with Storybook & Chromatic to prevent UI regressions."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            <Important
              content={
                isKo
                  ? "GitHub 워크플로우 최적화 "
                  : "Optimized GitHub workflow "
              }
            />
            {isKo
              ? "및 병렬 테스트, 모듈 캐싱을 통해 테스트 시간을 "
              : "with parallel testing & module caching, cutting test time by "}
            <Important
              content={isKo ? "50% (15분 → 6분) " : "50% (15m → 6m)"}
            />
            {isKo ? "로 단축시켰습니다" : ""}.
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "클라이언트 프로젝트를 위한 " : "Established a "}
            <BoldBtn
              title={isKo ? "테스트 코드 가이드" : "test code guide"}
              link="https://nomadkim880901.tistory.com/entry/%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1-%EA%B0%80%EC%9D%B4%EB%93%9C"
              customStyle="mx-1"
              fontWeight="medium"
              refName="Connect to Blog"
            />
            {isKo ? "를 작성했습니다." : "for the client project."}
          </>
        )}
      </TransDescription>,
      ,
    ],
  },
  {
    title: "Core Page Developments",
    points: [
      <TransDescription>
        {(isKo) => (
          <>
            {isKo
              ? "코어 비즈니스 페이지(운영 관리, 매출, 출고 등)를 완전한 CRUD 기능과 "
              : "Developed core business pages (Operations Management, Sales, and Outbound, among others) with full CRUD functionality, incorporating "}
            <BoldBtn
              title={
                isKo
                  ? "검색 필터 및 데이터 테이블을 적용하여"
                  : "search filters and data tables"
              }
              fontWeight="medium"
              customStyle={isKo ? "mr-1" : ""}
              imageUrls={[CorePage1, CorePage2, CorePage3]}
            />
            {isKo ? "구현했습니다." : "."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo
              ? "데이터 테이블에 일괄 선택, 정렬, 상세 페이지 이동 기능을 추가하여 사용성을 개선했습니다."
              : "Added bulk selection, sorting, and detail page navigation for improved usability to data table."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "" : "Designed with "}
            <BoldBtn
              title={isKo ? "반응형 모바일 지원" : "responsive mobile support"}
              fontWeight="medium"
              imageUrls={[Mobile]}
              customStyle={isKo ? "mr-1" : "ml-1"}
            />
            {isKo
              ? "으로 원활한 접근성과 사용자와의 상호작용을 보장했습니다."
              : ", ensuring seamless accessibility and interaction."}
          </>
        )}
      </TransDescription>,
    ],
  },
  {
    title: "Performance Optimization & UX Enhancements",
    points: [
      <TransDescription>
        {(isKo) => (
          <>
            <Important
              content={
                isKo
                  ? "useMemo 와 useCallback "
                  : "Utilized useMemo and useCallback hooks "
              }
            />
            {isKo
              ? "훅을 활용하여 불필요한 리렌더링을 줄이고 성능을 최적화했습니다."
              : "to reduce unnecessary re-renders and optimize performance."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            <Important
              content={
                isKo ? "React.lazy 와 Suspense " : "React.lazy and Suspense "
              }
            />
            {isKo
              ? "를 적용하여 필요한 시점에 컴포넌트를 동적으로 import 하고, 초기 로딩 시간을 단축 및 성능을 최적화했습니다."
              : "were applied to dynamically import components as needed, reducing initial load time and optimizing performance."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "Apollo Client의 " : "Integrated Apollo Client’s "}
            <BoldBtn
              title={"Automatic Persisted Queries (APQ)"}
              link="https://jay-global.notion.site/Automatic-Persisted-Queries-Apply-APQ-for-query-efficacy-201e5ccd65b18051a0beee260b4c66ca?pvs=4"
              fontWeight="medium"
              customStyle="mr-1"
              refName="Connect to Notion"
            />
            {isKo
              ? "를 도입하여 요청 페이로드 크기를 줄이고 네트워크 효율성을 개선했습니다."
              : "to reduce payload size and improve network efficiency."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            <BoldBtn
              title={
                isKo
                  ? "폰트 로딩 성능 개선"
                  : "Improved font loading performance"
              }
              link="https://jay-global.notion.site/Render-display-with-animation-once-font-is-ready-201e5ccd65b18059a8c6dc82ac12fe40?pvs=4"
              fontWeight="medium"
              customStyle="mr-1"
              refName="Connect to Notion"
            />
            {isKo
              ? "을 위해 swap(기본 폰트→서비스 폰트)에서 fallback(서비스 폰트만) 방식으로 변경하여, 폰트 깜박임을 최소화하고 사용자 경험을 개선했습니다."
              : "across the site by switching from swap (default-to-service font) to fallback (service font only) approach, minimizing font flickering and enhancing UX."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            <Important
              content={
                isKo
                  ? "모달과 페이지 렌더링 순서를 최적화하여 "
                  : "Reduced layout shifts "
              }
            />
            {isKo
              ? "레이아웃 시프트를 줄이고, 더 매끄럽고 안정적으로 화면을 보여주도록 개선했습니다."
              : "by optimizing modal and page rendering sequences, ensuring smoother and more stable content presentation."}
          </>
        )}
      </TransDescription>,
    ],
  },
  {
    title: "Security & Authentication Enhancements",
    points: [
      <TransDescription>
        {(isKo) => (
          <>
            {isKo
              ? "세션 보안을 강화하고 CSRF/XSS 위험을 완화하기 위해 토큰 기반 인증에서 "
              : "Improved session security and mitigated CSRF/XSS risks by transitioning from token-based to "}
            <BoldBtn
              title={isKo ? "쿠키 기반 인증" : "cookie-based authentication"}
              link="https://jay-global.notion.site/local-storage-cookie-1c5e5ccd65b180e7950bd1441adf8541?pvs=4"
              fontWeight="medium"
              customStyle={isKo ? "mr-1" : ""}
              refName="Connect to Notion"
            />
            {isKo
              ? "으로 전환하고, 보안 HTTP-Only 쿠키와 SameSite 속성을 적용했습니다."
              : ", adopting secure HTTP-only cookies with SameSite attributes."}
          </>
        )}
      </TransDescription>,
      "Login session extension feature to reduce unintended logouts and enhance user experience.",
    ],
  },

  {
    title: "Product Image Upload & Editing",
    points: [
      <TransDescription>
        {(isKo) => (
          <>
            <BoldBtn
              title={
                isKo
                  ? "직관적인 이미지 업로드 기능"
                  : "Intuitive image upload feature"
              }
              imageUrls={[ImageUpload1, ImageUpload2, ImageUpload3]}
              customStyle="mr-1"
              fontWeight="medium"
            />
            {isKo
              ? "을 통해 상품 인식과 사용성을 개선하여 사용자 경험을 향상시켰습니다."
              : "that enhanced user experience by improving product recognition and usability."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo
              ? "react-cropper와 react-sortablejs 라이브러리를 사용해 "
              : "Includes "}
            <Important
              content={
                isKo
                  ? "이미지 자르기 및 순서 변경 기능"
                  : "image cropping and reordering functions "
              }
            />
            {isKo
              ? "을 구현하여 사용자가 상품 이미지를 손쉽게 관리할 수 있도록 지원했습니다."
              : "using react-cropper and react-sortablejs, that help users manage product images easily."}
          </>
        )}
      </TransDescription>,
    ],
  },
  {
    title: "3D Warehouse Visualization",
    points: [
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "" : "Created "}
            <BoldBtn
              title={isKo ? "3D 센터 시각화" : "3D center visualization"}
              customStyle={isKo ? "mr-1" : "mx-1"}
              fontWeight="medium"
              videoUrl={Center3d}
            />
            {isKo
              ? "를 Three.js 로 구현하여 사용자가 키보드와 마우스로 센터 공간을 자유롭게 탐색할 수 있도록 지원했습니다."
              : "using Three.js, allowing users to freely navigate the space with keyboard controls and mouse interactions."}
          </>
        )}
      </TransDescription>,
      "Improved warehouse navigation by adding rack search and clickable mini-map features, enhancing usability for warehouse staffs.",
    ],
  },
  {
    title: "Multi-Size Barcode Printing System",
    points: [
      <TransDescription>
        {(isKo) => (
          <>
            <BoldBtn
              title={
                isKo ? "맞춤형 바코드 출력 기능" : "Custom barcode printing"
              }
              customStyle="mr-1"
              fontWeight="medium"
              imageUrls={[BarcodePrint1, BarcodePrint2]}
            />
            {isKo
              ? "을 react-barcode 와 react-to-print 라이브러리를 사용해 다양한 상품 크기에 맞게 구현했습니다."
              : "for different product sizes using react-barcode and react-to-print libraries."}
          </>
        )}
      </TransDescription>,
      "Includes print preview and 5 multi-size selection, increasing efficiency for warehouse staffs.",
    ],
  },
  {
    title: "Continuous Deployment & Versioning Improvements",
    points: [
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "" : "Implemented a "}
            <BoldBtn
              title={isKo ? "버전 탐지기" : "Version Detector"}
              customStyle={isKo ? "mr-1" : "mx-1"}
              fontWeight="medium"
              codeBlock={versionDetectorCodeExample}
            />
            {isKo
              ? "를 GitHub API(Octokit)를 이용해 프로덕션, 스테이징 그리고 베타 환경에서 사용할 수 있도록 구현하여 최신 클라이언트 코드를 자동으로 받아올 수 있도록 개선했습니다."
              : "for production, staging, and beta environments using the GitHub API (Octokit), ensuring automatic reloading of the latest client code."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo
              ? "배포일마다 발생하던 버전 불일치 오류를 최소화하고 "
              : "Minimized version mismatch errors that previously occurred weekly on deployment days, "}
            <Important
              content={
                isKo
                  ? "불일치 빈도를 거의 0으로 감소"
                  : "reducing the frequency to near zero "
              }
            />
            {isKo
              ? "시켜 클라이언트-서버 동기화를 원활하게 유지했습니다."
              : "by ensuring seamless client-server synchronization."}
          </>
        )}
      </TransDescription>,
    ],
  },
  {
    title: "SEO & Server-Side Rendering (SSR)",
    points: [
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "SEO를 향상시키기 위해 " : "Enhanced SEO by "}
            <Important
              content={
                isKo
                  ? "랜딩 페이지를 React에서 Next.js로 마이그레이션"
                  : "migrating the landing page from React to Next.js "
              }
            />
            {isKo
              ? "하고 SSR, 최적화된 메타데이터, Open Graph 태그를 활용하여 검색 가시성을 높이고 풍부한 링크 미리보기를 제공했습니다."
              : "leveraging SSR, optimized metadata, and Open Graph tags for improved visibility and rich link previews."}
          </>
        )}
      </TransDescription>,
      "Pre-rendered critical content, reducing initial load times and improving engagement across platforms.",
    ],
  },
  {
    title: "Automatic PR Labeler for team productivity",
    points: [
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "PR을 위한 " : "Created a "}
            <BoldBtn
              title={isKo ? "자동 D-day 라벨러" : "Automated D-day labeler"}
              customStyle="mx-1"
              fontWeight="medium"
              link="https://github.com/JayKim88/automatic-pr-labeler"
              refName="Connect to Github Repo"
            />
            {isKo
              ? "를 만들어 리뷰 마감일을 지속적으로 확인할 수 있도록 지원했습니다."
              : "for PRs, ensuring continuous visibility of review deadlines."}
          </>
        )}
      </TransDescription>,
      "D-day label is automatically updated daily, reducing by one day until it reaches 'D-0'.",
      <TransDescription>
        {(isKo) => (
          <>
            <BoldBtn
              title={
                isKo
                  ? "지연된 리뷰를 50% 감소"
                  : "Reduced delayed reviews by 50%"
              }
              fontWeight="medium"
              link="https://nomadkim880901.tistory.com/entry/Automatic-PR-Labeler-%EB%A1%9C-%EC%BD%94%EB%93%9C-%EB%A6%AC%EB%B7%B0-%ED%9A%A8%EC%9C%A8-%EB%86%92%EC%9D%B4%EA%B8%B0"
              refName="Connect to Blog"
              customStyle={isKo ? "mr-1" : ""}
            />
            {isKo
              ? "시켜 팀의 효율성과 제품 안정성을 높였습니다."
              : ", improving team efficiency and product stability."}
          </>
        )}
      </TransDescription>,
    ],
  },
];

const viewBtnStyle = "fill-black w-6 h-6";

const Bold9Contribution = () => {
  const { i18n, t } = useTranslation();
  const ulRef = useRef();
  const [open, setOpen] = useState(false);
  const [ulSizes, setUlSizes] = useState({
    width: 0,
    height: 0,
  });

  const handleOpen = () => {
    const experiencePosition =
      document.getElementsByClassName("experiences")[0]?.offsetTop ?? 0;

    setOpen((prev) => !prev);

    open &&
      requestAnimationFrame(() => {
        const timeoutId = setTimeout(() => {
          window.scrollTo({
            top: experiencePosition - 100,
            behavior: "smooth",
          });
        }, 1000);

        return () => clearTimeout(timeoutId);
      });
  };

  useEffect(() => {
    const updateUlSizes = () => {
      if (!ulRef.current) return;
      setUlSizes({
        width: ulRef.current.offsetWidth ?? 0,
        height: ulRef.current.offsetHeight ?? 0,
      });
    };

    window.addEventListener("resize", updateUlSizes);

    updateUlSizes();

    return () => window.removeEventListener("resize", updateUlSizes);
  }, [ulRef]);

  const isKo = i18n.language === "ko";

  return (
    <div className="mx-auto mt-2 mb-4 rounded-xl relative">
      <h2 className="text-[16px] font-bold mb-6 mt-8 text-main">
        {t("Key Achievements & Contributions")}
      </h2>
      <div
        className="overflow-hidden transition-all duration-800 ease-in-out"
        style={{
          maxHeight: open ? ulSizes.height : isKo ? 300 : 350,
        }}
      >
        <ul ref={ulRef} className={`flex flex-col gap-y-10`}>
          {achievements.map((achievement, index) => (
            <li key={index}>
              <h3 className="text-main text-[14.6px] font-semibold flex items-center mb-2">
                {`${index + 1}. ${t(achievement.title)}`}
              </h3>
              <ul className="pl-6 gap-y-0.5 flex flex-col">
                {achievement.points.map((point, i) => (
                  <li key={i} className="marker:mr-1 list-disc">
                    {typeof point === "string" ? t(point) : point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <button
        className={`absolute px-2 py-1 rounded-2xl font-medium flex 
          justify-center items-center gap-x-1 min-w-[124px]
          ${open ? "-bottom-8" : "-bottom-4"} 
          text-black cursor-pointer transition-transform duration-300
          bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500
          bg-[length:200%_200%] animate-gradientX
        `}
        style={{
          right: ulSizes.width / 2 - 62,
        }}
        onClick={handleOpen}
      >
        {open ? (
          <>
            <EyeSlash className={viewBtnStyle} />
            <span>{t("View Less")}</span>
          </>
        ) : (
          <>
            <Eye className={viewBtnStyle} />
            <span>{t("View More")}</span>
          </>
        )}
      </button>
    </div>
  );
};

export const experiences = [
  {
    type: null,
    period: "Jun 2021 - Present",
    title: "Frontend Engineer",
    company: "Bold9, Seoul",
    summary:
      "Bold9 is e-commerce fulfilment company specialising in end-to-end logistics, including inventory management, multi-temperature storage, and international shipping",
    paragraph: <Bold9Contribution />,
    stacks: [
      "Javascript",
      "Typescript",
      "HTML5 & CSS3",
      "React",
      "Next JS",
      "GraphQL",
      "Docker",
      "Vite",
      "Vitest",
      "GCP",
      "Firebase",
      "MUI",
    ],
  },
  {
    type: null,
    period: "Jan 2018 - Feb 2020",
    title: "Overseas Sales",
    company: "DRGEM, Gyeonggi-do",
    summary:
      "DRGEM is manufacturer of advanced digital X-ray systems for global medical imaging solutions",
    points: [
      <TransDescription>
        {(isKo) => (
          <>
            {isKo
              ? "아시아, 중동, 아프리카 지역의 후지필름 지사들과 긴밀한 관계를 구축하고 "
              : "Built strong relationships with FujiFilm branches across Asia, the Middle East, and Africa, offering "}
            <Important content={isKo ? "기술 지원" : "technical support"} />
            {isKo ? "을 제공하며 " : " and fostering "}
            <Important
              content={isKo ? "효과적인 협업" : "effective collaboration"}
            />
            {isKo
              ? "을 통해 주요 파트너로서 협력했습니다."
              : " as key partners."}
          </>
        )}
      </TransDescription>,
      "Collaborated with R&D, quality management, and legal teams to resolve technical issues, revise OEM contracts, and support product development.",
      "Gathered market insights and drove product sales strategies by attending global medical exhibitions (RSNA, ECR, ARAB HEALTH).",
      <TransDescription>
        {(isKo) => (
          <>
            {isKo
              ? "현재의 사용자 중심 소프트웨어 솔루션 구축에 도움이 되는 "
              : "Developed "}
            <Important
              content={
                isKo
                  ? "문제 해결 및 기술 커뮤니케이션 역량"
                  : "problem-solving and technical communication skills"
              }
            />
            {isKo
              ? "을 발전시켰습니다."
              : ", now applied to building user-centric software solutions."}
          </>
        )}
      </TransDescription>,
    ],
  },
];

export const projects = [
  {
    type: "Personal",
    period: "May - Sep 2024",
    title: "Build Your Body",
    position: "Full Stack",
    summary:
      "A personal home training service designed to help users customize and track their fitness journey",
    points: [
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
                  : "Firestore’s snapshot listeners "
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
        url: "https://nomadkim880901.tistory.com/category/Projects/JStargram",
      },
    ],
  },
  {
    type: "Personal",
    period: "Apr 2021",
    title: "Covid19 Tracker",
    position: "Full Stack",
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
        url: "https://nomadkim880901.tistory.com/category/Projects/Covid19%20Tracker",
      },
    ],
  },
  {
    type: "Team",
    period: "Feb - Mar 2021",
    title: "Royal Diary",
    position: "Front End",
    summary:
      "A digital picture diary service letting users relive childhood vacation journaling with a retro-style interface. They can draw, write, edit entries, share diaries, exchange encouraging comments, and interact using stamp-like reactions, recreating the joy of childhood journaling",
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
    summary:
      "A recipe-sharing service created in response to increased home cooking during COVID-19. Users can share family recipes, rate, and comment on others’ dishes, while the platform highlights popular recipes of the week, fostering a community around discovering and enjoying delicious meals",
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
        url: "https://nomadkim880901.tistory.com/category/BootCamp_Codestates/First%20Project?page=1",
      },
    ],
  },
];

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

export const education = [
  {
    period: "Mar 2022 - Aug 2024",
    title: "Bachelor of Computer Science",
    contents: (
      <TransDescription>
        {(isKo) => (
          <button
            className="hover:text-yellow-300 text-start cursor-pointer"
            onClick={() =>
              window.open(
                isKo
                  ? "https://www.knou.ac.kr/knou/191/subview.do?epTicket=LOG"
                  : "https://engknou.knou.ac.kr/engknou/5774/subview.do?epTicket=LOG",
                "_blank"
              )
            }
          >
            {isKo
              ? "한국방송통신대학교, 대한민국"
              : "Korea National Open University, South Korea"}
          </button>
        )}
      </TransDescription>
    ),
  },
  {
    period: "Oct 2020 - Mar 2021",
    title: "Full-stack course based on JavaScript",
    contents: (
      <TransDescription>
        {(isKo) => (
          <div className="flex flex-col gap-y-2">
            <div>
              {isKo
                ? "코드스테이츠(부트캠프), 대한민국"
                : "Codestates(Boot camp), South Korea"}
            </div>
            <ul className="[&>li]:list-disc pl-6 gap-y-0.5 flex flex-col">
              <li>
                {isKo
                  ? "프론트엔드는 React, 백엔드는 Node.js를 학습했습니다."
                  : "Learned React for the frontend and Node.js for the backend"}
              </li>
              <li>
                {isKo
                  ? "매일 알고리즘 문제 풀이를 진행했습니다."
                  : "Solved algorithm problems on daily basis"}
              </li>
              <li>
                {isKo
                  ? "지속적으로 과제를 진행했습니다."
                  : "Worked on assignments consistently"}
              </li>
              <li>
                {isKo
                  ? "페어 프로그래밍과 코드 리뷰에 참여했습니다."
                  : "Participated in pair programming and code reviews"}
              </li>
              <li>
                {isKo
                  ? "2개의 협업 프로젝트(Homemade, Royal Diary)를 진행했습니다."
                  : "Contributed to 2 collaborative projects: Homemade and Royal Diary"}
              </li>
            </ul>
          </div>
        )}
      </TransDescription>
    ),
  },
  {
    period: "Mar 2010 - Feb 2018",
    title: "Bachelor of Economics",
    contents: "Soongsil University, South Korea",
  },
];
