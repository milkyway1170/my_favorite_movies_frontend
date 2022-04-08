import { FC } from "react";
import { useTranslation } from "react-i18next";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { IReleaseYear } from "types";
import { ReleaseYearStyles, SearchSettingsTextStyles } from "styles/styles";
import { getReleaseYearsList } from "utils/getFunctions";

export const ReleaseYear: FC<IReleaseYear> = ({
  releaseYear,
  handleChange,
}) => {
  const { t } = useTranslation();

  const yearsList = getReleaseYearsList().map((year: number) => (
    <MenuItem value={year}>{year}</MenuItem>
  ));

  return (
    <ReleaseYearStyles>
      <SearchSettingsTextStyles>{t("Release year:")}</SearchSettingsTextStyles>
      <Select
        value={releaseYear}
        onChange={(e) => handleChange(Number(e.target.value))}
      >
        {yearsList}
      </Select>
    </ReleaseYearStyles>
  );
};
