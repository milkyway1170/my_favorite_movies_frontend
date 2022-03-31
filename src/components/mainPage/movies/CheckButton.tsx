import { FC } from "react";

import { ISwitch } from "../../../types/types";
import Check from "./media/checking-mark.png";

export const CheckButton: FC<ISwitch> = (props) => {
  const handleCheckButton = () => {
    return props.handleChange(!props.status);
  };
  return (
    <button onClick={() => handleCheckButton()}>
      <img src={Check} />
    </button>
  );
};
