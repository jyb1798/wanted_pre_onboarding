import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <>
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

            <Listbar>채용</Listbar>

            <Iconbar>기업서비스</Iconbar>
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

const Listbar = styled.div``;

const Iconbar = styled.div``;
