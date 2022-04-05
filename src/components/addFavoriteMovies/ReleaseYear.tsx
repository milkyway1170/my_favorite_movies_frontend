import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { ReleaseYearStyles } from "../../styles/Styles";
import { IReleaseYear } from "../../types/types";

export const ReleaseYear: FC<IReleaseYear> = (props) => {
  const { t, i18n } = useTranslation();
  let yearsList = [];
  for (let year = 1874; year <= new Date().getFullYear(); year++) {
    yearsList.push(<MenuItem value={year}>{year}</MenuItem>);
  }

  return (
    <ReleaseYearStyles>
      <h3>{t("Release year:")}</h3>
      <Select
        value={props.releaseYear}
        onChange={(e) => props.handleChange(Number(e.target.value))}
      >
        {yearsList}
      </Select>
    </ReleaseYearStyles>
  );
};
