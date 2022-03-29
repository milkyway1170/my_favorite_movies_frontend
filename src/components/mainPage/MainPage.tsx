import { LoadData } from "../GetFunctions";
import GenresTagCloud from "./GenresTagCloud";
import Greeting from "./Greeting";
import Header from "./Header";
import { MoviesBlock } from "./movies/MoviesBlock";

import styled from "styled-components";
import tw from "twin.macro";

const MainPageStyles = styled.main`
  ${tw`bg-[#e2e8f0] w-full h-full pb-10 font-sans box-content`}
`;

const MainPage = () => {
  LoadData();

  return (
    <MainPageStyles>
      <Header />
      <Greeting />
      <GenresTagCloud />
      <MoviesBlock />
    </MainPageStyles>
  );
};

export default MainPage;
