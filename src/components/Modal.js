import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";

function Modal({ ItemData, handleItem }) {
  // const itemData = useFiretore("studies");
  // console.log(ItemData);
  const {
    githubLink,
    hostingLink,
    period,
    position,
    projectType,
    purpose,
    reviewLink,
    role,
    stacks,
    summary,
    title,
  } = ItemData;

  const handleClick = (e) => {
    // console.log(e.target.classList);
    if (e.target.classList.contains("backdrop")) {
      handleItem(null);
    }
  };

  return (
    <Backdrop className="backdrop" onClick={handleClick}>
      <Main>
        <Title>{title}</Title>
        <Body>
          <Summary>{summary}</Summary>
          <Items>
            <Item>
              <Name>프로젝트타입</Name>
              <Content>{projectType}</Content>
            </Item>
            <Item>
              <Name>주제</Name>
              <Content>{purpose}</Content>
            </Item>
            <Item>
              <Name>작업기간</Name>
              <Content>{period}</Content>
            </Item>
            <Item>
              <Name>포지션</Name>
              <Content>{position}</Content>
            </Item>
            <Item>
              <Name>사용스택</Name>
              <StackBox>
                {stacks.map((ele) => (
                  <StackItem key={ele}>{ele}</StackItem>
                ))}
              </StackBox>
            </Item>
            <Item>
              <Name>역할</Name>
              <RoleBox>
                {role.map((ele) => (
                  <Role key={ele}>{ele}</Role>
                ))}
              </RoleBox>
            </Item>
            <Item>
              <Name>배포링크</Name>
              <Content>
                <ContentLink href={hostingLink} target="_blank">
                  {hostingLink}
                </ContentLink>
              </Content>
            </Item>
            <Item>
              <Name>깃헙링크</Name>
              <Content>
                <ContentLink href={githubLink} target="_blank">
                  {githubLink}
                </ContentLink>
              </Content>
            </Item>
            <Item>
              <Name>회고록</Name>
              <Content>
                <ContentLink href={reviewLink} target="_blank">
                  {reviewLink}
                </ContentLink>
              </Content>
            </Item>
          </Items>
        </Body>
      </Main>
    </Backdrop>
  );
}

const Backdrop = styled.div`
  /* border: 3px solid yellow; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  cursor: pointer;
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Main = styled.div`
  border: 3px solid black;
  border-radius: 2rem;
  background: white;
  /* height: 50rem; */
  width: 40rem;
  display: flex;
  flex-direction: column;
  cursor: default;
`;

const Body = styled.div`
  /* border: 3px solid skyblue; */
  margin: 1rem;
`;

const Title = styled.div`
  border-bottom: 3px solid black;
  font-size: 2.5rem;
  font-weight: 500;
  text-align: start;
  color: #07c173;
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
`;

const Summary = styled.div`
  /* border: 3px solid purple; */
  font-size: 1.3rem;
  font-weight: 500;
  margin: 0.2rem;
  margin-bottom: 1rem;
`;

const Items = styled.div`
  /* border: 3px solid purple; */
`;

const Item = styled.div`
  /* border: 3px solid red; */
  display: flex;
  margin-bottom: 0.5rem;
`;

const Name = styled.div`
  /* border: 3px solid lightgreen; */
  width: 20%;
  margin: 0.2rem;
  font-weight: 400;
`;

const Content = styled.div`
  /* border: 3px solid lightgreen; */
  width: 80%;
  display: flex;
  align-items: center;
  margin: 0.2rem;
`;

const StackBox = styled.div`
  /* border: 3px solid lightgreen; */
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.2rem;
`;

const StackItem = styled.span`
  ${theme("fontStyle.stackStyle")}
  height: 0.8rem;
  font-size: 1rem;
  margin: 0 0.5rem 0.5rem 0;
`;

const RoleBox = styled.div`
  /* border: 3px solid lightgreen; */
  margin-top: 0.2rem;
`;

const Role = styled.div`
  /* border: 3px solid orange; */
  margin-bottom: 0.2rem;
`;

const ContentLink = styled.a`
  /* border: 3px solid orange; */
  width: 25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
`;

export default Modal;
