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

const TOTAL_SLIDES = 9;

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
      return;
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  // Prev 버튼 클릭 시
  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
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
      <Center>
        <SlideButton onClick={PrevSlide}>Prev</SlideButton>
        <SlideButton onClick={NextSlide}>Next</SlideButton>
      </Center>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const SlideButton = styled.div`
  color: black;
  border-radius: 10%;
  border: 1px solid black;
  }
`;
const SliderContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
`;

const Center = styled.div`
  text-align: center;
`;
