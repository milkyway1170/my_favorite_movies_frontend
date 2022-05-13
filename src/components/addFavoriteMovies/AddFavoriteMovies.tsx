import { useState } from "react";

import { ChangeView } from "components/ChangeView";
import { Header } from "components/Header";
import { SearchedMoviesList } from "./SearchedMoviesList";
import { SearchSettings } from "./SearchSettings";
import { MainPageStyles, MoviesBlockStyles } from "styles/styles";
import { ISearchedMovieData } from "types";

export const AddFavoriteMovies = () => {
  const [moviesList, setMoviesList] = useState<ISearchedMovieData[]>([]);
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
