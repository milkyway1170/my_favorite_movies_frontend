import { FC } from "react";
import { GenreItemSButtonStyles } from "@styles";

import { IGenreItemProps } from "@types";

export const GenreItem: FC<IGenreItemProps> = ({
  handleChangeGenreItem,
  genreItem,
  favoriteGenresIdList,
}) => {
  return (
    <GenreItemSButtonStyles
      isFavorite={favoriteGenresIdList.includes(genreItem.id)}
      onClick={() => handleChangeGenreItem(genreItem)}
    >
      {genreItem.name}
    </GenreItemSButtonStyles>
  );
};
