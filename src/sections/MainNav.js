import React from "react";
import styled from "styled-components";
import theme from "../common/style/themes/default";
import MainLogo from "../assets/images/logo.png";
import GitLogo from "../assets/images/github.png";
import BlogLogo from "../assets/images/tistory.svg";

function MainNav() {
  document.addEventListener("scroll", () => {
    const about = document.getElementsByClassName("about")[0].offsetTop;
    const works = document.getElementsByClassName("works")[0].offsetTop;
    const contact = document.getElementsByClassName("contact")[0].offsetTop;
    const navBtns = document.querySelectorAll(".navBtn");
    const btnAbout = document.getElementsByClassName("navAbout");
    const btnWorks = document.getElementsByClassName("navWorks");
    const btnContact = document.getElementsByClassName("navContact");

    navBtns.forEach((btn) => {
      btn.style.color = "black";
    });
    let currentScrollValue = document.documentElement.scrollTop + 10;

    if (about <= currentScrollValue && currentScrollValue < works) {
      btnAbout[0].style.color = theme.palette.green;
    } else if (works <= currentScrollValue && currentScrollValue < contact) {
      btnWorks[0].style.color = theme.palette.green;
    } else if (contact <= currentScrollValue) {
      btnContact[0].style.color = theme.palette.green;
    }
  });

  const handleScroll = (e) => {
    const target = e.target.innerText;
    const home = document.getElementsByClassName("home")[0].offsetTop;
    const about = document.getElementsByClassName("about")[0].offsetTop;
    const works = document.getElementsByClassName("works")[0].offsetTop;
    const contact = document.getElementsByClassName("contact")[0].offsetTop;

    if (target === "About") {
      window.scrollTo({ top: about, behavior: "smooth" });
    } else if (target === "Works") {
      window.scrollTo({ top: works, behavior: "smooth" });
    } else if (target === "Contact") {
      window.scrollTo({ top: contact, behavior: "smooth" });
    } else {
      window.scrollTo({ top: home, behavior: "smooth" });
    }
  };

  return (
    <Main>
      <NavList>
        <List>
          <Scroll className="navBtn navAbout" onClick={handleScroll}>
            About
          </Scroll>
        </List>
        <List>
          <Scroll className="navBtn navWorks" onClick={handleScroll}>
            Works
          </Scroll>
        </List>
        <List>
          <Scroll className="navBtn navContact" onClick={handleScroll}>
            Contact
          </Scroll>
        </List>
        <List>
          <Scroll>
            <LogoImg
              className="navBtn navHome"
              src={MainLogo}
              onClick={handleScroll}
            />
          </Scroll>
        </List>
        <List>
          <Scroll>
            <SocialLink href="https://github.com/JayKim88" target="_blank">
              <SocialImg src={GitLogo} />
            </SocialLink>
          </Scroll>
        </List>
        <List>
          <Scroll>
            <SocialLink
              href="https://nomadkim880901.tistory.com/"
              target="_blank"
            >
              <SocialImg src={BlogLogo} />
            </SocialLink>
          </Scroll>
        </List>
      </NavList>
    </Main>
  );
}

const Main = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: ${theme.palette.white};
  z-index: 100;
  display: flex;
  flex-direction: row;
`;

const NavList = styled.ul`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 2rem;
`;
const List = styled.li`
  margin-right: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
`;
const Scroll = styled.div``;
const LogoImg = styled.img`
  width: 3.8rem;
  height: 3.8rem;
  position: absolute;
  right: 50%;
  top: -10%;
`;
const SocialLink = styled.a``;
const SocialImg = styled.img`
  width: 3rem;
  height: 3rem;
  position: absolute;
  right: ${(props) => (props.src === GitLogo ? "6rem" : "2rem")};
  top: 0%;
`;

export default MainNav;
