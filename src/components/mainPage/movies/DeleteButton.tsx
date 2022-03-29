import { FC } from "react";
import Delete from "./media/cross.png";

interface IDeleteButton {
  handleChange: () => void;
}

export const DeleteButton: FC<IDeleteButton> = (props) => {
  return (
    <button onClick={() => props.handleChange()}>
      <img src={Delete} />
    </button>
  );
};
