import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const CommonButton = styled.button`
  background-color: transparent;
  border: none;
  width: 40px;
  height: 50px;

  ${(props) =>
    props.size === "large" &&
    ` width: 120px;
height: 50px`}
  ${(props) =>
    props.size === "small" &&
    ` width: 30px;
height: 50px`}
  ${(props) => props.radius === "circle" && `border-radius:50%`}
`;

function Button({ children, radius, size, ...rest }) {
  return (
    <CommonButton size={size} radius={radius} {...rest}>
      {children}
    </CommonButton>
  );
}

export default Button;
