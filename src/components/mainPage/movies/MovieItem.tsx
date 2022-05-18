import { FC, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

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
  isWatched,
  movieId,
  handleDeleteItem,
  handleChangeItemStatus,
  listView,
}) => {
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

  useEffect(() => {
    if (dataMovieData) {
      setMovieData({
        id: dataMovieData.getMovieData.id,
        title: dataMovieData.getMovieData.title,
        overview: dataMovieData.getMovieData.overview,
        posterPath: dataMovieData?.getMovieData.posterPath,
      });
    }
  }, [dataMovieData]);

  const handleDeleteButton = () => {
    if (movieData.id) {
      return handleDeleteItem(movieData.id.toString());
    }
  };

  const handleChangeStatus = () => {
    if (movieData.id) {
      return handleChangeItemStatus(movieData.id.toString());
    }
  };

  if (loadingMovieData || !movieData) return <Loading />;
  if (errorMovieData) {
    return <ErrorView errorList={[errorMovieData]} />;
  }

  return (
    <MovieItemStyles listView={listView} isWatched={isWatched}>
      <MovieItemTitleTextStyles>{movieData.title}</MovieItemTitleTextStyles>
      <MovieItemPosterImgStyles
        listView={listView}
        src={getPoster(movieData.posterPath)}
        alt="poster"
      />
      <MovieItemTextStyles>{movieData.overview}</MovieItemTextStyles>
      <MovieItemBtns>
        <CheckButton
          handleChange={() => handleChangeStatus()}
          listView={listView}
        />
        <DeleteButton
          listView={listView}
          handleChange={() => handleDeleteButton()}
        />
      </MovieItemBtns>
    </MovieItemStyles>
  );
};
