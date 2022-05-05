import { useTranslation } from "react-i18next";

import { IGenreItem, ISearchedGenresTagCloud } from "@types";
import { TagsContainerStyles } from "styles/styles";
import { GenreItem } from "components/GenreItem";
import { FC } from "react";
import { deleteOrInsertInArray } from "utils/getFunctions";
import {
  SearchedGenresTagCloudStyles,
  SearchSettingsText,
} from "./addFavoriteMoviesStyles";

export const SearchedGenresTagCloud: FC<ISearchedGenresTagCloud> = ({
  favoriteGenresIdList,
  setFavoriteGenresIdList,
  genresList,
}) => {
  const { t } = useTranslation();

  const handleChangeGenreItem = (genreItem: IGenreItem) => {
    let resultList = deleteOrInsertInArray({
      checkedArray: favoriteGenresIdList,
      checkedArrayItem: genreItem.id,
    });
    setFavoriteGenresIdList(resultList);
  };

  const listItems = genresList.map((genreItem: IGenreItem) => (
    <GenreItem
      favoriteGenresIdList={favoriteGenresIdList}
      handleChangeGenreItem={handleChangeGenreItem}
      genreItem={genreItem}
      key={genreItem.id}
    />
  ));

  return (
    <SearchedGenresTagCloudStyles>
      <SearchSettingsText>{t("Genres:")}</SearchSettingsText>
      <TagsContainerStyles>{listItems}</TagsContainerStyles>
    </SearchedGenresTagCloudStyles>
  );
};
