import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { ReleaseYear } from "./ReleaseYear";
import {
  getData,
  getGenresNames,
  getGenresList,
  getMoviesList,
} from "../../utils/getFunctions";
import { IGenreItem, ISearchSettings } from "types";
import { SearchSettingsStyles, TitleTextStyles } from "styles/styles";
import { SearchedGenresTagCloud } from "./SearchedGenresTagCloud";
import { Rating } from "./Rating";
import { DEFAULT_RATING, DEFAULT_RELEASE_YEAR } from "./const";

export const SearchSettings: FC<ISearchSettings> = ({ setMoviesList }) => {
  const { t } = useTranslation();
  const [releaseYear, setRelaeseYear] = useState<number>(DEFAULT_RELEASE_YEAR);
  const [rating, setRating] = useState<number>(DEFAULT_RATING);
  const [genresList, setGenresList] = useState<IGenreItem[]>([]);
  const [favoriteGenresIdList, setFavoriteGenresIdList] = useState<number[]>(
    getData("favoriteGenres")
  );

  useEffect(() => {
    getGenresList(setGenresList);
    getMoviesList({
      rating,
      year: releaseYear,
      page: 1,
      genres: getGenresNames({ favoriteGenresIdList, genresList }),
      setMoviesList,
    });
  }, [rating, releaseYear, favoriteGenresIdList]);

  return (
    <SearchSettingsStyles>
      <TitleTextStyles>{t("Choose your favorite films:")}</TitleTextStyles>
      <SearchedGenresTagCloud
        genresList={genresList}
        favoriteGenresIdList={favoriteGenresIdList}
        setFavoriteGenresIdList={setFavoriteGenresIdList}
      />
      <Rating setRating={setRating} rating={rating} />
      <ReleaseYear
        handleChange={(releaseYear) => setRelaeseYear(releaseYear)}
        releaseYear={releaseYear}
      />
    </SearchSettingsStyles>
  );
};
