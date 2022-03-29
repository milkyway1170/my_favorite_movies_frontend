import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import tw from "twin.macro";

import AddNewFavoriteMovie from "./AddNewFavoriteMovie";
import { ChangeView } from "./ChangeView";
import { MoviesList } from "./MoviesList";

const MoviesBlockStyles = styled.div`
  ${tw`
    bg-[#43a2f0]
    mt-4 py-5 px-10 mx-20
    rounded-xl
    shadow-2xl
    `}
  & {
    div {
      ${tw`
      flex flex-row justify-between items-center
      space-x-4
      text-3xl font-semibold
      `}
    }
  }
`;

export const MoviesBlock = () => {
  const { t, i18n } = useTranslation();
  const [listView, setListView] = useState<boolean>(true);

  const DEFAULT_VALUES = {
    year: 2010,
    rating: 5,
    genres: ["Comedy", "Family"],
  };

  return (
    <MoviesBlockStyles>
      <div>
        <h2>{t("Your favorite movies:")}</h2>
        <div>
          <AddNewFavoriteMovie />
          <ChangeView
            handleChange={(status: boolean) => setListView(status)}
            status={listView}
          />
        </div>
      </div>
      <MoviesList listView={listView} />
    </MoviesBlockStyles>
  );
};
