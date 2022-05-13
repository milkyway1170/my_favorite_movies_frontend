import { FC } from "react";
import { useTranslation } from "react-i18next";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { IReleaseYear } from "types";
import {
  ReleaseYearStyles,
  SearchSettingsText,
} from "./addFavoriteMoviesStyles";
import { releaseYearsList } from "./addFavoriteMoviesFunctions";

export const ReleaseYear: FC<IReleaseYear> = ({
  releaseYear,
  handleChange,
}) => {
  const { t } = useTranslation();

  const yearsList = releaseYearsList.map((year: number) => (
    <MenuItem value={year}>{year}</MenuItem>
  ));

  return (
    <ReleaseYearStyles>
      <SearchSettingsText>{t("Release year:")}</SearchSettingsText>
      <Select
        value={releaseYear}
        onChange={(e) => handleChange(Number(e.target.value))}
      >
        {yearsList}
      </Select>
    </ReleaseYearStyles>
  );
};
