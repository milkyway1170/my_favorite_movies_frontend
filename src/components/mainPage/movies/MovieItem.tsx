import { FC, useEffect, useState } from "react";

import { MovieItemBtns, MovieItemStyles } from "../../../styles/Styles";
import { IMovieData, IMovieItem } from "../../../types/types";
import { GetMovieData, getPoster } from "../../GetFunctions";
import { CheckButton } from "./CheckButton";
import { DeleteButton } from "./DeleteButton";

export const MovieItem: FC<IMovieItem> = (props): any => {
  const [movieData, setMovieData] = useState<IMovieData>({
    id: "",
    title: "",
    overview: "",
    posterPath: "",
  });
  const [isCheck, setIsCheck] = useState<boolean>(false);

  useEffect(() => {
    if (props.movieId) {
      GetMovieData(props.movieId, setMovieData);
    }
  }, []);

  const handleDeleteButton = () => {
    if (movieData.id) {
      return props.handleDeleteItem(movieData.id);
    }
  };

  if (!movieData) return;
  return (
    <MovieItemStyles listView={props.listView}>
      <h3>{movieData.title}</h3>
      <img src={getPoster(movieData.posterPath)} alt="" />
      <p>{movieData.overview}</p>
      <MovieItemBtns>
        <CheckButton
          handleChange={(status: boolean) => setIsCheck(status)}
          status={isCheck}
        />
        <DeleteButton handleChange={() => handleDeleteButton()} />
      </MovieItemBtns>
    </MovieItemStyles>
  );
};
