import { FC } from "react";

import {
  MovieItemPosterImgStyles,
  MovieItemStyles,
  MovieItemTextStyles,
  MovieItemTitleTextStyles,
} from "styles/styles";
import { ISearchedMovieItem } from "types";
import { getPoster } from "utils/getFunctions";
import { SaveItButton } from "./SaveItButton";

export const SearchedMovieItem: FC<ISearchedMovieItem> = ({
  listView,
  movieData,
}) => {
  return (
    <MovieItemStyles listView={listView}>
      <MovieItemTitleTextStyles>{movieData.title}</MovieItemTitleTextStyles>
      <MovieItemPosterImgStyles
        listView={listView}
        src={getPoster(movieData.posterPath)}
        alt=""
      />
      <MovieItemTextStyles>{movieData.overview}</MovieItemTextStyles>
      <SaveItButton movieId={movieData.id} />
    </MovieItemStyles>
  );
};
