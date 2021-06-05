import React from "react";
import styled from "styled-components";
import treeImg from "../assets/images/tree.png";

function Contact() {
  return (
    <Main>
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
  /* border: 3px solid red; */
  position: relative;
  height: 50rem;
  /* margin: 2rem 1rem 0rem 1rem; */
`;

const BackgroundImg = styled.img`
  /* border: 3px solid black; */
  position: absolute;
  bottom: 0;
  left: 15%;
  width: 30rem;
`;

const Contents = styled.div`
  /* border: 3px solid blue; */
  position: absolute;
  width: 40rem;
  top: 15rem;
  left: 48%;
  display: flex;
  flex-direction: column;
`;

const Comment = styled.div`
  /* border: 3px solid yellow; */
  height: 50%;
  font-size: 3rem;
  font-weight: 500;
  line-height: 5rem;
  margin-bottom: 1.5rem;
`;
const Mobile = styled.div`
  /* border: 3px solid green; */
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;
const Email = styled.div`
  /* border: 3px solid green; */
  font-size: 1.8rem;
`;
const EmailLink = styled.a`
  text-decoration: none;
  color: #07c173;
`;

export default Contact;
