import React from "react";
import styled from "styled-components";
import theme from "../common/style/themes/default";
import Profile from "../assets/images/profile.png";
import BackgroundImg from "../assets/images/background.jpg";

function Home() {
  return (
    <Main className="home">
      <Background src={BackgroundImg} />
      <Contents>
        <ImgBox>
          <ProfileImg src={Profile} />
        </ImgBox>
        <TextBox>
          <IntroHeader>
            안녕하세요,
            <br /> 저는 디자인이 즐거운 개발자
            <br /> 김용재 입니다.
          </IntroHeader>
          <IntroBody>
            인터랙티브하고 직관적인 웹 디자인을 통해
            <br /> 사용자의 웹 경험에 기여하고 싶습니다.
          </IntroBody>
        </TextBox>
      </Contents>
    </Main>
  );
}

const Main = styled.section`
  /* border: 3px solid red; */
  height: 100vh;
  position: relative;
`;

const Background = styled.img`
  z-index: -99;
  width: 100%;
  height: 100%;
`;

const Contents = styled.div`
  /* border: 3px solid blue; */
  position: absolute;
  bottom: 13%;
  height: 20rem;
  width: 100%;
  display: flex;
`;

const ImgBox = styled.div`
  /* border: 3px solid green; */
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5rem;
`;

const TextBox = styled.div`
  /* border: 3px solid green; */
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ProfileImg = styled.img`
  /* border: 3px solid yellow; */
  width: 18rem;
  height: 18rem;
`;
const IntroHeader = styled.div`
  font-size: 2rem;
  font-weight: 600;
`;
const IntroBody = styled.div`
  font-size: 1.2rem;
  color: ${theme.palette.grayscale[3]};
`;

export default Home;
