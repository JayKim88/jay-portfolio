import { BoldBtn } from "../components/BoldBtn";
import { Highlight } from "../components/Highlight";

const Important = ({ content }) => (
  <strong className="mx-1 text-main">{content}</strong>
);

export const experiences = [
  {
    type: null,
    period: "Jun 2021 - Present",
    title: "Frontend Engineer",
    company: "Bold9, Seoul",
    summary:
      "E-commerce fulfilment company specialising in end-to-end logistics, including inventory management, multi-temperature storage, and international shipping",
    points: [
      <>
        Developed pages having search filters and paginated table with
        <Important content="performance optimisation" />
        using react-table and various reusable common components having
        versatility.
      </>,
      <>
        Implemented
        <Important content="dashboard with customised visualisation charts" />
        for better UX using recharts
      </>,
      "Dealt with validation in forms on client side using Formik, React forms library",
      <>
        Applied
        <Important content="unit, integration and E2E test" />
        by Vitest, msw and playwright and set up automatic UI test by storybook
        and chromatic, visual testing tool
      </>,
      <>
        Implemented
        <Important content="fulfilment Center 3d visualisation" />
        for UX using ThreeJS
      </>,
    ],
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
    details: [],
  },
  {
    type: null,
    period: "Jan 2018 - Feb 2020",
    title: "Overseas Sales",
    company: "DRGEM, Gyeonggi-do",
    summary:
      "Manufacturer of advanced digital X-ray systems for global medical imaging solutions",
    points: [
      " Built strong relationships with FujiFilm branches across Asia, the Middle East, and Africa, offering technical support and fostering effective collaboration as key partners",
    ],
  },
];

export const projects = [
  {
    type: "Personal",
    period: "May - Sep 2024",
    title: "Build Your Body",
    position: "Full Stack",
    paragraph:
      "A personal home training service designed to help users customize and track their fitness journey. It allows users to create personalized workout routines by setting weights, reps, and sets while rearranging exercises to fit their goals. A detailed logging system enables users to record their performance, including workout time, satisfaction ratings, and progress photos, providing valuable insights over time. An interactive dashboard visualizes progress through dynamic charts, offering real-time updates on workout history and achievements.",
    points: [
      "Integrated Google Login/Logout with NextAuth, enabling secure and smooth user authentication, and simplifying the onboarding process",
      "Empowered users to customise their workout routines allowing them to set weight, reps, and sets while rearranging exercises for their specific training goals",
      "Created a system for users to log and track performance in great detail, capturing sets, reps, workout time, satisfaction ratings, and even photos, offering valuable insights into their progress",
      "Developed an interactive dashboard that visualises user progress with dynamic charts, offering real-time updates on their workout history, achievements, and trends by week/month",
      "Built a community page to allow users to like and share workouts, creating a motivational space for fitness enthusiasts",
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
    paragraph:
      "An interactive photo-sharing platform that connects users through shared images and real-time conversations. It features a thoughtfully designed UI, seamless Google login, smooth image uploads and rendering, and a real-time chat window for instant engagement, creating a dynamic and immersive social experience.",
    points: [
      "UI configuration and design",
      "Google login/logout implementation",
      "Image upload and rendering function implementation",
      "Real-time chat window implementation",
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
    paragraph:
      "A chart and map service providing real-time global COVID-19 data, including infections, recoveries, and deaths. It features a well-designed UI, integrates the disease.sh API for data processing, and visualizes insights through interactive charts and maps using Chart.js and Leaflet.js",
    points: [
      "UI configuration and design",
      "Using disease.sh API, implementing coronavirus data processing logic",
      "Implementing charts and maps with Chart and Leaflet libraries",
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
      "A digital picture diary service letting users relive childhood vacation journaling with a retro-style interface. They can draw, write, edit entries, share diaries, exchange encouraging comments, and interact using stamp-like reactions, recreating the joy of childhood journaling.",
    points: [
      "Developed key pages: intro, signup, manual, write-diary, and creator page",
      "Integrated social logins (Google and Kakao) for seamless access",
      "Implemented drawing board with writing, saving, and editing functions",
      "Added smooth loading effects to enhance page transition experience",
      "Ensured responsive design optimized for various devices",
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
      "A recipe-sharing service created in response to increased home cooking during COVID-19. Users can share family recipes, rate, and comment on others’ dishes, while the platform highlights popular recipes of the week, fostering a community around discovering and enjoying delicious meals.",
    points: [
      "Implemented user-side API which includes login, logout, signup, email duplication check, account deletion, and user information updates",
      "Used JavaScript Crypto library for one-way encryption to prevent password leaks",
      "Implemented JWT authentication by generating AccessToken and RefreshToken",
      "Deployed with AWS services (EC2, RDS, S3, Route53, ELB, CM) for HTTPS hosting",
      "Designed the database schema using DBDiagram",
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
      "Built a ride-hailing app that connects passengers with drivers for on-demand transportation and delivery services. Learned React Native with React Navigation to implement dynamic routing and used GCP APIs to build a map-based application, enhancing the user experience with real-time location tracking and navigation features.",
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
      "Built a food delivery and shopping app to learn React Native and React Navigation for dynamic routing. Gained experience with mobile styling using TailwindCSS and explored content management with SanityCMS, integrating it into the app for dynamic content updates.",
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
      "Built a video-sharing app using React Native with Expo Router and file-based routing. Learned to handle video data, styled the app with Mobile TailwindCSS, and gained experience implementing a backend server with Appwrite for user and data management.",
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
    title: (
      <BoldBtn
        title="Korea National Open University, South Korea"
        link="https://engknou.knou.ac.kr/engknou/5774/subview.do?epTicket=LOG"
        customStyle="ml-0"
      />
    ),
    contents: "Computer Science(3.7/4.5)",
  },
  {
    period: "Oct 2020 - Mar 2021",
    title: "Codestates(Boot camp), South Korea",
    contents:
      "Completed a full-stack course based on JavaScript, where I learned React for the frontend and Node.js for the backend. Solved algorithm problems daily, worked on assignments consistently, and participated in pair programming and code reviews. At last, contributed to two collaborative projects: Homemade and Royal Diary.",
  },
  {
    period: "Mar 2010 - Feb 2018",
    title: "Soongsil University, South Korea",
    contents: "Economics(3.8/4.5)",
  },
];
