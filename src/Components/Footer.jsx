import React from "react";
import styled from "styled-components";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
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

        <Right>
          <Social>Social</Social>
          <IconCons>
            <InstagramIcon className="sIcon" />
            <TwitterIcon className="sIcon" />
            <LinkedInIcon className="sIcon" />
            <FacebookIcon className="sIcon" />
          </IconCons>
        </Right>
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
const Logo = styled.h1`
  font-weight: 500;
  letter-spacing: 1.2px;
  color: white;
  cursor: pointer;
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
  flex: 3;
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
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;

  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const IconCons = styled.div`
  // background: red;
  flex: 1;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .sIcon {
    color: #ecf0f1;
    font-size: 30px;
    cursor: pointer;
  }
`;
const Social = styled.h3`
  flex: 1;
  font-weight: 400;
  font-size: 25px;

  color: white;
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
