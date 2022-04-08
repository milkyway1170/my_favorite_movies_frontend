import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import { SaveItButtonStyles } from "styles/styles";
import { ISaveItButton } from "types";
import { checkAndChange, getData } from "utils/getFunctions";

export const SaveItButton: FC<ISaveItButton> = ({ movieId }) => {
  const { t } = useTranslation();
  const [isSave, setIsSave] = useState<boolean>(
    getData("favoriteMovies").includes(movieId)
  );

  const handleSaveItButton = () => {
    setIsSave(!isSave);
    if (movieId) {
      const resultList = checkAndChange({
        checkedArray: getData("favoriteMovies"),
        checkedArrayItem: movieId,
      });
      localStorage.setItem("favoriteMovies", JSON.stringify(resultList));
    }
  };

  return (
    <SaveItButtonStyles isSave={isSave} onClick={() => handleSaveItButton()}>
      {t("Save it!")}
    </SaveItButtonStyles>
  );
};
