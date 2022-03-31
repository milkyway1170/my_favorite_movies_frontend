import { FC } from "react";

import { ChangeViewStyles } from "../../../styles/Styles";
import { ISwitch } from "../../../types/types";
import ListView from "./media/list.png";
import BlockView from "./media/menu.png";

export const ChangeView: FC<ISwitch> = (props) => {
  const ChangeView = () => {
    return props.handleChange(!props.status);
  };

  return (
    <ChangeViewStyles>
      <button onClick={() => ChangeView()}>
        <img
          style={props.status ? { border: "solid white" } : { border: "none" }}
          src={ListView}
          alt="logo"
        ></img>
      </button>
      <button onClick={() => ChangeView()}>
        <img
          style={!props.status ? { border: "solid white" } : { border: "none" }}
          src={BlockView}
          alt="logo"
        ></img>
      </button>
    </ChangeViewStyles>
  );
};
