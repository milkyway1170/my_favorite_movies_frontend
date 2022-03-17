import React, { FC } from "react";
import { GenreItemProps } from "../../types/types";

const GenreItem: FC<GenreItemProps> = ({ genreItem, onClick }) => {
  console.log(genreItem);
  return <div onClick={() => onClick()}>{genreItem.name}</div>;
};

export default GenreItem;
