import { FC } from "react";
import { useTranslation } from "react-i18next";

import { RatingStyles, SearchSettingsText } from "./addFavoriteMoviesStyles";
import {
  RATING_SLIDER_MARKS,
  RATING_SLIDER_STEP,
  RATING_VALUE_MAX,
  RATING_VALUE_MIN,
} from "./const";
import { IRating } from "types";
import Slider from "@mui/material/Slider";

export const Rating: FC<IRating> = ({ rating, setRating }) => {
  const { t } = useTranslation();

  return (
    <RatingStyles>
      <SearchSettingsText>{t("Rating:")}</SearchSettingsText>
      <Slider
        key={`slider-${rating}`}
        defaultValue={rating}
        valueLabelDisplay="auto"
        step={RATING_SLIDER_STEP}
        min={RATING_VALUE_MIN}
        max={RATING_VALUE_MAX}
        marks={RATING_SLIDER_MARKS}
        onChange={(_: Event, value: number | number[]) => {
          if (typeof value === "number") setRating(value);
        }}
      />
    </RatingStyles>
  );
};
