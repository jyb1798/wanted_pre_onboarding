import React from "react";
import styled from "styled-components";
import Slider from "./Slider";
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
      <MainSlide>
        <Slider />
      </MainSlide>
    </div>
  );
};

const MainSlide = styled.div`
  width: 100%;
  margin-top: 20px;
`;
export default Main;
