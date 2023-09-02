import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import { AccessTime, Search, HelpOutline } from "@mui/icons-material";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar />
        <AccessTime />
      </HeaderLeft>

      <HeaderSearch>
        <Search />
        <input type="text" placeholder="Search Anything" />
      </HeaderSearch>

      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
`;

const HeaderLeft = styled.div`
  display: flex;
  margin-left: 20px;
  flex: 0.3;
  align-items: center;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
    color: white;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`
  display: flex;
  opacity: 1;
  border-radius: 6px;
  flex: 0.4;
  background-color: #421f44;
  justify-content: space-between;
  padding: 0 50px;
  color: white;

  > input {
    min-width: 30vw;
    background-color: transparent;
    border: none;
    outline: none;
    color: white;
  }
`;

const HeaderRight = styled.div`
  color: white;
  flex: 0.3;
  display: flex;
  justify-content: end;

  > .MuiSvgIcon-root {
    margin-right: 20px;
  }
`;
