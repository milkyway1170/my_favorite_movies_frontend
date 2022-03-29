import { FC } from "react";
import { IGenreItemProps } from "../../types/types";

const GenreItem: FC<IGenreItemProps> = (props) => {
  return (
    <button onClick={() => props.handleChangeGenreItem(props.genreItem)}>
      {props.genreItem.name}
    </button>
  );
};

export default GenreItem;
