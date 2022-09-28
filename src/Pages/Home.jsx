import React from "react";
import styled from "styled-components";
import Hero from "../Components/Hero";
import SearchFilter from "../Components/SearchFilter";
import CarList from "../Components/CarList_S";
import CarListRent from "../Components/CarList_R";
import ShowRoom from "../Components/ShowRomms";

const Home = () => {
  return (
    <Container>
      <Hero />
      <SearchFilter />
      <CarList />
      <CarListRent />
      <ShowRoom />
    </Container>
  );
};
export default Home;
const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
  // padding: 0px 30px;
`;
