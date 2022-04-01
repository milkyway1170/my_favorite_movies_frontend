import { useState } from "react";
import { useTranslation } from "react-i18next";

import { MoviesBlockStyles } from "../../../styles/Styles";
import { GetMoviesList } from "../../../utils/getFunctions";
import AddNewFavoriteMovie from "./AddNewFavoriteMovie";
import { ChangeView } from "./ChangeView";
import { MoviesList } from "./MoviesList";

export const MoviesBlock = () => {
  const { t, i18n } = useTranslation();
  const [listView, setListView] = useState<boolean>(true);

  const DEFAULT_VALUES = {
    page: 2,
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
