import React from 'react';
import styled from 'styled-components';
import hero_img from '../../assets/images/img/hero_img.jpg';

const StyledHero = styled.section`
  height: 700px;
  background-image: url(${hero_img});
  background-size: cover;
  position: relative
`;

const Title = styled.h1`
position: absolute;
right: 50px;
top: 280px;
  width: 350px;
  font-size: 60px;
  text-align: center;
`;



export default function Hero() {
  return <StyledHero>
    <Title>Share your favorite Recipes & Cooking Tips</Title>
  </StyledHero>;
}
