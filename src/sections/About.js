import React from "react";
import styled from "styled-components";
import Leaf from "../assets/images/leaf.png";
import Introduction from "../components/Introduction";
import PairReview from "../components/PairReview";
import Stacks from "../components/Stacks";
import Education from "../components/Education";
import Studies from "../components/Studies";

function About({ handleItem }) {
  return (
    <Main className="about">
      <Title>
        <TitleBox>
          <LeafImg src={Leaf} />
          <TitleText>About</TitleText>
        </TitleBox>
      </Title>
      <Section>
        <SectionMain>
          <Introduction />
          <PairReview />
          <Stacks />
        </SectionMain>
      </Section>
      <Section>
        <SectionMain>
          <Education />
          <Studies handleItem={handleItem} />
        </SectionMain>
      </Section>
    </Main>
  );
}

const Main = styled.section`
  /* border: 3px solid red; */
`;
const Title = styled.div`
  /* border: 3px solid blue; */
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 4rem;
`;
// @media only screen and (max-width: 600px)  {...}
const Section = styled.div`
  /* border: 3px solid green; */
  display: flex;
  justify-content: center;
`;

const TitleBox = styled.div`
  /* border: 3px solid black; */
  display: flex;
  justify-content: center;
  margin-right: 3rem;
`;

const SectionMain = styled.div`
  /* border: 3px solid yellow; */
  width: 65%;
  background-color: white;
  border-radius: 2rem;
  padding: 2rem 1rem 2rem 1rem;
  margin-bottom: 3rem;
`;

const LeafImg = styled.img`
  width: 3rem;
  height: 3rem;
`;

const TitleText = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  margin-left: 0.5rem;
`;

export default About;
