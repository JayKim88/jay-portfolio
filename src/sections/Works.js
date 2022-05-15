import React from "react";
import styled from "styled-components";
import Leaf from "../assets/images/leaf.png";
import useFiretore from "../firebase/useFirestore";

function Works({ handleItem }) {
  const worksData = useFiretore("works");

  return (
    <Main className="works">
      <Title>
        <TitleBox>
          <LeafImg src={Leaf} />
          <TitleText>Works</TitleText>
        </TitleBox>
      </Title>
      <Section>
        <SectionMain>
          <ItemBox>
            {worksData.map((ele) => (
              <Item key={ele.id} onClick={() => handleItem(ele)}>
                <ImgWrapper key={ele.id}>
                  <ItemImg src={ele.thumbnail} name="img" />
                </ImgWrapper>
                <ItemInfo name="info">{ele.summary}</ItemInfo>
              </Item>
            ))}
          </ItemBox>
        </SectionMain>
      </Section>
    </Main>
  );
}

const Main = styled.section``;
const Title = styled.div`
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 4rem;
`;
const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 3rem;
`;
const SectionMain = styled.div`
  width: 65%;
  background-color: white;
  border-radius: 2rem;
  padding: 2rem 1rem 2rem 1rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
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

const ItemBox = styled.div`
  margin: 50px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 80px;
  @media only screen and (max-width: 1900px) {
    grid-template-columns: 1fr;
    transition: grid-template-columns 0.2s ease-in;
  }
`;

const Item = styled.div`
  border: 2px solid black;
  border-radius: 2rem;
  width: 35rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  opacity: 0.8;
  cursor: pointer;
  background-color: #fff;

  :hover {
    opacity: 1;
    transition: opacity 0.2s ease-in;
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 60%;
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

const ItemImg = styled.img`
  max-width: 95%;
  max-height: 95%;
  pointer-events: none;
`;
const ItemInfo = styled.div`
  margin-top: 2rem;
  padding-left: 2rem;
  pointer-events: none;
  font-size: 2rem;
`;

export default Works;
