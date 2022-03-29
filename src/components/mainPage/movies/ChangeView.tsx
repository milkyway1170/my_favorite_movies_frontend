import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

import ListView from "./media/list.png";
import BlockView from "./media/menu.png";

interface IChangeView {
  status: boolean;
  handleChange: (status: boolean) => void;
}

const ChangeViewStyles = styled.div`
  ${tw`space-x-4`}
  & {
    img {
      ${tw`w-12 rounded-md p-1`}
    }
  }
`;

export const ChangeView: FC<IChangeView> = (props) => {
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
