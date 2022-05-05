import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  deleteOrInsertInArray,
  getData,
  getGenresList,
} from "utils/getFunctions";
import { IGenreItem } from "@types";
import {
  GenresTagCloudStyles,
  TagsContainerStyles,
  TitleTextStyles,
} from "styles/styles";
import { GenreItem } from "components/GenreItem";

export const GenresTagCloud = () => {
  const { t } = useTranslation();
  const [genresList, setGenresList] = useState<IGenreItem[]>([]);
  const [favoriteGenresIdList, setFavoriteGenresIdList] = useState<number[]>(
    getData("favoriteGenres")
  );

  useEffect(() => {
    getGenresList(setGenresList);
  }, []);

  const handleChangeGenreItem = (genreItem: IGenreItem) => {
    let resultList = deleteOrInsertInArray({
      checkedArray: favoriteGenresIdList,
      checkedArrayItem: genreItem.id,
    });
    setFavoriteGenresIdList(resultList);
    localStorage.setItem("favoriteGenres", JSON.stringify(resultList));
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
    <GenresTagCloudStyles>
      <TitleTextStyles>{t("Select your favorite ganres:")}</TitleTextStyles>
      <TagsContainerStyles>{listItems}</TagsContainerStyles>
    </GenresTagCloudStyles>
  );
};
