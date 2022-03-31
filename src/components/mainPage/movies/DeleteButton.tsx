import { FC } from "react";
import { IDeleteButton } from "../../../types/types";
import Delete from "./media/cross.png";

export const DeleteButton: FC<IDeleteButton> = (props) => {
  return (
    <button onClick={() => props.handleChange()}>
      <img src={Delete} />
    </button>
  );
};
