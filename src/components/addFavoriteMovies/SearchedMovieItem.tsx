import { useMutation, useQuery } from "@apollo/client";
import { FC } from "react";

import { ErrorView } from "components/ErrorView";
import { Loading } from "components/Loading";
import {
  MovieItemPosterImgStyles,
  MovieItemStyles,
  MovieItemTextStyles,
  MovieItemTitleTextStyles,
} from "styles/Styles";
import { ISearchedMovieItem } from "types";
import { getPoster } from "utils/getFunctions";
import {
  DELETE_OR_INSERT_MOVIE,
  GET_FAVORITE_MOVIES_LIST,
} from "utils/gqlFunctions";
import { SaveItButton } from "./SaveItButton";

export const SearchedMovieItem: FC<ISearchedMovieItem> = ({
  listView,
  movieData: { id, title, overview, posterPath },
}) => {
  const [deleteOrInsertMovieItem] = useMutation(DELETE_OR_INSERT_MOVIE, {
    refetchQueries: [{ query: GET_FAVORITE_MOVIES_LIST }],
  });
  const {
    loading: loadingFavorireMovies,
    error: errorFavorireMovies,
    data: dataFavorireMovies,
  } = useQuery(GET_FAVORITE_MOVIES_LIST);

  const handleChangeMovieItem = async (
    movieId: number,
    isFavorite: boolean
  ) => {
    deleteOrInsertMovieItem({
      variables: { movieId, isFavorite },
    });
  };

  if (loadingFavorireMovies || !id) return <Loading />;
  if (errorFavorireMovies) {
    return <ErrorView errorList={[errorFavorireMovies]} />;
  }

  if (dataFavorireMovies) {
    const favorireMoviesIdList = dataFavorireMovies.favoriteMoviesList.map(
      (movieItem: { movieId: number }) => movieItem.movieId
    );
    return (
      <MovieItemStyles listView={listView}>
        <MovieItemTitleTextStyles>{title}</MovieItemTitleTextStyles>
        <MovieItemPosterImgStyles
          listView={listView}
          src={getPoster(posterPath)}
          alt=""
        />
        <MovieItemTextStyles>{overview}</MovieItemTextStyles>
        <SaveItButton
          isSave={favorireMoviesIdList.includes(id)}
          handleChangeMovieItem={handleChangeMovieItem}
          movieId={id}
        />
      </MovieItemStyles>
    );
  }
  return <Loading />;
};
