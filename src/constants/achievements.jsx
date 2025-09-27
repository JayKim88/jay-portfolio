import React from "react";
import { BoldBtn } from "../components/BoldBtn";
import { Important } from "../components/Important";
import Widgets1 from "../assets/images/refs/widgets1.webp";
import Widgets2 from "../assets/images/refs/widgets2.webp";
import ImageUpload1 from "../assets/images/refs/image-upload_1.webp";
import ImageUpload2 from "../assets/images/refs/image-upload_2.webp";
import ImageUpload3 from "../assets/images/refs/image-upload_3.webp";
import CorePage1 from "../assets/images/refs/core-page_1.webp";
import CorePage2 from "../assets/images/refs/core-page_2.webp";
import CorePage3 from "../assets/images/refs/core-page_3.webp";
import CorePage4 from "../assets/images/refs/core-page_4.webp";
import CorePage5 from "../assets/images/refs/core-page_5.webp";
import Center3d from "../assets/video/3d-center.mp4";
import BarcodePrint1 from "../assets/images/refs/barcode-print_1.webp";
import BarcodePrint2 from "../assets/images/refs/barcode-print_2.webp";
import Mobile from "../assets/images/refs/mobile.webp";
import NotificationModal from "../assets/images/refs/notification-modal.webp";
import NotificationIosForeback from "../assets/images/refs/notifications.webp";
import NotificationMobile from "../assets/images/refs/notification-mobile.webp";
import NotificationSettingsMobile from "../assets/images/refs/notification-settings-mobile.webp";
import NotificationSettings from "../assets/images/refs/notification-settings.webp";
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
    images: [Widgets1, Widgets2],
    points: [
      <TransDescription>
        {(isKo) => (
          <>
            {isKo
              ? "Recharts 라이브러리를 사용하여, 데이터 시각화 위젯들 (최근 송장, 마켓 주문 상태, 택배사 정보 등) 로 구성된 "
              : "Developed a "}
            <Important
              content={
                isKo
                  ? "커스터마이징이 가능한 대시보드"
                  : "customizable dashboard with data visualization widgets "
              }
            />
            {isKo
              ? "를 구현했으며, 사용자가 풀필먼트 운영 현황을 한눈에 모니터링할 수 있도록 했습니다."
              : "(e.g., Recent Invoice, Market Order Status, Courier Bands Info) using the Recharts library to enable users to monitor fulfillment operations at a glance."}
          </>
        )}
      </TransDescription>,
      ,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "차트의 " : "Implemented "}
            <Important
              content={isKo ? "고급 기능들" : "advanced chart features "}
            />
            {isKo
              ? " (커스텀 툴팁, 반응형 레이아웃, 호버 효과, 디자인 시스템과 매끄럽게 통합되는 브랜드 컬러 스킴 등) 을 구현했습니다."
              : "such as custom tooltips with formatted data, responsive layouts, hover effects, and branded color schemes that integrate seamlessly with the design system."}
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
    images: [
      NotificationIosForeback,
      NotificationModal,
      NotificationMobile,
      NotificationSettings,
      NotificationSettingsMobile,
    ],
    points: [
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "FCM을 사용하여 " : ""}
            <Important
              content={isKo ? "푸시 알림" : "Implemented push notifications "}
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
            <Important
              content={
                isKo ? "실시간 알림 모달" : "real-time notification modal "
              }
            />
            {isKo
              ? "을 구현했고, 알림 모달에 무한 스크롤과 클릭 시 알림에 해당하는 업무 페이지로 이동하는 기능을 적용했습니다."
              : "supporting infinite scroll with clickable notifications linking to task-specific pages."}
          </>
        )}
      </TransDescription>,
      ,
      "Added a 'Do Not Disturb' mode for scheduled quiet hours on mobile apps.",
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
    ],
  },
  {
    title: "Testing & Code Reliability",
    images: [],
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
    title: "Fulfillment Platform Core Modules",
    images: [CorePage4, CorePage5, CorePage1, CorePage2, CorePage3, Mobile],
    points: [
      <TransDescription>
        {(isKo) => (
          <>
            {isKo
              ? "풀필먼트 플랫폼의 핵심 모듈(주문, 입고, 출고, 재고 등)을 개발하며 "
              : "Led end-to-end development of the Fulfillment Platform's core modules—including Orders, Inbound (Receiving), Outbound (Shipping), and Inventory—while "}
            <Important
              content={
                isKo
                  ? "데이터 흐름·운영 효율을 개선하고 고도화된 UI/UX를 구현"
                  : "optimizing data flows, enhancing operational efficiency, and delivering refined UI/UX"
              }
            />
            {isKo ? "했습니다." : "."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo
              ? "운영 관리 페이지들에는 완전한 CRUD 기능과 "
              : "The Operations Management pages include full CRUD functionality with "}
            <Important
              content={
                isKo
                  ? "검색 필터 및 데이터 테이블"
                  : "search filters and data tables "
              }
            />
            {isKo
              ? "을 적용했으며, 일괄 선택, 정렬, 상세 페이지 이동 기능을 추가하여 사용성을 개선했습니다."
              : "featuring bulk selection, sorting, and detail page navigation to improve usability."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo
              ? "반응형 모바일 지원으로 원활한 접근성과 상호작용을 보장했습니다."
              : "Ensured seamless accessibility and interaction with responsive mobile support."}
          </>
        )}
      </TransDescription>,
    ],
  },
  {
    title: "Performance Optimization & UX Enhancements",
    images: [],
    points: [
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
    title: "3D Warehouse Visualization",
    images: [],
    videos: [Center3d],
    points: [
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "" : "Created "}
            <Important
              content={isKo ? "3D 센터 시각화" : "3D center visualization "}
            />
            {isKo
              ? "를 기획부터 구현까지 담당하여 Three.js, @react-three/fiber, react-three/cannon 으로 구현했으며, 키보드/마우스 내비게이션과 클릭 가능한 랙 위치를 통한 실시간 재고 조회 기능을 지원했습니다."
              : "from planning to implementation using Three.js, @react-three/fiber and react-three/cannon, featuring keyboard/mouse navigation and clickable rack locations for real-time inventory inspection."}
          </>
        )}
      </TransDescription>,
      "Improved warehouse navigation by adding rack search and clickable mini-map features, enhancing usability for warehouse staffs.",
      <TransDescription>
        {(isKo) => (
          <>
            <Important
              content={
                isKo ? "렌더링 성능 최적화" : "Optimized rendering performance "
              }
            />
            {isKo
              ? "를 위해 컴포넌트 메모이제이션과 인스턴스화된 지오메트리를 적용하여 복잡한 창고 환경에서 "
              : "through component memoization and instanced geometries, "}
            <Important
              content={
                isKo
                  ? "부드러운 60fps 내비게이션을 보장"
                  : "ensuring smooth 60fps navigation "
              }
            />
            {isKo ? "했습니다." : "in complex warehouse environments."}
          </>
        )}
      </TransDescription>,
    ],
  },
  {
    title: "Security & Authentication Enhancements",
    images: [],
    points: [
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "모바일 앱 " : "Implemented "}
            <Important
              content={
                isKo
                  ? "백그라운드 알림 지속성"
                  : "dual-token authentication system "
              }
            />
            {isKo
              ? "을 위한 이중 토큰 인증 시스템을 구현하여 accessToken(세션 토큰)과 refreshToken(연장 토큰)을 활용한 로그인 유지 기능을 추가했습니다."
              : "with accessToken and refreshToken for mobile app background notification persistence and extended login sessions."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo
              ? "LocalStorage에서 "
              : "Enhanced security by transitioning from LocalStorage to "}
            <BoldBtn
              title={
                isKo
                  ? "HTTP-Only 쿠키 기반 인증"
                  : "HTTP-Only cookie-based authentication"
              }
              link={
                isKo
                  ? "https://jay-global.notion.site/local-storage-cookie-1c5e5ccd65b180e7950bd1441adf8541"
                  : "https://jay-global.notion.site/Explanation-of-Login-State-Management-Change-Local-Storage-Cookies-24ce5ccd65b180eca36bfd62f153cb70?source"
              }
              fontWeight="medium"
              customStyle="mr-1"
              refName="Connect to Notion"
            />
            {isKo
              ? "으로 전환하여 보안을 강화했으며, 중요 정보를 포함한 accessToken과 refreshToken은 자바스크립트 접근이 불가능하도록 설정했습니다."
              : "system, making critical tokens inaccessible to JavaScript while storing only token expiration times in LocalStorage."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "API 요청마다 " : "Implemented "}
            <Important
              content={isKo ? "CSRF 공격 방지 토큰" : "CSRF protection tokens "}
            />
            {isKo
              ? "을 검증하는 시스템을 구현하여 서버에서 해시 암호화된 토큰을 발급하고 클라이언트에서 매 요청마다 서버 검증을 받도록 했습니다."
              : "validated on every API request, with server-generated hash-encrypted tokens ensuring request authenticity and preventing cross-site attacks."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "클라이언트-서버 " : "Configured "}
            <Important
              content={
                isKo ? "동일 도메인 쿠키 정책" : "same-domain cookie policy "
              }
            />
            {isKo
              ? "을 구성하여 쿠키 사용을 동일한 도메인에서만 가능하도록 제한하여 보안을 개선하고, 자동 로그아웃 시 서버에서 모든 토큰을 만료시키는 안전한 세션 관리를 구현했습니다."
              : "restricting cookie usage to same-domain only, with secure session management that expires all tokens server-side during logout."}
          </>
        )}
      </TransDescription>,
    ],
  },
  {
    title: "SEO & Server-Side Rendering (SSR)",
    images: [],
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
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "페이지별 최적화를 통한 " : "Implemented "}
            <Important
              content={
                isKo
                  ? "포괄적인 메타데이터 시스템"
                  : "comprehensive metadata system "
              }
            />
            {isKo
              ? "을 구현하여 여러 라우트에 걸쳐 물류 및 WMS 산업 부문을 위한 37개 이상의 타겟 키워드를 생성했습니다."
              : "with page-specific optimization, generating 37+ targeted keywords for logistics and WMS industry sectors across multiple routes."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "CDN 호스팅 번역 파일에서 " : "Built "}
            <Important
              content={
                isKo
                  ? "다국어 SEO 아키텍처"
                  : "multi-language SEO architecture "
              }
            />
            {isKo
              ? "를 구축하여 한국어와 영어 시장을 지원하고 동적 콘텐츠 로딩을 구현했습니다."
              : "supporting Korean and English markets with dynamic content loading from CDN-hosted translation files."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "" : "Configured "}
            <Important
              content={
                isKo
                  ? "비동기 서버 컴포넌트와 정규 URL 구조"
                  : "async server components and canonical URL structure "
              }
            />
            {isKo
              ? "를 구성하여 중복 콘텐츠 페널티를 방지하고 페이지당 7개 이상의 최적화된 이미지를 통해 소셜 미디어 참여를 극대화했습니다."
              : "preventing duplicate content penalties while maximizing social media engagement through 7+ optimized images per page."}
          </>
        )}
      </TransDescription>,
    ],
  },

  {
    title: "Continuous Deployment & Versioning Improvements",
    images: [],
    codeBlocks: [versionDetectorCodeExample],
    points: [
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "" : "Implemented a "}
            <Important content={isKo ? "버전 탐지기" : "Version Detector "} />
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
      <TransDescription>
        {(isKo) => (
          <>
            {isKo
              ? "localStorage 기반 버전 비교와 강제 서비스 워커 업데이트를 통한 "
              : "Designed "}
            <Important
              content={
                isKo ? "고도화된 캐싱 전략" : "intelligent caching strategy "
              }
            />
            {isKo
              ? "을 설계하여 완전히 캐시가 무효화되고, 매끄럽게 클라이언트 코드가 업데이트 되도록 했습니다."
              : "with localStorage-based version comparison and forced service worker updates, ensuring complete cache invalidation and seamless client code refresh."}
          </>
        )}
      </TransDescription>,
    ],
  },
  {
    title: "Product Image Upload & Editing",
    images: [ImageUpload1, ImageUpload2, ImageUpload3],
    points: [
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "react-sortablejs 를 사용하여 " : "Implemented "}
            <Important
              content={
                isKo ? "드래그 앤 드롭 재정렬" : "drag-and-drop reordering "
              }
            />
            {isKo
              ? " 기능을 구현하여 직관적으로 이미지 순서를 변경할 수 있고, "
              : "using react-sortablejs for intuitive image sequence management, with "}
            <Important
              content={
                isKo
                  ? "자동 대표 이미지 지정"
                  : "automatic representative image designation "
              }
            />
            {isKo
              ? " 기능으로 첫 번째 이미지가 자동으로 설정되도록 했습니다."
              : "for the first position."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "react-cropper 를 사용해 " : "Created "}
            <Important
              content={
                isKo ? "이미지 편집 워크플로우" : "image cropping workflow "
              }
            />
            {isKo
              ? "를 구현하여, 실시간 미리보기가 가능하고 "
              : "with react-cropper integration, featuring real-time preview and "}
            <Important
              content={
                isKo ? "다중 해상도 처리" : "multiple resolution handling "
              }
            />
            {isKo
              ? "(썸네일/원본)를 통해 최적화된 이미지가 저장되고 보여지도록 했습니다."
              : "(thumbnail/original) for optimized storage and display."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            {isKo ? "안정적인 " : "Developed robust "}
            <Important
              content={
                isKo ? "이미지 업로드 파이프라인" : "image upload pipeline "
              }
            />
            {isKo
              ? "을 개발했고, 이는 다중 파일 선택(최대 5개 이미지), 포맷 검증(jpg, png), 크기 제한(최대 5MB), GCP 와의 비동기 클라우드 스토리지 통합으로 구현되었습니다."
              : "supporting multi-file selection (up to 5 images), format validation (jpg, png), size constraints (max 5MB), and asynchronous cloud storage integration with GCP."}
          </>
        )}
      </TransDescription>,
    ],
  },
  {
    title: "Multi-Size Barcode Printing System",
    images: [BarcodePrint1, BarcodePrint2],
    points: [
      <TransDescription>
        {(isKo) => (
          <>
            <Important
              content={
                isKo ? "맞춤형 바코드 출력 기능" : "Custom barcode printing "
              }
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
    images: [],
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
            {isKo ? " PR 이 생성되면 " : " When a pull request is created, "}
            <Important
              content={isKo ? "GitHub 워크플로우" : "GitHub workflow "}
            />
            {isKo
              ? " 내부에서 automatic-pr-labeler 가 실행되어 D-day 라벨을 자동으로 설정합니다."
              : "triggers automatic-pr-labeler to set D-day labels automatically."}
          </>
        )}
      </TransDescription>,
      <TransDescription>
        {(isKo) => (
          <>
            <Important
              content={
                isKo
                  ? "서버리스 자동화 파이프라인"
                  : "Built serverless automation pipeline "
              }
            />
            {isKo
              ? "을 Google Cloud Functions 와 HTTP 엔드포인트로 트리거하는 Cloud Scheduler를 이용하여 구축했고, 정확히 자정에 실행됩니다."
              : "using Google Cloud Functions with HTTP endpoint, triggered by Cloud Scheduler for precise midnight execution."}
            {isKo
              ? " D-day 라벨이 매일 자동으로 업데이트되어 'D-0'에 도달할 때까지 하루씩 감소합니다. "
              : " D-day label is automatically updated daily, reducing by one day until it reaches 'D-0'. "}
          </>
        )}
      </TransDescription>,
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
