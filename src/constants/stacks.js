import html from "../assets/images/stacks/html.svg";
import css from "../assets/images/stacks/css3.svg";
import javascript from "../assets/images/stacks/javascript.svg";
import typescript from "../assets/images/stacks/typescript.svg";
import react from "../assets/images/stacks/react.svg";
import apolloClient from "../assets/images/stacks/apollo-client.svg";
import threeJS from "../assets/images/stacks/threejs.svg";
import reactNative from "../assets/images/stacks/react-native.svg";
import tailwindCss from "../assets/images/stacks/tailwindcss.svg";
import viteJS from "../assets/images/stacks/vitejs.svg";
import flutter from "../assets/images/stacks/flutter.svg";
import zustand from "../assets/images/stacks/zustand.svg";
import i18next from "../assets/images/stacks/i18next.svg";
import nextJS from "../assets/images/stacks/nextjs.svg";

import nodeJS from "../assets/images/stacks/nodejs.svg";
import graphQL from "../assets/images/stacks/graphql.svg";
import mongoDB from "../assets/images/stacks/mongodb.svg";
import supabase from "../assets/images/stacks/supabase.svg";

import gcp from "../assets/images/stacks/gcp.svg";
import firebase from "../assets/images/stacks/firebase.svg";
import vercel from "../assets/images/stacks/vercel.svg";
import docker from "../assets/images/stacks/docker.svg";
import githubActions from "../assets/images/stacks/github-actions.svg";
import vitest from "../assets/images/stacks/vitest.svg";
import storybook from "../assets/images/stacks/storybook.svg";
import playwright from "../assets/images/stacks/playwright.svg";

// Expert > Advanced > Proficient > Familiar

const client = [
  {
    name: "HTML5",
    img: html,
    level: "Expert",
    keyword: "Semantic Markup, Accessibility",
  },
  {
    name: "CSS3",
    img: css,
    level: "Expert",
    keyword: "Responsive Layout, Animation",
  },
  {
    name: "JavaScript",
    img: javascript,
    level: "Expert",
    keyword: "Async Patterns, Performance",
  },
  {
    name: "React",
    img: react,
    level: "Expert",
    keyword: "Hooks, Performance Optimization",
  },
  {
    name: "TypeScript",
    img: typescript,
    level: "Advanced",
    keyword: "Type Safety, Generics",
  },
  {
    name: "Next.js",
    img: nextJS,
    level: "Advanced",
    keyword: "SSR/SSG, App Router, SEO",
  },
  {
    name: "Apollo Client",
    img: apolloClient,
    level: "Advanced",
    keyword: "GraphQL Caching, Local State",
  },
  {
    name: "GraphQL",
    img: graphQL,
    level: "Advanced",
    keyword: "API Integration, Type Safety",
  },
  { name: "Vite", img: viteJS, level: "Advanced", keyword: "Fast Build, HMR" },
  {
    name: "React Native",
    img: reactNative,
    level: "Proficient",
    keyword: "Cross-platform, Native",
  },
  {
    name: "Tailwind CSS",
    img: tailwindCss,
    level: "Proficient",
    keyword: "Utility-first, Responsive Design",
  },
  // {
  //   name: "Zustand",
  //   img: zustand,
  //   level: "Proficient",
  //   keyword: "Lightweight Global State",
  // },
  // {
  //   name: "i18next",
  //   img: i18next,
  //   level: "Proficient",
  //   keyword: "Translation Pipeline",
  // },
  // {
  //   name: "Flutter",
  //   img: flutter,
  //   level: "Familiar",
  //   keyword: "Hybrid WebView",
  // },
  {
    name: "Three.js",
    img: threeJS,
    level: "Familiar",
    keyword: "3D Visualization, WebGL",
  },
];

const server = [
  {
    name: "Node.js",
    img: nodeJS,
    level: "Proficient",
    keyword: "Express, REST API, Middleware",
  },
  {
    name: "MongoDB",
    img: mongoDB,
    level: "Proficient",
    keyword: "Aggregation Pipeline",
  },
  // {
  //   name: "Supabase",
  //   img: supabase,
  //   level: "Familiar",
  //   keyword: "Auth, Realtime, Storage",
  // },
];

const devops = [
  {
    name: "GCP",
    img: gcp,
    level: "Advanced",
    keyword: "Cloud Run, Storage, Monitoring",
  },
  {
    name: "Firebase",
    img: firebase,
    level: "Advanced",
    keyword: "FCM, Hosting, Firestore",
  },

  {
    name: "Vercel",
    img: vercel,
    level: "Advanced",
    keyword: "Serverless Deployment",
  },
  {
    name: "GitHub Actions",
    img: githubActions,
    level: "Proficient",
    keyword: "CI/CD, Parallel Testing",
  },
  {
    name: "Docker",
    img: docker,
    level: "Familiar",
    keyword: "CI/CD, Containerization",
  },
];

const testing = [
  {
    name: "Vitest",
    img: vitest,
    level: "Advanced",
    keyword: "Unit & Integration Tests",
  },
  {
    name: "Storybook",
    img: storybook,
    level: "Proficient",
    keyword: "Visual Regression",
  },
  // {
  //   name: "Playwright",
  //   img: playwright,
  //   level: "Familiar",
  //   keyword: "E2E Testing",
  // },
];

export { client, server, devops, testing };
