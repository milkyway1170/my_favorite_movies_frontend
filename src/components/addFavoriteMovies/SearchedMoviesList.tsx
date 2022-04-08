import { FC } from "react";

import { MoviesListStyles } from "styles/styles";
import { IMovieData, ISearchedMoviesList } from "types";
import { SearchedMovieItem } from "./SearchedMovieItem";

export const SearchedMoviesList: FC<ISearchedMoviesList> = ({
  listView,
  moviesList,
}) => {
  const listItems = moviesList.map((movieData: IMovieData) => (
    <SearchedMovieItem
      movieData={movieData}
      listView={listView}
      key={movieData.id}
    />
  ));

  return <MoviesListStyles listView={listView}>{listItems}</MoviesListStyles>;
};
