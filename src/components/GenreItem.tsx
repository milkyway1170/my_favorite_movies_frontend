import { FC } from "react";

import { GenreItemSButtonStyles } from "styles/Styles";
import { IGenreItemProps } from "types";

export const GenreItem: FC<IGenreItemProps> = ({
  handleChangeGenreItem,
  genreItem,
  isFavorite,
}) => {
  return (
    <GenreItemSButtonStyles
      isFavorite={isFavorite}
      onClick={async () =>
        await handleChangeGenreItem(genreItem.id, isFavorite)
      }
    >
      {genreItem.name}
    </GenreItemSButtonStyles>
  );
};
