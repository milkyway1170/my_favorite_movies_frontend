import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQuery } from "@apollo/client";

import { IGenreItem } from "@types";
import {
  GenresTagCloudStyles,
  TagsContainerStyles,
  TitleTextStyles,
} from "styles/styles";
import { GenreItem } from "components/GenreItem";
import {
  ADD_NEW_FAVORITE_GENRE,
  GET_FAVORITE_GENRES_LIST,
  GET_GENRES_LIST,
  REMOVE_FAVORITE_GENRE,
} from "utils/gqlFunctions";

export const GenresTagCloud = () => {
  const { t } = useTranslation();

  const [addGenreItem] = useMutation(ADD_NEW_FAVORITE_GENRE);
  const [removeGenreItem] = useMutation(REMOVE_FAVORITE_GENRE);
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

  const [genresList, setGenresList] = useState<IGenreItem[]>([]);
  const [favoriteGenresIdList, setFavoriteGenresIdList] = useState<number[]>(
    []
  );

  useEffect(() => {
    if (dataFavorireGenres) {
      setFavoriteGenresIdList(
        dataFavorireGenres.favoriteGenresList.map(
          (favoriteGenreItem: { genreId: number }) => favoriteGenreItem.genreId
        )
      );
    }
    if (dataGenres) {
      setGenresList(
        dataGenres.getGenres.map((genreItem: IGenreItem) => genreItem)
      );
    }
  }, [dataGenres]);

  const handleChangeGenreItem = (genreItem: IGenreItem) => {
    let resultList: number[] = [];
    if (favoriteGenresIdList.indexOf(genreItem.id) >= 0) {
      resultList = favoriteGenresIdList.filter(
        (arrayItem: number) => arrayItem !== genreItem.id
      );
      removeGenreItem({
        variables: { genreId: genreItem.id },
      });
    } else {
      resultList = [...favoriteGenresIdList, genreItem.id];
      addGenreItem({
        variables: { newFavoriteGenre: genreItem.id },
      });
    }
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

  if (loadingGenres) return <div> {t("Loading...")}</div>;
  if (loadingFavorireGenres) return <div> {t("Loading...")}</div>;
  if (errorGenres)
    return (
      <div>
        {t("Error!")} {errorGenres.message}
      </div>
    );
  if (errorFavorireGenres)
    return (
      <div>
        {t("Error!")} {errorFavorireGenres.message}
      </div>
    );

  return (
    <GenresTagCloudStyles>
      <TitleTextStyles>{t("Select your favorite ganres:")}</TitleTextStyles>
      <TagsContainerStyles>{listItems}</TagsContainerStyles>
    </GenresTagCloudStyles>
  );
};
