import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "@apollo/client";

import { ReleaseYear } from "./ReleaseYear";
import { ISearchSettings } from "types";
import { SearchedGenresTagCloud } from "./SearchedGenresTagCloud";
import { Rating } from "./Rating";
import { DEFAULT_RATING, DEFAULT_RELEASE_YEAR } from "./const";
import {
  SearchSettingsButtonContainerStyles,
  SearchSettingsStyles,
} from "./addFavoriteMoviesStyles";
import { TitleTextStyles } from "styles/styles";
import {
  GET_FAVORITE_GENRES_LIST,
  GET_SEARCHING_MOVIES_LIST,
} from "utils/gqlFunctions";
import BtnBackToHomePage from "./btnBackToHomePage";
import { ErrorView } from "components/ErrorView";
import { Loading } from "components/Loading";
import { isEqual } from "lodash";

export const SearchSettings: FC<ISearchSettings> = ({ setMoviesList }) => {
  const { t } = useTranslation();
  const [releaseYear, setRelaeseYear] = useState<number>(DEFAULT_RELEASE_YEAR);
  const [rating, setRating] = useState<number>(DEFAULT_RATING);
  const [favoriteGenresIdList, setFavoriteGenresIdList] = useState<number[]>(
    []
  );

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
      genres: favoriteGenresIdList,
    },
  });

  useEffect(() => {
    if (dataFavorireGenres && isEqual(favoriteGenresIdList, [])) {
      setFavoriteGenresIdList(
        dataFavorireGenres.favoriteGenresList.map(
          (favoriteGenreItem: { genreId: number }) => favoriteGenreItem.genreId
        )
      );
    }
    if (dataSearchingMoviesList) {
      setMoviesList(
        dataSearchingMoviesList.getSearchingMoviesList.map(
          (data: {
            id: number;
            title: string;
            overview: string;
            posterPath: string;
          }) => ({
            id: data.id,
            title: data.title,
            overview: data.overview,
            posterPath: data.posterPath,
          })
        )
      );
    }
    refetch({
      page: 1,
      rating,
      year: releaseYear,
      genres: favoriteGenresIdList,
    });
  }, [dataSearchingMoviesList, dataFavorireGenres, releaseYear, rating]);

  if (loadingSearchingMoviesList || loadingFavorireGenres) return <Loading />;
  if (errorSearchingMoviesList || errorFavorireGenres)
    return (
      <ErrorView errorList={[errorSearchingMoviesList, errorFavorireGenres]} />
    );

  return (
    <SearchSettingsStyles>
      <TitleTextStyles>{t("Choose your favorite films:")}</TitleTextStyles>
      <SearchedGenresTagCloud
        favoriteGenresIdList={favoriteGenresIdList}
        setFavoriteGenresIdList={setFavoriteGenresIdList}
      />
      <Rating setRating={setRating} rating={rating} />
      <SearchSettingsButtonContainerStyles>
        <ReleaseYear
          handleChange={(releaseYear) => setRelaeseYear(releaseYear)}
          releaseYear={releaseYear}
        />
        <BtnBackToHomePage />
      </SearchSettingsButtonContainerStyles>
    </SearchSettingsStyles>
  );
};
