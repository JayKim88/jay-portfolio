import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import wArrowLeft from "../assets/images/wArrowLeft.svg";
import wArrowRight from "../assets/images/wArrowRight.svg";
import gArrowLeft from "../assets/images/gArrowLeft.svg";
import gArrowRight from "../assets/images/gArrowRight.svg";
import theme from "../common/style/themes/default";
import reviews from "../assets/reviews/reviews";

function handleHover(element) {
  // if (element.target)
  const arrowId = element.target.id;

  if (arrowId === "right") {
    element.target.src = gArrowRight;
  } else if (arrowId === "left") {
    element.target.src = gArrowLeft;
  }
}

function handleUnhover(element) {
  const arrowId = element.target.id;

  if (arrowId === "right") {
    element.target.src = wArrowRight;
  } else if (arrowId === "left") {
    element.target.src = wArrowLeft;
  }
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      alt="Right"
      id="right"
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
      onMouseOver={handleHover}
      onMouseOut={handleUnhover}
      src={wArrowRight}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      alt="Left"
      id="left"
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
      onMouseOver={handleHover}
      onMouseOut={handleUnhover}
      src={wArrowLeft}
    />
  );
}

class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      autoplay: true,
      autoplaySpeed: 3500,
      slidesToShow: 1,
      slidesToScroll: 1,
      border: "1px solid blue",
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    return (
      <Main>
        <ReviewWrapper>
          <StyledSlider {...settings}>
            {reviews.map((ele) => (
              <ReviewBox key={ele.name}>
                <RContents>{ele.comment}</RContents>
                <RWriter>{ele.name}</RWriter>
              </ReviewBox>
            ))}
          </StyledSlider>
        </ReviewWrapper>
      </Main>
    );
  }
}

const Main = styled.div`
  /* border: 3px solid yellow; */
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  /* overflow: hidden; */
`;

const ReviewWrapper = styled.div`
  /* border: 3px solid black; */
  width: 80%;
  padding: 2rem;
  background-color: ${theme.palette.cgreen};
`;

const StyledSlider = styled(Slider)`
  /* border: 3px solid blue; */
  height: 21em;
  display: flex;

  img {
    width: 2rem;
    height: 2rem;
  }
`;

const ReviewBox = styled.div`
  /* border: 3px solid pink; */
  width: 100%;
  height: 20rem;
`;
const RContents = styled.div`
  /* border: 3px solid yellow; */
  height: 70%;
  padding: 1rem 2rem 2rem 2rem;
  margin-bottom: 0.5rem;
  line-height: 2.3rem;
  font-size: 1.2rem;
  display: flex;
  /* align-items: center; */
  cursor: pointer;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const RWriter = styled.div`
  /* border: 3px solid blue; */
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
`;

export default Carousel;
