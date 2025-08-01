import React from "react";
import { BoldBtn } from "../components/BoldBtn";
import { Important } from "../components/Important";
import Widgets from "../assets/images/refs/widgets.webp";
import ImageUpload1 from "../assets/images/refs/image-upload_1.webp";
import ImageUpload2 from "../assets/images/refs/image-upload_2.webp";
import ImageUpload3 from "../assets/images/refs/image-upload_3.webp";
import CorePage1 from "../assets/images/refs/core-page_1.webp";
import CorePage2 from "../assets/images/refs/core-page_2.webp";
import CorePage3 from "../assets/images/refs/core-page_3.webp";
import Center3d from "../assets/video/3d-center.mp4";
import BarcodePrint1 from "../assets/images/refs/barcode-print_1.webp";
import BarcodePrint2 from "../assets/images/refs/barcode-print_2.webp";
import Mobile from "../assets/images/refs/mobile.webp";
import NotificationModal from "../assets/images/refs/notification-modal.webp";
import NotificationIosForeback from "../assets/images/refs/notification-ios-foreback.webp";
import NotificationAndroidDesktop from "../assets/images/refs/notification-android-desktop.webp";
import MyStatsDashboard from "../assets/images/refs/my-stats-dashboard.webp";
import { TransDescription } from "../components/TransDescription";

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

export const achievements = [
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
              isBottomDirection
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
            {isKo ? "Apollo Client의 " : "Integrated Apollo Client's "}
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
      <TransDescription>
        {(isKo) => (
          <>
            <Important
              content={
                isKo
                  ? "ARIA 속성을 적용하여 접근성 개선 "
                  : "Enhanced accessibility and UX by applying ARIA attributes "
              }
            />
            {isKo
              ? "및 accesskey 를 통해 플랫폼 전반의 키보드 사용성을 개선했습니다."
              : "and improving keyboard navigation across the platform by accesskey."}
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
              isBottomDirection
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