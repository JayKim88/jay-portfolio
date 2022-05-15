import React from "react";
import styled from "styled-components";
import treeImg from "../assets/images/tree.png";

function Contact() {
  return (
    <Main className="contact">
      <Contents>
        <Comment>
          Would you work with me? <br />
          Feel free to contact me : )
        </Comment>
        <Mobile>Mobile: +82 10 8636 0076</Mobile>
        <Email>
          Email: &nbsp;
          <EmailLink href="mailto:mearak43@gmail.com?subject=Contact from">
            mearak43@gmail.com
          </EmailLink>
        </Email>
      </Contents>
      <BackgroundImg src={treeImg} />
    </Main>
  );
}

const Main = styled.div`
  position: relative;
  height: 70em;
`;

const BackgroundImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 15%;
  width: 32rem;
`;

const Contents = styled.div`
  z-index: 99;
  position: absolute;
  width: 40rem;
  top: 28rem;
  left: 48%;
  display: flex;
  flex-direction: column;
`;

const Comment = styled.div`
  height: 50%;
  font-size: 3rem;
  font-weight: 500;
  line-height: 5rem;
  margin-bottom: 3rem;
`;
const Mobile = styled.div`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;
const Email = styled.div`
  /* border: 3px solid green; */
  font-size: 1.8rem;
`;
const EmailLink = styled.a`
  text-decoration: none;
  color: #39a350;
`;

export default Contact;
