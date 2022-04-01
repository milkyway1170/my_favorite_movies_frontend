import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { getData, GetGenresList } from "../../utils/getFunctions";
import { IGenreItem } from "../../types/types";
import GenreItem from "./GenreItem";
import { GenreItemStyles, GenresTagCloudStyles } from "../../styles/Styles";

const GenresTagCloud = () => {
  const { t, i18n } = useTranslation();
  const [genresList, setGenresList] = useState<IGenreItem[]>([]);

  useEffect(() => {
    GetGenresList(setGenresList);
  }, []);

  const handleChangeGenreItem = (genreItem: IGenreItem) => {
    let favoriteGenresList = getData("favoriteGenres");
    favoriteGenresList.indexOf(genreItem.name) >= 0
      ? favoriteGenresList.splice(favoriteGenresList.indexOf(genreItem.name), 1)
      : favoriteGenresList.push(genreItem.name);
    localStorage.setItem("favoriteGenres", JSON.stringify(favoriteGenresList));
    genreItem.isFavorite = !genreItem.isFavorite;
    setGenresList([...genresList]);
  };

  const listItems = genresList.map((genreItem: IGenreItem) => (
    <GenreItemStyles isFavorite={genreItem.isFavorite}>
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
