import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import wArrowLeft from "../assets/images/wArrowLeft.svg";
import wArrowRight from "../assets/images/wArrowRight.svg";
import gArrowLeft from "../assets/images/gArrowLeft.svg";
import gArrowRight from "../assets/images/gArrowRight.svg";
import reviews from "../assets/reviews/reviews";

function handleHover(element) {
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

export class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      autoplay: true,
      autoplaySpeed: 3500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    return (
      <div
        style={{
          margin: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
          width: "800px",
        }}
      >
        <div
          style={{
            width: "90%",
            padding: "2rem",
            backgroundColor: `#88F5C7`,
          }}
        >
          <Slider {...settings}>
            {reviews.map((ele) => (
              <div
                key={ele.name}
                style={{
                  height: "20rem",
                }}
              >
                <div
                  style={{
                    height: "70%",
                    padding: "1rem 2rem 2rem 2rem",
                    marginBottom: "0.5rem",
                    lineHeight: "2.3rem",
                    fontSize: "1.2rem",
                    display: "flex",
                    cursor: "pointer",
                    overflowY: "auto",
                    msOverflowStyle: "none", // IE and Edge
                    scrollbarWidth: "none", // Firefox
                  }}
                >
                  {ele.comment}
                </div>
                <div
                  style={{
                    fontSize: "1.2rem",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {ele.name}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
