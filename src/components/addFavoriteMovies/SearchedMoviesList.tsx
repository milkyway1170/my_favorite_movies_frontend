import { FC } from "react";

import { MoviesListStyles } from "../../styles/Styles";
import { IMovieData, ISearchedMoviesList } from "../../types/types";
import { SearchedMovieItem } from "./SearchedMovieItem";

export const SearchedMoviesList: FC<ISearchedMoviesList> = (props) => {
  const listItems = props.moviesList.map(
    (movieData: IMovieData, index: number) => (
      <SearchedMovieItem
        index={index + 1}
        movieData={movieData}
        listView={props.listView}
        key={movieData.id}
      />
    )
  );

  return (
    <MoviesListStyles listView={props.listView}>{listItems}</MoviesListStyles>
  );
};
