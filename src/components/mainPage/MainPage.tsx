import { loadData } from "../../utils/getFunctions";
import GenresTagCloud from "./GenresTagCloud";
import Greeting from "./Greeting";
import Header from "./Header";
import { MoviesBlock } from "./movies/MoviesBlock";
import { MainPageStyles } from "../../styles/Styles";

const MainPage = () => {
  loadData();

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
