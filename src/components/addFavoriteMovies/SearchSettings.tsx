import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "@apollo/client";

import { ReleaseYear } from "./ReleaseYear";
import { IApiMovieData, IGenreItem, IMovieData, ISearchSettings } from "@types";
import { SearchedGenresTagCloud } from "./SearchedGenresTagCloud";
import { Rating } from "./Rating";
import { DEFAULT_RATING, DEFAULT_RELEASE_YEAR } from "./const";
import { getGenresNames } from "./addFavoriteMoviesFunctions";
import { SearchSettingsStyles } from "./addFavoriteMoviesStyles";
import { TitleTextStyles } from "styles/styles";
import {
  GET_FAVORITE_GENRES_LIST,
  GET_GENRES_LIST,
  GET_SEARCHING_MOVIES_LIST,
} from "utils/gqlFunctions";

export const SearchSettings: FC<ISearchSettings> = ({ setMoviesList }) => {
  const { t } = useTranslation();
  const [releaseYear, setRelaeseYear] = useState<number>(DEFAULT_RELEASE_YEAR);
  const [rating, setRating] = useState<number>(DEFAULT_RATING);
  const [genresList, setGenresList] = useState<IGenreItem[]>([]);
  const [favoriteGenresIdList, setFavoriteGenresIdList] = useState<number[]>(
    []
  );
  const {
    loading: loadingGenres,
    error: errorGenres,
    data: dataGenres,
  } = useQuery(GET_GENRES_LIST);
  const {
    loading: loadingFavorireGenres,
    error: errorFavorireGenres,
    data: dataFavorireGenres,
  } = useQuery(GET_FAVORITE_GENRES_LIST);
  const {
    loading: loadingSearchingMoviesList,
    error: errorSearchingMoviesList,
    data: dataSearchingMoviesList,
    refetch,
  } = useQuery(GET_SEARCHING_MOVIES_LIST, {
    variables: {
      page: 1,
      rating,
      year: releaseYear,
      genres: getGenresNames({ favoriteGenresIdList, genresList }),
    },
  });

  useEffect(() => {
    if (dataGenres) {
      setGenresList(
        dataGenres.getGenres.map((genreItem: IGenreItem) => genreItem)
      );
    }
    if (dataFavorireGenres) {
      setFavoriteGenresIdList(
        dataFavorireGenres.favoriteGenresList.map(
          (favoriteGenreItem: { genreId: number }) => favoriteGenreItem.genreId
        )
      );
    }
    if (dataSearchingMoviesList) {
      setMoviesList(
        dataSearchingMoviesList.getSearchingMoviesList.map(
          (data: IApiMovieData) => ({
            id: data.id,
            title: data.title,
            overview: data.overview,
            posterPath: data.poster_path,
          })
        )
      );
    }
    refetch({
      page: 1,
      rating,
      year: releaseYear,
      genres: getGenresNames({ favoriteGenresIdList, genresList }),
    });
  }, [
    dataGenres,
    dataSearchingMoviesList,
    rating,
    releaseYear,
    favoriteGenresIdList,
  ]);

  if (loadingGenres) return <div> {t("Loading...")}</div>;
  if (errorGenres)
    return (
      <div>
        {t("Error!")} {errorGenres.message}
      </div>
    );
  if (loadingSearchingMoviesList) return <div> {t("Loading...")}</div>;
  if (errorSearchingMoviesList)
    return (
      <div>
        {t("Error!")} {errorSearchingMoviesList.message}
      </div>
    );
  if (loadingFavorireGenres) return <div> {t("Loading...")}</div>;
  if (errorFavorireGenres)
    return (
      <div>
        {t("Error!")} {errorFavorireGenres.message}
      </div>
    );
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
