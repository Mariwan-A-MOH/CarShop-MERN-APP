import React from "react";
import styled from "styled-components";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
const Navbar = () => {
  return (
    <Container>
      <Wrapped>
        <Left>
          <IconLeft />
        </Left>
        <Cneter>
          <Logo>NOYYA</Logo>
        </Cneter>
        <Right>
          <IocnRight />
        </Right>
      </Wrapped>
    </Container>
  );
};
export default Navbar;
const Container = styled.div`
  height: 60px;
  width: 100%;
  background: #201f22;
  color: white;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
`;
const Wrapped = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Left = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const IconLeft = styled(DensityMediumIcon)`
  transform: rotate(90deg);
  cursor: pointer;
`;
const Cneter = styled.div`
  flex: 0.6;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.h2`
  font-weight: 500;
  letter-spacing: 1.2px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;
const IocnRight = styled(DensityMediumIcon)`
  transform: rotate(-90deg);
  cursor: pointer;
`;
