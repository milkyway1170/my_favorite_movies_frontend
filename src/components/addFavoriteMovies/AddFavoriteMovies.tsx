import { useState } from "react";

import { MainPageStyles, MoviesBlockStyles } from "../../styles/Styles";
import { IMovieData } from "../../types/types";
import { ChangeView } from "../ChangeView";
import Header from "../Header";
import { SearchedMoviesList } from "./SearchedMoviesList";
import { SearchSettings } from "./SearchSettings";

export const AddFavoriteMovies = () => {
  const [moviesList, setMoviesList] = useState<IMovieData[]>([]);
  const [listView, setListView] = useState<boolean>(true);

  return (
    <MainPageStyles>
      <Header />
      <SearchSettings setMoviesList={setMoviesList} />
      <MoviesBlockStyles>
        <ChangeView
          handleChange={(status: boolean) => setListView(status)}
          status={listView}
        />
        <SearchedMoviesList moviesList={moviesList} listView={listView} />
      </MoviesBlockStyles>
    </MainPageStyles>
  );
};
