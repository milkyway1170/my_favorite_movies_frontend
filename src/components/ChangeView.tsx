import { FC } from "react";

import { ISwitch } from "@types";
import listViewIcon from "./media/list.png";
import blockViewIcon from "./media/menu.png";
import { ChangeViewImgStyles, ChangeViewStyles } from "styles/styles";

export const ChangeView: FC<ISwitch> = ({ listView, handleChange }) => {
  const ChangeView = () => {
    return handleChange(!listView);
  };

  return (
    <ChangeViewStyles>
      <button onClick={() => ChangeView()}>
        <ChangeViewImgStyles
          listView={listView}
          src={listViewIcon}
          alt="logo"
        />
      </button>
      <button onClick={() => ChangeView()}>
        <ChangeViewImgStyles
          listView={!listView}
          src={blockViewIcon}
          alt="logo"
        />
      </button>
    </ChangeViewStyles>
  );
};
