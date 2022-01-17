import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <div>
      <MainSlide>메인 페이지입니다_슬라이드</MainSlide>
    </div>
  );
};

const MainSlide = styled.div`
  width: 100%;
  margin-top: 100px;
`;
export default Main;
