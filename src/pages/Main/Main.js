import React from "react";
import styled from "styled-components";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
    box-sizing: border-box;
    font-size: 14px;
    font-family: "sans-serif";
  }
`;

const Main = () => {
  return (
    <div>
      <GlobalStyles />
      <MainSlide>메인 페이지입니다_슬라이드</MainSlide>
    </div>
  );
};

const MainSlide = styled.div`
  width: 100%;
  margin-top: 100px;
`;
export default Main;
