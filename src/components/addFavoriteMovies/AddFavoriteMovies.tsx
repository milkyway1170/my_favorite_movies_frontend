import { useState } from "react";
import { MainPageStyles, MoviesBlockStyles } from "styles/styles";
import { IMovieData } from "types";

import { ChangeView } from "components/ChangeView";
import { Header } from "components/Header";
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
          handleChange={(listView: boolean) => setListView(listView)}
          listView={listView}
        />
        <SearchedMoviesList moviesList={moviesList} listView={listView} />
      </MoviesBlockStyles>
    </MainPageStyles>
  );
};
