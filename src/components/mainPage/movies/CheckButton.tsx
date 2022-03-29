import { FC } from "react";

import Check from "./media/checking-mark.png";

interface ICheckButton {
  status: boolean;
  handleChange: (status: boolean) => void;
}

export const CheckButton: FC<ICheckButton> = (props) => {
  const handleCheckButton = () => {
    return props.handleChange(!props.status);
  };
  return (
    <button onClick={() => handleCheckButton()}>
      <img src={Check} />
    </button>
  );
};
