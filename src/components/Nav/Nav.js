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

const Nav = () => {
  return (
    <>
      <GlobalStyles />
      <Header>
        <Inner>
          <Mainbar>
            <Logobar>
              <Seemore
                src="https://static.wanted.co.kr/images/icon-menu.png"
                alt="hamberger menu"
              />
              <Logotext>wanted</Logotext>
            </Logobar>

            <Listbar>
              <ListName>채용</ListName>
              <ListName>이벤트</ListName>
              <ListName>직군별 연봉</ListName>
              <ListName>이력서</ListName>
              <ListName>커뮤니티</ListName>
              <ListName>프리랜서</ListName>
              <ListName>AI 합격예측</ListName>
            </Listbar>

            <Iconbar>
              <Listbar>
                <ListIcon>
                  <ManyImage
                    src="https://media.vlpt.us/images/yeonbee/post/cdc45b5a-757f-420a-8339-89c674c7d5cf/%EA%B2%80%EC%83%89.png"
                    alt="검색버튼"
                  />
                </ListIcon>
                <ListIcon>
                  <ManyImage
                    src="https://media.vlpt.us/images/yeonbee/post/ae98fc88-c182-49a6-87a8-39a56dd32b73/%EC%A2%85.png"
                    alt="알림버튼"
                  />
                </ListIcon>
                <ListIcon>
                  <ManyImage
                    src="https://media.vlpt.us/images/yeonbee/post/6daea6b8-bdf2-44b9-8e43-7fbac3bdca57/%EC%95%84%EB%B0%94%ED%83%80.png"
                    alt="아바타버튼"
                  />
                </ListIcon>

                <ListIcon>
                  <ManyImage
                    src="https://media.vlpt.us/images/yeonbee/post/d8c65170-090a-4a98-84d7-52d456bfbab5/%EA%B8%B0%EC%97%85%EC%84%9C%EB%B9%84%EC%8A%A4.png"
                    alt="아바타버튼"
                  />
                </ListIcon>
              </Listbar>
            </Iconbar>
          </Mainbar>
        </Inner>
      </Header>
    </>
  );
};

export default Nav;

const Header = styled.div`
  width: 100%;
  hight: 50px;
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  z-index: 100%;
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  width: 90%;
`;

const Mainbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logobar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Seemore = styled.img`
  width: 17px;
  height: 14px;
  margin-top: -2px;
  margin-right: 15px;
`;

const Logotext = styled.a`
  text-decoration: inherit;
  cursor: pointer;
`;

const Listbar = styled.ul`
  list-style: none;
  display: flex;
`;

const ListName = styled.li`
  padding: 15px;
  line-height: 20px;
  font-size: 14px;
  font-family: sans-serif;
  font-weight: 600;
  display: inline-block;
  vertical-align: middle;
`;

const Iconbar = styled.div``;

const ListIcon = styled.li`
  vertical-align: middle;
`;

const ManyImage = styled.img`
  width: 60%;
`;
