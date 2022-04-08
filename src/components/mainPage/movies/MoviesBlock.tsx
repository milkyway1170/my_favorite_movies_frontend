import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  MoviesBlockButtonContainerStyles,
  MoviesBlockContainerStyles,
  MoviesBlockStyles,
  TitleTextStyles,
} from "styles/styles";
import { ChangeView } from "components/ChangeView";
import BtnAddNewFavoriteMovie from "./BtnAddNewFavoriteMovie";
import { MoviesList } from "./MoviesList";

export const MoviesBlock = () => {
  const { t } = useTranslation();
  const [listView, setListView] = useState<boolean>(true);

  return (
    <MoviesBlockStyles>
      <MoviesBlockContainerStyles>
        <TitleTextStyles>{t("Your favorite movies:")}</TitleTextStyles>
        <MoviesBlockButtonContainerStyles>
          <BtnAddNewFavoriteMovie />
          <ChangeView
            handleChange={(listView: boolean) => setListView(listView)}
            listView={listView}
          />
        </MoviesBlockButtonContainerStyles>
      </MoviesBlockContainerStyles>
      <MoviesList listView={listView} />
    </MoviesBlockStyles>
  );
};
