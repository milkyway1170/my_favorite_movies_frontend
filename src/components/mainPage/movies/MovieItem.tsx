import { FC, useEffect, useState } from "react";

import {
  MovieItemBtns,
  MovieItemPosterImgStyles,
  MovieItemStyles,
  MovieItemTextStyles,
  MovieItemTitleTextStyles,
} from "@styles";
import { IMovieData, IMovieItem } from "@types";
import { getPoster } from "utils/getFunctions";
import { getMovieData } from "../movieItemFunctions";
import { CheckButton } from "./CheckButton";
import { DeleteButton } from "./DeleteButton";

export const MovieItem: FC<IMovieItem> = ({
  movieId,
  handleDeleteItem,
  listView,
}): any => {
  const [movieData, setMovieData] = useState<IMovieData>({
    id: null,
    title: "",
    overview: "",
    posterPath: "",
  });
  const [isCheck, setIsCheck] = useState<boolean>(false);

  useEffect(() => {
    if (movieId) {
      getMovieData(movieId, setMovieData);
    }
  }, []);

  const handleDeleteButton = () => {
    if (movieData.id) {
      return handleDeleteItem(movieData.id.toString());
    }
  };

  if (!movieData) return;
  return (
    <MovieItemStyles listView={listView}>
      <MovieItemTitleTextStyles>{movieData.title}</MovieItemTitleTextStyles>
      <MovieItemPosterImgStyles
        listView={listView}
        src={getPoster(movieData.posterPath)}
        alt=""
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
