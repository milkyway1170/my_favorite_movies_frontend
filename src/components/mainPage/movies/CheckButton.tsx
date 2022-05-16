import { FC } from "react";

import { MovieItemButtonImgStyles } from "styles/styles";
import { ISwitch } from "types";
import checkIcon from "./media/checking-mark.png";

export const CheckButton: FC<ISwitch> = ({ handleChange, listView }) => {
  const handleCheckButton = () => {
    return handleChange(!listView);
  };
  return (
    <button onClick={() => handleCheckButton()}>
      <MovieItemButtonImgStyles listView={listView} src={checkIcon} />
    </button>
  );
};
