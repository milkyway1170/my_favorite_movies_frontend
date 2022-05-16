import { FC } from "react";
import { useMutation, useQuery } from "@apollo/client";

import { MoviesListStyles } from "styles/Styles";
import { IMoviesList } from "types";
import { MovieItem } from "./MovieItem";
import {
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

  const handleDeleteItem = (id: string) => {
    const index = parseInt(id);
    removeMovieItem({
      variables: { movieId: index },
    });
  };
  let listItems = [];
  if (dataFavorireMovies) {
    listItems = dataFavorireMovies.favoriteMoviesList.map(
      (movieItem: { movieId: number }, index: number) => (
        <MovieItem
          index={index + 1}
          movieId={movieItem.movieId}
          listView={listView}
          key={movieItem.movieId}
          handleDeleteItem={(id: string) => {
            handleDeleteItem(id);
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
