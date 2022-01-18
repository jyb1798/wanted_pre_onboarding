import React from "react";
import styled from "styled-components";

export default function Slide({ img }) {
  return <IMG src={img} />;
}

const IMG = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;
