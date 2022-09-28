import React from "react";
import styled from "styled-components";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
const Footer = () => {
  return (
    <Container>
      <Top>
        <Logo>NOYYA</Logo>
      </Top>
      <Center>
        <Left>
          <Contact>Contact</Contact>
          <IconConInfo>
            <LocalPhoneIcon className="icon" />
            <InfoLink>00964 770 463 7972</InfoLink>
          </IconConInfo>
          <IconConInfo>
            <MailOutlineOutlinedIcon className="icon" />
            <InfoLink>info@rega.com</InfoLink>
          </IconConInfo>
        </Left>
        <Right>T</Right>
      </Center>
      <Bottom>
        <Deved>© 2022 Rega Developed By Ali</Deved>
      </Bottom>
    </Container>
  );
};
export default Footer;
const Container = styled.div`
  width: 100%;
  height: 40vh;
  background: #201f22;
  padding: 0px 150px;
  // margin: 150px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Top = styled.div`
  flex: 1.5;
  width: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
`;
const Logo = styled.h2`
  font-weight: 500;
  letter-spacing: 1.2px;
  color: white;
`;
const Center = styled.div`
  flex: 1.8;
  width: 100%;
  // background: gray;
  display: flex;

  justify-content: center;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Contact = styled.h3`
  flex: 1;
  font-weight: 400;
  font-size: 25px;
  margin-left: 50px;
  // margin-bottom:10px;
  color: white;
`;

const IconConInfo = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  .icon {
    color: #ecf0f1;
    font-size: 20px;
  }
`;

const InfoLink = styled.h6`
  color: gray;
  font-size: 16px;
  font-weight: 200;
`;

const Right = styled.div`
  flex: 1;
  height: 95%;
`;

const Bottom = styled.div`
  width: 100%;
  flex: 1;
  display: flex;

  justify-content: center;
  align-items: center;
`;
const Deved = styled.p`
  color: gray;
  font-size: 14px;
  font-weight: 200;
`;
