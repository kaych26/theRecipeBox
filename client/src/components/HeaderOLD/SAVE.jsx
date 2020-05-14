import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/img/theRecipeBox_logo.png';
import { Link } from 'react-router-dom';

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
  text-decoration: none;
`;

const StyledLink = styled(Link)`
text-decoration: none;
`;


// export default function HeaderSave({ handleLogout, currentUser }) {
  
//   return (
//     <StyledHeader>
//       <Logo src={logo} />
//       <Nav>
//       <Link to="/login">Login</Link></Nav>
//     </StyledHeader>
//   );
// }
