import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/img/theRecipeBox_logo.png';

const StyledHeader = styled.header`
  height: 60px;
  background-color: #fff;
  display: flex;
`;

const Logo = styled.img`
  height: 55px;
  width: 200px;
  cursor: pointer;
  /* font-family: 'Fredoka One', cursive; */
`;

const Nav = styled.nav`
  font-size: 36px;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo src={logo}/>
      <Nav>Login</Nav>
    </StyledHeader>
  );
}
