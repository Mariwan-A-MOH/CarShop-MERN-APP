import React from "react";
import styled from "styled-components";
import ShowRoomItem from "./ShowRommItem";
const ShowRoom = () => {
  return (
    <Container>
      <Wrapped>
        <Title>Showrooms</Title>
        <ItemsCon>
          <ShowRoomItem />
          <ShowRoomItem />
          <ShowRoomItem />
          <ShowRoomItem />
          <ShowRoomItem />
          <ShowRoomItem />
        </ItemsCon>
        <ButtonCon>
          <Button>View more</Button>
        </ButtonCon>
      </Wrapped>
    </Container>
  );
};
export default ShowRoom;
const Container = styled.div`
  width: 100%;
  height: 95vh;
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
const ItemsCon = styled.div`
  width: 80%;
  flex: 1;
 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
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
