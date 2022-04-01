import { FC } from "react";

import { ChangeViewStyles } from "../../../styles/Styles";
import { ISwitch } from "../../../types/types";
import listViewIcon from "./media/list.png";
import blockViewIcon from "./media/menu.png";

export const ChangeView: FC<ISwitch> = (props) => {
  const ChangeView = () => {
    return props.handleChange(!props.status);
  };

  return (
    <ChangeViewStyles>
      <button onClick={() => ChangeView()}>
        <img
          style={props.status ? { border: "solid white" } : { border: "none" }}
          src={listViewIcon}
          alt="logo"
        ></img>
      </button>
      <button onClick={() => ChangeView()}>
        <img
          style={!props.status ? { border: "solid white" } : { border: "none" }}
          src={blockViewIcon}
          alt="logo"
        ></img>
      </button>
    </ChangeViewStyles>
  );
};
