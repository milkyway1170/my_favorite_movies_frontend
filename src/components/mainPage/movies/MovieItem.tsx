import { FC, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";

import {
  MovieItemBtns,
  MovieItemPosterImgStyles,
  MovieItemStyles,
  MovieItemTextStyles,
  MovieItemTitleTextStyles,
} from "styles/Styles";
import { IMovieData, IMovieItem } from "types";
import { getPoster } from "utils/getFunctions";
import { CheckButton } from "./CheckButton";
import { DeleteButton } from "./DeleteButton";
import { GET_MOVIE_DATA } from "utils/gqlFunctions";
import { ErrorView } from "components/ErrorView";
import { Loading } from "components/Loading";

export const MovieItem: FC<IMovieItem> = ({
  movieId,
  handleDeleteItem,
  listView,
}) => {
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
    if (dataMovieData) {
      setMovieData({
        id: dataMovieData.getMovieData.id,
        title: dataMovieData.getMovieData.title,
        overview: dataMovieData.getMovieData.overview,
        posterPath: dataMovieData.getMovieData.posterPath,
      });
    }
  }, [dataMovieData]);

  const handleDeleteButton = () => {
    if (movieData.id) {
      return handleDeleteItem(movieData.id.toString());
    }
  };

  if (loadingMovieData || !movieData) return <Loading />;
  if (errorMovieData) {
    return <ErrorView errorList={[errorMovieData]} />;
  }

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
