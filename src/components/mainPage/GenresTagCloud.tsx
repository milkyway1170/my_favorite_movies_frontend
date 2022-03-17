import React, { useEffect, useState } from "react";
import { GetGenresList } from "../GetFunctions";
import { IGenreItem } from "../../types/types";
import GenreItem from "./GenresItem";

const GenresTagCloud = () => {
  const [GenresList, setGenresList] = useState<IGenreItem[]>([]);
  useEffect(() => {
    GetGenresList()
      .then((data) => setGenresList(data))
      .catch((data) => console.error(data));
  }, []);

  const ListItems = GenresList.map((genreItem: IGenreItem) => (
    <GenreItem
      genreItem={genreItem}
      key={genreItem.id}
      onClick={() => console.log(" click")}
    />
  ));

  return <div>{ListItems}</div>;
};

export default GenresTagCloud;
