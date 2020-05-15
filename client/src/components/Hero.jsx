import React from 'react';
import styled from 'styled-components';
import hero_img from '../assets/images/img/hero_img_title.png';

const StyledHero = styled.section`
  height: 680px;
  background-image: url(${hero_img});
  /* height: 50%; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* position: relative; */
`;

const Title = styled.h1`
  text-align: center;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate() (-50%translate (), -50%);
  width: 350px;
  font-size: 60px;
  text-align: center;
`;

export default function Hero() {
  return (
    <StyledHero>
      {/* <Title>Share your favorite Recipes & Cooking Tips</Title> */}
    </StyledHero>
  );
}
