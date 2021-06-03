import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";
import useFiretore from "../firebase/useFirestore";

function Studies({ handleItem }) {
  // console.log(useFiretore("studies"));
  //! 데이터베이스에서 데이터 가져오기.

  const studiesData = useFiretore("studies");

  return (
    <MainItem>
      <ItemTitle>Studies</ItemTitle>
      <ItemBox>
        {studiesData.map((ele) => (
          <Item key={ele.id} onClick={() => handleItem(ele)}>
            <ImgWrapper key={ele.id}>
              <ItemImg src={ele.thumbnail} name="img" />
            </ImgWrapper>
            <ItemInfo name="info">{ele.summary}</ItemInfo>
          </Item>
        ))}
      </ItemBox>
    </MainItem>
  );
}
const MainItem = styled.div`
  /* border: 3px solid red; */
  display: flex;
  flex-direction: column;
  margin: 2rem 1rem 0rem 1rem;
`;

const ItemTitle = styled.div`
  /* border: 3px solid lightgreen; */
  ${theme("fontStyle.itemTitle")}
  width: 95%;
  padding-left: 0;
  margin-bottom: 1rem;
`;

const ItemBox = styled.div`
  /* border: 3px solid red; */
  margin: 50px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 100px;
  @media only screen and (max-width: 1600px) {
    grid-template-columns: 1fr 1fr;
    /* transition: grid-template-columns 0.2s ease-in; */
  }
  @media only screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    /* transition: grid-template-columns 0.2s ease-in; */
  }
`;

const Item = styled.div`
  border: 2px solid black;
  border-radius: 2rem;
  width: 20rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  cursor: pointer;

  :hover {
    /* box-shadow: 3px 3px 5px 3px #757575; */
    opacity: 1;
    transition: opacity 0.2s ease-in;
  }
`;

const ImgWrapper = styled.div`
  /* border: 3px solid blue; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

const ItemImg = styled.img`
  /* border: 3px solid yellow; */
  max-width: 90%;
  max-height: 90%;
  pointer-events: none;
`;
const ItemInfo = styled.div`
  /* border: 3px solid black; */
  /* text-align: center; */
  width: 80%;
  pointer-events: none;
`;

export default Studies;
