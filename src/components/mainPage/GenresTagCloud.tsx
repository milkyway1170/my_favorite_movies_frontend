import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { getData, getGenresList } from "../../utils/getFunctions";
import { IGenreItem } from "../../types/types";
import { GenreItemStyles, GenresTagCloudStyles } from "../../styles/Styles";
import GenreItem from "../GenreItem";

const GenresTagCloud = () => {
  const { t, i18n } = useTranslation();
  const [genresList, setGenresList] = useState<IGenreItem[]>([]);
  const [favoriteGenresList, setFavoriteGenresList] = useState<string[]>(
    getData("favoriteGenres")
  );

  useEffect(() => {
    getGenresList(setGenresList);
  }, []);

  const handleChangeGenreItem = (genreItem: IGenreItem) => {
    if (favoriteGenresList.indexOf(genreItem.name) >= 0) {
      setFavoriteGenresList(
        favoriteGenresList.filter(
          (favoriteGenre: string) => favoriteGenre !== genreItem.name
        )
      );
      localStorage.setItem(
        "favoriteGenres",
        JSON.stringify(
          favoriteGenresList.filter(
            (favoriteGenre: string) => favoriteGenre !== genreItem.name
          )
        )
      );
    } else {
      setFavoriteGenresList([...favoriteGenresList, genreItem.name]);
      localStorage.setItem(
        "favoriteGenres",
        JSON.stringify([...favoriteGenresList, genreItem.name])
      );
    }
  };

  const listItems = genresList.map((genreItem: IGenreItem) => (
    <GenreItemStyles isFavorite={favoriteGenresList.includes(genreItem.name)}>
      <GenreItem
        handleChangeGenreItem={handleChangeGenreItem}
        genreItem={genreItem}
        key={genreItem.id}
      />
    </GenreItemStyles>
  ));

  return (
    <GenresTagCloudStyles>
      <h2>{t("Select your favorite ganres:")}</h2>
      <div>{listItems}</div>
    </GenresTagCloudStyles>
  );
};

export default GenresTagCloud;
