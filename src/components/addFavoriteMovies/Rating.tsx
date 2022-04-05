import { FC } from "react";
import Slider from "@mui/material/Slider";
import { useTranslation } from "react-i18next";

import { IRating } from "../../types/types";
import { RatingStyles } from "../../styles/Styles";

export const Rating: FC<IRating> = (props) => {
  const { t, i18n } = useTranslation();

  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 10,
      label: "10",
    },
  ];
  return (
    <RatingStyles>
      <h3>{t("Rating:")}</h3>
      <Slider
        key={`slider-${props.rating}`}
        defaultValue={props.rating}
        valueLabelDisplay="auto"
        step={1}
        min={0}
        max={10}
        marks={marks}
        onChange={(e: any) => props.setRating(e.target.value)}
      />
    </RatingStyles>
  );
};
