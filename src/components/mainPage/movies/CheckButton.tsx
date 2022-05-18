import { FC } from "react";

import { MovieItemButtonImgStyles } from "styles/Styles";
import { IDeleteButton } from "types";
import checkIcon from "./media/checking-mark.png";

export const CheckButton: FC<IDeleteButton> = ({ handleChange, listView }) => {
  return (
    <button onClick={() => handleChange()}>
      <MovieItemButtonImgStyles listView={listView} src={checkIcon} />
    </button>
  );
};
