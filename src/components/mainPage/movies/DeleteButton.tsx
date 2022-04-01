import { FC } from "react";
import { IDeleteButton } from "../../../types/types";
import deleteIcon from "./media/cross.png";

export const DeleteButton: FC<IDeleteButton> = (props) => {
  return (
    <button onClick={() => props.handleChange()}>
      <img src={deleteIcon} />
    </button>
  );
};
