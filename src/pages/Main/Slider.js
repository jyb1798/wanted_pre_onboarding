import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.jpg";
import img5 from "../../images/5.jpg";
import img6 from "../../images/6.jpg";
import img7 from "../../images/7.jpg";
import img8 from "../../images/8.jpg";
import img9 from "../../images/9.jpg";
import Slide from "./Slide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const TOTAL_SLIDES = 9;

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
      return;
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  // Prev 버튼 클릭 시
  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <Container>
      <SliderContainer ref={slideRef}>
        <Slide img={img1} />
        <Slide img={img2} />
        <Slide img={img3} />
        <Slide img={img4} />
        <Slide img={img5} />
        <Slide img={img6} />
        <Slide img={img7} />
        <Slide img={img8} />
        <Slide img={img9} />
      </SliderContainer>

      <SlideLeftButton onClick={PrevSlide}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          style={{
            fontSize: "25px",
            color: "gray",
            marginLeft: "5px",
            marginTop: "15px",
          }}
        />
      </SlideLeftButton>

      <SlideRightButton onClick={NextSlide}>
        <FontAwesomeIcon
          icon={faChevronRight}
          style={{
            fontSize: "25px",
            color: "gray",
            marginLeft: "7px",
            marginTop: "15px",
          }}
        />
      </SlideRightButton>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const SliderContainer = styled.div`
  display: flex;
`;

const SlideLeftButton = styled.div`
  border-radius: 10%;
  border: none;
  opacity: 0.5;
  position: absolute;
  top: 200px;
  left: 150px;
  background-color: white;
  border-radius: 15px;
  height: 60px;
  width: 30px;
`;

const SlideRightButton = styled.div`
  border-radius: 10%;
  border: none;
  opacity: 0.5;
  position: absolute;
  top: 200px;
  right: 150px;
  background-color: white;
  border-radius: 15px;
  height: 60px;
  width: 30px;
`;
