import React from "react";
import styled from "styled-components";
import theme from "../common/style/themes/default";
import MainLogo from "../assets/images/logo.png";
import GitLogo from "../assets/images/github.png";
import BlogLogo from "../assets/images/tistory.svg";

function MainNav() {
  return (
    <Main>
      <NavList>
        <List>
          <Scroll>About</Scroll>
        </List>
        <List>
          <Scroll>Works</Scroll>
        </List>
        <List>
          <Scroll>Contact</Scroll>
        </List>
        <List>
          <Scroll>
            <LogoImg src={MainLogo} />
          </Scroll>
        </List>
        <List>
          <Scroll>
            <SocialImg src={GitLogo} />
          </Scroll>
        </List>
        <List>
          <Scroll>
            <SocialImg src={BlogLogo} />
          </Scroll>
        </List>
      </NavList>
    </Main>
  );
}

const Main = styled.nav`
  /* border: 3px solid red; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => theme.palette.white};
  /* display: flex;
  flex-direction: row; */
`;

const NavList = styled.ul`
  /* border: 3px solid yellow; */
  position: relative;
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 0;
`;
const List = styled.li`
  /* border: 3px solid blue; */
  margin-left: 0.5rem;
  cursor: pointer;
`;
const Scroll = styled.a``;
const LogoImg = styled.img`
  width: 3rem;
  height: 3rem;
  position: absolute;
  right: 50%;
  top: -70%;
`;
const SocialImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  right: ${(props) => (props.src === GitLogo ? "4rem" : "1rem")};
  top: -50%;
`;

export default MainNav;
