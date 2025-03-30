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

const Important = ({ content }) => (
  <span className="text-main font-medium">{content}</span>
);

const achievements = [
  {
    title: "Dashboard Development & Performance Optimization",
    points: [
      "Customized dashboard with real-time visualized analytics using Recharts library.",
      <>
        Implemented various
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
    title: "Platform-Specific Notification System",
    points: [
      <>
        Real-time push notifications using FCM for
        <Important content=" desktop, mobile web (PWA), and mobile apps " />
        (Flutter InAppWebView for ios and android).
      </>,
      "Developed a settings page for customizable notifications and a real-time notification modal with cursor-based infinite scrolling.",
      "Added a 'Do Not Disturb' mode for scheduled quiet hours on mobile apps.",
      <>
        Built a
        <BoldBtn
          title="local HTTPS testing environment"
          customStyle="mx-1"
          fontWeight="medium"
          link="https://jay-global.notion.site/https-17de5ccd65b180e59226cba874ddb95c?pvs=4"
        />
        with self-signed certificates and Nginx to support Service Worker and
        PWA development.
      </>,
    ],
  },
  {
    title: "Testing & Code Reliability",
    points: [
      <>
        Increased test coverage
        <Important content=" from 10% to 70% " />
        with 33 unit tests for core components and
        <BoldBtn
          title="54 integration tests"
          codeBlock={testCodeExample}
          fontWeight="medium"
          customStyle="mx-1"
        />
        across the entire application by Vitest and MSW, improving app
        stability.
      </>,
      "Implemented snapshot testing and automated UI testing with Storybook & Chromatic to prevent UI regressions.",
      <>
        Optimized GitHub workflow with parallel testing & module caching,
        cutting test time by <Important content="50% (15m → 6m)" />.
      </>,
      <>
        Established a
        <BoldBtn
          title="Guide to writing test code"
          link="https://nomadkim880901.tistory.com/entry/%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1-%EA%B0%80%EC%9D%B4%EB%93%9C"
          customStyle="mx-1"
          fontWeight="medium"
        />
        for the client project.
      </>,
    ],
  },
  {
    title: "New Page Developments",
    points: [
      <>
        Developed core business pages (Operations Management, Sales, and
        Outbound, among others) with full CRUD functionality, incorporating{" "}
        <BoldBtn
          title="search filters and data tables."
          fontWeight="medium"
          imageUrls={[CorePage1, CorePage2, CorePage3]}
        />
      </>,
      "Added bulk selection, sorting, and detail page navigation for improved usability to data table.",
    ],
  },
  {
    title: "Security & Authentication Enhancements",
    points: [
      <>
        Mitigated CSRF attacks and improved session security by transitioning
        from token-based authentication to
        <BoldBtn
          title="secure HTTP-only cookies with CSRF protection."
          link="https://jay-global.notion.site/local-storage-cookie-1c5e5ccd65b180e7950bd1441adf8541?pvs=4"
          fontWeight="medium"
          customStyle="mr-1"
        />
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
      "Includes image cropping and reordering functions using react-cropper and react-sortablejs, that help users manage product images easily.",
    ],
  },
  {
    title: "3D Warehouse Visualization",
    points: [
      <>
        Created
        <BoldBtn
          title="3D fulfillment center visualization"
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
      "Custom barcode printing for different product sizes using react-barcode and react-to-print.",
      <>
        Includes
        <BoldBtn
          title="print preview and 5 multi-size selection"
          customStyle="ml-1"
          fontWeight="medium"
          imageUrls={[BarcodePrint1, BarcodePrint2]}
        />
        , increasing efficiency for warehouse staffs.
      </>,
    ],
  },
  {
    title: "Continuous Deployment & Versioning Improvements",
    points: [
      "Integrated GitHub API (Octokit) to detect new versions for production, staging, and beta environments, ensuring automatic reloading of the latest client code.",

      <>
        Eliminated frequent version mismatch errors that occurred weekly on
        deployment days,
        <Important content=" reducing the frequency to near zero " />
        by ensuring seamless client-server synchronization.
      </>,
    ],
  },
  {
    title: "SEO & Server-Side Rendering (SSR)",
    points: [
      "Improved SEO with Next.js SSR, optimized metadata, and Open Graph tags for better ranking and previews.",
      "Pre-rendered critical content, reducing initial load times and improving engagement across platforms.",
    ],
  },
  {
    title: "Automatic PR Labeler for team productivity",
    points: [
      <>
        Implemented an
        <BoldBtn
          title="automated D-day labeler"
          customStyle="mx-1"
          fontWeight="medium"
          link="https://github.com/JayKim88/automatic-pr-labeler"
        />
        for PRs, ensuring continuous visibility of deadlines.
      </>,
      "D-day label is automatically updated daily, reducing by one day until it reaches 'D-0'.",
      <>
        <BoldBtn
          title="Reduced delayed reviews by 50%"
          fontWeight="medium"
          link="https://nomadkim880901.tistory.com/entry/Automatic-PR-Labeler-%EB%A1%9C-%EC%BD%94%EB%93%9C-%EB%A6%AC%EB%B7%B0-%ED%9A%A8%EC%9C%A8-%EB%86%92%EC%9D%B4%EA%B8%B0"
        />
        , improving team efficiency and product stability.
      </>,
    ],
  },
];

const viewBtnStyle =
  "fill-black w-6 h-6 group-hover/view:fill-yellow-300 transition-all duration-200";
const viewBtnTextStyle =
  "group-hover/view:text-yellow-300 transition-all duration-200";

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

    requestAnimationFrame(() => {
      setTimeout(() => {
        window.scrollTo({
          top: experiencePosition - 100,
          behavior: "instant",
        });
      }, 1000);
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
      <h2 className="text-[16px] font-bold mb-6 text-main">
        Key Achievements & Contributions
      </h2>
      <div
        className="overflow-hidden transition-all duration-800 ease-in-out"
        style={{
          maxHeight: open ? ulSizes.height : 400,
        }}
      >
        <ul ref={ulRef} className={`flex flex-col gap-y-6`}>
          {achievements.map((achievement, index) => (
            <li key={index}>
              <h3 className="text-main text-[14.6px] font-semibold flex items-center mb-2">
                {achievement.title}
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
        className={`absolute px-2 py-1 bg-amber-50 rounded-2xl font-medium flex 
          justify-center items-center gap-x-1 min-w-[124px] ${
            open ? "-bottom-8" : "-bottom-4"
          } 
          text-black cursor-pointer group/view`}
        style={{
          right: ulSizes.width / 2 - 62,
        }}
        onClick={handleOpen}
      >
        {open ? (
          <>
            <EyeSlash className={viewBtnStyle} />
            <span className={viewBtnTextStyle}>View Less</span>
          </>
        ) : (
          <>
            <Eye className={viewBtnStyle} />
            <span className={viewBtnTextStyle}>View more</span>
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
      "E-commerce fulfilment company specialising in end-to-end logistics, including inventory management, multi-temperature storage, and international shipping",
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
    ],
  },
  {
    type: null,
    period: "Jan 2018 - Feb 2020",
    title: "Overseas Sales",
    company: "DRGEM, Gyeonggi-do",
    summary:
      "Manufacturer of advanced digital X-ray systems for global medical imaging solutions",
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
      "Attended global medical exhibitions (RSNA, ECR, ARAB HEALTH) to gather market insights and drive product strategy.",
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
      "Implemented Google Login/Logout with NextAuth for seamless authentication and onboarding.",
      "Enabled users to customize workout routines by adjusting weight, reps, sets, and exercise order.",
      <>
        Designed a
        <Important content=" Program process page " />
        for tracking sets, modifying workouts, and auto-progressing to the next
        exercise.
      </>,
      "Designed a Workout complete page to capture workout details, including sets, reps, time, satisfaction, and photos.",
      <>
        Built an
        <Important content=" interactive dashboard with real-time charts " />
        tracking user progress by week/month.
      </>,
      "Created a community page for users to like and share workouts, fostering motivation.",
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
        title: "procedure",
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
      "Implemented responsive web design to ensure optimal user experience across desktop and mobile.",
      "Integrated Google login/logout functionality for seamless user authentication.",
      "Developed an image upload and rendering feature using Firebase for efficient media management.",
      "Built a real-time chat window for instant messaging and user interaction.",
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
        title: "procedure",
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
      "Developed interactive charts and maps for visualizing COVID-19 insights using Chart.js and Leaflet.js libraries.",
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
        title: "procedure",
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
        <Important content="Developed key pages" />: intro, signup, manual,
        write-diary, and creator page.
      </>,
      "Integrated social logins (Google and Kakao) for seamless access.",
      <>
        <Important content="Implemented drawing board " />
        with writing, saving, and editing functions.
      </>,
      "Added smooth loading effects to enhance page transition experience.",
      "Ensured responsive design optimized for desktop and mobile.",
    ],
    stacks: ["React", "Typescript", "React Canvas Draw"],
    refs: [
      {
        type: "github",
        url: "https://github.com/codestates/RoyalDiary-client/wiki",
      },
      {
        type: "note",
        title: "procedure",
        url: "https://nomadkim880901.tistory.com/508",
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
      "Designed the database schema using DBDiagram.",
      <>
        Implemented
        <Important content=" user-side APIs " />
        which includes login, logout, signup, email duplication check, account
        deletion, and user information updates.
      </>,
      "Used JavaScript Crypto library for one-way encryption to prevent password leaks.",
      "Implemented JWT authentication by generating acccess and refresh tokens.",
      <>
        Deployed with
        <Important content=" AWS services (EC2, RDS, S3, Route53, ELB, CM) " />
        for HTTPS hosting.
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
        title: "retrospect",
        url: "https://nomadkim880901.tistory.com/466",
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
    paragraph:
      "Built a ride-hailing app that connects passengers with drivers for on-demand transportation and delivery services. Learned React Native with React Navigation to implement dynamic routing and used GCP APIs to build a map-based application, enhancing the user experience with real-time location tracking and navigation features",
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
    paragraph:
      "Built a food delivery and shopping app to learn React Native and React Navigation for dynamic routing. Gained experience with mobile styling using TailwindCSS and explored content management with SanityCMS, integrating it into the app for dynamic content updates",
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
    paragraph:
      "Built a video-sharing app using React Native with Expo Router and file-based routing. Learned to handle video data, styled the app with Mobile TailwindCSS, and gained experience implementing a backend server with Appwrite for user and data management",
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
        className="hover:text-yellow-300"
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
