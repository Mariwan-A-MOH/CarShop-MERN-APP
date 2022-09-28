import React from "react";
import styled from "styled-components";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
const ShowRoomItem = () => {
  const item = {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_T4V7R9oy840J5wDcPoixysh5cKmw_0qVlQ&usqp=CAU",
    name: "LEXA",
    location: "sulaymany",
  };
  return (
    <Container>
      <ImageCon>
        <Image src={item.image} />
      </ImageCon>
      <ShowDesc>
        <InfoCon>
          <LocationOnOutlinedIcon className="icons" />
          <Info>Sulaymany</Info>
        </InfoCon>
        <InfoCon>
          <LocalPhoneIcon className="icons" />
          <Info>0770 123 8859</Info>
        </InfoCon>
      </ShowDesc>
    </Container>
  );
};
export default ShowRoomItem;
const Container = styled.div`
  width: 16vw;
  height: 33vh;
  background: #28282b;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(179, 179, 179, 0.2);
  box-shadow: 5px 0px 10px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 1s;
  &:hover {
    transform: scale(1.01);
  }
`;
const ImageCon = styled.div`
  overflow: hidden;
  flex: 2;
  width: 100%;
  height: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ShowDesc = styled.div`
  flex: 1;
  // background: red;
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  // gap: 15px;
`;
const InfoCon = styled.div`
  flex: 1;
  width: 60%;
  magrin-left: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;

  .icons {
    color: white;
    font-size: 20px;
  }
`;

const Info = styled.p`
  color: WHITE;
  font-size: 14px;
  font-weight: 500;
`;
