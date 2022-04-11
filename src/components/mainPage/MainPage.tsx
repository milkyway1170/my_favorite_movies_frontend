import { GenresTagCloud } from "./GenresTagCloud";
import { Greeting } from "./Greeting";
import { MoviesBlock } from "./movies/MoviesBlock";
import { MainPageStyles } from "@styles";
import { Header } from "components/Header";

export const MainPage = () => {
  return (
    <MainPageStyles>
      <Header />
      <Greeting />
      <GenresTagCloud />
      <MoviesBlock />
    </MainPageStyles>
  );
};
