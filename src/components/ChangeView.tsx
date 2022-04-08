import { FC } from "react";

import { ChangeViewImgStyles, ChangeViewStyles } from "styles/styles";
import { ISwitch } from "types";
import listViewIcon from "./media/list.png";
import blockViewIcon from "./media/menu.png";

export const ChangeView: FC<ISwitch> = ({ listView, handleChange }) => {
  const ChangeView = () => {
    return handleChange(!listView);
  };

  return (
    <ChangeViewStyles>
      <button onClick={() => ChangeView()}>
        <ChangeViewImgStyles
          style={listView ? { border: "solid white" } : { border: "none" }}
          src={listViewIcon}
          alt="logo"
        />
      </button>
      <button onClick={() => ChangeView()}>
        <ChangeViewImgStyles
          style={!listView ? { border: "solid white" } : { border: "none" }}
          src={blockViewIcon}
          alt="logo"
        />
      </button>
    </ChangeViewStyles>
  );
};
