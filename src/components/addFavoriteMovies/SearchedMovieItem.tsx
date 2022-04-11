import { FC } from "react";

import {
  MovieItemPosterImgStyles,
  MovieItemStyles,
  MovieItemTextStyles,
  MovieItemTitleTextStyles,
} from "@styles";
import { ISearchedMovieItem } from "@types";
import { getPoster } from "utils/getFunctions";
import { SaveItButton } from "./SaveItButton";

export const SearchedMovieItem: FC<ISearchedMovieItem> = ({
  listView,
  movieData: { id, title, overview, posterPath },
}) => {
  return (
    <MovieItemStyles listView={listView}>
      <MovieItemTitleTextStyles>{title}</MovieItemTitleTextStyles>
      <MovieItemPosterImgStyles
        listView={listView}
        src={getPoster(posterPath)}
        alt=""
      />
      <MovieItemTextStyles>{overview}</MovieItemTextStyles>
      <SaveItButton movieId={id} />
    </MovieItemStyles>
  );
};
