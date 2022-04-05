import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { ReleaseYear } from "./ReleaseYear";
import {
  getData,
  getGenresList,
  getMoviesList,
} from "../../utils/getFunctions";
import { IGenreItem, IMovieData } from "../../types/types";
import { SearchSettingsStyles } from "../../styles/Styles";
import SearchedGenresTagCloud from "./SearchedGenresTagCloud";
import { Rating } from "./Rating";

export const SearchSettings = (props: {
  setMoviesList: (moviesList: IMovieData[]) => void;
}) => {
  const { t, i18n } = useTranslation();
  const [releaseYear, setRelaeseYear] = useState<number>(2010);
  const [rating, setRating] = useState<number>(5);
  const [genresList, setGenresList] = useState<IGenreItem[]>([]);
  const [favoriteGenresList, setFavoriteGenresList] = useState<string[]>(
    getData("favoriteGenres")
  );

  useEffect(() => {
    getGenresList(setGenresList);
    getMoviesList({
      rating: rating,
      year: releaseYear,
      page: 1,
      genres: favoriteGenresList,
      setMoviesList: props.setMoviesList,
    });
  }, [rating, releaseYear, favoriteGenresList]);

  return (
    <SearchSettingsStyles>
      <h2>{t("Choose your favorite films:")}</h2>
      <SearchedGenresTagCloud
        genresList={genresList}
        setGenresList={setGenresList}
        favoriteGenresList={favoriteGenresList}
        setFavoriteGenresList={setFavoriteGenresList}
      />
      <Rating setRating={setRating} rating={rating} />
      <ReleaseYear
        handleChange={(releaseYear) => setRelaeseYear(releaseYear)}
        releaseYear={releaseYear}
      />
    </SearchSettingsStyles>
  );
};
