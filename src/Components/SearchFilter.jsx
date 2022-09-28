import React from "react";
import styled from "styled-components";
const SearchFilter = () => {
  return (
    <Container>
      <Wrapped>
        <Title>Find Your Next Car</Title>
        <InpCont>
          <InpList>
            <Select>
              <Options selected disabled hidden>
                Make
              </Options>

              <Options>USA</Options>
              <Options>GERMANY</Options>
            </Select>
            <Select>
              <Options selected disabled hidden>
                Model
              </Options>
              <Options>JEEP</Options>
              <Options>BMW</Options>
            </Select>
            <Select>
              <Options selected disabled hidden>
                Condition
              </Options>
              <Options>NEW</Options>
              <Options>USED</Options>
            </Select>
            <Select>
              <Options selected disabled hidden>
                Color
              </Options>
              <Options>Black</Options>
              <Options>White</Options>
              <Options>Blue</Options>
            </Select>
            <Select>
              <Options selected disabled hidden>
                Location
              </Options>
              <Options>Sulaimany</Options>
            </Select>
          </InpList>
          <ButtonCon>
            <Button>Search</Button>
          </ButtonCon>
        </InpCont>
      </Wrapped>
    </Container>
  );
};
export default SearchFilter;

const Container = styled.div`
  width: 100%;
  height: 40vh;
  background: #ecf0f1;
  margin: 100px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapped = styled.div`
  width: 60%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h2`
  color: #201f22;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-size: 30px;
  width: 100%;
  letter-spacing: 1.2px;
`;
const InpCont = styled.form`
  flex: 2;

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const InpList = styled.div`
  flex: 1;
  width: 100%;
  display: flex;

  justify-content: space-around;
  align-items: center;
`;
const Select = styled.select`
  width: 16%;
  background: white;
  color: gray;
  padding: 5px 5px;
  border: none;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.1);
`;
const Options = styled.option`
  // color: #00e43b;
  color: #636363;
  border-radius: 0px;
  font-weight: 500;
  padding: 50px;
  height: 120px;
`;
const ButtonCon = styled.div`
  flex: 1.5;
  width: 100%;
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
