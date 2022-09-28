import React from "react";
import styled from "styled-components";
const WeDo = () => {
  return (
    <Container>
      <Wrapped>
        <Left>
          <Title>What We Do ?</Title>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            ipsa laudantium repellat sed dolores vero pariatur repellendus
            corporis! Quasi, corporis.
          </Description>
        </Left>
        <Right>
          <Image src="https://i.pinimg.com/originals/b9/d4/5e/b9d45eaaa6dec9f28e6fa5f73f4a4113.png" />
        </Right>
      </Wrapped>
    </Container>
  );
};
export default WeDo;
const Container = styled.div`
  width: 100%;
  height: 80vh;
  background: #ecf0f1;
  padding: 0px 150px;
  margin: 150px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapped = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
const Left = styled.div`
  flex: 1;

  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Title = styled.h4`
  color: #28282b;
  font-size: 40px;
`;
const Description = styled.h6`
  color: #28282b;
  font-size: 20px;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;

  object-fit: cover;
  height: 80%;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
`;
