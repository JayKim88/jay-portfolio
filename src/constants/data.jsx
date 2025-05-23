import React, { useState, useRef, useEffect } from "react";
import { throttle } from "lodash";

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

const achievements = [
  {
    title: "Dashboard Development & Performance Optimization",
    points: [
      "Customized dashboard with real-time visualized analytics using Recharts library.",
      <>
        Created
        <BoldBtn
          title="data visualization widgets"
          customStyle="mx-1"
          fontWeight="medium"
          imageUrls={[Widgets]}
        />
        (e.g., Recent Invoice, Market Order Status, Courier Bands Info),
        enabling users to monitor fulfillment operations at a glance.
      </>,
      <>
        Optimized recent invoice widget which requires 2 weeks data by reducing
        rendering time <Important content="from 13s to 1s (92% improvement) " />
        using Promise.all on all API requests.
      </>,
    ],
  },
  {
    title: "Cross-Platform Notification System",
    points: [
      <>
        Built a
        <BoldBtn
          title="Local HTTPS setup"
          customStyle="mx-1"
          fontWeight="medium"
          refName="Connect to Notion"
          link="https://jay-global.notion.site/https-17de5ccd65b180e59226cba874ddb95c?pvs=4"
        />
        using self-signed certificates and Nginx to support Service Workers and
        PWA development.
      </>,
      <>
        <BoldBtn
          title="Push notifications"
          customStyle="mr-1"
          fontWeight="medium"
          imageUrls={[NotificationIosForeback, NotificationAndroidDesktop]}
        />
        using FCM for desktop, mobile web (PWA), and mobile apps (Flutter
        InAppWebView for ios and android).
      </>,
      <>
        Developed a settings page for customizable notifications and
        <BoldBtn
          title="real-time notification modal"
          customStyle="mx-1"
          fontWeight="medium"
          imageUrls={[NotificationModal]}
        />
        supporting infinite scroll with clickable notifications linking to
        task-specific pages.
      </>,
      "Added a 'Do Not Disturb' mode for scheduled quiet hours on mobile apps.",
    ],
  },
  {
    title: "Testing & Code Reliability",
    points: [
      <>
        <Important content="Increased test coverage from 10% to 70% " />
        with 33 unit tests for core components and 54 integration tests across
        the entire application by Vitest and MSW, improving app stability.
      </>,
      <>
        <Important content="Implemented snapshot testing " />
        and
        <Important content=" automated UI testing " />
        with Storybook & Chromatic to prevent UI regressions.
      </>,
      <>
        <Important content="Optimized GitHub workflow " />
        with parallel testing & module caching, cutting test time by{" "}
        <Important content="50% (15m → 6m)" />.
      </>,
      <>
        Established a
        <BoldBtn
          title="test code guide"
          link="https://nomadkim880901.tistory.com/entry/%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1-%EA%B0%80%EC%9D%B4%EB%93%9C"
          customStyle="mx-1"
          fontWeight="medium"
          refName="Connect to Blog"
        />
        for the client project.
      </>,
    ],
  },
  {
    title: "Core Page Developments",
    points: [
      <>
        Developed core business pages (Operations Management, Sales, and
        Outbound, among others) with full CRUD functionality, incorporating{" "}
        <BoldBtn
          title="search filters and data tables"
          fontWeight="medium"
          imageUrls={[CorePage1, CorePage2, CorePage3]}
        />
        .
      </>,
      "Added bulk selection, sorting, and detail page navigation for improved usability to data table.",
      <>
        Designed with
        <BoldBtn
          title="responsive mobile support"
          fontWeight="medium"
          imageUrls={[Mobile]}
          customStyle="ml-1"
        />
        , ensuring seamless accessibility and interaction.
      </>,
    ],
  },
  {
    title: "Security & Authentication Enhancements",
    points: [
      <>
        Mitigated CSRF attacks and improved session security by transitioning
        from token-based to
        <BoldBtn
          title="cookie-based authentication"
          link="https://jay-global.notion.site/local-storage-cookie-1c5e5ccd65b180e7950bd1441adf8541?pvs=4"
          fontWeight="medium"
          customStyle="ml-1"
          refName="Connect to Notion"
        />
        , secure HTTP-only cookies with CSRF protection.
      </>,
      "Login session extension feature to reduce unintended logouts and enhance user experience.",
    ],
  },
  {
    title: "Product Image Upload & Editing",
    points: [
      <>
        <BoldBtn
          title="Intuitive image upload feature"
          imageUrls={[ImageUpload1, ImageUpload2, ImageUpload3]}
          customStyle="mr-1"
          fontWeight="medium"
        />
        that enhanced user experience by improving product recognition and
        usability.
      </>,
      <>
        Includes
        <Important content=" image cropping and reordering functions " />
        using react-cropper and react-sortablejs, that help users manage product
        images easily.
      </>,
    ],
  },
  {
    title: "3D Warehouse Visualization",
    points: [
      <>
        Created
        <BoldBtn
          title="3D center visualization"
          customStyle="mx-1"
          fontWeight="medium"
          videoUrl={Center3d}
        />
        using Three.js, allowing users to freely navigate the space with
        keyboard controls and mouse interactions.
      </>,
      "Improved warehouse navigation by adding rack search and clickable mini-map features, enhancing usability for warehouse staffs.",
    ],
  },
  {
    title: "Multi-Size Barcode Printing System",
    points: [
      <>
        <BoldBtn
          title="Custom barcode printing"
          customStyle="mr-1"
          fontWeight="medium"
          imageUrls={[BarcodePrint1, BarcodePrint2]}
        />
        for different product sizes using react-barcode and react-to-print.
      </>,
      "Includes print preview and 5 multi-size selection, increasing efficiency for warehouse staffs",
    ],
  },
  {
    title: "Continuous Deployment & Versioning Improvements",
    points: [
      <>
        Implemented a
        <BoldBtn
          title="Version Detector"
          customStyle="mx-1"
          fontWeight="medium"
          codeBlock={versionDetectorCodeExample}
        />
        for production, staging, and beta environments using the GitHub API
        (Octokit), ensuring automatic reloading of the latest client code.
      </>,
      <>
        Minimized version mismatch errors that previously occurred weekly on
        deployment days,
        <Important content=" reducing the frequency to near zero " />
        by ensuring seamless client-server synchronization.
      </>,
    ],
  },
  {
    title: "SEO & Server-Side Rendering (SSR)",
    points: [
      <>
        Enhanced SEO by
        <Important content=" migrating the landing page from React to Next.js " />
        leveraging SSR, optimized metadata, and Open Graph tags for improved
        visibility and rich link previews.
      </>,
      "Pre-rendered critical content, reducing initial load times and improving engagement across platforms.",
    ],
  },
  {
    title: "Automatic PR Labeler for team productivity",
    points: [
      <>
        Created a
        <BoldBtn
          title="Automated D-day labeler"
          customStyle="mx-1"
          fontWeight="medium"
          link="https://github.com/JayKim88/automatic-pr-labeler"
          refName="Connect to Github Repo"
        />
        for PRs, ensuring continuous visibility of deadlines.
      </>,
      "D-day label is automatically updated daily, reducing by one day until it reaches 'D-0'.",
      <>
        <BoldBtn
          title="Reduced delayed reviews by 50%"
          fontWeight="medium"
          link="https://nomadkim880901.tistory.com/entry/Automatic-PR-Labeler-%EB%A1%9C-%EC%BD%94%EB%93%9C-%EB%A6%AC%EB%B7%B0-%ED%9A%A8%EC%9C%A8-%EB%86%92%EC%9D%B4%EA%B8%B0"
          refName="Connect to Blog"
        />
        , improving team efficiency and product stability.
      </>,
    ],
  },
];

const viewBtnStyle = "fill-black w-6 h-6";

const Bold9Contribution = () => {
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

  return (
    <div className="mx-auto mt-2 mb-4 rounded-xl relative">
      <h2 className="text-[16px] font-bold mb-6 mt-8 text-main">
        Key Achievements & Contributions
      </h2>
      <div
        className="overflow-hidden transition-all duration-800 ease-in-out"
        style={{
          maxHeight: open ? ulSizes.height : 350,
        }}
      >
        <ul ref={ulRef} className={`flex flex-col gap-y-10`}>
          {achievements.map((achievement, index) => (
            <li key={index}>
              <h3 className="text-main text-[14.6px] font-semibold flex items-center mb-2">
                {`${index + 1}. ${achievement.title}`}
              </h3>
              <ul className="pl-6 gap-y-0.5 flex flex-col">
                {achievement.points.map((point, i) => (
                  <li key={i} className="marker:mr-1 list-disc">
                    {point}
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
            <span>View Less</span>
          </>
        ) : (
          <>
            <Eye className={viewBtnStyle} />
            <span>View more</span>
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
      <>
        Built strong relationships with FujiFilm branches across Asia, the
        Middle East, and Africa, offering
        <Important content=" technical support " />
        and fostering
        <Important content=" effective collaboration " />
        as key partners.
      </>,
      "Collaborated with R&D, quality management, and legal teams to resolve technical issues, revise OEM contracts, and support product development.",
      "Gathered market insights and drove product sales strategies by attending global medical exhibitions (RSNA, ECR, ARAB HEALTH).",
      <>
        Developed
        <Important content=" problem-solving and technical communication skills" />
        , now applied to building user-centric software solutions.
      </>,
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
      <>
        Built an
        <BoldBtn
          title="interactive dashboard"
          customStyle="mx-1"
          imageUrls={[MyStatsDashboard]}
        />
        with real-time charts tracking user progress by week/month.
      </>,
      <>
        Designed a
        <BoldBtn
          title="program-process page"
          link="https://github.com/JayKim88/build-your-body?tab=readme-ov-file#4-program-process-page"
          customStyle="mx-1"
          refName="Connect to Github Repo"
        />
        for tracking sets, modifying workouts, and auto-progressing to the next
        exercise.
      </>,
      <>
        Integrated NextAuth for
        <Important content=" Google OAuth authentication " />
        and implemented
        <Important content=" JWT-based session management " />
        to ensure secure login, session persistence, and access to personalized
        content.
      </>,
      <>
        Built scalable and optimized
        <BoldBtn
          title="CRUD APIs using MongoDB"
          link="https://github.com/JayKim88/build-your-body/tree/main/app/api"
          customStyle="mx-1"
          refName="Connect to Github Codes"
        />
        and aggregation pipelines to manage comprehensive fitness data,
        implemented timezone-aware queries, and enabled secure image uploads via
        signed URLs to Google Cloud Storage.
      </>,
      <>
        Integrated
        <Important content=" Zustand for client-side state management " />
        with session and local storage to persist exercise cart and user
        progress; designed modular stores to manage program details, workout
        duration, and completion status.
      </>,
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
      <>
        Applied
        <BoldBtn
          title="responsive web design"
          customStyle="mx-1"
          fontWeight="medium"
          imageUrls={[
            "https://user-images.githubusercontent.com/55373668/114337773-b63b5300-9b8c-11eb-912c-afa5537b3be4.gif",
          ]}
        />
        to ensure optimal user experience across desktop and mobile.
      </>,
      <>
        Developed backend logic using
        <Important content=" Firebase services " />
        including Firestore, Cloud Storage, and Authentication.
      </>,
      <>
        Built a real-time chat feature using
        <Important content=" Firestore’s snapshot listeners " />
        to enable instant messaging.
      </>,
      <>
        Integrated
        <Important content=" Google login/logout " />
        for seamless and secure user authentication.
      </>,
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
      <>
        Developed an
        <Important content=" interactive map and charts " />
        for visualizing COVID-19 insights using Chart.js and Leaflet.js
        libraries.
      </>,
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
      <>
        <Important content="Designed and Developed key pages" />: intro, signup,
        manual, write-diary, and creator page.
      </>,
      <>
        <Important content="Implemented drawing board " />
        with writing, saving, and editing functions.
      </>,
      <>
        <Important content="Ensured responsive design " />
        optimized for desktop and mobile.
      </>,
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
      <>
        Designed the
        <BoldBtn
          title="database schema"
          link="https://dbdiagram.io/d/homemade-601bc54e80d742080a3925bd"
          customStyle="mx-1"
          refName="Connect to DBDiagram"
        />
        using DBDiagram.
      </>,
      <>
        Developed
        <BoldBtn
          title="RESTful APIs"
          link="https://github.com/codestates/im25Homemade-server/blob/dev/routes/users.js"
          customStyle="mx-1"
          refName="Connect to Github Codes"
        />
        for user authentication and account management, including login, logout,
        signup, email duplication checks, account deletion, and profile updates.
      </>,
      <>
        Applied
        <Important content=" one-way encryption " />
        by crypto.js to prevent password leaks.
      </>,
      <>
        Implemented
        <Important content=" JWT-based authentication " />
        by generating and managing access and refresh tokens
      </>,
      <>
        <BoldBtn
          title="Deployed with AWS services "
          link="https://nomadkim880901.tistory.com/entry/%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8-https-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0"
          customStyle="mr-1"
          refName="Connect to Blog"
        />
        (EC2, RDS, S3, Route53, ELB, CM) for HTTPS hosting.
      </>,
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
      <>
        Built a ride-hailing app that connects passengers with drivers for
        on-demand transportation and delivery services.
        <Important content=" Learned React Native " />
        with React Navigation to implement
        <Important content=" dynamic routing " />
        and used GCP APIs to build a map-based application, enhancing the user
        experience with real-time location tracking and navigation features
      </>
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
      <>
        Built a food delivery and shopping app to learn React Native and React
        Navigation for dynamic routing. Gained experience with
        <Important content=" mobile styling using TailwindCSS " /> and explored
        content management with SanityCMS, integrating it into the app for
        dynamic content updates
      </>
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
      <>
        Built a video-sharing app using React Native with
        <Important content=" Expo Router and file-based routing" />. Learned to
        handle video data, styled the app with
        <Important content=" Mobile TailwindCSS" />, and gained experience
        implementing a backend server with Appwrite for user and data management
      </>
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
      <button
        className="hover:text-yellow-300 text-start cursor-pointer"
        onClick={() =>
          window.open(
            "https://engknou.knou.ac.kr/engknou/5774/subview.do?epTicket=LOG",
            "_blank"
          )
        }
      >
        Korea National Open University, South Korea
      </button>
    ),
  },
  {
    period: "Oct 2020 - Mar 2021",
    title: "Full-stack course based on JavaScript",
    contents: (
      <div className="flex flex-col gap-y-2">
        <div>Codestates(Boot camp), South Korea</div>
        <ul className="[&>li]:list-disc pl-6 gap-y-0.5 flex flex-col">
          <li>Learned React for the frontend and Node.js for the backend</li>
          <li>Solved algorithm problems on daily basis</li>
          <li>Worked on assignments consistently</li>
          <li>Participated in pair programming and code reviews</li>
          <li>
            Contributed to 2 collaborative projects: Homemade and Royal Diary
          </li>
        </ul>
      </div>
    ),
  },
  {
    period: "Mar 2010 - Feb 2018",
    title: "Bachelor of Economics",
    contents: "Soongsil University, South Korea",
  },
];
