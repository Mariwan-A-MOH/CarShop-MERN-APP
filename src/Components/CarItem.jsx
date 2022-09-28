import React from "react";
import styled from "styled-components";
import SpeedIcon from "@mui/icons-material/Speed";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
const CarItem = ({ type: check }) => {
  const item = {
    image:
      "https://cdn.motor1.com/images/mgl/Er1Lz/s1/2021-jeep-wrangler-4xe.jpg",
    name: "JEEP",
    type: "Wrangler 4xe",
    location: "sulaymany",
    went: "1 KM",
    price: 200000,
  };
  return (
    <Container>
      <CarImageCon>
        <CarImage src={item.image} />
      </CarImageCon>
      <CarDesc>
        <TopDesc>
          <CarName>{item.name}</CarName>
          <CarType>{item.type}</CarType>
        </TopDesc>
        <BottomDesc>
          {!check && (
            <IconCon>
              <SpeedIcon className="icons" />
              <IconTitel>{item.went}</IconTitel>
            </IconCon>
          )}
          <IconCon>
            <LocationOnOutlinedIcon className="icons" />
            <IconTitel>{item.location}</IconTitel>
          </IconCon>
          <IconCon>
            <PaidOutlinedIcon className="icons" />
            <IconTitel>{item.price}$</IconTitel>
          </IconCon>
        </BottomDesc>
      </CarDesc>
    </Container>
  );
};
export default CarItem;
const Container = styled.div`
  width: 13vw;
  height: 35vh;
  background: #ecf0f1;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(179, 179, 179, 0.2);
  box-shadow: 5px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;
const CarImageCon = styled.div`
  overflow: hidden;
  flex: 1;
  width: 100%;
  height: 100%;
`;
const CarImage = styled.img`
  width: auto;
  height: 100%;
  object-fit: cover;
`;
const CarDesc = styled.div`
  flex: 1;
  // background: red;
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
const TopDesc = styled.div`
  flex: 0.8;
  width: 100%;
  // background: gray;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const CarName = styled.h5`
  color: #636363;
  font-size: 17px;
`;
const CarType = styled.h6`
  color: #636363;
  font-size: 13px;
`;

const BottomDesc = styled.div`
  flex: 1;

  width: 100%;
  display: flex;

  justify-content: space-around;
  align-items: center;
`;
const IconCon = styled.div`
  flex: 0.8;

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .icons {
    color: gray;
  }
`;
const IconTitel = styled.p`
  font-size: 10px;
  color: gray;
`;
