import { useTranslation } from "react-i18next";
import { FC } from "react";

import { IGenreItem, ISearchedGenresTagCloud } from "types";
import { TagsContainerStyles } from "styles/Styles";
import { GenreItem } from "components/GenreItem";
import {
  SearchedGenresTagCloudStyles,
  SearchSettingsText,
} from "./addFavoriteMoviesStyles";
import { GET_GENRES_LIST } from "utils/gqlFunctions";
import { useQuery } from "@apollo/client";
import { ErrorView } from "components/ErrorView";
import { Loading } from "components/Loading";

export const SearchedGenresTagCloud: FC<ISearchedGenresTagCloud> = ({
  favoriteGenresIdList,
  setFavoriteGenresIdList,
}) => {
  const { t } = useTranslation();
  const {
    loading: loadingGenresList,
    error: errorGenresList,
    data: dataGenresList,
  } = useQuery(GET_GENRES_LIST);

  const handleChangeGenreItem = async (
    genreId: number,
    isFavorite: boolean
  ) => {
    const resultList = isFavorite
      ? favoriteGenresIdList.filter(
          (arrayItem: number) => arrayItem !== genreId
        )
      : [...favoriteGenresIdList, genreId];
    setFavoriteGenresIdList(resultList);
  };

  let listItems = [];
  if (dataGenresList) {
    listItems = dataGenresList.getGenres.map((genreItem: IGenreItem) => (
      <GenreItem
        isFavorite={favoriteGenresIdList.includes(genreItem.id)}
        handleChangeGenreItem={handleChangeGenreItem}
        genreItem={genreItem}
        key={genreItem.id}
      />
    ));
  }

  if (loadingGenresList) return <Loading />;
  if (errorGenresList) return <ErrorView errorList={[errorGenresList]} />;

  return (
    <SearchedGenresTagCloudStyles>
      <SearchSettingsText>{t("Genres:")}</SearchSettingsText>
      <TagsContainerStyles>{listItems}</TagsContainerStyles>
    </SearchedGenresTagCloudStyles>
  );
};
