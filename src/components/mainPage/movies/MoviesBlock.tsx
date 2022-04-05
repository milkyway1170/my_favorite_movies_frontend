import { useState } from "react";
import { useTranslation } from "react-i18next";

import { FirstStringStyles, MoviesBlockStyles } from "../../../styles/Styles";
import { ChangeView } from "../../ChangeView";
import BtnAddNewFavoriteMovie from "./BtnAddNewFavoriteMovie";
import { MoviesList } from "./MoviesList";

export const MoviesBlock = () => {
  const { t, i18n } = useTranslation();
  const [listView, setListView] = useState<boolean>(true);

  return (
    <MoviesBlockStyles>
      <FirstStringStyles>
        <h2>{t("Your favorite movies:")}</h2>
        <div>
          <BtnAddNewFavoriteMovie />
          <ChangeView
            handleChange={(status: boolean) => setListView(status)}
            status={listView}
          />
        </div>
      </FirstStringStyles>
      <MoviesList listView={listView} />
    </MoviesBlockStyles>
  );
};
