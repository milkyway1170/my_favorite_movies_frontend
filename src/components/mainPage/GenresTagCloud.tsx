import { useTranslation } from "react-i18next";
import { useMutation, useQuery } from "@apollo/client";

import { IGenreItem } from "types";
import {
  GenresTagCloudStyles,
  LoadigStyles,
  TagsContainerStyles,
  TitleTextStyles,
} from "styles/styles";
import { GenreItem } from "components/GenreItem";
import {
  GET_FAVORITE_GENRES_LIST,
  GET_GENRES_LIST,
  DELETE_OR_INSERT_GENRE,
} from "utils/gqlFunctions";
import { ErrorView } from "components/ErrorView";

export const GenresTagCloud = () => {
  const { t } = useTranslation();

  const [deleteOrInsertGenreItem] = useMutation(DELETE_OR_INSERT_GENRE, {
    refetchQueries: [{ query: GET_FAVORITE_GENRES_LIST }],
  });
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

  const handleChangeGenreItem = async (
    genreId: number,
    isFavorite: boolean
  ) => {
    deleteOrInsertGenreItem({
      variables: { genreId, isFavorite },
    });
  };

  let listItems = [];
  if (dataGenres && dataFavorireGenres) {
    const favoriteGenresIdList = dataFavorireGenres.favoriteGenresList.map(
      (favoriteGenreItem: { genreId: number }) => favoriteGenreItem.genreId
    );
    listItems = dataGenres.getGenres.map((genreItem: IGenreItem) => (
      <GenreItem
        isFavorite={favoriteGenresIdList.includes(genreItem.id)}
        handleChangeGenreItem={handleChangeGenreItem}
        genreItem={genreItem}
        key={genreItem.id}
      />
    ));
  }

  if (loadingGenres || loadingFavorireGenres)
    return <LoadigStyles> {t("Loading...")}</LoadigStyles>;
  if (errorGenres || errorFavorireGenres) {
    return <ErrorView errorList={[errorGenres, errorFavorireGenres]} />;
  }

  return (
    <GenresTagCloudStyles>
      <TitleTextStyles>{t("Select your favorite ganres:")}</TitleTextStyles>
      <TagsContainerStyles>{listItems}</TagsContainerStyles>
    </GenresTagCloudStyles>
  );
};
