import React from "react";
import styled from "styled-components";
import CarItem from "./CarItem";
const CarList_Rent = () => {
  const x = 8;
  const RentCars = Array(x).fill("rent");
  return (
    <Container>
      <Wrapped>
        <Title>Newest For Rent</Title>
        <Items>
          {RentCars.map((item, index) => {
            return <CarItem key={index} type={item} />;
          })}
        </Items>
        <ButtonCon>
          <Button>View More</Button>
        </ButtonCon>
      </Wrapped>
    </Container>
  );
};
export default CarList_Rent;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0px 150px;
  margin: 150px 0px;
`;
const Wrapped = styled.div`
  width: 100%;
  height: 100%;
  // background: black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const Title = styled.h2`
  flex: 0.1;
  color: #201f22;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;

  width: 100%;
  letter-spacing: 1.2px;
`;
const Items = styled.div`
  width: 100%;
  flex: 1;
  // background: green;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
`;
const ButtonCon = styled.div`
  width: 100%;
  flex: 0.17;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  width: 150px;
  height: 35px;
  background: #201f22;
  color: white;
  border-radius: 30px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1.2px;
`;
