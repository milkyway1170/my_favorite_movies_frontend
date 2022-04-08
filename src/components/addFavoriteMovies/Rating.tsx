import { FC } from "react";
import { useTranslation } from "react-i18next";
import Slider from "@mui/material/Slider";

import { IRating } from "types";
import { RatingStyles, SearchSettingsTextStyles } from "styles/styles";
import {
  RATING_SLIDER_MARKS,
  RATING_SLIDER_STEP,
  RATING_VALUE_MAX,
  RATING_VALUE_MIN,
} from "./const";

export const Rating: FC<IRating> = ({ rating, setRating }) => {
  const { t } = useTranslation();

  return (
    <RatingStyles>
      <SearchSettingsTextStyles>{t("Rating:")}</SearchSettingsTextStyles>
      <Slider
        key={`slider-${rating}`}
        defaultValue={rating}
        valueLabelDisplay="auto"
        step={RATING_SLIDER_STEP}
        min={RATING_VALUE_MIN}
        max={RATING_VALUE_MAX}
        marks={RATING_SLIDER_MARKS}
        onChange={(event: Event, value: number) => setRating(value)}
      />
    </RatingStyles>
  );
};
