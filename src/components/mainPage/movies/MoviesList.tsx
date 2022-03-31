import { useState } from "react";

import { MoviesListStyles } from "../../../styles/Styles";
import { MovieItem } from "./MovieItem";

export const MoviesList = ({ listView }: { listView: boolean }) => {
  const [moviesIdList, setMoviesIdList] = useState<number[]>([12, 13, 14, 15]);

  const handleDeleteItem = (id: string) => {
    const index = parseInt(id);
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

  return <MoviesListStyles listView={listView}>{listItems}</MoviesListStyles>;
};
