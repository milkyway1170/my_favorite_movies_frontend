import { FC } from "react";
import { useMutation, useQuery } from "@apollo/client";

import { MoviesListStyles } from "styles/Styles";
import { IMoviesList } from "types";
import { MovieItem } from "./MovieItem";
import {
  CHANGE_MOVIE_WATCH_STATUS,
  GET_FAVORITE_MOVIES_LIST,
  REMOVE_FAVORITE_MOVIE,
} from "utils/gqlFunctions";
import { ErrorView } from "components/ErrorView";
import { Loading } from "components/Loading";

export const MoviesList: FC<IMoviesList> = ({ listView }) => {
  const {
    loading: loadingFavorireMovies,
    error: errorFavorireMovies,
    data: dataFavorireMovies,
  } = useQuery(GET_FAVORITE_MOVIES_LIST);
  const [removeMovieItem] = useMutation(REMOVE_FAVORITE_MOVIE, {
    refetchQueries: [{ query: GET_FAVORITE_MOVIES_LIST }],
  });
  const [changeMovieItem] = useMutation(CHANGE_MOVIE_WATCH_STATUS, {
    refetchQueries: [{ query: GET_FAVORITE_MOVIES_LIST }],
  });

  const handleDeleteItem = (id: string) => {
    const index = parseInt(id);
    removeMovieItem({
      variables: { movieId: index },
    });
  };

  const handleChangeItemStatus = (id: string) => {
    const index = parseInt(id);
    changeMovieItem({
      variables: { movieId: index },
    });
  };

  let listItems = [];
  if (dataFavorireMovies) {
    listItems = dataFavorireMovies.favoriteMoviesList.map(
      (movieItem: { movieId: number; isWatched: boolean }, index: number) => (
        <MovieItem
          index={index + 1}
          movieId={movieItem.movieId}
          listView={listView}
          isWatched={movieItem.isWatched}
          key={movieItem.movieId}
          handleDeleteItem={(id: string) => {
            handleDeleteItem(id);
          }}
          handleChangeItemStatus={(id: string) => {
            handleChangeItemStatus(id);
          }}
        />
      )
    );
  }

  if (loadingFavorireMovies) return <Loading />;
  if (errorFavorireMovies) {
    return <ErrorView errorList={[errorFavorireMovies]} />;
  }

  return <MoviesListStyles listView={listView}>{listItems}</MoviesListStyles>;
};
