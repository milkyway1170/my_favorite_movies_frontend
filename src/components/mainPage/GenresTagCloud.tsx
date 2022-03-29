import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import tw from "twin.macro";

import { GetData, GetGenresList } from "../GetFunctions";
import { IGenreItem } from "../../types/types";
import GenreItem from "./GenreItem";

const GenresTagCloudStyles = styled.div`
  ${tw`
    bg-[#43a2f0]
    mt-4 py-5 px-10 mx-20
    rounded-xl
    shadow-2xl
    `}
  & {
    div {
      ${tw`
      flex flex-row flex-wrap
      space-x-4
      `}
    }
    h2 {
      ${tw`text-3xl font-semibold`}
    }
  }
`;

const GenreItemStyles = styled.div<{ isFavorite: boolean }>`
  & {
    button {
      ${tw`
        rounded-xl
        p-2 my-2
        text-lg
        text-white
       `}
      ${(props) =>
        props.isFavorite
          ? "background-color: #1976d2"
          : "background-color: #35b8f2"}
    }
  }
`;

const GenresTagCloud = () => {
  const { t, i18n } = useTranslation();
  const [genresList, setGenresList] = useState<IGenreItem[]>([]);

  useEffect(() => {
    GetGenresList()
      .then((data) => setGenresList(data))
      .catch((data) => console.error(data));
  }, []);

  const handleChangeGenreItem = (genreItem: IGenreItem) => {
    let favoriteGenresList = GetData("favoriteGenres");
    const index = favoriteGenresList.indexOf(genreItem.name);
    if (index >= 0) {
      favoriteGenresList.splice(index, 1);
      localStorage.setItem(
        "favoriteGenres",
        JSON.stringify(favoriteGenresList)
      );
    } else {
      favoriteGenresList.push(genreItem.name);
      localStorage.setItem(
        "favoriteGenres",
        JSON.stringify(favoriteGenresList)
      );
    }
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
