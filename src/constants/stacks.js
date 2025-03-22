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

import nodeJS from "../assets/images/stacks/nodejs.svg";
import mongoDB from "../assets/images/stacks/mongodb.svg";
import gcp from "../assets/images/stacks/gcp.svg";
import vercel from "../assets/images/stacks/vercel.svg";
import firebase from "../assets/images/stacks/firebase.svg";

import nextJS from "../assets/images/stacks/nextjs.svg";
import graphQL from "../assets/images/stacks/graphql.svg";

const client = [
  {
    name: "Html",
    img: html,
    usage: 100,
  },
  {
    name: "Css3",
    img: css,
    usage: 100,
  },
  {
    name: "Javascript",
    img: javascript,
    usage: 100,
  },
  {
    name: "Typescript",
    img: typescript,
    usage: 90,
  },
  {
    name: "React",
    img: react,
    usage: 100,
  },
  {
    name: "Apollo Client",
    img: apolloClient,
    usage: 80,
  },
  {
    name: "Three JS",
    img: threeJS,
    usage: 20,
  },
  {
    name: "React Native",
    img: reactNative,
    usage: 30,
  },
  {
    name: "Tailwind CSS",
    img: tailwindCss,
    usage: 40,
  },
  {
    name: "Vite JS",
    img: viteJS,
    usage: 70,
  },
];

const server = [
  {
    name: "Node JS",
    img: nodeJS,
    usage: 40,
  },
  {
    name: "Typescript",
    img: typescript,
    usage: 40,
  },
  {
    name: "MongoDB",
    img: mongoDB,
    usage: 50,
  },
  {
    name: "GCP",
    img: gcp,
    usage: 60,
  },
  {
    name: "Vercel",
    img: vercel,
    usage: 30,
  },
  {
    name: "Firebase",
    img: firebase,
    usage: 50,
  },
];

const both = [
  {
    name: "Next JS",
    img: nextJS,
    usage: 60,
  },
  {
    name: "GraphQL",
    img: graphQL,
    usage: 80,
  },
];

export { client, server, both };
