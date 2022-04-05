import { FC } from "react";

import { MovieItemStyles } from "../../styles/Styles";
import { ISearchedMovieItem } from "../../types/types";
import { getPoster } from "../../utils/getFunctions";
import { SaveItButton } from "./SaveItButton";

export const SearchedMovieItem: FC<ISearchedMovieItem> = (props): any => {
  console.log(getPoster(props.movieData.poster_path));
  if (!props.movieData) return;
  return (
    <MovieItemStyles listView={props.listView}>
      <h3>{props.movieData.title}</h3>
      <img src={getPoster(props.movieData.poster_path)} alt="" />
      <p>{props.movieData.overview}</p>
      <SaveItButton movieId={props.movieData.id} />
    </MovieItemStyles>
  );
};
