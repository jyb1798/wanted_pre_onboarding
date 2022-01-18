import React from "react";
import styled from "styled-components";

export default function Slide({ img }) {
  return <IMG src={img} />;
}

const IMG = styled.img`
  width: 90%;
  height: 90%;
  border-radius: 4px;
`;
