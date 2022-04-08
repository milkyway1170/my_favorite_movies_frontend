import { useTranslation } from "react-i18next";

import { IGenreItem, ISearchedGenresTagCloud } from "types";
import {
  SearchedGenresTagCloudStyles,
  SearchSettingsTextStyles,
  TagsContainerStyles,
} from "styles/styles";
import { GenreItem } from "components/GenreItem";
import { FC } from "react";
import { checkAndChange } from "utils/getFunctions";

export const SearchedGenresTagCloud: FC<ISearchedGenresTagCloud> = ({
  favoriteGenresIdList,
  setFavoriteGenresIdList,
  genresList,
}) => {
  const { t } = useTranslation();

  const handleChangeGenreItem = (genreItem: IGenreItem) => {
    let resultList = checkAndChange({
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
      <SearchSettingsTextStyles>{t("Genres:")}</SearchSettingsTextStyles>
      <TagsContainerStyles>{listItems}</TagsContainerStyles>
    </SearchedGenresTagCloudStyles>
  );
};
