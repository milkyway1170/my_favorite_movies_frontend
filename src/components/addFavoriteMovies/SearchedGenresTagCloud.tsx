import { useTranslation } from "react-i18next";

import { IGenreItem } from "../../types/types";
import {
  GenreItemStyles,
  SearchedGenresTagCloudStyles,
} from "../../styles/Styles";
import GenreItem from "../GenreItem";

const SearchedGenresTagCloud = (props: {
  setGenresList: (genreItem: IGenreItem[]) => void;
  genresList: IGenreItem[];
  setFavoriteGenresList: (favoriteGenresList: string[]) => void;
  favoriteGenresList: string[];
}) => {
  const { t, i18n } = useTranslation();

  const handleChangeGenreItem = (genreItem: IGenreItem) => {
    props.favoriteGenresList.indexOf(genreItem.name) >= 0
      ? props.setFavoriteGenresList(
          props.favoriteGenresList.filter(
            (favoriteGenre: string) => favoriteGenre !== genreItem.name
          )
        )
      : props.setFavoriteGenresList([
          ...props.favoriteGenresList,
          genreItem.name,
        ]);
  };

  const listItems = props.genresList.map((genreItem: IGenreItem) => (
    <GenreItemStyles
      isFavorite={props.favoriteGenresList.includes(genreItem.name)}
    >
      <GenreItem
        handleChangeGenreItem={handleChangeGenreItem}
        genreItem={genreItem}
        key={genreItem.id}
      />
    </GenreItemStyles>
  ));

  return (
    <SearchedGenresTagCloudStyles>
      <h3>{t("Genres:")}</h3>
      <div>{listItems}</div>
    </SearchedGenresTagCloudStyles>
  );
};

export default SearchedGenresTagCloud;
