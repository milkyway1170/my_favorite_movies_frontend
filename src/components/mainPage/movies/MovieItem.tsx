import { FC, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";

import {
  MovieItemBtns,
  MovieItemPosterImgStyles,
  MovieItemStyles,
  MovieItemTextStyles,
  MovieItemTitleTextStyles,
} from "styles/styles";
import { IMovieData, IMovieItem } from "@types";
import { getPoster } from "utils/getFunctions";
import { CheckButton } from "./CheckButton";
import { DeleteButton } from "./DeleteButton";
import { GET_MOVIE_DATA } from "utils/gqlFunctions";

export const MovieItem: FC<IMovieItem> = ({
  movieId,
  handleDeleteItem,
  listView,
}): any => {
  const { t } = useTranslation();
  const {
    loading: loadingMovieData,
    error: errorMovieData,
    data: dataMovieData,
  } = useQuery(GET_MOVIE_DATA, {
    variables: { movieId: movieId.toString() },
  });
  const [movieData, setMovieData] = useState<IMovieData>({
    id: null,
    title: "",
    overview: "",
    posterPath: "",
  });
  const [isCheck, setIsCheck] = useState<boolean>(false);

  useEffect(() => {
    if (movieId && dataMovieData) {
      setMovieData({
        id: dataMovieData.getMovieData.id,
        title: dataMovieData.getMovieData.title,
        overview: dataMovieData.getMovieData.overview,
        posterPath: dataMovieData.getMovieData.poster_path,
      });
    }
  }, [dataMovieData]);

  const handleDeleteButton = () => {
    if (movieData.id) {
      return handleDeleteItem(movieData.id.toString());
    }
  };

  if (loadingMovieData) return <div> {t("Loading...")}</div>;
  if (errorMovieData)
    return (
      <div>
        {t("Error!")} {errorMovieData.message}
      </div>
    );
  if (!movieData) return;
  return (
    <MovieItemStyles listView={listView}>
      <MovieItemTitleTextStyles>{movieData.title}</MovieItemTitleTextStyles>
      <MovieItemPosterImgStyles
        listView={listView}
        src={getPoster(movieData.posterPath)}
        alt="poster"
      />
      <MovieItemTextStyles>{movieData.overview}</MovieItemTextStyles>
      <MovieItemBtns>
        <CheckButton
          handleChange={(listView: boolean) => setIsCheck(listView)}
          listView={isCheck}
        />
        <DeleteButton
          listView={listView}
          handleChange={() => handleDeleteButton()}
        />
      </MovieItemBtns>
    </MovieItemStyles>
  );
};
