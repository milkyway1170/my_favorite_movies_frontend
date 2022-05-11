import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQuery } from "@apollo/client";

import { ISaveItButton } from "@types";
import { SaveItButtonStyles } from "./addFavoriteMoviesStyles";
import {
  ADD_NEW_FAVORITE_MOVIE,
  GET_FAVORITE_MOVIES_LIST,
  REMOVE_FAVORITE_MOVIE,
} from "utils/gqlFunctions";

export const SaveItButton: FC<ISaveItButton> = ({ movieId }) => {
  const { t } = useTranslation();
  const [addMovieItem] = useMutation(ADD_NEW_FAVORITE_MOVIE);
  const [removeMovieItem] = useMutation(REMOVE_FAVORITE_MOVIE);
  const {
    loading: loadingFavorireMovies,
    error: errorFavorireMovies,
    data: dataFavorireMovies,
  } = useQuery(GET_FAVORITE_MOVIES_LIST);
  const [isSave, setIsSave] = useState<boolean>(false);

  useEffect(() => {
    if (dataFavorireMovies) {
      setIsSave(dataFavorireMovies.favoriteMoviesList.includes(movieId));
    }
  }, [dataFavorireMovies]);

  const handleSaveItButton = () => {
    if (movieId) {
      setIsSave(!isSave);
      let resultList: number[] = [];
      if (dataFavorireMovies.favoriteMoviesList.indexOf(movieId) >= 0) {
        resultList = dataFavorireMovies.favoriteMoviesList.filter(
          (arrayItem: number) => arrayItem !== movieId
        );
        removeMovieItem({
          variables: { movieId },
        });
      } else {
        resultList = [...dataFavorireMovies.favoriteMoviesList, movieId];
        addMovieItem({
          variables: { newFavoriteMovie: movieId },
        });
      }
    }
  };
  if (loadingFavorireMovies) return <div> {t("Loading...")}</div>;
  if (errorFavorireMovies)
    return (
      <div>
        {t("Error!")} {errorFavorireMovies.message}
      </div>
    );
  return (
    <SaveItButtonStyles isSave={isSave} onClick={() => handleSaveItButton()}>
      {t("Save it!")}
    </SaveItButtonStyles>
  );
};
