import { IGenreItem, IGetGenresNames } from "@types";
import { THE_OLDEST_RELEASE_YEAR } from "./const";

export const getGenresNames = ({
  favoriteGenresIdList,
  genresList,
}: IGetGenresNames) => {
  const result = genresList.filter((genreItem: IGenreItem) => {
    return favoriteGenresIdList.indexOf(genreItem.id) !== -1;
  });
  return result.map((genreItem: IGenreItem) => genreItem.name);
};

const getReleaseYearsList = () => {
  let releaseYearsList = [];
  for (
    let year = THE_OLDEST_RELEASE_YEAR;
    year <= new Date().getFullYear();
    year++
  ) {
    releaseYearsList.push(year);
  }
  return releaseYearsList;
};

export const releaseYearsList = getReleaseYearsList();
