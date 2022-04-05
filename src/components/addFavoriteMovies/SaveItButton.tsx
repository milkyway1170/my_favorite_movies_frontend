import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import { SaveItButtonStyles } from "../../styles/Styles";
import { ISaveItButton } from "../../types/types";
import { getData } from "../../utils/getFunctions";

export const SaveItButton: FC<ISaveItButton> = (props) => {
  const { t, i18n } = useTranslation();
  const [isSave, setIsSave] = useState<boolean>(
    getData("favoriteMovies").includes(props.movieId)
  );

  const handleSaveItButton = () => {
    setIsSave(!isSave);
    let favoriteMoviesList = getData("favoriteMovies");
    if (favoriteMoviesList.indexOf(props.movieId) >= 0) {
      localStorage.setItem(
        "favoriteMovies",
        JSON.stringify(
          favoriteMoviesList.filter(
            (favoriteMovie: number) => favoriteMovie !== props.movieId
          )
        )
      );
    } else {
      localStorage.setItem(
        "favoriteMovies",
        JSON.stringify([...favoriteMoviesList, props.movieId])
      );
    }
  };

  return (
    <SaveItButtonStyles isSave={isSave}>
      <button onClick={() => handleSaveItButton()}>{t("Save it!")}</button>
    </SaveItButtonStyles>
  );
};
