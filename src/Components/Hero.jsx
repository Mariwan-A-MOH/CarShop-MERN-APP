import React from "react";
import styled from "styled-components";
import Img from "../img/hero.jpg";
const Hero = () => {
  return (
    <Container>
      <Left>
        <Desc>
          NOYYA <span> Is A New Platform For Selling Your Car Swifyly </span>
        </Desc>
      </Left>
      <Right>
        <HeroImg src={Img} />
      </Right>
    </Container>
  );
};
export default Hero;
const Container = styled.div`
  width: 100%;
  height: 85vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Desc = styled.h1`
  color: #201f22;
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  span {
    font-size: 40px;
    font-weight: 500;
    color: #636363;
  }
`;
const Right = styled.div`
  flex: 1.5;
  height: 100%;
`;
const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
