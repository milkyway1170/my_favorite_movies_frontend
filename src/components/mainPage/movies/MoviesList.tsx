import { FC, useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";

import { MoviesListStyles } from "styles/styles";
import { IMoviesList } from "@types";
import { MovieItem } from "./MovieItem";
import {
  GET_FAVORITE_MOVIES_LIST,
  REMOVE_FAVORITE_MOVIE,
} from "utils/gqlFunctions";

export const MoviesList: FC<IMoviesList> = ({ listView }) => {
  const { t } = useTranslation();
  const [moviesIdList, setMoviesIdList] = useState<number[]>([]);
  const {
    loading: loadingFavorireMovies,
    error: errorFavorireMovies,
    data: dataFavorireMovies,
  } = useQuery(GET_FAVORITE_MOVIES_LIST);
  const [removeMovieItem] = useMutation(REMOVE_FAVORITE_MOVIE);

  useEffect(() => {
    if (dataFavorireMovies) {
      setMoviesIdList(
        dataFavorireMovies.favoriteMoviesList.map(
          (favoriteMovieItem: { movieId: number }) => favoriteMovieItem.movieId
        )
      );
    }
  }, [dataFavorireMovies]);

  const handleDeleteItem = (id: string) => {
    const index = parseInt(id);
    removeMovieItem({
      variables: { movieId: index },
    });
    setMoviesIdList(moviesIdList.filter((id) => id !== index));
  };

  const listItems = moviesIdList.map((movieId: number, index: number) => (
    <MovieItem
      index={index + 1}
      movieId={movieId}
      listView={listView}
      key={movieId}
      handleDeleteItem={(id: string) => {
        handleDeleteItem(id);
      }}
    />
  ));

  if (loadingFavorireMovies) return <div> {t("Loading...")}</div>;
  if (errorFavorireMovies)
    return (
      <div>
        {t("Error!")} {errorFavorireMovies.message}
      </div>
    );

  return <MoviesListStyles listView={listView}>{listItems}</MoviesListStyles>;
};
