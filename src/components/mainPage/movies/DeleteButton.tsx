import { FC } from "react";
import { MovieItemButtonImgStyles } from "styles/styles";
import { IDeleteButton } from "types";
import deleteIcon from "./media/cross.png";

export const DeleteButton: FC<IDeleteButton> = ({ handleChange, listView }) => {
  return (
    <button onClick={() => handleChange()}>
      <MovieItemButtonImgStyles listView={listView} src={deleteIcon} />
    </button>
  );
};
