import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";

function Stacks() {
  const stackArray = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "REACT",
    "NODE JS",
    "EXPRESS",
    "MYSQL",
    "SEQUELIZE",
    "AWS DEPLOYMENT",
    "FIREBASE",
  ];

  return (
    <MainItem>
      <ItemTitle>Stacks</ItemTitle>
      <StacksContents>
        {stackArray.map((ele) => (
          <StacksElement key={ele}>{ele}</StacksElement>
        ))}
      </StacksContents>
    </MainItem>
  );
}

const MainItem = styled.div`
  /* border: 3px solid lightgreen; */
  display: flex;
  height: 10rem;
  /* width: 80%; */
`;
const ItemTitle = styled.div`
  /* border: 3px solid blue; */
  ${theme("fontStyle.itemTitle")}
`;
const StacksContents = styled.div`
  /* border: 3px solid blue; */
  width: 80%;
  /* padding: 1rem; */
  display: flex;
  flex-wrap: wrap;
`;
const StacksElement = styled.span`
  ${theme("fontStyle.stackStyle")}
`;

export default Stacks;
