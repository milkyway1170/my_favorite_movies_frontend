import { FC } from "react";
import { useTranslation } from "react-i18next";

import { ISaveItButton } from "types";
import { SaveItButtonStyles } from "./addFavoriteMoviesStyles";

export const SaveItButton: FC<ISaveItButton> = ({
  handleChangeMovieItem,
  movieId,
  isSave,
}) => {
  const { t } = useTranslation();

  return (
    <SaveItButtonStyles
      isSave={isSave}
      onClick={async () => await handleChangeMovieItem(movieId, isSave)}
    >
      {t("Save it!")}
    </SaveItButtonStyles>
  );
};
