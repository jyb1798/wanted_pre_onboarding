import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";

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

            <Listbar>
              <ListIcon>
                <Button>
                  <FontAwesomeIcon
                    icon={faSearch}
                    style={{
                      fontSize: "18px",
                      color: "#494848",
                    }}
                  />
                </Button>
              </ListIcon>
              <ListIcon>
                <Button>
                  <FontAwesomeIcon
                    icon={faBell}
                    style={{ fontSize: "18px", color: "#494848" }}
                  />
                </Button>
              </ListIcon>
              <ListIcon>
                <Button>
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    style={{ fontSize: "28px", color: "#0F6C44" }}
                  />
                </Button>
              </ListIcon>
              <ListIcon>
                <Button size="small">
                  <InnerButtonText>ㅣ</InnerButtonText>
                </Button>
              </ListIcon>
              <ListIcon>
                <Button size="large" radius="circle">
                  <ManyImageCservice
                    src="https://media.vlpt.us/images/yeonbee/post/d8c65170-090a-4a98-84d7-52d456bfbab5/%EA%B8%B0%EC%97%85%EC%84%9C%EB%B9%84%EC%8A%A4.png"
                    alt="기업서비스"
                  />
                </Button>
              </ListIcon>
            </Listbar>
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

// Logobar 영역

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

// Listbar 영역
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
`;

// ListIcon 영역
const ListIcon = styled.li``;

const InnerButtonText = styled.div`
  color: lightgray;
  font-size: 16px;
  justify-content: flex-end;
`;
const ManyImageCservice = styled.img`
  width: 95%;
`;
